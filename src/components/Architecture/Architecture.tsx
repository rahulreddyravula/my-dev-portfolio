import React from "react";
import { ArrowDown, Info } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../UI/SectionHeader";

export const Architecture: React.FC = () => {
  const steps = [
    {
      title: "User Interface (UI)",
      role: "Layout & Interactions",
      desc: "Styled structures using semantic HTML, pure CSS layout controls (CSS Grid, Flexbox), and custom responsive design parameters.",
      color: "rgba(6, 182, 212, 0.15)"
    },
    {
      title: "React Components",
      role: "Component Engine",
      desc: "TypeScript-typed React functional components with custom rendering loops and modular dependency interfaces.",
      color: "rgba(59, 130, 246, 0.15)"
    },
    {
      title: "State Management",
      role: "Redux Store Slices",
      desc: "Redux Toolkit central store. Stores app configuration, session keys, cart data structures, and listings caches.",
      color: "rgba(139, 92, 246, 0.15)"
    },
    {
      title: "API Integration Layer",
      role: "Axios Request Lifecycle",
      desc: "Centralized client layer. Automatic token handling, JWT renewals, CORS setups, and network error recoveries.",
      color: "rgba(245, 158, 11, 0.15)"
    },
    {
      title: "Backend Services",
      role: "Node & Express APIs",
      desc: "Custom API servers processing credentials, sending alerts (NMailer), validating payloads, and mapping database tables.",
      color: "rgba(16, 185, 129, 0.15)"
    },
    {
      title: "Database System",
      role: "MongoDB Documents",
      desc: "Persistent databases storing user hashes, catalog lists, and historical records with query validation checks.",
      color: "rgba(239, 68, 68, 0.15)"
    }
  ];

  return (
    <section className="portfolio-section" id="architecture">
      <div className="section-container">
        <SectionHeader
          number="05"
          title="How I Build"
          subtitle="An interactive structural map showing how data flows through a production system."
        />

        <div className="premium-card">
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "var(--spacing-lg)", fontSize: "0.9rem" }}>
            <Info size={16} className="text-accent" style={{ marginTop: "2px", flexShrink: 0 }} />
            <p style={{ margin: 0 }}>
              Hover over the structural blocks below to review how I modularize, secure, and transport data throughout the lifecycle of an application.
            </p>
          </div>

          <div className="arch-visual">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  className="arch-node"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 8px 20px ${step.color}`
                  }}
                >
                  <div>
                    <h4 className="arch-node-title">{step.title}</h4>
                    <span className="font-mono text-accent" style={{ fontSize: "0.75rem" }}>
                      {step.role.toUpperCase()}
                    </span>
                  </div>
                  <p className="arch-node-desc font-mono">
                    {step.desc}
                  </p>

                  {/* Animated active border indicator */}
                  <motion.div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "4px",
                      height: "100%",
                      background: "var(--accent-gradient)"
                    }}
                  />
                </motion.div>

                {idx < steps.length - 1 && (
                  <div className="arch-arrow">
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <ArrowDown size={16} />
                      <span className="font-mono" style={{ fontSize: "0.6rem", color: "var(--text-muted)", marginTop: "2px" }}>
                        DATA FLOW
                      </span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
