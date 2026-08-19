import React, { useState, useEffect, useRef } from "react";
import { X, Terminal as TerminalIcon } from "lucide-react";
import { personalInfo, skillCategories, experiences } from "../../data/portfolioData";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [matrixActive, setMatrixActive] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount or when terminal is opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      // Add initial greeting if history is empty
      if (history.length === 0) {
        setHistory([
          {
            command: "system-init",
            output: (
              <div>
                <p>Welcome to Ravula Rahul Reddy's Terminal v1.0.0</p>
                <p style={{ color: "var(--text-secondary)" }}>
                  Type <span className="text-accent">help</span> to view available developer console commands.
                </p>
              </div>
            ),
          },
        ]);
      }
    }
  }, [isOpen]);

  // Scroll to bottom when history changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div style={{ paddingLeft: "1rem" }}>
            <p className="text-accent" style={{ fontWeight: 600 }}>Available Commands:</p>
            <p>• <span className="text-accent">about</span> - Read Ravula Rahul Reddy's bio</p>
            <p>• <span className="text-accent">skills</span> - List developer technical stacks</p>
            <p>• <span className="text-accent">experience</span> - Show professional experience details</p>
            <p>• <span className="text-accent">contact</span> - Retrieve contact handles and social links</p>
            <p>• <span className="text-accent">matrix</span> - Launch a retro terminal digital rain effect</p>
            <p>• <span className="text-accent">clear</span> - Wipe terminal logs</p>
            <p>• <span className="text-accent">close</span> - Shutdown terminal session</p>
          </div>
        );
        break;

      case "about":
        output = (
          <div>
            <p style={{ fontWeight: 600 }}>{personalInfo.name} — {personalInfo.role}</p>
            <p style={{ color: "var(--text-secondary)", marginTop: "0.25rem" }}>{personalInfo.bio}</p>
            <p style={{ color: "var(--text-secondary)" }}>Location: {personalInfo.location}</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div>
            <p style={{ fontWeight: 600 }} className="text-accent">Technical Skillsets:</p>
            {skillCategories.map((cat, idx) => (
              <p key={idx} style={{ paddingLeft: "1rem" }}>
                <span style={{ color: "#ffffff" }}>{cat.category}:</span> {cat.skills.join(", ")}
              </p>
            ))}
          </div>
        );
        break;

      case "experience":
        output = (
          <div>
            <p style={{ fontWeight: 600 }} className="text-accent">Experience History:</p>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ paddingLeft: "1rem", marginTop: "0.5rem" }}>
                <p style={{ color: "#ffffff", fontWeight: 500 }}>{exp.role} @ {exp.company}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{exp.period}</p>
                {exp.bullets.slice(0, 3).map((bullet, bIdx) => (
                  <p key={bIdx} style={{ fontSize: "0.8rem", paddingLeft: "0.5rem", color: "var(--text-secondary)" }}>
                    - {bullet}
                  </p>
                ))}
                {exp.bullets.length > 3 && <p style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", paddingLeft: "0.5rem" }}>...and {exp.bullets.length - 3} more contributions.</p>}
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div style={{ paddingLeft: "1rem" }}>
            <p>Email: <a href={`mailto:${personalInfo.email}`} style={{ color: "var(--accent-cyan)" }}>{personalInfo.email}</a></p>
            <p>Phone: <span style={{ color: "#ffffff" }}>{personalInfo.phone}</span></p>
            <p>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-cyan)" }}>linkedin.com/in/ravula-rahul-reddy</a></p>
            <p>GitHub: <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-cyan)" }}>github.com/rahulreddyravula</a></p>
          </div>
        );
        break;

      case "matrix":
        setMatrixActive(true);
        output = <p style={{ color: "#22c55e" }}>Digital Matrix system diagnostic starting...</p>;
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "close":
        onClose();
        setInput("");
        return;

      default:
        output = (
          <p style={{ color: "#ef4444" }}>
            Command not recognized: "{cmd}". Type <span style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => setInput("help")}>help</span> to list commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div className="terminal-drawer" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <TerminalIcon size={14} className="text-accent" />
          <span>RR-CONSOLE // EASTER_EGG_SHELL</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="terminal-dots">
            <div className="terminal-dot-ctrl terminal-dot-red" />
            <div className="terminal-dot-ctrl terminal-dot-yellow" />
            <div className="terminal-dot-ctrl terminal-dot-green" />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="terminal-close-btn"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-secondary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center"
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="terminal-body">
        {matrixActive ? (
          <MatrixBackground onComplete={() => setMatrixActive(false)} />
        ) : (
          <>
            <div className="terminal-history">
              {history.map((item, idx) => (
                <div key={idx}>
                  {item.command !== "system-init" && (
                    <div className="terminal-input-line">
                      <span className="terminal-prompt">rahul-reddy ~ $</span>
                      <span style={{ color: "#ffffff" }}>{item.command}</span>
                    </div>
                  )}
                  <div style={{ margin: "0.25rem 0 0.75rem 0" }}>{item.output}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleCommand} className="terminal-input-line">
              <span className="terminal-prompt">rahul-reddy ~ $</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="terminal-input"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </form>
            <div ref={bottomRef} />
          </>
        )}
      </div>
    </div>
  );
};

// Sub-component for matrix rain visual
const MatrixBackground: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 800;
    canvas.height = canvas.parentElement?.clientHeight || 300;

    const katakana = "🤖💻🚀⚛️🔥TypeScriptReactRedux01";
    const alphabet = katakana.split("");

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const rainDrops: number[] = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 12, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);

    // Stop after 6 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
      <div style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "rgba(0,0,0,0.8)",
        padding: "0.25rem 0.5rem",
        border: "1px solid #0f0",
        borderRadius: "4px",
        fontSize: "0.75rem",
        color: "#0f0"
      }}>
        Matrix Mode active... Click terminal body to exit matrix rain
      </div>
    </div>
  );
};

export default Terminal;
