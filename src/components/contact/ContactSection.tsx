"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiGlobe,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { companyContact, globalOffices } from "@/lib/contact";

const projectTypes = ["Structural Steel", "PEMB", "Tilt-Up", "Pre-Cast", "Rebar", "Forming", "BIM Consulting", "Other"];

const quickContacts = [
  {
    label: "Phone Number",
    value: companyContact.phoneDisplay,
    meta: "Mon-Fri 9:00 AM - 6:00 PM",
    href: `tel:+${companyContact.phoneE164}`,
    icon: FiPhone,
  },
  {
    label: "Email Us",
    value: companyContact.email,
    meta: "For project inquiries and proposal requests",
    href: `mailto:${companyContact.email}`,
    icon: FiMail,
  },
  {
    label: "Response Time",
    value: "Within 24 hours",
    meta: "For qualified project discussions",
    icon: FiClock,
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "", details: "" });

  return (
    <>
      <style>{`
        .ct { background: #0a0618; }

        .ct-hero {
          padding: 96px 80px 88px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ct-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(171,140,245,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171,140,245,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .ct-hero-orb {
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(171,140,245,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .ct-hero-inner { position: relative; z-index: 1; }
        .ct-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #ab8cf5;
          margin-bottom: 20px;
        }
        .ct-eyebrow::before,
        .ct-eyebrow::after {
          content: "";
          width: 24px;
          height: 1.5px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .ct-hero-title {
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -2px;
          line-height: 1.02;
          margin-bottom: 20px;
        }
        .ct-hero-title span {
          background: linear-gradient(135deg, #ab8cf5, #d8cafa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-hero-desc {
          font-size: 1.05rem;
          color: rgba(216,202,250,0.6);
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .ct-body {
          background: #f9f8ff;
          padding: 84px 80px 92px;
        }
        .ct-shell {
          max-width: 1260px;
          margin: 0 auto;
        }
        .ct-layout {
          display: grid;
          grid-template-columns: minmax(320px, 0.92fr) minmax(0, 1.08fr);
          gap: 30px;
          align-items: start;
        }

        .ct-side {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .ct-intro-card,
        .ct-method-card,
        .ct-form-card,
        .ct-office-card {
          background: #fff;
          border: 1px solid #e8e3f8;
          box-shadow: 0 12px 38px rgba(40,23,80,0.07);
        }
        .ct-intro-card {
          border-radius: 22px;
          padding: 30px 28px;
          position: relative;
          overflow: hidden;
        }
        .ct-intro-card::before {
          content: "";
          position: absolute;
          inset: 0 auto auto 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(171,140,245,0), rgba(171,140,245,0.45), rgba(171,140,245,0));
        }
        .ct-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ab8cf5;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .ct-kicker::before {
          content: "";
          width: 24px;
          height: 2px;
          border-radius: 999px;
          background: #ab8cf5;
        }
        .ct-intro-title {
          font-size: clamp(1.55rem, 2vw, 2rem);
          font-weight: 900;
          color: #140d2b;
          letter-spacing: -0.04em;
          margin-bottom: 14px;
        }
        .ct-intro-copy {
          font-size: 0.95rem;
          line-height: 1.8;
          color: #6a6f86;
          margin-bottom: 24px;
        }
        .ct-intro-meta {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .ct-intro-pill {
          padding: 14px 16px;
          border-radius: 16px;
          background: linear-gradient(180deg, #fcfbff 0%, #f5f1ff 100%);
          border: 1px solid #ece6fb;
        }
        .ct-intro-pill-label {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8b79c7;
          margin-bottom: 6px;
        }
        .ct-intro-pill-value {
          font-size: 0.9rem;
          font-weight: 700;
          color: #23173f;
          line-height: 1.5;
        }

        .ct-methods {
          display: grid;
          gap: 14px;
        }
        .ct-method-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          border-radius: 18px;
          padding: 20px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .ct-method-card:hover {
          transform: translateY(-3px);
          border-color: rgba(171,140,245,0.38);
          box-shadow: 0 18px 42px rgba(40,23,80,0.1);
        }
        .ct-method-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #f3efff;
          color: #ab8cf5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ct-method-label {
          font-size: 0.7rem;
          font-weight: 800;
          color: #ab8cf5;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 5px;
        }
        .ct-method-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: #181125;
          line-height: 1.45;
        }
        .ct-method-meta {
          font-size: 0.84rem;
          color: #7b8098;
          line-height: 1.6;
          margin-top: 4px;
        }
        .ct-method-link {
          text-decoration: none;
          color: inherit;
        }

        .ct-quote-box {
          background: linear-gradient(135deg, #0a0618, #281750);
          border-radius: 20px;
          padding: 24px 22px;
          border: 1px solid rgba(171,140,245,0.15);
          position: relative;
          overflow: hidden;
        }
        .ct-quote-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(171,140,245,0.42), transparent);
        }
        .ct-quote-title {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }
        .ct-quote-desc {
          font-size: 0.84rem;
          color: rgba(216,202,250,0.68);
          line-height: 1.75;
        }
        .ct-quote-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 15px;
          background: rgba(171,140,245,0.12);
          border: 1px solid rgba(171,140,245,0.24);
          color: #d8cafa;
          font-size: 0.74rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 999px;
        }
        .ct-quote-dot {
          width: 6px;
          height: 6px;
          background: #ab8cf5;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(171,140,245,0.8);
        }

        .ct-form-card {
          border-radius: 24px;
          padding: 40px 36px;
        }
        .ct-form-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0a0618;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }
        .ct-form-sub {
          font-size: 0.86rem;
          color: #8b91a7;
          margin-bottom: 30px;
          line-height: 1.7;
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
        .ct-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: #262626;
          letter-spacing: 0.02em;
        }
        .ct-input,
        .ct-select,
        .ct-textarea {
          width: 100%;
          padding: 12px 14px;
          border: 1.5px solid #e8e3f8;
          border-radius: 12px;
          font-size: 0.88rem;
          color: #0a0a0a;
          background: #fafafa;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .ct-input::placeholder,
        .ct-textarea::placeholder { color: #c0bcd0; }
        .ct-input:focus,
        .ct-select:focus,
        .ct-textarea:focus {
          border-color: #ab8cf5;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(171,140,245,0.12);
        }
        .ct-select {
          appearance: none;
          cursor: pointer;
        }
        .ct-textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.6;
        }
        .ct-submit {
          width: 100%;
          margin-top: 12px;
          padding: 15px 24px;
          background: #0a0618;
          color: #fff;
          font-size: 0.92rem;
          font-weight: 700;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .ct-submit::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ab8cf5, #d8cafa);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .ct-submit:hover::before { opacity: 1; }
        .ct-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(171,140,245,0.35);
          color: #0a0618;
        }
        .ct-submit span,
        .ct-submit svg { position: relative; z-index: 1; }
        .ct-submit:hover svg { transform: translateX(4px); }

        .ct-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 56px 24px;
          gap: 16px;
        }
        .ct-success-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(171,140,245,0.1);
          border: 1px solid rgba(171,140,245,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ab8cf5;
        }
        .ct-success-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0a0618;
        }
        .ct-success-desc {
          font-size: 0.9rem;
          color: #525252;
          line-height: 1.7;
          max-width: 360px;
        }

        .ct-offices {
          margin-top: 82px;
        }
        .ct-section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .ct-section-copy {
          max-width: 680px;
          font-size: 0.96rem;
          line-height: 1.8;
          color: #686d84;
        }
        .ct-offices-meta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(171,140,245,0.09);
          border: 1px solid rgba(171,140,245,0.18);
          color: #7e67c5;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .ct-offices-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .ct-office-card {
          border-radius: 22px;
          padding: 24px 22px 22px;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .ct-office-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, rgba(171,140,245,0), rgba(171,140,245,0.42), rgba(171,140,245,0));
        }
        .ct-office-card:hover {
          transform: translateY(-4px);
          border-color: rgba(171,140,245,0.35);
          box-shadow: 0 18px 44px rgba(40,23,80,0.1);
        }
        .ct-office-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .ct-office-flag {
          position: relative;
          width: 18px;
          height: 18px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 4px 10px rgba(40,23,80,0.18);
          flex-shrink: 0;
        }
        .ct-office-flag.flag-india {
          background: linear-gradient(to bottom, #ff9933 0 33.33%, #ffffff 33.33% 66.66%, #138808 66.66% 100%);
        }
        .ct-office-flag.flag-india::after {
          content: "";
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          border: 1.2px solid #1a4ea1;
        }
        .ct-office-flag.flag-usa {
          background:
            linear-gradient(to bottom,
              #b22234 0 14.28%, #ffffff 14.28% 28.56%,
              #b22234 28.56% 42.84%, #ffffff 42.84% 57.12%,
              #b22234 57.12% 71.4%, #ffffff 71.4% 85.68%,
              #b22234 85.68% 100%);
        }
        .ct-office-flag.flag-usa::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 52%;
          height: 52%;
          background: #3c3b6e;
        }
        .ct-office-flag.flag-usa::after {
          content: "";
          position: absolute;
          top: 3px;
          left: 3px;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          box-shadow:
            4px 0 0 rgba(255,255,255,0.9),
            0 4px 0 rgba(255,255,255,0.9),
            4px 4px 0 rgba(255,255,255,0.9);
        }
        .ct-office-flag.flag-australia {
          background: #1e3a8a;
        }
        .ct-office-flag.flag-australia::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 58%;
          height: 58%;
          background:
            linear-gradient(0deg, transparent 42%, #ffffff 42% 58%, transparent 58%),
            linear-gradient(90deg, transparent 42%, #ffffff 42% 58%, transparent 58%),
            linear-gradient(45deg, transparent 44%, #ffffff 44% 56%, transparent 56%),
            linear-gradient(-45deg, transparent 44%, #ffffff 44% 56%, transparent 56%),
            linear-gradient(0deg, transparent 46%, #c8102e 46% 54%, transparent 54%),
            linear-gradient(90deg, transparent 46%, #c8102e 46% 54%, transparent 54%);
          background-color: #012169;
        }
        .ct-office-flag.flag-australia::after {
          content: "";
          position: absolute;
          right: 3px;
          bottom: 3px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow:
            -5px -4px 0 0 rgba(255,255,255,0.95),
            -1px -8px 0 0 rgba(255,255,255,0.95);
        }
        .ct-office-city {
          font-size: 1rem;
          font-weight: 800;
          color: #181125;
          line-height: 1.35;
        }
        .ct-office-address {
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: #727891;
          font-size: 0.92rem;
          line-height: 1.65;
        }
        .ct-office-address span {
          display: block;
        }

        @media (max-width: 1100px) {
          .ct-hero { padding: 80px 48px 72px; }
          .ct-body { padding: 70px 48px 78px; }
          .ct-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .ct-hero { padding: 68px 24px 60px; }
          .ct-body { padding: 52px 20px 64px; }
          .ct-form-card,
          .ct-intro-card { padding: 24px 20px; }
          .ct-form-row,
          .ct-intro-meta,
          .ct-offices-grid { grid-template-columns: 1fr; }
          .ct-section-head { margin-bottom: 22px; }
          .ct-offices { margin-top: 64px; }
        }
      `}</style>

      <div className="ct">
        <section className="ct-hero">
          <div className="ct-hero-grid" />
          <div className="ct-hero-orb" />
          <motion.div className="ct-hero-inner" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="ct-eyebrow">Get In Touch</div>
            <h1 className="ct-hero-title">Let&apos;s Build <span>Together</span></h1>
            <p className="ct-hero-desc">
              Reach out to our team for precast, tilt-up, self storage, PEMB, and BIM coordination requirements across our global office network.
            </p>
          </motion.div>
        </section>

        <div className="ct-body">
          <div className="ct-shell">
            <motion.div
              className="ct-layout"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="ct-side">
               
                <div className="ct-methods">
                  {quickContacts.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <>
                        <div className="ct-method-icon"><Icon size={18} /></div>
                        <div>
                          <div className="ct-method-label">{item.label}</div>
                          <div className="ct-method-value">{item.value}</div>
                          <div className="ct-method-meta">{item.meta}</div>
                        </div>
                      </>
                    );

                    if (item.href) {
                      return (
                        <a key={item.label} href={item.href} className="ct-method-card ct-method-link">
                          {content}
                        </a>
                      );
                    }

                    return (
                      <div key={item.label} className="ct-method-card">
                        {content}
                      </div>
                    );
                  })}
                </div>

                <div className="ct-quote-box">
                  <div className="ct-quote-title">Get a Quote Fast</div>
                  <div className="ct-quote-desc">
                    Our estimation team typically responds within 24 hours with a preliminary understanding of scope, deliverables, and the right next conversation.
                  </div>
                  <div className="ct-quote-pill">
                    <span className="ct-quote-dot" /> 24-hour turnaround
                  </div>
                </div>
              </div>

              <div className="ct-form-card">
                {submitted ? (
                  <div className="ct-success">
                    <div className="ct-success-icon-wrap"><FiCheckCircle size={32} /></div>
                    <div className="ct-success-title">Enquiry Sent!</div>
                    <div className="ct-success-desc">
                      Thank you for reaching out. Our team will review your request and get back to you with the next steps.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div className="ct-form-title">Project Inquiry</div>
                    <div className="ct-form-sub">Fill out the form and we&apos;ll connect you with the right engineer.</div>

                    <div className="ct-form-row">
                      <div className="ct-field">
                        <label className="ct-label">Name</label>
                        <input className="ct-input" placeholder="Enter Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                      </div>
                      <div className="ct-field">
                        <label className="ct-label">Phone Number</label>
                        <input className="ct-input" placeholder="Enter Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                      </div>
                    </div>

                    <div className="ct-form-row">
                      <div className="ct-field">
                        <label className="ct-label">Email Address</label>
                        <input className="ct-input" type="email" placeholder="Enter Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                      </div>
                      <div className="ct-field">
                        <label className="ct-label">Project Type</label>
                        <select className="ct-select" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} required>
                          <option value="" disabled>Select a Type</option>
                          {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="ct-field">
                      <label className="ct-label">Project Details</label>
                      <textarea className="ct-textarea" placeholder="Tell us more about your requirements..." value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} required />
                    </div>

                    <button type="submit" className="ct-submit">
                      <span>Send Enquiry</span>
                      <FiArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.section
              className="ct-offices"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="ct-section-head">
                <div>
                  <div className="ct-kicker">Global Offices</div>
                  <div className="ct-intro-title">Our office network</div>
                  <div className="ct-section-copy">
                    The contact page now uses the same office addresses as the footer, presented in a dedicated grid so each location has enough breathing room and remains easy to scan.
                  </div>
                </div>
                <div className="ct-offices-meta">
                  <FiGlobe size={14} />
                  {globalOffices.length} offices worldwide
                </div>
              </div>

              <div className="ct-offices-grid">
                {globalOffices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    className="ct-office-card"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                  >
                    <div className="ct-office-head">
                      <span className={`ct-office-flag flag-${office.country}`} aria-hidden="true" />
                      <span className="ct-office-city">{office.city}</span>
                    </div>
                    <div className="ct-office-address">
                      {office.address.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </>
  );
}
