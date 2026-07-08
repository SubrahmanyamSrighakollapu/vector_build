"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const highlights = [
  "20+ years of industrial construction expertise",
  "Zero-compromise safety protocols on every site",
  "Cutting-edge BIM & prefabrication technology",
  "Trusted by Fortune 500 industrial clients",
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" as const } },
});

export default function WhoWeAre() {
  return (
    <>
      <style>{`
        .wwa {
          padding: 120px 80px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .wwa::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(171,140,245,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .wwa-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 96px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .wwa-eyebrow {
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
        .wwa-eyebrow::before {
          content: '';
          width: 28px;
          height: 2px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .wwa-heading {
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 900;
          color: #0a0618;
          margin-bottom: 20px;
          line-height: 1.1;
          letter-spacing: -1px;
        }
        .wwa-heading em {
          font-style: normal;
          color: #281750;
          position: relative;
        }
        .wwa-text {
          font-size: 1rem;
          color: #525252;
          line-height: 1.85;
          margin-bottom: 36px;
        }
        .wwa-highlights {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 40px;
        }
        .wwa-highlight {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: #262626;
          font-weight: 500;
        }
        .wwa-highlight svg { color: #ab8cf5; flex-shrink: 0; }
        .wwa-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .wwa-stat {
          background: #0a0618;
          border-radius: 14px;
          padding: 24px 22px;
          position: relative;
          overflow: hidden;
        }
        .wwa-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #ab8cf5, transparent);
        }
        .wwa-stat-num {
          font-size: 2.2rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 6px;
          letter-spacing: -1px;
        }
        .wwa-stat-num span { color: #ab8cf5; }
        .wwa-stat-label {
          font-size: 0.78rem;
          color: rgba(216,202,250,0.6);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Image side */
        .wwa-img-wrap {
          position: relative;
        }
        .wwa-img-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 4/5;
          box-shadow: 0 40px 80px rgba(40,23,80,0.2);
        }
        .wwa-img-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(10,6,24,0.4) 100%);
          z-index: 1;
        }
        .wwa-img-accent {
          position: absolute;
          top: -16px;
          right: -16px;
          width: 120px;
          height: 120px;
          border: 2px solid rgba(171,140,245,0.3);
          border-radius: 20px;
          z-index: 0;
        }
        .wwa-img-accent-2 {
          position: absolute;
          bottom: -16px;
          left: -16px;
          width: 80px;
          height: 80px;
          background: rgba(171,140,245,0.08);
          border: 1px solid rgba(171,140,245,0.2);
          border-radius: 14px;
          z-index: 0;
        }
        .wwa-img-badge {
          position: absolute;
          bottom: 28px;
          left: 28px;
          z-index: 3;
          background: rgba(10,6,24,0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(171,140,245,0.25);
          border-radius: 12px;
          padding: 14px 20px;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .wwa-badge-dot {
          width: 8px; height: 8px;
          background: #ab8cf5;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(171,140,245,0.8);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(1.5); }
        }
        .wwa-img-tag {
          position: absolute;
          top: 28px;
          right: -20px;
          z-index: 3;
          background: #ab8cf5;
          color: #0a0618;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 10px 16px;
          border-radius: 10px;
          writing-mode: vertical-rl;
          letter-spacing: 2px;
          text-transform: uppercase;
          box-shadow: 0 8px 24px rgba(171,140,245,0.4);
        }

        @media (max-width: 1024px) {
          .wwa { padding: 80px 48px; }
          .wwa-inner { gap: 60px; }
        }
        @media (max-width: 900px) {
          .wwa { padding: 72px 24px; }
          .wwa-inner { grid-template-columns: 1fr; gap: 56px; }
          .wwa-img-frame { aspect-ratio: 16/9; }
          .wwa-img-tag { display: none; }
        }
      `}</style>

      <section className="wwa">
        <div className="wwa-inner">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp(0)} className="wwa-eyebrow">Who We Are</motion.div>
            <motion.h2 variants={fadeUp(0.1)} className="wwa-heading">
              The <em>Vector</em> Standard of Engineering
            </motion.h2>
            <motion.p variants={fadeUp(0.2)} className="wwa-text">
              At Build Right Tech, we don&apos;t just construct buildings — we engineer legacy. With over two
              decades of experience in heavy industrial sectors, our team brings militant attention
              to detail to every beam laid and every foundation poured.
            </motion.p>
            <motion.div variants={fadeUp(0.3)} className="wwa-highlights">
              {highlights.map((h) => (
                <div className="wwa-highlight" key={h}>
                  <FiCheckCircle size={16} />
                  {h}
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp(0.4)} className="wwa-stats">
              <div className="wwa-stat">
                <div className="wwa-stat-num">20000<span>+</span></div>
                <div className="wwa-stat-label">Projects Completed</div>
              </div>
              <div className="wwa-stat">
                <div className="wwa-stat-num">100<span>%</span></div>
                <div className="wwa-stat-label">Safety Record</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="wwa-img-wrap"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="wwa-img-accent" />
            <div className="wwa-img-accent-2" />
            <motion.div
              className="wwa-img-frame"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/about-image.png"
                alt="Build Right Tech engineering team"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
            </motion.div>
            <div className="wwa-img-badge">
              <span className="wwa-badge-dot" />
              20+ Years of Engineering Excellence
            </div>
            <div className="wwa-img-tag">Est. 1985</div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
