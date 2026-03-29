import { FiTarget } from "react-icons/fi";

export default function OurMission() {
  return (
    <>
      <style>{`
        .mission {
          background: #281750;
          padding: 96px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .mission::before {
          content: '';
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(171,140,245,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .mission-inner {
          position: relative;
          z-index: 1;
          max-width: 640px;
          margin: 0 auto;
        }
        .mission-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #d8cafa;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .mission-label-line {
          width: 32px;
          height: 1px;
          background: #ab8cf5;
        }
        .mission-quote {
          font-size: clamp(1.2rem, 2.5vw, 1.65rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.55;
          font-style: italic;
          margin-top: 16px;
        }
        .mission-quote-mark {
          color: #ab8cf5;
          font-size: 1.4em;
          font-style: normal;
          line-height: 0;
          vertical-align: -0.2em;
        }
        @media (max-width: 600px) {
          .mission { padding: 72px 20px; }
        }
      `}</style>
      <section className="mission">
        <div className="mission-inner">
          <div className="mission-label">
            <FiTarget size={14} />
            Our Mission
            <div className="mission-label-line" />
          </div>
          <p className="mission-quote">
            <span className="mission-quote-mark">&ldquo;</span>
            To be the premier partner for complex industrial infrastructure, delivering
            excellence through precision and partnership.
            <span className="mission-quote-mark">&rdquo;</span>
          </p>
        </div>
      </section>
    </>
  );
}
