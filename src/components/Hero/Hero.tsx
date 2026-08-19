import React from "react";
import { Mail, ArrowDown, FileDown, Eye, ShieldCheck, Cpu, Globe, Layout } from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "../UI/BrandIcons";
import { personalInfo } from "../../data/portfolioData";

export const Hero: React.FC = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = projectsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  // Structured information for technical nodes on the right side
  const techNodes = [
    {
      id: "react",
      title: "React.js",
      subtitle: "Component System",
      desc: "Declarative, modular UI architecture with reusable components.",
      icon: <Layout size={16} style={{ color: "#06b6d4" }} />,
      className: "tech-card-react",
    },
    {
      id: "ts",
      title: "TypeScript",
      subtitle: "Static Typing",
      desc: "Compile-time correctness, strict types, and rich auto-completions.",
      icon: <ShieldCheck size={16} style={{ color: "#3b82f6" }} />,
      className: "tech-card-ts",
    },
    {
      id: "redux",
      title: "Redux Toolkit",
      subtitle: "State Engine",
      desc: "Predictable sliced stores for centralized state management.",
      icon: <Cpu size={16} style={{ color: "#8b5cf6" }} />,
      className: "tech-card-redux",
    },
    {
      id: "api",
      title: "REST APIs",
      subtitle: "Axios Data Sync",
      desc: "Asynchronous network integration and unified request middleware.",
      icon: <Globe size={16} style={{ color: "#f59e0b" }} />,
      className: "tech-card-api",
    },
  ];

  return (
    <section className="section hero-section" id="hero">
      <div className="grid-cols-2" style={{ width: "100%", alignItems: "center" }}>
        
        {/* Left Side: Developer Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-info-container"
        >
          <motion.div variants={itemVariants}>
            <div className="badge badge-avail">
              <span className="dot-pulse"></span>
              <span className="font-mono">Open to Frontend / React.js Opportunities</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "inherit" }}>
            <span className="font-mono text-accent" style={{ fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.15em" }}>
              FRONTEND ENGINEER
            </span>
            <h1 className="text-display hero-title">
              RAVULA<br />
              <span className="text-gradient">RAHUL REDDY</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="hero-tagline"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons-container">
            <button onClick={handleScrollToProjects} className="btn btn-accent font-mono">
              <Eye size={16} /> View My Work
            </button>
            <a
              href="/resume.pdf"
              download="Ravula_Rahul_Reddy_Resume.pdf"
              className="btn btn-secondary font-mono"
            >
              <FileDown size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hero-connect-container"
          >
            <span className="font-mono text-muted" style={{ fontSize: "0.75rem" }}>CONNECT:</span>
            <div className="hero-social-icons">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-wrapper"
                style={{ width: "38px", height: "38px" }}
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-wrapper"
                style={{ width: "38px", height: "38px" }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-icon-wrapper"
                style={{ width: "38px", height: "38px" }}
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: "relative", width: "100%" }}
        >
          <div className="tech-showcase-container">
            {/* Background concentric radar rings */}
            <div className="tech-showcase-bg-circles">
              <div className="tech-showcase-circle tech-showcase-circle-1" />
              <div className="tech-showcase-circle tech-showcase-circle-2" />
              <div className="tech-showcase-circle tech-showcase-circle-3" />
            </div>

            {/* Central Glowing Core JS Node */}
            <div className="tech-showcase-orb font-mono">
              JS
            </div>

            {/* Showcase Tech Cards */}
            {techNodes.map((node) => (
              <motion.div
                key={node.id}
                className={`premium-card tech-card ${node.className}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <div className="tech-card-icon-wrapper">
                    {node.icon}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0, color: "#ffffff" }}>
                    {node.title}
                  </h3>
                </div>
                <span className="font-mono text-accent" style={{ fontSize: "0.75rem", display: "block" }}>
                  {node.subtitle.toUpperCase()}
                </span>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0.25rem 0 0 0", lineHeight: 1.4 }}>
                  {node.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
          opacity: 0.6,
          zIndex: 3
        }}
        onClick={handleScrollToProjects}
      >
        <span className="font-mono" style={{ fontSize: "0.75rem" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={14} className="text-accent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
