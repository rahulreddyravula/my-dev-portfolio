import React from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../UI/SectionHeader";
import { educationList } from "../../data/portfolioData";

export const Education: React.FC = () => {
  return (
    <section className="portfolio-section" id="education">
      <div className="section-container">
        <SectionHeader
          number="07"
          title="Education History"
          subtitle="Academic background and foundational engineering training."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-lg)", maxWidth: "800px", margin: "0 auto" }}>
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              className="premium-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "var(--spacing-md)",
                alignItems: "start"
              }}
            >
              <div
                className="contact-icon-wrapper"
                style={{
                  color: "var(--accent-cyan)",
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  background: "var(--bg-tertiary)"
                }}
              >
                <GraduationCap size={20} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "4px"
                  }}
                >
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0 }}>
                    {edu.degree}
                  </h3>
                  <span
                    className="font-mono text-muted"
                    style={{
                      fontSize: "0.8rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    <Calendar size={12} /> {edu.period}
                  </span>
                </div>

                <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#ffffff" }}>
                  {edu.institution}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "4px 0 0 0" }}>
                  Location: {edu.location}
                </p>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "8px",
                    background: "rgba(6, 182, 212, 0.05)",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                    width: "fit-content"
                  }}
                >
                  <Award size={14} className="text-accent" />
                  <span className="font-mono text-accent" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                    {edu.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
