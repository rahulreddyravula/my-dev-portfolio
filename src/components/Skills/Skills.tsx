import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../UI/SectionHeader";
import { skillCategories } from "../../data/portfolioData";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0].category);

  return (
    <section className="portfolio-section" id="skills">
      <div className="section-container">
        <SectionHeader
          number="02"
          title="Technical Skillsets & Stacks"
          subtitle="Modern tools and languages I specialize in to build high-performance applications."
        />

        <div className="premium-card" style={{ padding: "var(--spacing-lg)" }}>
          {/* Tab Buttons */}
          <div className="skills-tab-buttons">
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                className={`skills-tab-btn font-mono ${activeCategory === cat.category ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.category)}
              >
                {cat.category.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ minHeight: "180px", position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="skills-tab-content"
              >
                {skillCategories
                  .find((cat) => cat.category === activeCategory)
                  ?.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="premium-card"
                      style={{
                        background: "var(--bg-tertiary)",
                        padding: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        borderRadius: "8px",
                        border: "1px solid rgba(255, 255, 255, 0.05)"
                      }}
                    >
                      <span className="font-mono">{skill}</span>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
