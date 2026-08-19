import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Architecture from "./components/Architecture/Architecture";
import Performance from "./components/Performance/Performance";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import Terminal from "./components/Terminal/Terminal";
import type { Project } from "./data/portfolioData";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [, setLogoClicks] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll Progress Tracker
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track cursor position for the premium mouse lighting spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--spotlight-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${e.clientY}px`);
      
      // Update hover coordinates on premium cards
      const cards = document.querySelectorAll(".premium-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track active section for navigation highlighting
  useEffect(() => {
    if (isLoading) return;

    const sections = ["hero", "about", "skills", "experience", "projects", "education", "certifications", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  // Click logo 5 times to open Terminal Easter Egg
  const handleLogoClick = () => {
    setSelectedProject(null);
    setLogoClicks((prev) => {
      const nextClicks = prev + 1;
      if (nextClicks >= 5) {
        setTerminalOpen(true);
        return 0; // Reset counter
      }
      return nextClicks;
    });
  };

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      {/* Top Reading Scroll Indicator */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* Mouse cursor interactive lighting spotlight effect */}
      <div className="bg-spotlight" />

      {/* Floating navigation panel */}
      <Navbar onLogoClick={handleLogoClick} activeSection={activeSection} onNavLinkClick={() => setSelectedProject(null)} />

      {/* Core sections */}
      <main style={{ position: "relative" }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
        <Architecture />
        <Performance />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onLogoClick={handleLogoClick} />

      {/* CLI Developer Terminal console */}
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}

export default App;
