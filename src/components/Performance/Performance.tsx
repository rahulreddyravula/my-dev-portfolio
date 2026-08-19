import React from "react";
import { EyeOff, Gauge, Minimize, Share2, Smartphone, Split, Webhook } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../UI/SectionHeader";

export const Performance: React.FC = () => {
  const cards = [
    {
      icon: <Split size={20} />,
      title: "Code Splitting",
      desc: "Dividing production bundles into route-specific packages using dynamic imports, ensuring pages load only the assets they require."
    },
    {
      icon: <EyeOff size={20} />,
      title: "Lazy Loading",
      desc: "Postponing the request and rendering of hidden components, charts, and media assets until they scroll into view."
    },
    {
      icon: <Minimize size={20} />,
      title: "Unnecessary Re-renders",
      desc: "Employing performance hooks (useCallback, useMemo, memo) to prevent redundant state propagation and child tree updates."
    },
    {
      icon: <Webhook size={20} />,
      title: "Efficient API Handling",
      desc: "Caching frequent server queries inside Redux stores and batching request states to reduce unnecessary HTTP payloads."
    },
    {
      icon: <Share2 size={20} />,
      title: "Reusable Components",
      desc: "Creating lightweight, dry UI components to prevent layout and style definition duplication across modules."
    },
    {
      icon: <Smartphone size={20} />,
      title: "Responsive Assets",
      desc: "Utilizing fluid typography rules, modern layout wrappers, and optimized assets to guarantee speed on mobile cellular networks."
    }
  ];

  return (
    <section className="portfolio-section" id="performance">
      <div className="section-container">
        <SectionHeader
          number="06"
          title="Built for Performance"
          subtitle="A summary of optimization strategies I apply to ensure sub-second loads and fluid UI transitions."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-lg)" }}>
          <div className="premium-card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <Gauge size={24} className="text-accent" style={{ marginTop: "4px", flexShrink: 0 }} />
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "4px" }}>
                Performance is a Core UX Metric
              </h3>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                Modern web platforms lose users for every 100ms of loading delay. I approach frontend build optimization with a structured methodology, targeting core web vitals through direct asset controls and strict execution limits.
              </p>
            </div>
          </div>

          <div className="about-grid">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className="premium-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <div style={{ color: "var(--accent-cyan)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {card.icon}
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, margin: 0, color: "#ffffff" }}>
                    {card.title}
                  </h4>
                </div>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
