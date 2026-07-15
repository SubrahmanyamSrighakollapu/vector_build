"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  // { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return normalizedPath === "/";
    }

    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .hdr {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.94);
          transition: background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          border-bottom: 1px solid rgba(40,23,80,0.08);
          box-shadow: 0 8px 30px rgba(40,23,80,0.06);
        }
        .hdr.scrolled {
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border-bottom: 1px solid rgba(40,23,80,0.12);
          box-shadow: 0 10px 36px rgba(40,23,80,0.12);
        }

        /* Top info bar — hidden when scrolled */
        .hdr-topbar {
          background: linear-gradient(90deg, rgba(255,255,255,0.92), rgba(244,239,255,0.9));
          border-bottom: 1px solid rgba(171,140,245,0.14);
          padding: 5px 48px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 24px;
          overflow: hidden;
          max-height: 32px;
          transition: max-height 0.35s ease, opacity 0.35s ease, padding 0.35s ease;
          opacity: 1;
        }
        .hdr.scrolled .hdr-topbar {
          max-height: 0;
          opacity: 0;
          padding-top: 0;
          padding-bottom: 0;
        }
        .hdr-topbar-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          color: rgba(40,23,80,0.64);
          font-weight: 600;
          letter-spacing: 0.3px;
          white-space: nowrap;
        }
        .hdr-topbar-dot {
          width: 4px; height: 4px;
          background: #ab8cf5;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Main nav row */
        .hdr-inner {
          padding: 0 48px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .hdr-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* Centered nav */
        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 2px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .hdr-link {
          position: relative;
          color: rgba(40,23,80,0.72);
          font-size: 0.875rem;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }
        .hdr-link:hover {
          color: #281750;
          background: rgba(171,140,245,0.12);
        }
        .hdr-link.active { color: #281750; }
        .hdr-active-pill {
          position: absolute;
          bottom: 3px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: #ab8cf5;
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(171,140,245,0.7);
        }

        /* Right CTA */
        .hdr-right { display: flex; align-items: center; flex-shrink: 0; }
        .hdr-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ab8cf5;
          color: #0a0618;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 9px 20px;
          border-radius: 8px;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .hdr-cta:hover {
          background: #d8cafa;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(171,140,245,0.4);
        }
        .hdr-cta svg { transition: transform 0.2s ease; }
        .hdr-cta:hover svg { transform: translateX(3px); }

        /* Hamburger */
        .hdr-hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 8px;
          background: rgba(171,140,245,0.1);
          border: 1px solid rgba(171,140,245,0.16);
          cursor: pointer;
          color: #281750;
          flex-shrink: 0;
        }

        /* Spacer so content doesn't hide under fixed header */
        .hdr-spacer { height: 64px; }

        /* Full-screen mobile menu */
        .hdr-mobile-overlay {
          position: fixed;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(244,239,255,0.96));
          backdrop-filter: blur(24px);
          z-index: 1100;
          display: flex;
          flex-direction: column;
          padding: 0 32px 48px;
        }
        .hdr-mobile-top {
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(171,140,245,0.16);
          margin-bottom: 32px;
          flex-shrink: 0;
        }
        .hdr-mobile-close {
          width: 40px; height: 40px;
          border-radius: 8px;
          background: rgba(171,140,245,0.1);
          border: 1px solid rgba(171,140,245,0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #281750;
          cursor: pointer;
        }
        .hdr-mobile-links { flex: 1; display: flex; flex-direction: column; }
        .hdr-mobile-link {
          font-size: 2rem;
          font-weight: 800;
          color: rgba(40,23,80,0.42);
          padding: 14px 0;
          border-bottom: 1px solid rgba(171,140,245,0.1);
          transition: color 0.2s ease;
          letter-spacing: -0.5px;
          display: block;
        }
        .hdr-mobile-link:hover,
        .hdr-mobile-link.active { color: #281750; }
        .hdr-mobile-link.active { color: #ab8cf5; }
        .hdr-mobile-cta {
          margin-top: 32px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ab8cf5;
          color: #0a0618;
          font-size: 1rem;
          font-weight: 700;
          padding: 16px 28px;
          border-radius: 12px;
          align-self: flex-start;
        }

        @media (max-width: 1100px) {
          .hdr-nav { position: static; transform: none; }
        }
        @media (max-width: 768px) {
          .hdr-inner { padding: 0 20px; }
          .hdr-topbar { padding-left: 20px; padding-right: 20px; }
          .hdr-nav { display: none; }
          .hdr-right { display: none; }
          .hdr-hamburger { display: flex; }
        }
      `}</style>

      <header className={`hdr${scrolled ? " scrolled" : ""}`}>
        {/* <div className="hdr-topbar">
          <span className="hdr-topbar-item"><span className="hdr-topbar-dot" />+1 4698289888</span>
          <span className="hdr-topbar-item"><span className="hdr-topbar-dot" />Sales@buildrighttec.com</span>
        </div> */}
        <div className="hdr-inner">
          <Link href="/" className="hdr-logo">
            <Image
              src="/buildright-tech-logo.png"
              alt="Build Right Tech"
              width={150}
              height={36}
              style={{ height: 135, width: "auto", objectFit: "contain" }}
              priority
            />
          </Link>

          <nav className="hdr-nav">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hdr-link${active ? " active" : ""}`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      className="hdr-active-pill"
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* <div className="hdr-right">
            <Link href="/contact" className="hdr-cta">
              Contact <FiArrowRight size={14} />
            </Link>
          </div> */}

          <button
            className="hdr-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={20} />
          </button>
        </div>
      </header>

      <div className="hdr-spacer" />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="hdr-mobile-overlay"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="hdr-mobile-top">
              <Link href="/" className="hdr-logo" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/buildright-tech-logo.png"
                  alt="Build Right Tech"
                  width={120}
                  height={32}
                  style={{ height: 32, width: "auto", objectFit: "contain" }}
                />
              </Link>
              <button className="hdr-mobile-close" onClick={() => setMenuOpen(false)}>
                <FiX size={20} />
              </button>
            </div>

            <div className="hdr-mobile-links">
              {navLinks.map((link, i) => {
                const active = isActiveLink(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`hdr-mobile-link${active ? " active" : ""}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Link href="/contact" className="hdr-mobile-cta" onClick={() => setMenuOpen(false)}>
                Contact Us <FiArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
