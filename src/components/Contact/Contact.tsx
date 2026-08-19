import React, { useState } from "react";
import { Mail, Phone as PhoneIcon, Copy, Check, MapPin } from "lucide-react";
import { Github, Linkedin } from "../UI/BrandIcons";
import { personalInfo } from "../../data/portfolioData";
import { submitContactForm, type FormState } from "../../services/contactService";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validateField = (name: keyof FormState, value: string) => {
    let error = "";
    const trimmed = value.trim();

    if (name === "name") {
      if (!trimmed) {
        error = "Name is required.";
      } else if (trimmed.length < 3) {
        error = "Name must be at least 3 characters.";
      }
    } else if (name === "email") {
      if (!trimmed) {
        error = "Email address is required.";
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
        error = "Please enter a valid email address.";
      }
    } else if (name === "subject") {
      if (!trimmed) {
        error = "Subject is required.";
      } else if (trimmed.length < 3) {
        error = "Subject must be at least 3 characters.";
      }
    } else if (name === "message") {
      if (!trimmed) {
        error = "Message cannot be empty.";
      } else if (trimmed.length < 10) {
        error = "Message must be at least 10 characters.";
      } else if (trimmed.length > 2000) {
        error = "Message cannot exceed 2000 characters.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error ? error : undefined }));
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    const nameTrim = form.name.trim();
    if (!nameTrim) {
      tempErrors.name = "Name is required.";
      isValid = false;
    } else if (nameTrim.length < 3) {
      tempErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    const emailTrim = form.email.trim();
    if (!emailTrim) {
      tempErrors.email = "Email address is required.";
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailTrim)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    const subjectTrim = form.subject.trim();
    if (!subjectTrim) {
      tempErrors.subject = "Subject is required.";
      isValid = false;
    } else if (subjectTrim.length < 3) {
      tempErrors.subject = "Subject must be at least 3 characters.";
      isValid = false;
    }

    const messageTrim = form.message.trim();
    if (!messageTrim) {
      tempErrors.message = "Message cannot be empty.";
      isValid = false;
    } else if (messageTrim.length < 10) {
      tempErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    } else if (messageTrim.length > 2000) {
      tempErrors.message = "Message cannot exceed 2000 characters.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      validateField(name as keyof FormState, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name as keyof FormState, value);
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitContactForm(form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Unable to send your message right now. Please try again.");
    }
  };

  return (
    <section className="portfolio-section" id="contact">
      <div className="section-container">
        {/* Editorial Monospace Number and Heading */}
        <div className="contact-header">
          <span className="section-number font-mono">05 // CONTACT</span>
          <h2 className="section-main-title">
            LET'S BUILD<br />
            SOMETHING<br />
            <span className="gradient-text">MEANINGFUL.</span>
          </h2>
        </div>

        <div className="contact-container-grid">
          {/* Left Column: Connect Info & Identity Block */}
          <div className="contact-info-column">
            {/* Availability status badge */}
            <div className="availability-badge font-mono">
              <span className="pulse-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            {/* Mock Editor code block styling */}
            <div className="editor-window">
              <div className="editor-titlebar">
                <div className="editor-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control expand"></span>
                </div>
                <span className="editor-filename font-mono">status.tsx</span>
              </div>
              <div className="editor-body font-mono">
                <div className="editor-line"><span className="line-num">1</span><span className="code-keyword">const</span> <span className="code-var">developer</span> = &#123;</div>
                <div className="editor-line"><span className="line-num">2</span>  name: <span className="code-string">"Rahul Reddy"</span>,</div>
                <div className="editor-line"><span className="line-num">3</span>  role: <span className="code-string">"React.js Developer"</span>,</div>
                <div className="editor-line"><span className="line-num">4</span>  skills: [</div>
                <div className="editor-line"><span className="line-num">5</span>    <span className="code-string">"TypeScript"</span>,</div>
                <div className="editor-line"><span className="line-num">6</span>    <span className="code-string">"Redux Toolkit"</span>,</div>
                <div className="editor-line"><span className="line-num">7</span>    <span className="code-string">"Mongoose/MongoDB"</span></div>
                <div className="editor-line"><span className="line-num">8</span>  ],</div>
                <div className="editor-line"><span className="line-num">9</span>  relocate: <span className="code-bool">true</span>,</div>
                <div className="editor-line"><span className="line-num">10</span>  location: <span className="code-string">"Hyderabad, IN"</span></div>
                <div className="editor-line"><span className="line-num">11</span>&#125;;</div>
              </div>
            </div>

            {/* Direct Connect Info Widget cards */}
            <div className="contact-methods">
              {/* Email Widget */}
              <div className="contact-method-card premium-card" onClick={() => copyToClipboard(personalInfo.email, "email")}>
                <div className="method-left">
                  <div className="contact-icon-wrapper">
                    <Mail size={18} />
                  </div>
                  <div className="method-details">
                    <span className="method-label font-mono">EMAIL ME</span>
                    <span className="method-value">{personalInfo.email}</span>
                  </div>
                </div>
                <div className="method-right">
                  <button type="button" className="copy-action-btn" aria-label="Copy Email Address">
                    {copiedEmail ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Phone Widget */}
              <div className="contact-method-card premium-card" onClick={() => copyToClipboard(personalInfo.phone, "phone")}>
                <div className="method-left">
                  <div className="contact-icon-wrapper">
                    <PhoneIcon size={18} />
                  </div>
                  <div className="method-details">
                    <span className="method-label font-mono">CALL ME</span>
                    <span className="method-value">{personalInfo.phone}</span>
                  </div>
                </div>
                <div className="method-right">
                  <button type="button" className="copy-action-btn" aria-label="Copy Phone Number">
                    {copiedPhone ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Location Widget */}
              <div className="contact-method-card premium-card">
                <div className="method-left">
                  <div className="contact-icon-wrapper">
                    <MapPin size={18} />
                  </div>
                  <div className="method-details">
                    <span className="method-label font-mono">LOCATION</span>
                    <span className="method-value">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels connect buttons row */}
            <div style={{ display: "flex", gap: "var(--spacing-sm)", marginTop: "0.5rem" }}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary font-mono"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "0.85rem" }}
              >
                <Linkedin size={14} /> LINKEDIN
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary font-mono"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "0.85rem" }}
              >
                <Github size={14} /> GITHUB
              </a>
            </div>
          </div>

          {/* Right Column: Secure Glassmorphic Form Card */}
          <form className="contact-form-card premium-card" onSubmit={handleSubmit} noValidate>
            {/* Honeypot anti-spam field */}
            <div style={{ display: "none" }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                name="website"
                value={form.website}
                onChange={handleInputChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {/* Name field */}
              <div className="floating-group">
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={`floating-input ${errors.name ? "error" : ""}`}
                  placeholder=" "
                  value={form.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <span className="floating-highlight"></span>
                <label className="floating-label" htmlFor="name">YOUR NAME *</label>
                {errors.name && (
                  <span className="field-error font-mono" id="name-error">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="floating-group">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`floating-input ${errors.email ? "error" : ""}`}
                  placeholder=" "
                  value={form.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <span className="floating-highlight"></span>
                <label className="floating-label" htmlFor="email">EMAIL ADDRESS *</label>
                {errors.email && (
                  <span className="field-error font-mono" id="email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Subject field */}
              <div className="floating-group">
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  className={`floating-input ${errors.subject ? "error" : ""}`}
                  placeholder=" "
                  value={form.subject}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                <span className="floating-highlight"></span>
                <label className="floating-label" htmlFor="subject">SUBJECT *</label>
                {errors.subject && (
                  <span className="field-error font-mono" id="subject-error">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message field */}
              <div className="floating-group">
                <textarea
                  id="message"
                  name="message"
                  className={`floating-input floating-textarea ${errors.message ? "error" : ""}`}
                  placeholder=" "
                  rows={4}
                  value={form.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  maxLength={1000}
                />
                <span className="floating-highlight"></span>
                <label className="floating-label" htmlFor="message">YOUR MESSAGE *</label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2px" }}>
                  <div>
                    {errors.message && (
                      <span className="field-error font-mono" id="message-error" style={{ position: "static", display: "inline-block", marginTop: 0 }}>
                        {errors.message}
                      </span>
                    )}
                  </div>
                  <span className="character-counter font-mono">
                    {form.message.length}/1000
                  </span>
                </div>
              </div>
            </div>

            {/* E2E status feedback toasts */}
            {status === "error" && (
              <div className="submit-feedback submit-error font-mono" role="alert">
                ⚠ {errorMessage}
              </div>
            )}

            {status === "success" && (
              <div className="submit-feedback submit-success font-mono" role="alert">
                ✓ MESSAGE SENT SUCCESSFULLY!
              </div>
            )}

            {/* Gradient Submission triggering button */}
            <button
              type="submit"
              className={`btn font-mono ${
                status === "loading" ? "btn-loading" : status === "success" ? "btn-success" : status === "error" ? "btn-error" : "btn-accent"
              }`}
              style={{ width: "100%", padding: "0.85rem", marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <span className="spinner"></span> SENDING...
                </>
              ) : status === "success" ? (
                <>
                  <Check size={16} /> MESSAGE SENT
                </>
              ) : status === "error" ? (
                <>
                  TRY AGAIN
                </>
              ) : (
                <>
                  ✈ SEND MESSAGE <span className="arrow">→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
