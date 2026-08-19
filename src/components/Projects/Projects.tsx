import React from "react";
import { ExternalLink, ArrowRight, X, Cpu, Code2, AlertTriangle, ShieldCheck, Sparkles, Layout } from "lucide-react";
import { Github } from "../UI/BrandIcons";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../UI/SectionHeader";
import { projects } from "../../data/portfolioData";
import type { Project } from "../../data/portfolioData";

interface ProjectsProps {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ selectedProject, setSelectedProject }) => {

  React.useEffect(() => {
    if (selectedProject) {
      document.documentElement.classList.add("modal-open");
      document.body.classList.add("modal-open");
    } else {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    };
  }, [selectedProject]);

  const getMockupContent = (mockup: string) => {
    if (mockup === "pudami-mockup") {
      return (
        <div style={{ textAlign: "center" }}>
          <span className="font-mono text-accent" style={{ fontSize: "0.75rem", display: "block" }}>
            CART ENGINE & STRIPE
          </span>
          <h4 style={{ margin: "4px 0 0 0", fontSize: "1.25rem", color: "#ffffff" }}>
            Pudami Stores
          </h4>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Toy E-Commerce Platform
          </p>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <span className="font-mono text-accent" style={{ fontSize: "0.75rem", display: "block" }}>
            ROLE DASHBOARDS & API
          </span>
          <h4 style={{ margin: "4px 0 0 0", fontSize: "1.25rem", color: "#ffffff" }}>
            Medical Staff
          </h4>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Healthcare Portal Scheduler
          </p>
        </div>
      );
    }
  };

  return (
    <section className={`portfolio-section ${selectedProject ? "active-modal" : ""}`} id="projects">
      <div className="section-container">
        <SectionHeader
          number="04"
          title="Featured Work & Projects"
          subtitle="Detailed architectures and code contributions for systems I have designed."
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="premium-card project-card"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Project Mockup Visual */}
              <div className={`project-visual-mockup ${project.id === "pudami-stores" ? "project-visual-pudami" : "project-visual-medical"}`}>
                <div className="project-visual-grid"></div>
                <div className="project-visual-content">
                  {getMockupContent(project.imageMockup)}
                </div>
              </div>

              <div className="project-card-header">
                <span className="font-mono text-accent" style={{ fontSize: "0.8rem" }}>
                  {project.subtitle.toUpperCase()}
                </span>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "2px 0 8px 0" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>
                  {project.description}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="project-card-tech">
                {project.tech.slice(0, 5).map((techItem) => (
                  <span key={techItem} className="badge badge-outline font-mono">
                    {techItem}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="badge badge-outline font-mono text-accent">
                    +{project.tech.length - 5} MORE
                  </span>
                )}
              </div>

              {/* Read More Link */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "1.25rem",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.9rem"
                }}
              >
                <span>Explore Case Study</span>
                <ArrowRight size={14} className="project-arrow" style={{ transition: "transform 0.2s" }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal Dialog */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              key="project-modal"
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button className="modal-close" onClick={() => setSelectedProject(null)}>
                  <X size={18} />
                </button>

                <div className="modal-body">

                {/* Header */}
                <div className="modal-header">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "8px" }}>
                    <span className="font-mono text-accent" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                      {selectedProject.role.toUpperCase()}
                    </span>
                    <span className="badge badge-outline font-mono" style={{ borderColor: "rgba(6, 182, 212, 0.3)", color: "var(--accent-cyan)" }}>
                      CASE STUDY
                    </span>
                  </div>
                  <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "6px 0 8px 0", color: "#ffffff" }}>
                    {selectedProject.title}
                  </h2>
                  <p style={{ fontSize: "1.05rem", lineHeight: 1.5, margin: 0, color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                    {selectedProject.subtitle}
                  </p>

                  {/* Project Mockup Visual */}
                  <div className={`project-visual-mockup ${selectedProject.id === "pudami-stores" ? "project-visual-pudami" : "project-visual-medical"}`} style={{ height: "240px", marginBottom: "1.5rem" }}>
                    <div className="project-visual-grid"></div>
                    <div className="project-visual-content">
                      {getMockupContent(selectedProject.imageMockup)}
                    </div>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="modal-section">
                  <div className="modal-section-title">
                    <Code2 size={16} /> Stack Details
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="badge badge-outline font-mono" style={{ background: "var(--bg-secondary)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grid Content */}
                <div className="grid-cols-2">
                  <div className="modal-section">
                    <div className="modal-section-title">
                      <Layout size={16} /> Key Features
                    </div>
                    <ul className="timeline-bullets" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {selectedProject.features.map((feature, fIdx) => (
                        <li key={fIdx} style={{ fontSize: "0.9rem" }}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <div className="modal-section-title">
                      <Cpu size={16} /> My Contributions
                    </div>
                    <ul className="timeline-bullets" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {selectedProject.contributions.map((contribution, cIdx) => (
                        <li key={cIdx} style={{ fontSize: "0.9rem" }}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="modal-section">
                  <div className="modal-section-title">
                    <Sparkles size={16} /> Architectural Highlights
                  </div>
                  <div className="modal-highlight-grid">
                    {selectedProject.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="premium-card" style={{ background: "var(--bg-secondary)", padding: "1rem" }}>
                        <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "4px" }}>
                          {h.title}
                        </h4>
                        <p style={{ fontSize: "0.85rem", margin: 0, lineHeight: 1.4 }}>
                          {h.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Performance */}
                <div className="grid-cols-2">
                  <div className="modal-section">
                    <div className="modal-section-title">
                      <AlertTriangle size={16} /> Key Engineering Challenges
                    </div>
                    <p style={{ fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>
                      {selectedProject.challenges}
                    </p>
                  </div>

                  <div className="modal-section">
                    <div className="modal-section-title">
                      <ShieldCheck size={16} /> Performance Considerations
                    </div>
                    <p style={{ fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>
                      {selectedProject.performance}
                    </p>
                  </div>
                </div>

                {/* Case Links */}
                <div style={{ display: "flex", gap: "1rem", borderTop: "1px solid var(--border-color)", paddingTop: "var(--spacing-md)" }}>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary font-mono"
                    style={{ fontSize: "0.85rem" }}
                  >
                    <Github size={14} /> Repository Link
                  </a>
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent font-mono"
                      style={{ fontSize: "0.85rem" }}
                    >
                      <ExternalLink size={14} /> Launch Live Demo
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
