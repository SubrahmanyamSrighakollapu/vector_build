"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #281750;
          box-shadow: 0 2px 20px rgba(40,23,80,0.18);
        }
        .header-inner {
          width: 100%;
          padding: 0 48px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .logo span {
          color: #ab8cf5;
        }
        .logo-dot {
          width: 8px;
          height: 8px;
          background: #ab8cf5;
          border-radius: 50%;
          display: inline-block;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 4px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .header-right {
          display: flex;
          align-items: center;
          margin-left: auto;
        }
        .nav-link {
          color: #d8cafa;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 8px;
          transition: all 0.2s ease;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: #ab8cf5;
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.2s ease;
        }
        .nav-link:hover {
          color: #ffffff;
          background: rgba(171,140,245,0.12);
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        .nav-cta {
          background: #ab8cf5;
          color: #281750 !important;
          font-weight: 700;
          padding: 9px 20px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .nav-cta::after { display: none; }
        .nav-cta:hover {
          background: #d8cafa !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(171,140,245,0.4);
        }
        .hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 6px;
          border: none;
          background: transparent;
        }
        .mobile-nav {
          display: none;
          flex-direction: column;
          background: #1e1040;
          padding: 12px 24px 20px;
          border-top: 1px solid rgba(171,140,245,0.15);
        }
        .mobile-nav.open {
          display: flex;
        }
        .mobile-nav-link {
          color: #d8cafa;
          font-size: 1rem;
          font-weight: 500;
          padding: 12px 0;
          border-bottom: 1px solid rgba(171,140,245,0.1);
          transition: color 0.2s ease;
        }
        .mobile-nav-link:last-child {
          border-bottom: none;
        }
        .mobile-nav-link:hover {
          color: #ab8cf5;
        }
        @media (max-width: 1024px) {
          .nav { position: static; transform: none; }
          .header-right { margin-left: 0; }
        }
        @media (max-width: 768px) {
          .header-inner { padding: 0 20px; }
          .nav { display: none; }
          .header-right { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">
            <span className="logo-dot" />
            Vector<span>Build</span>
          </Link>
          <nav className="nav">
            {navLinks
              .filter((l) => l.label !== "Contact")
              .map((link) => (
                <Link key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
          </nav>
          <div className="header-right">
            <Link href="/contact" className="nav-link nav-cta">Contact</Link>
          </div>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} color="#d8cafa" /> : <FiMenu size={22} color="#d8cafa" />}
          </button>
        </div>
        <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
