"use client";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiLayers, FiGrid, FiRotateCcw, FiBox, FiHome, FiMonitor, FiLayout } from "react-icons/fi";

const services = [
  { title: "Precast",            sub: "Concrete Detailing",        image: "/pre-cast.png",         href: "/services/precast",          icon: <FiLayers size={14}/>,   col: 1 },
  { title: "Rebar Installation", sub: "Structural Reinforcement",  image: "/reber.png",            href: "/services/rebar",            icon: <FiGrid size={14}/>,     col: 1 },
  { title: "Tilt-Up",           sub: "Shop Drawings & Embeds",    image: "/tilt-up.png",          href: "/services/tilt-up",          icon: <FiRotateCcw size={14}/>, col: 1 },
  { title: "Structural Steel",  sub: "Detailing & Engineering",   image: "/structural-steel.png", href: "/services/structural-steel", icon: <FiBox size={14}/>,      col: 1 },
  { title: "PEMB",              sub: "Pre-Engineered Metal Bldgs",image: "/pemb.png",             href: "/services/pemb",             icon: <FiHome size={14}/>,     col: 2 },
  { title: "BIM Consulting",    sub: "Coordination & Clash Detect",image: "/bim-consulting.png",  href: "/services/bim-consulting",   icon: <FiMonitor size={14}/>,  col: 2 },
  { title: "Forming & Shoring", sub: "Cast-in-Place Concrete",    image: "/forming.png",          href: "/services/forming",          icon: <FiLayout size={14}/>,   col: 1 },
];

