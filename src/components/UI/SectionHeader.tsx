import React from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  align = "left",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`section-header-container ${
        isCenter ? "align-center" : "align-left"
      }`}
      style={{ marginBottom: "var(--spacing-xl)" }}
    >
      <div className="section-meta font-mono text-accent">
        <span className="section-number">// {number}.</span>
      </div>
      <h2 className="section-title text-display">
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle text-muted">
          {subtitle}
        </p>
      )}
      <div className={`section-divider ${isCenter ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeader;
