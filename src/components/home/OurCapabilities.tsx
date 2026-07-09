"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const capabilities = [
  {
    num: "01",
    iconImage: "/precast-icon.png",
    title: "Precast",
    desc: "We provide precision-driven Precast Concrete Detailing Services for commercial, residential, industrial, infrastructure, and institutional projects worldwide. Our detailing solutions ensure accurate coordination, efficient manufacturing, and seamless on-site installation.",
    href: "/services/precast",
  },
  {
    num: "02",
    iconImage: "/titl-up-icon.png",
    title: "Tilt-up Services",
    desc: "We deliver precise and construction-ready Tilt-Up Shop Drawings and Embed Panel Detailing Services, ensuring seamless coordination and compliance with project specifications.",
    href: "/services/tilt-up",
  },
  {
    num: "03",
    iconImage: "/storages-icon.png",
    title: "Mini/Self Storages",
    desc: "We produce accurate shop drawings, fabrication drawings, framing layouts, and coordinated CAD/BIM models that enhance structural accuracy, optimize space utilization, and support efficient fabrication and construction.",
    href: "/services/mini-self-storages",
  },
  {
    num: "04",
    iconImage: "/pemb-icon.png",
    title: "PEMB (Pre-Engineered Metal Buildings)",
    desc: "Complete building systems designed for optimum strength and flexibility. Our PEMB solutions are perfect for hangars, manufacturing plants, and logistics centers, offering a significant reduction in construction time and cost.",
    href: "/services/pemb",
  },
];

export default function OurCapabilities() {
  const router = useRouter();

  return (
    <>
      <style>{`
        .cap {
          padding: 120px 80px;
          background: #0a0618;
          position: relative;
          overflow: hidden;
        }
        .cap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(171,140,245,0.4), transparent);
        }
        .cap-mesh {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(171,140,245,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171,140,245,0.04) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }
        .cap-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(171,140,245,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .cap-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }

        .cap-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 64px;
          gap: 32px;
          flex-wrap: wrap;
        }
        .cap-eyebrow {
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
        .cap-eyebrow::before {
          content: '';
          width: 28px; height: 2px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .cap-title {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -1px;
          line-height: 1.1;
        }
        .cap-title span { color: #ab8cf5; }
        .cap-subtitle {
          font-size: 0.95rem;
          color: rgba(216,202,250,0.55);
          max-width: 320px;
          line-height: 1.7;
          text-align: right;
        }

        .cap-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .cap-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(171,140,245,0.1);
          border-radius: 16px;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          transition: all 0.35s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .cap-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(171,140,245,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
          border-radius: 16px;
        }
        .cap-card:hover {
          border-color: rgba(171,140,245,0.35);
          background: rgba(171,140,245,0.06);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(171,140,245,0.2);
        }
        .cap-card:hover::before { opacity: 1; }

        .cap-num {
          position: absolute;
          top: 16px; right: 20px;
          font-size: 4rem;
          font-weight: 900;
          color: rgba(171,140,245,0.06);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          transition: color 0.35s ease;
        }
        .cap-card:hover .cap-num { color: rgba(171,140,245,0.12); }

        .cap-icon-wrap {
          width: 58px; height: 58px;
          border-radius: 12px;
          background: rgba(171,140,245,0.12);
          border: 1px solid rgba(171,140,245,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ab8cf5;
          margin-bottom: 20px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .cap-card:hover .cap-icon-wrap {
          background: #ab8cf5;
          border-color: #ab8cf5;
          box-shadow: 0 8px 24px rgba(171,140,245,0.4);
        }
        .cap-icon-img {
          position: relative;
          width: 40px;
          height: 40px;
          transition: transform 0.3s ease, filter 0.3s ease;
          filter: drop-shadow(0 4px 12px rgba(10,6,24,0.16));
        }
        .cap-card:hover .cap-icon-img {
          transform: scale(1.06);
          filter: drop-shadow(0 8px 16px rgba(10,6,24,0.22));
        }

        .cap-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
        }
        .cap-card-desc {
          font-size: 0.85rem;
          color: rgba(216,202,250,0.55);
          line-height: 1.7;
          flex: 1;
          margin-bottom: 20px;
        }
        .cap-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #ab8cf5;
          transition: gap 0.2s ease;
          align-self: flex-start;
        }
        .cap-card:hover .cap-card-link { gap: 10px; }

        .cap-cta {
          margin-top: 48px;
          text-align: center;
        }
        .cap-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(171,140,245,0.1);
          border: 1px solid rgba(171,140,245,0.25);
          color: #d8cafa;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 10px;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .cap-cta-btn:hover {
          background: #ab8cf5;
          color: #0a0618;
          border-color: #ab8cf5;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(171,140,245,0.35);
        }

        @media (max-width: 1024px) {
          .cap { padding: 80px 48px; }
          .cap-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .cap-subtitle { text-align: left; }
        }
        @media (max-width: 640px) {
          .cap { padding: 64px 24px; }
          .cap-grid { grid-template-columns: 1fr; }
          .cap-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section className="cap">
        <div className="cap-mesh" />
        <div className="cap-glow" />
        <div className="cap-inner">
          <motion.div
            className="cap-header"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <div className="cap-eyebrow">Our Capabilities</div>
              <h2 className="cap-title">Engineering <span>Precision</span><br />At Every Scale</h2>
            </div>
            <p className="cap-subtitle">
              Comprehensive industrial construction services tailored for the modern age.
            </p>
          </motion.div>

          <div className="cap-grid">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.num}
                className="cap-card"
                role="link"
                tabIndex={0}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                onClick={() => router.push(cap.href)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    router.push(cap.href);
                  }
                }}
              >
                <div className="cap-num">{cap.num}</div>
                <div className="cap-icon-wrap">
                  <span className="cap-icon-img" aria-hidden="true">
                    <Image
                      src={cap.iconImage}
                      alt=""
                      fill
                      sizes="34px"
                      style={{ objectFit: "contain" }}
                    />
                  </span>
                </div>
                <div className="cap-card-body">
                  <div className="cap-card-title">{cap.title}</div>
                  <p className="cap-card-desc">{cap.desc}</p>
                  <Link href={cap.href} className="cap-card-link">
                    Learn more <FiArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="cap-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/services" className="cap-cta-btn">
              View All Services <FiArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
