"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "10000", suffix: "+", label: "Projects Done" },
  { num: "20",  suffix: "+", label: "Years Active" },
  { num: "₹2",  suffix: "L+", label: "Project Value" },
  { num: "100", suffix: "%", label: "Safety Record" },
];

export default function ProjectsLayout() {
  return (
    <>
      <style>{`
        .pl {
          background: #0a0618;
          padding: 96px 80px 72px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .pl-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(171,140,245,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171,140,245,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .pl-orb {
          position: absolute; top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(171,140,245,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .pl-inner { position: relative; z-index: 1; }
        .pl-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 20px;
        }
        .pl-eyebrow::before, .pl-eyebrow::after {
          content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px;
        }
        .pl-title {
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 900; color: #ffffff;
          letter-spacing: -2px; line-height: 1.0; margin-bottom: 20px;
        }
        .pl-title span {
          background: linear-gradient(135deg, #ab8cf5, #d8cafa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .pl-desc {
          font-size: 1.05rem; color: rgba(216,202,250,0.6);
          max-width: 540px; margin: 0 auto 64px; line-height: 1.8;
        }
        .pl-stats {
          display: grid; grid-template-columns: repeat(4,1fr);
          max-width: 800px; margin: 0 auto;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(171,140,245,0.15);
          border-radius: 16px; overflow: hidden;
        }
        .pl-stat {
          padding: 28px 20px;
          border-right: 1px solid rgba(171,140,245,0.1);
          transition: background 0.3s ease;
          position: relative;
        }
        .pl-stat::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #ab8cf5, transparent);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .pl-stat:hover { background: rgba(171,140,245,0.06); }
        .pl-stat:hover::before { opacity: 1; }
        .pl-stat:last-child { border-right: none; }
        .pl-stat-num {
          font-size: 2rem; font-weight: 900; color: #ffffff;
          line-height: 1; margin-bottom: 6px; letter-spacing: -1px;
        }
        .pl-stat-num span { color: #ab8cf5; }
        .pl-stat-label { font-size: 0.72rem; color: rgba(216,202,250,0.5); font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }
        @media (max-width: 768px) {
          .pl { padding: 72px 24px 56px; }
          .pl-stats { grid-template-columns: repeat(2,1fr); }
          .pl-stat:nth-child(2) { border-right: none; }
          .pl-stat:nth-child(1), .pl-stat:nth-child(2) { border-bottom: 1px solid rgba(171,140,245,0.1); }
        }
      `}</style>
      <section className="pl">
        <div className="pl-grid" />
        <div className="pl-orb" />
        <div className="pl-inner">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="pl-eyebrow">Our Portfolio</div>
            <h1 className="pl-title">Building the <span>Future</span><br />Structure</h1>
            <p className="pl-desc">
              Explore our diverse portfolio of industrial achievements. From massive logistics hubs
              to intricate steel frameworks, we define skylines with precision and strength.
            </p>
          </motion.div>
          <motion.div className="pl-stats" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            {stats.map((s) => (
              <div className="pl-stat" key={s.label}>
                <div className="pl-stat-num">{s.num}<span>{s.suffix}</span></div>
                <div className="pl-stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