export default function AllServices() {
  return (
    <>
      <style>{`
        .svc-page {
          background: #ffffff;
          padding: 88px 48px 100px;
        }

        /* ── Header ── */
        .svc-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .svc-header-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ab8cf5;
          margin-bottom: 14px;
        }
        .svc-header-eyebrow::before,
        .svc-header-eyebrow::after {
          content: '';
          width: 28px;
          height: 1.5px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .svc-header-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0f0824;
          letter-spacing: -0.8px;
          margin-bottom: 14px;
        }
        .svc-header-desc {
          font-size: 1rem;
          color: #6b6b80;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.75;
        }

        /* ── Section label ── */
        .svc-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .svc-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #281750;
        }
        .svc-label::before {
          content: '';
          width: 4px;
          height: 20px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .svc-count {
          font-size: 0.8rem;
          color: #a3a3a3;
          font-weight: 500;
        }

        /* ── Grid ── */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 280px 280px 280px;
          gap: 14px;
        }

        /* Row 1 — 3 equal */
        .svc-grid > :nth-child(1) { grid-column: 1; grid-row: 1; }
        .svc-grid > :nth-child(2) { grid-column: 2; grid-row: 1; }
        .svc-grid > :nth-child(3) { grid-column: 3; grid-row: 1; }
        /* Row 2 — 1 col + 2 col wide */
        .svc-grid > :nth-child(4) { grid-column: 1;   grid-row: 2; }
        .svc-grid > :nth-child(5) { grid-column: 2/4; grid-row: 2; }
        /* Row 3 — 2 col wide + 1 col */
        .svc-grid > :nth-child(6) { grid-column: 1/3; grid-row: 3; }
        .svc-grid > :nth-child(7) { grid-column: 3;   grid-row: 3; }

        /* ── Card ── */
        .svc-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          display: block;
          text-decoration: none;
          background: #0f0824;
        }
        .svc-card-img {
          transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94);
          will-change: transform;
        }
        .svc-card:hover .svc-card-img {
          transform: scale(1.08);
        }

        /* gradient overlay */
        .svc-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(15,8,36,0.08) 0%,
            rgba(15,8,36,0.45) 45%,
            rgba(15,8,36,0.92) 100%
          );
          z-index: 1;
          transition: background 0.35s ease;
        }
        .svc-card:hover .svc-card-overlay {
          background: linear-gradient(
            160deg,
            rgba(40,23,80,0.15) 0%,
            rgba(40,23,80,0.55) 45%,
            rgba(40,23,80,0.96) 100%
          );
        }

        /* top badge */
        .svc-card-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(40,23,80,0.65);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(171,140,245,0.25);
          color: #d8cafa;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 5px 10px;
          border-radius: 100px;
          transition: all 0.25s ease;
        }
        .svc-card:hover .svc-card-badge {
          background: rgba(171,140,245,0.25);
          border-color: rgba(171,140,245,0.5);
          color: #ffffff;
        }

        /* number watermark */
        .svc-card-num {
          position: absolute;
          top: 12px;
          right: 18px;
          z-index: 2;
          font-size: 4.5rem;
          font-weight: 900;
          color: rgba(255,255,255,0.06);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          transition: color 0.3s ease;
        }
        .svc-card:hover .svc-card-num {
          color: rgba(171,140,245,0.12);
        }

        /* bottom content */
        .svc-card-body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
          padding: 20px 22px 22px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
        }
        .svc-card-text {}
        .svc-card-sub {
          font-size: 0.7rem;
          font-weight: 500;
          color: rgba(216,202,250,0.7);
          letter-spacing: 0.5px;
          margin-bottom: 4px;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.25s ease;
        }
        .svc-card:hover .svc-card-sub {
          opacity: 1;
          transform: translateY(0);
        }
        .svc-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 1px 6px rgba(0,0,0,0.4);
          line-height: 1.2;
        }
        .svc-card-btn {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.25s ease;
          transform: rotate(0deg);
        }
        .svc-card:hover .svc-card-btn {
          background: #ab8cf5;
          border-color: #ab8cf5;
          color: #281750;
          transform: rotate(45deg);
        }

        /* bottom CTA strip */
        .svc-cta-strip {
          margin-top: 48px;
          background: #f9f8ff;
          border: 1px solid #ede9ff;
          border-radius: 16px;
          padding: 28px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .svc-cta-strip-text {
          font-size: 1rem;
          font-weight: 600;
          color: #0f0824;
        }
        .svc-cta-strip-sub {
          font-size: 0.85rem;
          color: #6b6b80;
          margin-top: 3px;
        }
        .svc-cta-strip-btn {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #281750;
          color: #ffffff;
          font-size: 0.88rem;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 10px;
          transition: all 0.22s ease;
          white-space: nowrap;
        }
        .svc-cta-strip-btn:hover {
          background: #ab8cf5;
          color: #281750;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(171,140,245,0.35);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .svc-page { padding: 64px 24px 80px; }
          .svc-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, 240px);
          }
          .svc-grid > :nth-child(1) { grid-column: 1;   grid-row: 1; }
          .svc-grid > :nth-child(2) { grid-column: 2;   grid-row: 1; }
          .svc-grid > :nth-child(3) { grid-column: 1;   grid-row: 2; }
          .svc-grid > :nth-child(4) { grid-column: 2;   grid-row: 2; }
          .svc-grid > :nth-child(5) { grid-column: 1/3; grid-row: 3; }
          .svc-grid > :nth-child(6) { grid-column: 1/3; grid-row: 4; }
          .svc-grid > :nth-child(7) { grid-column: 1/3; grid-row: 5; }
          .svc-cta-strip { flex-direction: column; text-align: center; }
        }
        @media (max-width: 560px) {
          .svc-page { padding: 48px 16px 64px; }
          .svc-grid {
            grid-template-columns: 1fr;
            grid-template-rows: unset;
          }
          .svc-grid > * {
            grid-column: unset !important;
            grid-row: unset !important;
            height: 220px;
          }
        }
      `}</style>

      <section className="svc-page">
        {/* Header */}
        <div className="svc-header">
          <div className="svc-header-eyebrow">What We Do</div>
          <h1 className="svc-header-title">Our Engineering Services</h1>
          <p className="svc-header-desc">
            The architects, engineers, and project managers building the future with precision.
            We combine technical excellence with unwavering dedication.
          </p>
        </div>

        {/* Label row */}
        <div className="svc-label-row">
          <div className="svc-label">All Services</div>
          <span className="svc-count">{services.length} services</span>
        </div>

        {/* Grid */}
        <div className="svc-grid">
          {services.map((svc, i) => (
            <Link key={svc.title} href={svc.href} className="svc-card">
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="svc-card-img"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw"
              />
              <div className="svc-card-overlay" />
              <div className="svc-card-badge">{svc.icon} {svc.sub}</div>
              <div className="svc-card-num">0{i + 1}</div>
              <div className="svc-card-body">
                <div className="svc-card-text">
                  <div className="svc-card-sub">{svc.sub}</div>
                  <div className="svc-card-title">{svc.title}</div>
                </div>
                <div className="svc-card-btn">
                  <FiArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="svc-cta-strip">
          <div>
            <div className="svc-cta-strip-text">Need a custom engineering solution?</div>
            <div className="svc-cta-strip-sub">Talk to our team about your specific project requirements.</div>
          </div>
          <Link href="/contact" className="svc-cta-strip-btn">
            Get a Free Consultation <FiArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
