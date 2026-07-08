"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";
import { companyContact, globalOffices } from "@/lib/contact";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Precast", href: "/services/precast" },
    { label: "Tilt-Up", href: "/services/tilt-up" },
    { label: "Mini/Self Storages", href: "/services/mini-self-storages" },
    { label: "PEMB", href: "/services/pemb" },
  ],
};

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #060412;
          color: #d8cafa;
          border-top: 1px solid rgba(171,140,245,0.12);
        }
        .footer-inner {
          padding: 72px 96px 0;
          max-width: 1680px;
          margin: 0 auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.45fr 0.9fr 0.9fr 2.75fr;
          gap: 72px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(171,140,245,0.1);
        }

        /* Brand col */
        .footer-logo-wrap { margin-bottom: 20px; }
        .footer-tagline {
          font-size: 0.875rem;
          line-height: 1.8;
          color: rgba(216,202,250,0.5);
          max-width: 400px;
          margin-bottom: 24px;
        }
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          color: rgba(216,202,250,0.5);
          transition: color 0.2s ease;
        }
        .footer-contact-item:hover { color: rgba(216,202,250,0.85); }
        .footer-contact-item svg { color: #ab8cf5; flex-shrink: 0; }
        .footer-socials { display: flex; gap: 10px; }
        .footer-social {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(171,140,245,0.08);
          border: 1px solid rgba(171,140,245,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(171,140,245,0.7);
          transition: all 0.2s ease;
        }
        .footer-social:hover {
          background: #ab8cf5;
          color: #0a0618;
          border-color: #ab8cf5;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(171,140,245,0.35);
        }

        /* Link cols */
        .footer-col-title {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #ab8cf5;
          margin-bottom: 20px;
        }
        .footer-col-links { display: flex; flex-direction: column; gap: 10px; }
        .footer-col-link {
          font-size: 0.875rem;
          color: rgba(216,202,250,0.5);
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .footer-col-link:hover {
          color: #ffffff;
          padding-left: 6px;
        }

        /* Global offices */
        .footer-offices-col {
          min-width: 0;
        }
        .footer-offices-title {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #ab8cf5;
          margin-bottom: 20px;
        }
        .footer-offices-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(260px, 1fr));
          gap: 30px 42px;
        }
        .footer-office {
          min-width: 0;
        }
        .footer-office-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .footer-office-flag {
          position: relative;
          width: 38px;
          height: 26px;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.28);
          box-shadow: 0 4px 10px rgba(40,23,80,0.18);
          flex-shrink: 0;
        }
        .footer-office-city {
          font-size: 0.9rem;
          font-weight: 700;
          color: #f5f2ff;
          line-height: 1.35;
        }
        .footer-office-address {
          font-size: 0.93rem;
          line-height: 1.58;
          color: rgba(216,202,250,0.54);
          max-width: 360px;
        }
        .footer-office-address span {
          display: block;
        }

        /* Bottom bar */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          font-size: 0.78rem;
          color: #fff;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer-bottom a { color: #fff; transition: color 0.2s; }
        .footer-bottom a:hover { color: #ab8cf5; }
        .footer-bottom-links { display: flex; gap: 20px; }
        .footer-powered {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .footer-powered-prefix {
          color: rgba(255,255,255,0.68);
          font-weight: 500;
        }
        .footer-powered-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 2px 0;
          border-radius: 0;
          background: transparent;
          border: none;
          color: #cfaeff !important;
          font-weight: 800;
          letter-spacing: 0.02em;
          text-decoration: underline;
          text-decoration-thickness: 1.5px;
          text-underline-offset: 4px;
          text-decoration-color: rgba(171,140,245,0.7);
          text-shadow: 0 0 18px rgba(171,140,245,0.22);
        }
        .footer-powered-link:hover {
          color: #ffffff !important;
          text-decoration-color: #ffffff;
          text-shadow: 0 0 22px rgba(171,140,245,0.4);
        }
        .footer-powered-link::after {
          content: "↗";
          font-size: 0.85rem;
          line-height: 1;
          margin-left: 0;
        }

        @media (max-width: 1100px) {
          .footer-inner { padding: 56px 48px 0; max-width: 1400px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer-brand-col { grid-column: 1 / -1; }
          .footer-offices-col { grid-column: 1 / -1; }
          .footer-offices-grid { grid-template-columns: repeat(2, minmax(240px, 1fr)); }
        }
        @media (max-width: 640px) {
          .footer-inner { padding: 48px 24px 0; }
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .footer-brand-col, .footer-offices-col { grid-column: auto; }
          .footer-offices-grid { grid-template-columns: 1fr; gap: 22px; }
          .footer-offices-title { margin-bottom: 18px; }
          .footer-office-address { max-width: 100%; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <motion.div
            className="footer-grid"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Brand */}
            <div className="footer-brand-col">
              <div className="footer-logo-wrap">
                <Link href="/">
                  <Image src="/buildright-tech-footer.png" alt="Build Right Tech" width={150} height={46} style={{ height: 80, width: "auto", objectFit: "contain" }} />
                </Link>
              </div>
              <p className="footer-tagline">
                Your trusted detailing partner for Self Storage, Tilt-Up, Precast, and PEMB projects delivering fabrication-ready shop drawings and BIM solutions worldwide.
              </p>
              <div className="footer-contact-list">
                <span className="footer-contact-item"><FiPhone size={13} />{companyContact.phoneDisplay}</span>
                <span className="footer-contact-item"><FiMail size={13} />{companyContact.email}</span>
              </div>
            </div>

            {/* Company */}
            <div>
              <p className="footer-col-title">Company</p>
              <div className="footer-col-links">
                {footerLinks.Company.map((l) => (
                  <Link key={l.label} href={l.href} className="footer-col-link">{l.label}</Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="footer-col-title">Services</p>
              <div className="footer-col-links">
                {footerLinks.Services.map((l) => (
                  <Link key={l.label} href={l.href} className="footer-col-link">{l.label}</Link>
                ))}
              </div>
            </div>

            {/* Global offices */}
            <div className="footer-offices-col">
              <p className="footer-offices-title">Global Presence</p>
              <div className="footer-offices-grid">
                {globalOffices.map((office) => (
                  <div key={office.city} className="footer-office">
                    <div className="footer-office-head">
                      <span className="footer-office-flag" aria-hidden="true">
                        <Image
                          src={office.flag}
                          alt={`${office.city} flag`}
                          fill
                          style={{ objectFit: "fill" }}
                          sizes="38px"
                        />
                      </span>
                      <span className="footer-office-city">{office.city}</span>
                    </div>
                    <div className="footer-office-address">
                      {office.address.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Build Right Tech. All rights reserved.</span>
            <div className="footer-powered">
              <span className="footer-powered-prefix">Powered by</span>
              <a href="https://vividuss.com/" target="_blank" rel="noreferrer" className="footer-powered-link">vividuss.com</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
