import { FiAward, FiTrendingUp, FiDollarSign, FiShield } from "react-icons/fi";

const stats = [
  { icon: <FiAward size={18} />, num: "38+", label: "Years Experience" },
  { icon: <FiTrendingUp size={18} />, num: "20+", label: "Projects Delivered" },
  { icon: <FiDollarSign size={18} />, num: "₹ 2L", label: "Project Value" },
  { icon: <FiShield size={18} />, num: "100%", label: "Safety Record" },
];

export default function AboutVectorBuild() {
  return (
    <>
      <style>{`
        .avb {
          position: relative;
          background: #f9f8ff;
          overflow: hidden;
          padding: 100px 48px 80px;
          text-align: center;
        }
        .avb-watermark {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          opacity: 0.045;
        }
        .avb-watermark svg {
          width: min(700px, 90vw);
          height: min(700px, 90vw);
        }
        .avb-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid #d8cafa;
          color: #281750;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 5px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
          background: #fff;
        }
        .avb-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #0f0824;
          margin-bottom: 14px;
          letter-spacing: -0.5px;
        }
        .avb-desc {
          font-size: 1rem;
          color: #525252;
          max-width: 500px;
          margin: 0 auto 56px;
          line-height: 1.75;
        }
        .avb-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(40,23,80,0.07);
          max-width: 860px;
          margin: 0 auto;
        }
        .avb-stat {
          padding: 32px 20px;
          border-right: 1px solid #f0eeff;
          position: relative;
        }
        .avb-stat:last-child { border-right: none; }
        .avb-stat-icon {
          color: #ab8cf5;
          margin-bottom: 10px;
          display: flex;
          justify-content: center;
        }
        .avb-stat-num {
          font-size: 1.9rem;
          font-weight: 800;
          color: #0f0824;
          line-height: 1;
          margin-bottom: 6px;
        }
        .avb-stat-label {
          font-size: 0.8rem;
          color: #a3a3a3;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .avb { padding: 72px 20px 60px; }
          .avb-stats { grid-template-columns: 1fr 1fr; }
          .avb-stat:nth-child(2) { border-right: none; }
          .avb-stat:nth-child(1),
          .avb-stat:nth-child(2) { border-bottom: 1px solid #f0eeff; }
        }
        @media (max-width: 480px) {
          .avb-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
      <section className="avb">
        {/* Gear watermark SVG */}
        <div className="avb-watermark" aria-hidden>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 60a40 40 0 1 0 0 80 40 40 0 0 0 0-80zm0 10a30 30 0 1 1 0 60 30 30 0 0 1 0-60z" fill="#281750"/>
            <path d="M95 10h10v20H95zM95 170h10v20H95zM10 95v10h20V95zM170 95v10h20V95z" fill="#281750"/>
            <path d="M38.4 24.7l7.1 7.1-14.1 14.1-7.1-7.1zM168.6 154.9l7.1 7.1-14.1 14.1-7.1-7.1zM24.7 161.6l7.1-7.1 14.1 14.1-7.1 7.1zM154.9 31.4l7.1-7.1 14.1 14.1-7.1 7.1z" fill="#281750"/>
            <circle cx="100" cy="100" r="8" fill="#281750"/>
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="avb-badge">Established 1985</div>
          <h1 className="avb-title">About Vector Build</h1>
          <p className="avb-desc">
            Engineering &amp; Construction at Scale. We build the industrial infrastructure
            that powers the modern world.
          </p>
          <div className="avb-stats">
            {stats.map((s) => (
              <div className="avb-stat" key={s.label}>
                <div className="avb-stat-icon">{s.icon}</div>
                <div className="avb-stat-num">{s.num}</div>
                <div className="avb-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
