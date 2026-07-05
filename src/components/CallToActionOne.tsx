"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export default function CallToActionOne() {
  return (
    <>
      <style>{`
        .cta1 {
          position: relative;
          padding: 120px 80px;
          overflow: hidden;
          background: #0a0618;
          text-align: center;
        }
        .cta1::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(171,140,245,0.4), transparent);
        }
        .cta1-mesh {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(171,140,245,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171,140,245,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .cta1-orb-l {
          position: absolute;
          top: 50%; left: -100px;
          transform: translateY(-50%);
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(171,140,245,0.15) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta1-orb-r {
          position: absolute;
          top: 50%; right: -100px;
          transform: translateY(-50%);
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(40,23,80,0.5) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta1-inner {
          position: relative;
          z-index: 1;
          max-width: 680px;
          margin: 0 auto;
        }
        .cta1-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #ab8cf5;
          margin-bottom: 24px;
        }
        .cta1-eyebrow::before, .cta1-eyebrow::after {
          content: '';
          width: 28px; height: 2px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .cta1-title {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -1.5px;
          line-height: 1.05;
          margin-bottom: 20px;
        }
        .cta1-title span {
          background: linear-gradient(135deg, #ab8cf5, #d8cafa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta1-desc {
          font-size: 1.05rem;
          color: rgba(216,202,250,0.6);
          line-height: 1.8;
          margin-bottom: 48px;
        }
        .cta1-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta1-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: #0a0618;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 16px 36px;
          border-radius: 10px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .cta1-btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ab8cf5, #d8cafa);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cta1-btn-primary:hover::before { opacity: 1; }
        .cta1-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(171,140,245,0.4);
        }
        .cta1-btn-primary span, .cta1-btn-primary svg { position: relative; z-index: 1; }
        .cta1-btn-primary:hover svg { transform: translateX(4px); }
        .cta1-btn-primary svg { transition: transform 0.2s ease; }

        .cta1-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(171,140,245,0.1);
          color: #d8cafa;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 16px 32px;
          border-radius: 10px;
          border: 1px solid rgba(171,140,245,0.25);
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .cta1-btn-ghost:hover {
          background: rgba(171,140,245,0.2);
          border-color: rgba(171,140,245,0.5);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(171,140,245,0.2);
        }
        @media (max-width: 640px) {
          .cta1 { padding: 80px 24px; }
          .cta1-actions { flex-direction: column; align-items: center; }
        }
      `}</style>

      <section className="cta1">
        <div className="cta1-mesh" />
        <div className="cta1-orb-l" />
        <div className="cta1-orb-r" />
        <motion.div
          className="cta1-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta1-eyebrow">Start Today</div>
          <h2 className="cta1-title">
            Ready to Start<br /><span>Your Build?</span>
          </h2>
          <p className="cta1-desc">
            Contact our engineering team today for a consultation on your next industrial project.
            We bring the precision you need.
          </p>
          <div className="cta1-actions">
            <Link href="/contact" className="cta1-btn-primary">
              <span>Get a Free Quote</span>
              <FiArrowRight size={16} />
            </Link>
            <Link href="tel:+919876543211" className="cta1-btn-ghost">
              <FiPhone size={16} />
              Call +91 9876543211
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
