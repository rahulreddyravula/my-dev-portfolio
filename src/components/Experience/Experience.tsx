import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../UI/SectionHeader";
import { experiences } from "../../data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section className="portfolio-section" id="experience">
      <div className="section-container">
        <SectionHeader
          number="03"
          title="Professional Experience"
          subtitle="A vertical timeline showing my engineering journey and corporate contributions."
        />

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Briefcase size={18} className="text-accent" /> {exp.role}
                    </h3>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#ffffff", marginTop: "2px" }}>
                      {exp.company}
                    </h4>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                      alignItems: "flex-start",
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)"
                    }}
                    className="font-mono"
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="timeline-bullets" style={{ marginTop: "1rem" }}>
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
