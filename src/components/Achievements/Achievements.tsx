import React from "react";
import { CheckCircle2, TrendingUp, Cpu, Award } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../UI/SectionHeader";
import { achievementsList } from "../../data/portfolioData";

export const Achievements: React.FC = () => {
  // Map icons dynamically to make things visually beautiful
  const getIcon = (index: number) => {
    switch (index % 4) {
      case 0:
        return <TrendingUp size={16} />;
      case 1:
        return <Cpu size={16} />;
      case 2:
        return <Award size={16} />;
      default:
        return <CheckCircle2 size={16} />;
    }
  };

  return (
    <section className="portfolio-section" id="achievements">
      <div className="section-container">
        <SectionHeader
          number="09"
          title="Achievements & Metrics"
          subtitle="Key project deliveries, architectural improvements, and corporate milestones."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--spacing-md)"
          }}
        >
          {achievementsList.map((ach, idx) => (
            <motion.div
              key={idx}
              className="premium-card"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1rem var(--spacing-lg)",
                background: "var(--bg-secondary)",
                borderLeft: "4px solid var(--accent-cyan)"
              }}
            >
              <div
                className="contact-icon-wrapper"
                style={{
                  color: "var(--accent-cyan)",
                  width: "36px",
                  height: "36px",
                  borderRadius: "6px",
                  background: "var(--bg-tertiary)",
                  flexShrink: 0
                }}
              >
                {getIcon(idx)}
              </div>

              <p style={{ margin: 0, fontSize: "1rem", color: "#ffffff", fontWeight: 500, lineHeight: 1.4 }}>
                {ach}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
