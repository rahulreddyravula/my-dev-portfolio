import React from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../UI/SectionHeader";
import { certifications } from "../../data/portfolioData";

export const Certifications: React.FC = () => {
  return (
    <section className="portfolio-section" id="certifications">
      <div className="section-container">
        <SectionHeader
          number="08"
          title="Professional Certifications"
          subtitle="Specialized industry courses and technical program achievements."
        />

        <div className="about-grid">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="premium-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                justifyContent: "space-between"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div
                  className="contact-icon-wrapper"
                  style={{
                    color: "var(--accent-cyan)",
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "var(--bg-tertiary)"
                  }}
                >
                  <Award size={18} />
                </div>

                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "4px 0 0 0" }}>
                  {cert.name}
                </h3>
                <p className="font-mono text-accent" style={{ fontSize: "0.75rem", margin: 0 }}>
                  ISSUED BY // {cert.issuer.toUpperCase()}
                </p>
              </div>

              {cert.topics && (
                <div
                  style={{
                    marginTop: "0.75rem",
                    paddingTop: "0.5rem",
                    borderTop: "1px solid var(--border-color)"
                  }}
                >
                  <span className="font-mono text-muted" style={{ fontSize: "0.7rem", display: "block", marginBottom: "4px" }}>
                    SKILLSETS COVERED:
                  </span>
                  <span className="badge badge-outline font-mono" style={{ fontSize: "0.7rem", background: "var(--bg-tertiary)" }}>
                    {cert.topics}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
