"use client";
import { motion } from "framer-motion";
import { FiShield, FiCheckCircle, FiZap, FiStar } from "react-icons/fi";

const values = [
  { icon: <FiShield size={22} />, color: "#ef4444", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.2)", title: "Safety First", desc: "We operate with a zero-compromise approach to safety. Every site, every person returns home safe. It is the bedrock of our operational excellence." },
  { icon: <FiCheckCircle size={22} />, color: "#22c55e", bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.2)", title: "Integrity", desc: "Transparent communication and honest delivery are non-negotiable. We build trust as carefully as we build structures, honoring every commitment." },
  { icon: <FiZap size={22} />, color: "#ab8cf5", bg: "rgba(171,140,245,0.1)", border: "rgba(171,140,245,0.2)", title: "Innovation", desc: "We embrace modern methodologies like BIM and modular construction to reduce waste, accelerate timelines, and improve precision in every phase." },
  { icon: <FiStar size={22} />, color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)", title: "Client Success", desc: "Your vision is our blueprint. We measure success not just by build quality, but by the long-term value it generates for your business operations." },
];

export default function CoreValues() {
  return (
    <>
      <style>{`
        .cv {
          padding: 120px 80px;
          background: #0f0824;
          position: relative;
          overflow: hidden;
        }
        .cv::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(171,140,245,0.3), transparent);
        }
        .cv-glow {
          position: absolute;
          bottom: -100px; left: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(171,140,245,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .cv-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }
        .cv-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: end;
          margin-bottom: 64px;
        }
        .cv-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #ab8cf5;
          margin-bottom: 16px;
        }
        .cv-eyebrow::before {
          content: '';
          width: 28px; height: 2px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .cv-title {
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -1px;
          line-height: 1.1;
        }
        .cv-title span { color: #ab8cf5; }
        .cv-desc {
          font-size: 1rem;
          color: rgba(216,202,250,0.55);
          line-height: 1.8;
          align-self: end;
        }
        .cv-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .cv-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(171,140,245,0.1);
          border-radius: 16px;
          padding: 36px 32px;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .cv-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .cv-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(171,140,245,0.2);
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.3);
        }
        .cv-card:hover::after { opacity: 1; }
        .cv-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }
        .cv-card:hover .cv-icon {
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          transform: scale(1.05);
        }
        .cv-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .cv-card-desc {
          font-size: 0.88rem;
          color: rgba(216,202,250,0.55);
          line-height: 1.8;
        }
        @media (max-width: 900px) {
          .cv { padding: 80px 48px; }
          .cv-header { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (max-width: 640px) {
          .cv { padding: 64px 24px; }
          .cv-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="cv">
        <div className="cv-glow" />
        <div className="cv-inner">
          <motion.div
            className="cv-header"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <div className="cv-eyebrow">Our Foundation</div>
              <h2 className="cv-title">Core <span>Values</span></h2>
            </div>
            <p className="cv-desc">
              The pillars that support every decision we make and every structure we build.
              These principles guide our teams from blueprint to completion.
            </p>
          </motion.div>

          <div className="cv-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="cv-card"
                style={{ "--accent": v.color } as React.CSSProperties}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className="cv-icon"
                  style={{ background: v.bg, border: `1px solid ${v.border}`, color: v.color }}
                >
                  {v.icon}
                </div>
                <div className="cv-card-title">{v.title}</div>
                <p className="cv-card-desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
