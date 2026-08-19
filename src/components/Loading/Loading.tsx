import React from "react";
import { motion } from "framer-motion";

interface LoadingProps {
  onComplete: () => void;
}

export const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2.2, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <div className="loading-logo-orbit">
        <div className="loading-logo-dot"></div>
        <motion.div
          className="loading-logo-text font-mono"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          RR
        </motion.div>
      </div>

      <motion.div
        style={{ textAlign: "center", marginTop: "1rem" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.2em", margin: 0 }}>
          RAVULA RAHUL REDDY
        </h2>
        <p className="font-mono text-accent" style={{ fontSize: "0.8rem", letterSpacing: "0.1em", marginTop: "0.25rem" }}>
          // React.js Frontend Developer
        </p>
      </motion.div>

      <motion.div
        style={{
          width: "100px",
          height: "2px",
          background: "var(--border-color)",
          position: "relative",
          marginTop: "1.5rem",
          overflow: "hidden",
          borderRadius: "1px"
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background: "var(--accent-gradient)",
          }}
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loading;
