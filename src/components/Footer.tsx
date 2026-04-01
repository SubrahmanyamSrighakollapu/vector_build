"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Our Team", href: "/our-team" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Precision Precast", href: "/services" },
    { label: "Tilt-Up", href: "/services" },
    { label: "Structural Steel", href: "/services" },
    { label: "PEMB", href: "/services" },
    { label: "Rebar", href: "/services" },
    { label: "BIM Consulting", href: "/services" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <>
      <style>{`
        .footer {
          background: #0f0824;
          color: #d8cafa;
          padding: 64px 48px 0;
          margin-top: auto;
          border-top: 1px solid rgba(171,140,245,0.15);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.6fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(171,140,245,0.15);
        }

        /* Col 1 — Brand */
        .footer-brand-logo {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }
        .footer-brand-logo img {
          height: 38px;
          width: auto;
          object-fit: contain;
        }
        .footer-tagline {
          font-size: 0.88rem;
          line-height: 1.75;
          color: #a89cc8;
          max-width: 260px;
          margin-bottom: 28px;
        }
        .footer-socials { display: flex; gap: 10px; }
        .social-link {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(171,140,245,0.1);
          border: 1px solid rgba(171,140,245,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ab8cf5;
          transition: all 0.2s ease;
        }
        .social-link:hover {
          background: #ab8cf5;
          color: #281750;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(171,140,245,0.35);
        }

        /* Cols 2 & 3 — Links */
        .footer-col-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #ab8cf5;
          margin-bottom: 20px;
        }
        .footer-col-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col-link {
          font-size: 0.88rem;
          color: #a89cc8;
          transition: color 0.2s ease, padding-left 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .footer-col-link:hover {
          color: #ffffff;
          padding-left: 4px;
        }

        /* Col 4 — Newsletter */
        .footer-nl-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #ab8cf5;
          margin-bottom: 12px;
        }
        .footer-nl-desc {
          font-size: 0.85rem;
          color: #a89cc8;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .footer-nl-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-nl-input {
          width: 100%;
          padding: 11px 14px;
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(171,140,245,0.2);
          border-radius: 10px;
          color: #fff;
          font-size: 0.85rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .footer-nl-input::placeholder { color: #6b5f8a; }
        .footer-nl-input:focus {
          border-color: #ab8cf5;
          background: rgba(171,140,245,0.08);
        }
        .footer-nl-btn {
          width: 100%;
          padding: 11px 16px;
          background: #ab8cf5;
          color: #281750;
          font-size: 0.85rem;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .footer-nl-btn:hover {
          background: #d8cafa;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(171,140,245,0.3);
        }
        .footer-nl-success {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(171,140,245,0.1);
          border: 1px solid rgba(171,140,245,0.25);
          border-radius: 10px;
          padding: 12px 14px;
          color: #d8cafa;
          font-size: 0.83rem;
          font-weight: 500;
        }
        .footer-nl-privacy {
          font-size: 0.75rem;
          color: #4e4468;
          margin-top: 8px;
          line-height: 1.5;
        }
        .footer-nl-privacy a { color: #6b5f8a; text-decoration: underline; }
        .footer-nl-privacy a:hover { color: #ab8cf5; }

        /* Bottom bar */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          font-size: 0.8rem;
          color: #4e4468;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer-bottom a { color: #6b5f8a; transition: color 0.2s; }
        .footer-bottom a:hover { color: #ab8cf5; }

        @media (max-width: 1100px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-nl { grid-column: 1 / -1; }
        }
        @media (max-width: 768px) {
          .footer { padding: 48px 20px 0; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-grid">

          {/* 1 — Brand */}
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <Link href="/">
                <Image src="/vector-build-logo.jpeg" alt="VectorBuild" width={140} height={38} style={{ height: 38, width: "auto", objectFit: "contain" }} />
              </Link>
            </div>
            <p className="footer-tagline">
              Engineering excellence through precision precast, structural steel,
              and innovative construction solutions since 1985.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="LinkedIn"><FiLinkedin size={15} /></a>
              <a href="#" className="social-link" aria-label="Twitter"><FiTwitter size={15} /></a>
              <a href="#" className="social-link" aria-label="Facebook"><FiFacebook size={15} /></a>
              <a href="#" className="social-link" aria-label="Instagram"><FiInstagram size={15} /></a>
            </div>
          </div>

          {/* 2 — Company */}
          <div>
            <p className="footer-col-title">Company</p>
            <div className="footer-col-links">
              {footerLinks.Company.map((link) => (
                <Link key={link.label} href={link.href} className="footer-col-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 3 — Services */}
          <div>
            <p className="footer-col-title">Services</p>
            <div className="footer-col-links">
              {footerLinks.Services.map((link) => (
                <Link key={link.label} href={link.href} className="footer-col-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 4 — Newsletter */}
          <div className="footer-nl">
            <p className="footer-nl-title">Stay Updated</p>
            <p className="footer-nl-desc">
              Get the latest project updates, industry insights, and engineering
              news delivered straight to your inbox.
            </p>
            {subscribed ? (
              <div className="footer-nl-success">
                <FiCheckCircle size={18} color="#ab8cf5" />
                You&apos;re subscribed! Welcome aboard.
              </div>
            ) : (
              <form className="footer-nl-form" onSubmit={handleSubscribe}>
                <input
                  className="footer-nl-input"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="footer-nl-btn">
                  Subscribe <FiArrowRight size={14} />
                </button>
              </form>
            )}
            <p className="footer-nl-privacy">
              No spam, ever. Read our <a href="#">Privacy Policy</a>.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VectorBuild. All rights reserved.</span>
          <span>
            <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a> · <a href="#">Sitemap</a>
          </span>
        </div>
      </footer>
    </>
  );
}
