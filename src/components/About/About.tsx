import React from "react";
import { Layout, Zap, Cpu, RefreshCw, Smartphone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../UI/SectionHeader";
import { personalInfo } from "../../data/portfolioData";

export const About: React.FC = () => {
  const cards = [
    {
      icon: <Cpu size={24} />,
      title: "Frontend Architecture",
      desc: "Structuring projects with modular folders, predictable directories, and strict TypeScript compilation configurations."
    },
    {
      icon: <Zap size={24} />,
      title: "Performance",
      desc: "Applying route-based code splitting, lazy loading resources, and managing clean dependency trees."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "API Integration",
      desc: "Synchronizing state with REST services using Axios, custom interceptors, and robust request handling logic."
    },
    {
      icon: <Layout size={24} />,
      title: "Reusable Components",
      desc: "Building highly reusable UI components with flexible props and decoupled state management."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Responsive Design",
      desc: "Formulating fluid layouts using modern CSS Flexbox and Grid, tested across standard breakpoint dimensions."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Authentication",
      desc: "Securing routes and managing token storage securely with JWT and Axios interceptors."
    }
  ];

  return (
    <section className="portfolio-section" id="about">
      <div className="section-container">
        <SectionHeader
          number="01"
          title="Turning ideas into scalable interfaces."
          subtitle="A look into my professional background and engineering philosophy."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-lg)" }}>
          <div className="grid-cols-2" style={{ alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1rem", color: "var(--text-primary)" }}>
                {personalInfo.bio}
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>
                I focus on building performant frontend architectures. Rather than just making things look pretty, I treat frontend engineering as a discipline—prioritizing clean code, type safety, modular systems, and smooth application flows.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
              <div className="premium-card" style={{ padding: "1.25rem" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.25rem" }}>Based in:</h4>
                <p style={{ margin: 0, fontSize: "0.95rem" }}>{personalInfo.location}</p>
              </div>
              <div className="premium-card" style={{ padding: "1.25rem" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.25rem" }}>Professional Experience:</h4>
                <p style={{ margin: 0, fontSize: "0.95rem" }}>{personalInfo.experienceYears} Years in Front-End Engineering</p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem" }} className="font-mono text-accent">
              // CORE CAPABILITIES
            </h3>
            <div className="about-grid">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="premium-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                >
                  <div style={{ color: "var(--accent-cyan)" }}>
                    {card.icon}
                  </div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>
                    {card.title}
                  </h4>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
