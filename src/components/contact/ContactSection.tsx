"use client";
import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const projectTypes = [
  "Structural Steel",
  "PEMB",
  "Tilt-Up",
  "Pre-Cast",
  "Rebar",
  "Forming",
  "BIM Consulting",
  "Other",
];

const contactInfo = [
  {
    icon: <FiMapPin size={18} />,
    label: "Our Office",
    lines: ["Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, H.S, R Extension, Bengaluru, Karnataka 560068"],
  },
  {
    icon: <FiPhone size={18} />,
    label: "Phone Number",
    lines: ["+91 9876543212", "Mon–Fri 9:00 AM – 6:00 PM"],
  },
  {
    icon: <FiMail size={18} />,
    label: "Email Us",
    lines: ["vectorbuild@gmail.com"],
  },
  {
    icon: <FiClock size={18} />,
    label: "Response Time",
    lines: ["Within 24 hours", "For all project inquiries"],
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", type: "", details: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <style>{`
        .ct-hero {
          background: linear-gradient(135deg, #1a0e38 0%, #281750 60%, #1e1040 100%);
          padding: 80px 48px 72px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ct-hero::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(171,140,245,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .ct-hero::after {
          content: '';
          position: absolute;
          bottom: -60px; left: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(171,140,245,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .ct-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(171,140,245,0.12);
          border: 1px solid rgba(171,140,245,0.3);
          color: #d8cafa;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
          position: relative; z-index: 1;
        }
        .ct-badge-dot {
          width: 6px; height: 6px;
          background: #ab8cf5;
          border-radius: 50%;
          animation: ct-pulse 2s infinite;
        }
        @keyframes ct-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(1.4); }
        }
        .ct-hero-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          position: relative; z-index: 1;
        }
        .ct-hero-title span { color: #ab8cf5; }
        .ct-hero-desc {
          font-size: 1rem;
          color: rgba(216,202,250,0.75);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.75;
          position: relative; z-index: 1;
        }

        .ct-body {
          background: #f9f8ff;
          padding: 72px 48px 0;
        }
        .ct-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Left panel */
        .ct-info-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ct-info-card {
          background: #fff;
          border: 1px solid #e8e3f8;
          border-radius: 14px;
          padding: 20px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .ct-info-card:hover {
          box-shadow: 0 8px 28px rgba(40,23,80,0.09);
          border-color: rgba(171,140,245,0.35);
        }
        .ct-info-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: #f0eeff;
          color: #ab8cf5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ct-info-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #ab8cf5;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
        .ct-info-line {
          font-size: 0.85rem;
          color: #262626;
          font-weight: 500;
          line-height: 1.5;
        }
        .ct-info-line.muted { color: #a3a3a3; font-weight: 400; }

        .ct-quote-box {
          background: linear-gradient(135deg, #281750, #1a0e38);
          border-radius: 14px;
          padding: 24px 20px;
          margin-top: 4px;
        }
        .ct-quote-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .ct-quote-desc {
          font-size: 0.82rem;
          color: rgba(216,202,250,0.75);
          line-height: 1.65;
        }
        .ct-quote-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 14px;
          background: rgba(171,140,245,0.15);
          border: 1px solid rgba(171,140,245,0.3);
          color: #d8cafa;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 100px;
        }

        /* Right panel — form */
        .ct-form-card {
          background: #fff;
          border: 1px solid #e8e3f8;
          border-radius: 16px;
          padding: 36px 32px;
          box-shadow: 0 4px 32px rgba(40,23,80,0.06);
        }
        .ct-form-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f0824;
          margin-bottom: 6px;
        }
        .ct-form-sub {
          font-size: 0.83rem;
          color: #a3a3a3;
          margin-bottom: 28px;
        }
        .ct-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }
        .ct-field:last-of-type { margin-bottom: 0; }
        .ct-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #262626;
          letter-spacing: 0.2px;
        }
        .ct-input, .ct-select, .ct-textarea {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid #e5e5e5;
          border-radius: 10px;
          font-size: 0.88rem;
          color: #0a0a0a;
          background: #fafafa;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          font-family: inherit;
        }
        .ct-input::placeholder, .ct-textarea::placeholder { color: #c0bcd0; }
        .ct-input:focus, .ct-select:focus, .ct-textarea:focus {
          border-color: #ab8cf5;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(171,140,245,0.12);
        }
        .ct-select { appearance: none; cursor: pointer; }
        .ct-textarea {
          resize: vertical;
          min-height: 110px;
          line-height: 1.6;
        }
        .ct-submit {
          width: 100%;
          margin-top: 24px;
          padding: 14px 24px;
          background: #281750;
          color: #fff;
          font-size: 0.92rem;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ct-submit:hover {
          background: #ab8cf5;
          color: #281750;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(171,140,245,0.35);
        }

        /* Success state */
        .ct-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 24px;
          gap: 16px;
        }
        .ct-success-icon { color: #ab8cf5; }
        .ct-success-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f0824;
        }
        .ct-success-desc { font-size: 0.88rem; color: #525252; line-height: 1.65; }

        /* Map */
        .ct-map-wrap {
          margin-top: 56px;
          border-radius: 0;
          overflow: hidden;
          height: 380px;
          position: relative;
        }
        .ct-map-wrap iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
        .ct-map-label {
          position: absolute;
          top: 20px; left: 20px;
          background: #281750;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 16px rgba(40,23,80,0.3);
          z-index: 1;
        }

        @media (max-width: 900px) {
          .ct-layout { grid-template-columns: 1fr; }
          .ct-info-panel { display: grid; grid-template-columns: 1fr 1fr; }
          .ct-quote-box { grid-column: 1 / -1; }
        }
        @media (max-width: 768px) {
          .ct-hero { padding: 60px 20px 56px; }
          .ct-body { padding: 48px 20px 0; }
          .ct-form-card { padding: 24px 18px; }
          .ct-form-row { grid-template-columns: 1fr; gap: 0; }
          .ct-info-panel { grid-template-columns: 1fr; }
          .ct-map-wrap { height: 280px; }
        }
      `}</style>

      {/* Hero */}
      <section className="ct-hero">
        <div className="ct-badge">
          <span className="ct-badge-dot" />
          Get In Touch
        </div>
        <h1 className="ct-hero-title">
          Let&apos;s Build <span>Together</span>
        </h1>
        <p className="ct-hero-desc">
          Ready to start your next industrial project? Reach out to our team of engineers
          and planners for precision execution.
        </p>
      </section>

      {/* Body */}
      <div className="ct-body">
        <div className="ct-layout">

          {/* Left — contact info */}
          <div className="ct-info-panel">
            {contactInfo.map((c) => (
              <div className="ct-info-card" key={c.label}>
                <div className="ct-info-icon">{c.icon}</div>
                <div>
                  <div className="ct-info-label">{c.label}</div>
                  {c.lines.map((l, i) => (
                    <div key={i} className={`ct-info-line${i > 0 ? " muted" : ""}`}>{l}</div>
                  ))}
                </div>
              </div>
            ))}
            <div className="ct-quote-box">
              <div className="ct-quote-title">Get a Quote Fast</div>
              <div className="ct-quote-desc">
                Our estimation team typically responds within 24 hours with preliminary
                scopes for qualified industrial projects.
              </div>
              <div className="ct-quote-pill">
                <span style={{ width: 6, height: 6, background: "#ab8cf5", borderRadius: "50%", display: "inline-block" }} />
                24-hr turnaround
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="ct-form-card">
            {submitted ? (
              <div className="ct-success">
                <FiCheckCircle size={48} className="ct-success-icon" />
                <div className="ct-success-title">Enquiry Sent Successfully!</div>
                <div className="ct-success-desc">
                  Thank you for reaching out. Our team will get back to you within 24 hours
                  with a preliminary scope for your project.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="ct-form-title">Project Inquiry</div>
                <div className="ct-form-sub">Fill out the form and we&apos;ll connect you with the right engineer.</div>

                <div className="ct-form-row">
                  <div className="ct-field">
                    <label className="ct-label">Name</label>
                    <input
                      className="ct-input"
                      placeholder="Enter Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label">Phone Number</label>
                    <input
                      className="ct-input"
                      placeholder="Enter Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="ct-form-row">
                  <div className="ct-field">
                    <label className="ct-label">Email Address</label>
                    <input
                      className="ct-input"
                      type="email"
                      placeholder="Enter Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label">Project Type</label>
                    <select
                      className="ct-select"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      required
                    >
                      <option value="" disabled>Select a Type</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="ct-field">
                  <label className="ct-label">Project Details</label>
                  <textarea
                    className="ct-textarea"
                    placeholder="Tell us more about your requirements..."
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="ct-submit">
                  Send Enquiry <FiArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="ct-map-wrap">
          <div className="ct-map-label">
            <FiMapPin size={13} />
            Bengaluru, Karnataka 560068
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30451.97!2d78.4867!3d17.4399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sSecunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VectorBuild Office Location"
          />
        </div>
      </div>
    </>
  );
}
