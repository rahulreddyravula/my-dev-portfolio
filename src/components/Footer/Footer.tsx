import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "../UI/BrandIcons";
import { personalInfo } from "../../data/portfolioData";

interface FooterProps {
  onLogoClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLogoClick }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-color)",
        padding: "var(--spacing-lg) 0",
        position: "relative",
        zIndex: 10
      }}
    >
      <div
        className="section"
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-lg)"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-md)",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center"
          }}
          className="grid-cols-2"
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <div
              className="nav-logo"
              onClick={onLogoClick}
              style={{ justifyContent: "center" }}
            >
              <span className="font-mono text-gradient" style={{ fontWeight: 800 }}>RR</span>
              <span className="text-gradient" style={{ fontWeight: 600 }}>RAHUL REDDY</span>
            </div>
            <p className="font-mono text-accent" style={{ fontSize: "0.8rem", margin: 0 }}>
              React.js Frontend Developer
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-wrapper"
              style={{ width: "40px", height: "40px" }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-wrapper"
              style={{ width: "40px", height: "40px" }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-icon-wrapper"
              style={{ width: "40px", height: "40px" }}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="contact-icon-wrapper"
              style={{ width: "40px", height: "40px", background: "var(--bg-tertiary)", cursor: "pointer" }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border-color)",
            paddingTop: "var(--spacing-md)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            textAlign: "center"
          }}
          className="grid-cols-2"
        >
          <p>© 2026 Ravula Rahul Reddy. All rights reserved.</p>
          <p style={{ display: "flex", gap: "1rem" }}>
            <a
              href="/ravularahulreddy.txt"
              download="Ravula_Rahul_Reddy_Resume.txt"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
            >
              Download Text Resume
            </a>
            <span>|</span>
            <a
              href="/ravularahulreddy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
            >
              View PDF Resume
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
