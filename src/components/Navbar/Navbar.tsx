import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onLogoClick: () => void;
  activeSection: string;
  onNavLinkClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogoClick, activeSection, onNavLinkClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" }
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (onNavLinkClick) {
      onNavLinkClick();
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };



  return (
    <>
      <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-logo" onClick={onLogoClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onLogoClick()}>
          <span className="font-mono text-gradient" style={{ fontWeight: 800 }}>RR</span>
          <span className="text-gradient" style={{ fontWeight: 600, letterSpacing: "-0.01em" }}>
            RAHUL REDDY
          </span>
        </div>

        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <span
                  onClick={() => handleLinkClick(item.id)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleLinkClick(item.id)}
                  className={`nav-link font-mono ${activeSection === item.id ? "active" : ""}`}
                  role="button"
                  tabIndex={0}
                >
                  {item.label}
                </span>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary font-mono"
                style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem", border: "1px solid rgba(6, 182, 212, 0.4)", minHeight: "36px" }}
              >
                Resume <ArrowUpRight size={14} style={{ marginLeft: "2px" }} />
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{ position: "fixed", zIndex: 99, width: "100%", height: "100%" }}
          >
            <ul className="mobile-nav" id="mobile-nav-menu" role="menu">
              {navItems.map((item) => (
                <li key={item.id} role="none">
                  <span
                    onClick={() => handleLinkClick(item.id)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleLinkClick(item.id)}
                    className={`nav-link font-mono ${activeSection === item.id ? "active" : ""}`}
                    role="menuitem"
                    tabIndex={0}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
              <li style={{ marginTop: "1rem" }} role="none">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary font-mono"
                  style={{ width: "200px" }}
                  role="menuitem"
                >
                  Resume <ArrowUpRight size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
