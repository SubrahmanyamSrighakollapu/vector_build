import Image from "next/image";
import { FiUser } from "react-icons/fi";

export default function FutureOfIndustry() {
  return (
    <>
      <style>{`
        .foi {
          padding: 96px 48px;
          background: #ffffff;
        }
        .foi-inner {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 72px;
          align-items: center;
        }
        .foi-image-wrap {
          position: relative;
        }
        .foi-image-frame {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow: 0 16px 48px rgba(40,23,80,0.12);
        }
        .foi-image-frame::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: 10px;
          bottom: 10px;
          border: 2px solid #ab8cf5;
          border-radius: 14px;
          z-index: 0;
          pointer-events: none;
        }
        .foi-image-frame img {
          position: relative;
          z-index: 1;
        }
        .foi-content-title {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 800;
          color: #0f0824;
          margin-bottom: 6px;
          line-height: 1.2;
        }
        .foi-title-underline {
          width: 48px;
          height: 3px;
          background: #ab8cf5;
          border-radius: 2px;
          margin-bottom: 24px;
        }
        .foi-text {
          font-size: 0.95rem;
          color: #525252;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .foi-divider {
          border: none;
          border-top: 1px solid #e5e5e5;
          margin: 28px 0;
        }
        .foi-ceo {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .foi-ceo-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ab8cf5, #281750);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
          font-size: 1.1rem;
        }
        .foi-ceo-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f0824;
        }
        .foi-ceo-role {
          font-size: 0.8rem;
          color: #a3a3a3;
          margin-top: 2px;
        }
        @media (max-width: 900px) {
          .foi { padding: 64px 20px; }
          .foi-inner { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
      <section className="foi">
        <div className="foi-inner">
          <div className="foi-image-wrap">
            <div className="foi-image-frame">
              <Image
                src="/future-of-industry.png"
                alt="Building the Future of Industry"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
          <div>
            <h2 className="foi-content-title">Building the Future of Industry</h2>
            <div className="foi-title-underline" />
            <p className="foi-text">
              Founded on the principles of precision engineering and unwavering reliability,
              Vector Build has evolved from a local contractor into a national leader in
              industrial construction. We don&apos;t just pour concrete and erect steel; we
              architect the environments where innovation happens.
            </p>
            <p className="foi-text">
              Our teams specialize in complex, high-stakes environments — from automated
              logistics centers to advanced manufacturing plants. We leverage cutting-edge
              technology and time-tested methodologies to deliver projects that stand the
              test of time and scale.
            </p>
            <hr className="foi-divider" />
            <div className="foi-ceo">
              <div className="foi-ceo-avatar">
                <FiUser />
              </div>
              <div>
                <div className="foi-ceo-name">James Sterling</div>
                <div className="foi-ceo-role">CEO &amp; Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
