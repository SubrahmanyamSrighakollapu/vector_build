"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiFolder } from "react-icons/fi";

export default function CallToActionTwo() {
  return (
    <>
      <style>{`
        .cta2 {
          background: #f9f8ff;
          padding: 100px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #ede9ff;
        }
        .cta2::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(171,140,245,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta2-inner {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto;
        }
        .cta2-eyebrow {
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
        .cta2-eyebrow::before, .cta2-eyebrow::after {
          content: '';
          width: 24px; height: 2px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .cta2-title {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 900;
          color: #0a0618;
          letter-spacing: -1px;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .cta2-title span { color: #281750; }
        .cta2-desc {
          font-size: 1rem;
          color: #525252;
          line-height: 1.8;
          margin-bottom: 40px;
        }
        .cta2-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta2-btn-dark {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0a0618;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .cta2-btn-dark:hover {
          background: #281750;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(40,23,80,0.25);
        }
        .cta2-btn-dark svg { transition: transform 0.2s ease; }
        .cta2-btn-dark:hover svg { transform: translateX(3px); }
        .cta2-btn-light {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(171,140,245,0.1);
          color: #281750;
          font-size: 0.92rem;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 10px;
          border: 1.5px solid rgba(171,140,245,0.3);
          transition: all 0.3s ease;
        }
        .cta2-btn-light:hover {
          background: #ab8cf5;
          color: #0a0618;
          border-color: #ab8cf5;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(171,140,245,0.3);
        }
        @media (max-width: 640px) {
          .cta2 { padding: 72px 24px; }
          .cta2-actions { flex-direction: column; align-items: center; }
        }
      `}</style>

      <section className="cta2">
        <motion.div
          className="cta2-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="cta2-eyebrow">Next Steps</div>
          <h2 className="cta2-title">Ready to Start Your<br /><span>Next Project?</span></h2>
          <p className="cta2-desc">
            Discover why leading industrial companies trust Build Right Tech for their most
            critical infrastructure needs.
          </p>
          <div className="cta2-actions">
            <Link href="/contact" className="cta2-btn-dark">
              Start a Conversation <FiArrowRight size={15} />
            </Link>
            <Link href="/projects" className="cta2-btn-light">
              <FiFolder size={15} /> View Projects
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
