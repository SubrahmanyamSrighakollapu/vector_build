"use client";
import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";

export default function OurMission() {
  return (
    <>
      <style>{`
        .mission {
          background: linear-gradient(135deg, #281750 0%, #1a0e38 50%, #0f0824 100%);
          padding: 120px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .mission::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(171,140,245,0.4), transparent);
        }
        .mission-orb {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(171,140,245,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .mission-inner {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }
        .mission-icon {
          width: 56px; height: 56px;
          border-radius: 16px;
          background: rgba(171,140,245,0.12);
          border: 1px solid rgba(171,140,245,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ab8cf5;
          margin: 0 auto 28px;
        }
        .mission-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #ab8cf5;
          margin-bottom: 32px;
        }
        .mission-quote {
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.55;
          letter-spacing: -0.5px;
        }
        .mission-quote-mark {
          color: #ab8cf5;
          font-size: 1.3em;
          line-height: 0;
          vertical-align: -0.2em;
        }
        .mission-divider {
          width: 60px; height: 2px;
          background: linear-gradient(90deg, #ab8cf5, transparent);
          margin: 40px auto 0;
          border-radius: 2px;
        }
        @media (max-width: 640px) {
          .mission { padding: 80px 24px; }
        }
      `}</style>

      <section className="mission">
        <div className="mission-orb" />
        <motion.div
          className="mission-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mission-icon"><FiTarget size={24} /></div>
          <div className="mission-label">Our Mission</div>
          <p className="mission-quote">
            <span className="mission-quote-mark">&ldquo;</span>
            To be the premier partner for complex industrial infrastructure, delivering
            excellence through precision and partnership.
            <span className="mission-quote-mark">&rdquo;</span>
          </p>
          <div className="mission-divider" />
        </motion.div>
      </section>
    </>
  );
}
