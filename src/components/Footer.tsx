import Link from "next/link";
import { FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

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
  ],
};

export default function Footer() {
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
        .footer-inner {
          width: 100%;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(171,140,245,0.15);
        }
        .footer-brand-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }
        .footer-brand-name span { color: #ab8cf5; }
        .footer-brand-dot {
          width: 8px;
          height: 8px;
          background: #ab8cf5;
          border-radius: 50%;
          display: inline-block;
        }
        .footer-tagline {
          font-size: 0.9rem;
          line-height: 1.7;
          color: #a89cc8;
          max-width: 280px;
          margin-bottom: 24px;
        }
        .footer-socials {
          display: flex;
          gap: 12px;
        }
        .social-link {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(171,140,245,0.12);
          border: 1px solid rgba(171,140,245,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ab8cf5;
          font-size: 0.85rem;
          font-weight: 700;
          transition: all 0.2s ease;
        }
        .social-link:hover {
          background: #ab8cf5;
          color: #281750;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(171,140,245,0.35);
        }
        .footer-col-title {
          font-size: 0.8rem;
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
          font-size: 0.9rem;
          color: #a89cc8;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .footer-col-link::before {
          content: '→';
          font-size: 0.75rem;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.2s ease;
        }
        .footer-col-link:hover {
          color: #ffffff;
        }
        .footer-col-link:hover::before {
          opacity: 1;
          transform: translateX(0);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          font-size: 0.82rem;
          color: #6b5f8a;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer-bottom a {
          color: #ab8cf5;
          transition: color 0.2s;
        }
        .footer-bottom a:hover { color: #d8cafa; }
        @media (max-width: 768px) {
          .footer { padding: 48px 20px 0; }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-name">
                <span className="footer-brand-dot" />
                Vector<span>Build</span>
              </div>
              <p className="footer-tagline">
                Engineering excellence through precision precast, structural steel,
                and innovative construction solutions.
              </p>
              <div className="footer-socials">
                <a href="#" className="social-link" aria-label="LinkedIn"><FiLinkedin size={16} /></a>
                <a href="#" className="social-link" aria-label="Twitter"><FiTwitter size={16} /></a>
                <a href="#" className="social-link" aria-label="Facebook"><FiFacebook size={16} /></a>
              </div>
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="footer-col-title">{title}</p>
                <div className="footer-col-links">
                  {links.map((link) => (
                    <Link key={link.label} href={link.href} className="footer-col-link">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} VectorBuild. All rights reserved.</span>
            <span>
              <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
