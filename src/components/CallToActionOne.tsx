import Link from "next/link";

export default function CallToActionOne() {
  return (
    <>
      <style>{`
        .cta-one {
          background: linear-gradient(135deg, #1a0e38 0%, #2d1a5e 50%, #1a0e38 100%);
          padding: 80px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-one::before {
          content: '';
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(171,140,245,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-one-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .cta-one-desc {
          font-size: 1rem;
          color: rgba(216,202,250,0.8);
          max-width: 520px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }
        .cta-one-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-btn-outline {
          background: transparent;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 8px;
          border: 2px solid rgba(255,255,255,0.5);
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .cta-btn-outline:hover {
          background: #ffffff;
          color: #281750;
          border-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,255,255,0.15);
        }
        .cta-btn-filled {
          background: rgba(171,140,245,0.2);
          color: #d8cafa;
          font-size: 0.92rem;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 8px;
          border: 2px solid rgba(171,140,245,0.4);
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .cta-btn-filled:hover {
          background: #ab8cf5;
          color: #281750;
          border-color: #ab8cf5;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(171,140,245,0.35);
        }
        @media (max-width: 600px) {
          .cta-one { padding: 64px 20px; }
          .cta-one-actions { flex-direction: column; align-items: center; }
          .cta-btn-outline, .cta-btn-filled { width: 100%; max-width: 280px; }
        }
      `}</style>
      <section className="cta-one">
        <h2 className="cta-one-title">Ready to start your build?</h2>
        <p className="cta-one-desc">
          Contact our engineering team today for a consultation on your next industrial project.
          We bring the precision you need.
        </p>
        <div className="cta-one-actions">
          <Link href="/contact" className="cta-btn-outline">Get a Free Quote</Link>
          <Link href="tel:+919876543211" className="cta-btn-filled">Call +91 9876543211</Link>
        </div>
      </section>
    </>
  );
}
