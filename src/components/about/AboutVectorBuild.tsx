"use client";
import { motion } from "framer-motion";
import { FiAward, FiTrendingUp, FiDollarSign, FiShield } from "react-icons/fi";

const stats = [
  { icon: <FiAward size={20} />, num: "20+", label: "Years Experience" },
  { icon: <FiTrendingUp size={20} />, num: "20000+", label: "Projects Delivered" },
  { icon: <FiDollarSign size={20} />, num: "$20M+", label: "Project Value" },
  { icon: <FiShield size={20} />, num: "100%", label: "Safety Record" },
];

export default function AboutBuildRightTech() {
  return (
    <>
      <style>{`
        .avb {
          position: relative;
          background: #0a0618;
          overflow: hidden;
          padding: 100px 80px 80px;
          text-align: center;
        }
        .avb-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(171,140,245,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171,140,245,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .avb-orb {
          position: absolute;
          top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 400px;
          background: radial-gradient(ellipse, rgba(171,140,245,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .avb-inner { position: relative; z-index: 1; }
        .avb-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(171,140,245,0.1);
          border: 1px solid rgba(171,140,245,0.25);
          color: #d8cafa;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .avb-badge-dot {
          width: 6px; height: 6px;
          background: #ab8cf5;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(171,140,245,0.8);
          animation: avb-pulse 2s infinite;
        }
        @keyframes avb-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(1.5); }
        }
        .avb-title {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -1.5px;
          line-height: 1.05;
        }
        .avb-title span {
          background: linear-gradient(135deg, #ab8cf5, #d8cafa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .avb-desc {
          font-size: 1.05rem;
          color: rgba(216,202,250,0.6);
          max-width: 520px;
          margin: 0 auto 64px;
          line-height: 1.8;
        }
        .avb-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 900px;
          margin: 0 auto;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(171,140,245,0.15);
          border-radius: 20px;
          overflow: hidden;
        }
        .avb-stat {
          padding: 36px 24px;
          border-right: 1px solid rgba(171,140,245,0.1);
          transition: background 0.3s ease;
          position: relative;
        }
        .avb-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #ab8cf5, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .avb-stat:hover { background: rgba(171,140,245,0.06); }
        .avb-stat:hover::before { opacity: 1; }
        .avb-stat:last-child { border-right: none; }
        .avb-stat-icon {
          color: #ab8cf5;
          margin-bottom: 12px;
          display: flex;
          justify-content: center;
        }
        .avb-stat-num {
          font-size: 2.2rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }
        .avb-stat-label {
          font-size: 0.75rem;
          color: rgba(216,202,250,0.5);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        @media (max-width: 900px) {
          .avb { padding: 80px 48px 64px; }
          .avb-stats { grid-template-columns: 1fr 1fr; }
          .avb-stat:nth-child(2) { border-right: none; }
          .avb-stat:nth-child(1),
          .avb-stat:nth-child(2) { border-bottom: 1px solid rgba(171,140,245,0.1); }
        }
        @media (max-width: 480px) {
          .avb { padding: 64px 24px 48px; }
        }
      `}</style>

      <section className="avb">
        <div className="avb-grid" />
        <div className="avb-orb" />
        <div className="avb-inner">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="avb-badge">
              <span className="avb-badge-dot" />
              Established 1985
            </div>
            <h1 className="avb-title">
              About <span>Build Right Tech</span>
            </h1>
            <p className="avb-desc">
              Engineering &amp; Construction at Scale. We build the industrial infrastructure
              that powers the modern world.
            </p>
          </motion.div>

          <motion.div
            className="avb-stats"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {stats.map((s) => (
              <div className="avb-stat" key={s.label}>
                <div className="avb-stat-icon">{s.icon}</div>
                <div className="avb-stat-num">{s.num}</div>
                <div className="avb-stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
