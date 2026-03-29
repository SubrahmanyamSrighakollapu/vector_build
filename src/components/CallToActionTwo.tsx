import Link from "next/link";
import { FiArrowRight, FiFolder } from "react-icons/fi";

export default function CallToActionTwo() {
  return (
    <>
      <style>{`
        .cta-two {
          background: #f5f4ff;
          border-top: 1px solid #ede9ff;
          padding: 80px 48px;
          text-align: center;
        }
        .cta-two-title {
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          font-weight: 800;
          color: #0f0824;
          margin-bottom: 14px;
          letter-spacing: -0.3px;
        }
        .cta-two-desc {
          font-size: 0.97rem;
          color: #525252;
          max-width: 480px;
          margin: 0 auto 36px;
          line-height: 1.7;
        }
        .cta-two-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-two-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #281750;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 8px;
          border: 1.5px solid #281750;
          transition: all 0.22s ease;
        }
        .cta-two-btn-outline:hover {
          background: #281750;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(40,23,80,0.2);
        }
        .cta-two-btn-filled {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #d8cafa;
          color: #281750;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 8px;
          border: 1.5px solid #d8cafa;
          transition: all 0.22s ease;
        }
        .cta-two-btn-filled:hover {
          background: #ab8cf5;
          border-color: #ab8cf5;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(171,140,245,0.35);
        }
        @media (max-width: 600px) {
          .cta-two { padding: 60px 20px; }
          .cta-two-actions { flex-direction: column; align-items: center; }
        }
      `}</style>
      <section className="cta-two">
        <h2 className="cta-two-title">Ready to Start Your Next Project?</h2>
        <p className="cta-two-desc">
          Discover why leading industrial companies trust Vector Build for their most
          critical infrastructure needs.
        </p>
        <div className="cta-two-actions">
          <Link href="/contact" className="cta-two-btn-outline">
            <FiArrowRight size={15} /> Start a Conversation
          </Link>
          <Link href="/projects" className="cta-two-btn-filled">
            <FiFolder size={15} /> View Projects
          </Link>
        </div>
      </section>
    </>
  );
}
