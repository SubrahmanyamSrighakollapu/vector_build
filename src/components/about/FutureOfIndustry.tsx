"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FutureOfIndustry() {
  return (
    <>
      <style>{`
        .foi {
          padding: 120px 80px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .foi::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(171,140,245,0.08), transparent 30%),
            linear-gradient(180deg, rgba(171,140,245,0.02), transparent 22%);
          pointer-events: none;
        }
        .foi-inner {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(320px, 0.95fr) minmax(0, 1.15fr);
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .foi-media {
          position: relative;
        }
        .foi-media-frame {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 4 / 4.6;
          background: #f7f4ff;
          border: 1px solid rgba(171,140,245,0.12);
          box-shadow: 0 28px 80px rgba(40,23,80,0.12);
        }
        .foi-media-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 45%, rgba(10,6,24,0.12) 100%);
          pointer-events: none;
        }
        .foi-media-outline {
          position: absolute;
          inset: -16px 18px 18px -16px;
          border-radius: 34px;
          border: 1px solid rgba(171,140,245,0.18);
          pointer-events: none;
        }
        .foi-media-badge {
          position: absolute;
          left: 24px;
          bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(10,6,24,0.82);
          color: #ffffff;
          border: 1px solid rgba(171,140,245,0.2);
          backdrop-filter: blur(12px);
          box-shadow: 0 18px 34px rgba(10,6,24,0.18);
        }
        .foi-media-badge-mark {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ab8cf5, #281750);
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 800;
          flex-shrink: 0;
        }
        .foi-media-badge-copy {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .foi-media-badge-label {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(216,202,250,0.66);
          font-weight: 700;
        }
        .foi-media-badge-title {
          font-size: 0.9rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .foi-content {
          min-width: 0;
        }
        .foi-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #ab8cf5;
          margin-bottom: 18px;
        }
        .foi-eyebrow::before {
          content: '';
          width: 28px;
          height: 2px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .foi-title {
          font-size: clamp(2rem, 3vw, 3rem);
          font-weight: 900;
          color: #0a0618;
          margin-bottom: 18px;
          line-height: 1.05;
          letter-spacing: -1.3px;
        }
        .foi-title span {
          color: #281750;
        }
        .foi-lead {
          font-size: 1.02rem;
          color: #3f3f4e;
          line-height: 1.9;
          max-width: 720px;
          margin-bottom: 18px;
        }

        @media (max-width: 1100px) {
          .foi {
            padding: 88px 48px;
          }
          .foi-inner {
            gap: 44px;
            grid-template-columns: 1fr;
          }
          .foi-media-frame {
            aspect-ratio: 16 / 10;
          }
        }
        @media (max-width: 720px) {
          .foi {
            padding: 72px 24px;
          }
          .foi-media-outline {
            inset: -10px 12px 12px -10px;
          }
        }
      `}</style>

      <section className="foi">
        <div className="foi-inner">
          <motion.div
            className="foi-media"
            initial={{ opacity: 0, x: -42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="foi-media-outline" />
            <div className="foi-media-frame">
              <Image
                src="/future-of-industry.png"
                alt="Building the Future of Industry"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1100px) 100vw, 40vw"
              />
            </div>
            <div className="foi-media-badge">
              <div className="foi-media-badge-mark">BR</div>
              <div className="foi-media-badge-copy">
                <span className="foi-media-badge-label">Our Story</span>
                <span className="foi-media-badge-title">Built around precision and dependable delivery</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="foi-content"
            initial={{ opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="foi-eyebrow">Our Story</div>
            <h2 className="foi-title">
              Building the <span>Future</span><br />of Industry
            </h2>
            <p className="foi-lead">
              BuildRight Technologies is an engineering company specializing in technology-driven
              structural detailing and digital construction solutions. We deliver end-to-end services
              in BIM, precast concrete detailing, and Self storage detailing, PEMB Design and
              Detailing Services focusing on precision, seamless coordination, and project efficiency.
            </p>
            <p className="foi-lead">
              Our team of experienced engineers and project specialists collaborates closely to
              provide high-quality solutions that meet international standards and exceed client
              expectations.
            </p>
            <p className="foi-lead" style={{ marginBottom: 0 }}>
              Whether partnering on a single project or acting as an extension of your engineering
              team, we are dedicated to delivering reliable, scalable, and cost-effective solutions
              that drive project success.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
