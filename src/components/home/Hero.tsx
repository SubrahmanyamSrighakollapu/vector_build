import Link from "next/link";

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: 88vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/hero-bg.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(40,23,80,0.82) 0%,
            rgba(40,23,80,0.65) 50%,
            rgba(40,23,80,0.25) 100%
          );
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 48px;
          max-width: 680px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(171,140,245,0.15);
          border: 1px solid rgba(171,140,245,0.35);
          color: #d8cafa;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 28px;
        }
        .hero-badge-dot {
          width: 6px;
          height: 6px;
          background: #ab8cf5;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        .hero-title {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }
        .hero-title-accent {
          color: #ab8cf5;
          display: block;
        }
        .hero-desc {
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          color: rgba(216,202,250,0.85);
          line-height: 1.75;
          margin-top: 20px;
          margin-bottom: 40px;
          max-width: 520px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: #ffffff;
          color: #281750;
          font-size: 0.92rem;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 8px;
          border: 2px solid #ffffff;
          transition: all 0.25s ease;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover {
          background: transparent;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,255,255,0.15);
        }
        .btn-secondary {
          background: rgba(171,140,245,0.15);
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 8px;
          border: 2px solid rgba(171,140,245,0.5);
          transition: all 0.25s ease;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-secondary:hover {
          background: #ab8cf5;
          border-color: #ab8cf5;
          color: #281750;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(171,140,245,0.35);
        }
        .hero-stats {
          position: absolute;
          bottom: 48px;
          left: 48px;
          z-index: 2;
          display: flex;
          gap: 40px;
        }
        .hero-stat-divider {
          width: 1px;
          background: rgba(171,140,245,0.3);
          align-self: stretch;
        }
        .hero-stat-num {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 4px;
        }
        .hero-stat-num span {
          color: #ab8cf5;
        }
        .hero-stat-label {
          font-size: 0.78rem;
          color: rgba(216,202,250,0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .hero { min-height: 70vh; }
          .hero-content { padding: 60px 20px 120px; max-width: 100%; }
          .hero-stats { left: 20px; bottom: 24px; gap: 24px; }
          .hero-stat-num { font-size: 1.4rem; }
        }
      `}</style>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Industrial Construction Experts
          </div>
          <h1 className="hero-title">
            Building Precision.
            <span className="hero-title-accent">Engineering Excellence.</span>
          </h1>
          <p className="hero-desc">
            Leading the industry in modern structural solutions. We deliver complex
            industrial projects with safety, speed, and unparalleled accuracy.
          </p>
          <div className="hero-actions">
            <Link href="/services" className="btn-primary">View Services →</Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">350<span>+</span></div>
            <div className="hero-stat-label">Projects Completed</div>
          </div>
          <div className="hero-stat-divider" />
          <div>
            <div className="hero-stat-num">100<span>%</span></div>
            <div className="hero-stat-label">Safety Record</div>
          </div>
          <div className="hero-stat-divider" />
          <div>
            <div className="hero-stat-num">20<span>+</span></div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
        </div>
      </section>
    </>
  );
}
