export default function ProjectsLayout() {
  return (
    <>
      <style>{`
        .pl {
          background: #f9f8ff;
          padding: 80px 48px 0;
          text-align: center;
        }
        .pl-eyebrow {
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
        .pl-eyebrow::before,
        .pl-eyebrow::after {
          content: '';
          width: 24px;
          height: 1.5px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .pl-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #0f0824;
          letter-spacing: -1px;
          line-height: 1.1;
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .pl-title span { color: #ab8cf5; }
        .pl-desc {
          font-size: 1rem;
          color: #6b6b80;
          max-width: 520px;
          margin: 0 auto 48px;
          line-height: 1.75;
        }
        .pl-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-bottom: 48px;
          background: #ffffff;
          border: 1px solid #ede9ff;
          border-radius: 14px;
          overflow: hidden;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .pl-stat {
          flex: 1;
          padding: 20px 16px;
          border-right: 1px solid #ede9ff;
        }
        .pl-stat:last-child { border-right: none; }
        .pl-stat-num {
          font-size: 1.6rem;
          font-weight: 800;
          color: #281750;
          line-height: 1;
          margin-bottom: 4px;
        }
        .pl-stat-num span { color: #ab8cf5; }
        .pl-stat-label {
          font-size: 0.75rem;
          color: #a3a3a3;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .pl { padding: 60px 20px 0; }
          .pl-title { font-size: clamp(1.6rem, 6vw, 2.2rem); }
        }
      `}</style>
      <section className="pl">
        <div className="pl-eyebrow">Our Portfolio</div>
        <h1 className="pl-title">
          Building the <span>Future</span> Structure
        </h1>
        <p className="pl-desc">
          Explore our diverse portfolio of industrial achievements. From massive logistics hubs
          to intricate steel frameworks, we define skylines with precision and strength.
        </p>
        <div className="pl-stats">
          <div className="pl-stat">
            <div className="pl-stat-num">350<span>+</span></div>
            <div className="pl-stat-label">Projects Done</div>
          </div>
          <div className="pl-stat">
            <div className="pl-stat-num">20<span>+</span></div>
            <div className="pl-stat-label">Years Active</div>
          </div>
          <div className="pl-stat">
            <div className="pl-stat-num">₹2<span>L</span></div>
            <div className="pl-stat-label">Project Value</div>
          </div>
          <div className="pl-stat">
            <div className="pl-stat-num">100<span>%</span></div>
            <div className="pl-stat-label">Safety Record</div>
          </div>
        </div>
      </section>
    </>
  );
}
