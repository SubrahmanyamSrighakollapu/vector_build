"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiLayers, FiGrid, FiRotateCcw } from "react-icons/fi";

const services = [
  { title: "Precast", sub: "Concrete Detailing", image: "/pre-cast.png", href: "/services/precast", icon: <FiLayers size={16} />, num: "01" },
  { title: "Tilt-Up", sub: "Shop Drawings & Embeds", image: "/tilt-up.png", href: "/services/tilt-up", icon: <FiRotateCcw size={16} />, num: "02" },
  { title: "Mini/Self Storages", sub: "Detailing & Coordinated Models", image: "/mini-self-storages.png", href: "/services/mini-self-storages", icon: <FiGrid size={16} />, num: "03" },
];

export default function AllServices() {
  return (
    <>
      <style>{`
        .svc { background: #0a0618; }

        /* Hero */
        .svc-hero {
          padding: 96px 80px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .svc-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(171,140,245,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171,140,245,0.05) 1px, transparent 1px);
          background-size: 60px 60px; pointer-events: none;
        }
        .svc-hero-orb {
          position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 400px;
          background: radial-gradient(ellipse, rgba(171,140,245,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .svc-hero-inner { position: relative; z-index: 1; }
        .svc-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 20px;
        }
        .svc-eyebrow::before, .svc-eyebrow::after {
          content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px;
        }
        .svc-hero-title {
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 900; color: #ffffff;
          letter-spacing: -2px; line-height: 1.0; margin-bottom: 20px;
        }
        .svc-hero-title span {
          background: linear-gradient(135deg, #ab8cf5, #d8cafa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .svc-hero-desc {
          font-size: 1.05rem; color: rgba(216,202,250,0.6);
          max-width: 520px; margin: 0 auto; line-height: 1.8;
        }

        /* Grid section */
        .svc-body {
          background: #f9f8ff;
          padding: 80px 80px 100px;
        }
        .svc-label-row {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 28px;
        }
        .svc-label {
          display: flex; align-items: center; gap: 12px;
          font-size: 1rem; font-weight: 700; color: #0a0618;
        }
        .svc-label-bar {
          width: 4px; height: 22px;
          background: linear-gradient(180deg, #ab8cf5, #281750);
          border-radius: 4px;
        }
        .svc-count {
          font-size: 0.78rem; color: #a3a3a3; font-weight: 500;
          background: #f0eeff; padding: 4px 14px; border-radius: 100px;
        }

        /* Bento grid */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-template-rows: 300px 300px;
          gap: 14px;
        }
        .svc-grid > :nth-child(1) { grid-column: 1; grid-row: 1; }
        .svc-grid > :nth-child(2) { grid-column: 2; grid-row: 1; }
        .svc-grid > :nth-child(3) { grid-column: 1 / 3; grid-row: 2; }

        .svc-card {
          position: relative; border-radius: 16px; overflow: hidden;
          display: block; background: #0a0618;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .svc-card:hover {
          transform: scale(1.015);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(171,140,245,0.3);
        }
        .svc-card-img { transition: transform 0.6s ease; will-change: transform; }
        .svc-card:hover .svc-card-img { transform: scale(1.08); }
        .svc-card-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(160deg, rgba(10,6,24,0.05) 0%, rgba(10,6,24,0.4) 45%, rgba(10,6,24,0.92) 100%);
          transition: background 0.35s ease;
        }
        .svc-card:hover .svc-card-overlay {
          background: linear-gradient(160deg, rgba(40,23,80,0.1) 0%, rgba(40,23,80,0.5) 45%, rgba(40,23,80,0.95) 100%);
        }

        /* Glass badge top-left */
        .svc-card-badge {
          position: absolute; top: 14px; left: 14px; z-index: 3;
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(10,6,24,0.55);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(171,140,245,0.2);
          color: #d8cafa; font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.5px; padding: 5px 10px; border-radius: 100px;
          transition: all 0.25s ease;
        }
        .svc-card:hover .svc-card-badge {
          background: rgba(171,140,245,0.2);
          border-color: rgba(171,140,245,0.5); color: #fff;
        }

        .svc-card-num {
          position: absolute; top: 10px; right: 16px; z-index: 2;
          font-size: 5rem; font-weight: 900;
          color: rgba(255,255,255,0.05); line-height: 1;
          pointer-events: none; user-select: none;
          transition: color 0.3s ease;
        }
        .svc-card:hover .svc-card-num { color: rgba(171,140,245,0.1); }

        .svc-card-body {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 3;
          padding: 18px 20px 20px;
          display: flex; align-items: flex-end; justify-content: space-between; gap: 12px;
        }
        .svc-card-sub {
          font-size: 0.68rem; font-weight: 500; color: rgba(216,202,250,0.65);
          letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 4px;
          opacity: 0; transform: translateY(6px); transition: all 0.25s ease;
        }
        .svc-card:hover .svc-card-sub { opacity: 1; transform: translateY(0); }
        .svc-card-title {
          font-size: 1.1rem; font-weight: 700; color: #fff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5); line-height: 1.2;
        }
        .svc-card-btn {
          flex-shrink: 0; width: 38px; height: 38px; border-radius: 10px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          color: #fff; transition: all 0.25s ease;
        }
        .svc-card:hover .svc-card-btn {
          background: #ab8cf5; border-color: #ab8cf5; color: #0a0618;
          transform: rotate(45deg);
        }

        /* CTA strip */
        .svc-cta {
          margin-top: 48px;
          background: #0a0618;
          border-radius: 16px;
          padding: 32px 40px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          border: 1px solid rgba(171,140,245,0.15);
          position: relative; overflow: hidden;
        }
        .svc-cta::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(171,140,245,0.4), transparent);
        }
        .svc-cta-text { font-size: 1.05rem; font-weight: 700; color: #fff; }
        .svc-cta-sub { font-size: 0.85rem; color: rgba(216,202,250,0.55); margin-top: 4px; }
        .svc-cta-btn {
          flex-shrink: 0;
          display: inline-flex; align-items: center; gap: 8px;
          background: #ab8cf5; color: #0a0618;
          font-size: 0.9rem; font-weight: 700;
          padding: 13px 28px; border-radius: 10px;
          transition: all 0.25s ease; white-space: nowrap;
        }
        .svc-cta-btn:hover {
          background: #d8cafa; transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(171,140,245,0.4);
        }
        .svc-cta-btn svg { transition: transform 0.2s ease; }
        .svc-cta-btn:hover svg { transform: translateX(3px); }

        @media (max-width: 1024px) {
          .svc-hero { padding: 72px 48px 64px; }
          .svc-body { padding: 64px 48px 80px; }
          .svc-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: 260px 260px; }
          .svc-grid > :nth-child(1) { grid-column:1; grid-row:1; }
          .svc-grid > :nth-child(2) { grid-column:2; grid-row:1; }
          .svc-grid > :nth-child(3) { grid-column:1/3; grid-row:2; }
          .svc-cta { flex-direction: column; text-align: center; }
        }
        @media (max-width: 640px) {
          .svc-hero { padding: 64px 24px 48px; }
          .svc-body { padding: 48px 20px 64px; }
          .svc-grid { grid-template-columns:1fr; grid-template-rows: unset; }
          .svc-grid > * { grid-column: unset !important; grid-row: unset !important; height: 240px; }
        }
      `}</style>

      <div className="svc">
        {/* Dark hero */}
        <section className="svc-hero">
          <div className="svc-hero-grid" />
          <div className="svc-hero-orb" />
          <motion.div
            className="svc-hero-inner"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="svc-eyebrow">What We Do</div>
            <h1 className="svc-hero-title">
              Our Engineering<br /><span>Services</span>
            </h1>
            <p className="svc-hero-desc">
              Comprehensive industrial construction services built on precision, technology,
              and decades of field-proven expertise.
            </p>
          </motion.div>
        </section>

        {/* Light grid body */}
        <section className="svc-body">
          <div className="svc-label-row">
            <div className="svc-label">
              <div className="svc-label-bar" />
              All Services
            </div>
            <span className="svc-count">{services.length} services</span>
          </div>

          <motion.div
            className="svc-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link href={svc.href} className="svc-card" style={{ display: "block", height: "100%" }}>
                  <Image
                    src={svc.image} alt={svc.title} fill
                    className="svc-card-img"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div className="svc-card-overlay" />
                  <div className="svc-card-badge">{svc.icon} {svc.sub}</div>
                  <div className="svc-card-num">{svc.num}</div>
                  <div className="svc-card-body">
                    <div>
                      <div className="svc-card-sub">{svc.sub}</div>
                      <div className="svc-card-title">{svc.title}</div>
                    </div>
                    <div className="svc-card-btn"><FiArrowUpRight size={16} /></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="svc-cta"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="svc-cta-text">Need a custom engineering solution?</div>
              <div className="svc-cta-sub">Talk to our team about your specific project requirements.</div>
            </div>
            <Link href="/contact" className="svc-cta-btn">
              Get a Free Consultation <FiArrowUpRight size={15} />
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}

