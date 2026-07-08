"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBarChart2,
  FiGrid,
  FiShield,
  FiFeather,
  FiEdit3,
  FiPackage,
  FiTool,
  FiHome,
  FiTruck,
  FiShoppingBag,
  FiBriefcase,
  FiBox,
} from "react-icons/fi";

const stats = [
  { num: "500+", label: "Projects Delivered" },
  { num: "Zero", label: "Safety Incidents YTD" },
  { num: "24/7", label: "On-Site Support" },
];

const structuralDesign = [
  {
    icon: <FiBarChart2 size={18} />,
    title: "Structural Analysis",
    desc: "Complex structural simulation using STAAD.Pro for optimized weight-to-strength ratios.",
  },
  {
    icon: <FiTool size={18} />,
    title: "Load Calculations",
    desc: "Precise foundation load data and seismic or wind calculations compliant with IBC and ASCE.",
  },
  {
    icon: <FiGrid size={18} />,
    title: "Frame Design",
    desc: "Primary and secondary member optimization for clear-span and multi-span steel buildings.",
  },
  {
    icon: <FiFeather size={18} />,
    title: "Sustainable Design",
    desc: "Optimized material usage that reduces environmental footprint and project cost without sacrificing performance.",
  },
];

const detailingServices = [
  {
    title: "Shop Drawings",
    desc: "Accurate fabrication drawings for every individual member with clear welding symbols and dimensional control.",
  },
  {
    title: "BOM & CNC Support",
    desc: "Automated Bills of Materials and direct exports for CNC drilling and cutting workflows.",
  },
  {
    title: "Erection Documentation",
    desc: "Comprehensive site manuals, anchor bolt layouts, and part-orientation guides for field teams.",
  },
  {
    title: "Coordination",
    desc: "Integration with HVAC, plumbing, and electrical systems to prevent avoidable field conflicts.",
  },
];

const workflow = [
  { num: "1", title: "Project Review", desc: "Initial assessment of codes, building geometry, and delivery requirements." },
  { num: "2", title: "Structural Eng.", desc: "Rigorous analysis and frame optimization aligned with load criteria." },
  { num: "3", title: "3D Modeling", desc: "Full digital twin creation and clash check before documentation." },
  { num: "4", title: "Shop Drawings", desc: "Detailed production documentation for fabrication and erection." },
  { num: "5", title: "QA Protocol", desc: "Triple-check against client standards, codes, and revision controls." },
  { num: "6", title: "Fab Support", desc: "Direct liaison with manufacturing teams to keep production moving." },
];

const buildingTypes = [
  { icon: <FiBox size={20} />, label: "Industrial Facilities" },
  { icon: <FiHome size={20} />, label: "Warehouses" },
  { icon: <FiTruck size={20} />, label: "Distribution Centers" },
  { icon: <FiTool size={20} />, label: "Aircraft Hangars" },
  { icon: <FiShield size={20} />, label: "Agricultural Buildings" },
  { icon: <FiShoppingBag size={20} />, label: "Retail Spaces" },
  { icon: <FiBriefcase size={20} />, label: "Office Buildings" },
  { icon: <FiPackage size={20} />, label: "Sports Facilities" },
];

const advantageItems = [
  {
    icon: <FiShield size={17} />,
    title: "Experienced Engineers",
    desc: "A seasoned team focused on PEMB structural analysis, optimization, and code-compliant delivery.",
  },
  {
    icon: <FiGrid size={17} />,
    title: "BIM-Based Workflow",
    desc: "A coordinated 3D process that resolves field clashes before fabrication and erection begin.",
  },
  {
    icon: <FiArrowRight size={17} />,
    title: "Fast Turnaround",
    desc: "Optimized internal review protocols that keep detailing packages moving on schedule.",
  },
  {
    icon: <FiEdit3 size={17} />,
    title: "Cost-Effective Solutions",
    desc: "Precision engineering that minimizes steel wastage, rework, and production inefficiencies.",
  },
];

export default function PembServiceDetailed() {
  return (
    <>
      <style>{`
        .pemb {
          background: #f4f3f8;
          color: #0f2342;
        }
        .pemb-wrap {
          max-width: 1260px;
          margin: 0 auto;
        }
        .pemb-hero {
          position: relative;
          padding: 104px 80px 88px;
          background:
            radial-gradient(circle at top left, rgba(171,140,245,.14) 0%, transparent 34%),
            linear-gradient(180deg, #f7f6fb 0%, #f2f1f7 100%);
          overflow: hidden;
        }
        .pemb-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(15,35,66,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,35,66,.035) 1px, transparent 1px);
          background-size: 56px 56px;
          opacity: .55;
          pointer-events: none;
        }
        .pemb-hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, .92fr) minmax(360px, 1.08fr);
          gap: 48px;
          align-items: center;
        }
        .pemb-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(15,35,66,.08);
          color: #5f6f87;
          font-size: .68rem;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
          box-shadow: 0 8px 22px rgba(15,35,66,.06);
          margin-bottom: 22px;
        }
        .pemb-chip::before {
          content: "";
          width: 18px;
          height: 2px;
          border-radius: 999px;
          background: #ab8cf5;
        }
        .pemb-title {
          font-size: clamp(2.45rem, 4.6vw, 4.2rem);
          line-height: 1.08;
          letter-spacing: -.05em;
          font-weight: 900;
          color: #102645;
          margin-bottom: 18px;
          max-width: 720px;
        }
        .pemb-desc {
          font-size: 1rem;
          line-height: 1.85;
          color: #6a7184;
          max-width: 560px;
          margin-bottom: 28px;
        }
        .pemb-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .pemb-btn,
        .pemb-btn-alt {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-width: 154px;
          padding: 13px 22px;
          border-radius: 10px;
          font-size: .92rem;
          font-weight: 700;
          transition: all .24s ease;
        }
        .pemb-btn {
          background: linear-gradient(135deg, #7e57d8 0%, #ab8cf5 100%);
          color: #fff;
          box-shadow: 0 16px 34px rgba(126,87,216,.22);
        }
        .pemb-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 40px rgba(126,87,216,.28);
        }
        .pemb-btn-alt {
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(15,35,66,.16);
          color: #3f4a5f;
        }
        .pemb-btn-alt:hover {
          background: #fff;
          border-color: rgba(126,87,216,.26);
        }
        .pemb-hero-media {
          position: relative;
          min-height: 420px;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(15,35,66,.08);
          box-shadow: 0 18px 48px rgba(26,35,61,.12);
        }
        .pemb-hero-media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,.02) 0%, rgba(15,35,66,.08) 100%);
          pointer-events: none;
        }

        .pemb-section {
          padding: 82px 80px;
          background: #f8f7fb;
        }
        .pemb-section.white {
          background: #fff;
        }
        .pemb-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ab8cf5;
          font-size: .74rem;
          font-weight: 800;
          letter-spacing: .15em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .pemb-kicker::before {
          content: "";
          width: 30px;
          height: 2px;
          background: #f59e0b;
          border-radius: 999px;
        }
        .pemb-h2 {
          font-size: clamp(1.8rem, 2.7vw, 2.6rem);
          line-height: 1.14;
          letter-spacing: -.04em;
          font-weight: 900;
          color: #132849;
          margin-bottom: 14px;
        }
        .pemb-sub {
          font-size: .98rem;
          line-height: 1.8;
          color: #70778c;
          max-width: 680px;
        }
        .pemb-design-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }
        .pemb-card {
          background: linear-gradient(180deg, #fff 0%, #fbfbff 100%);
          border: 1px solid #e8e5f4;
          border-radius: 18px;
          padding: 24px 22px;
          box-shadow: 0 12px 30px rgba(26,35,61,.05);
          transition: transform .24s ease, border-color .24s ease, box-shadow .24s ease;
        }
        .pemb-card:hover {
          transform: translateY(-4px);
          border-color: rgba(126,87,216,.28);
          box-shadow: 0 20px 40px rgba(26,35,61,.08);
        }
        .pemb-card-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #29496d;
          background: rgba(41,73,109,.08);
          margin-bottom: 18px;
        }
        .pemb-card-title {
          font-size: 1.02rem;
          font-weight: 800;
          color: #153152;
          margin-bottom: 8px;
        }
        .pemb-card-desc {
          font-size: .88rem;
          line-height: 1.7;
          color: #70778c;
        }

        .pemb-detailing-grid {
          display: grid;
          grid-template-columns: minmax(300px, .88fr) minmax(0, 1.12fr);
          gap: 34px;
          align-items: start;
        }
        .pemb-detailing-points {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 28px;
        }
        .pemb-detailing-point {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #6a6f82;
          font-size: .9rem;
        }
        .pemb-detailing-point::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #f59e0b;
          box-shadow: 0 0 0 4px rgba(245,158,11,.12);
          flex-shrink: 0;
        }
        .pemb-detailing-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        .pemb-detailing-card {
          background: #fff;
          border: 1px solid #e7e5f2;
          border-left: 4px solid #1f3f62;
          border-radius: 16px;
          padding: 24px 22px;
          box-shadow: 0 12px 30px rgba(26,35,61,.05);
        }
        .pemb-detailing-title {
          font-size: .82rem;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #55647b;
          margin-bottom: 12px;
        }
        .pemb-detailing-desc {
          font-size: .9rem;
          line-height: 1.72;
          color: #687084;
        }

        .pemb-stats {
          background: linear-gradient(135deg, #281750 0%, #1f1141 100%);
          padding: 44px 80px;
          border-top: 2px solid #2d9cff;
        }
        .pemb-stats-grid {
          max-width: 1260px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        .pemb-stat {
          text-align: center;
          color: #fff;
        }
        .pemb-stat-num {
          font-size: clamp(2rem, 3.4vw, 2.9rem);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 10px;
        }
        .pemb-stat-label {
          font-size: 1rem;
          color: rgba(255,255,255,.86);
        }

        .pemb-workflow {
          padding: 78px 80px 26px;
          background: #fff;
        }
        .pemb-workflow-title {
          text-align: center;
          font-size: clamp(1.7rem, 2.5vw, 2.25rem);
          font-weight: 900;
          color: #143153;
          margin-bottom: 34px;
          letter-spacing: -.03em;
        }
        .pemb-workflow-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 18px;
          align-items: start;
        }
        .pemb-workflow-step {
          text-align: center;
          padding: 0 8px;
        }
        .pemb-workflow-num {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0e2a4b;
          color: #fff;
          font-size: .82rem;
          font-weight: 900;
          box-shadow: 0 12px 24px rgba(14,42,75,.16);
        }
        .pemb-workflow-step-title {
          font-size: .74rem;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #17365a;
          margin-bottom: 8px;
        }
        .pemb-workflow-step-desc {
          font-size: .82rem;
          line-height: 1.6;
          color: #787f93;
        }

        .pemb-types {
          padding: 48px 80px 84px;
          background: #f7f5fb;
        }
        .pemb-types-title {
          text-align: center;
          font-size: clamp(1.8rem, 2.7vw, 2.45rem);
          font-weight: 900;
          color: #3d2a76;
          margin-bottom: 30px;
          letter-spacing: -.04em;
        }
        .pemb-types-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }
        .pemb-type {
          background: #fdfdff;
          border: 1px solid #e6e3f0;
          border-radius: 16px;
          min-height: 98px;
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-align: center;
          color: #1c3658;
          box-shadow: 0 10px 24px rgba(26,35,61,.04);
        }
        .pemb-type span {
          font-size: .86rem;
          font-weight: 700;
          line-height: 1.45;
        }

        .pemb-advantage {
          padding: 0 80px 100px;
          background: #f7f5fb;
        }
        .pemb-advantage-grid {
          display: grid;
          grid-template-columns: minmax(0, .96fr) minmax(320px, 1.04fr);
          gap: 40px;
          align-items: center;
        }
        .pemb-advantage-media {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 18px 48px rgba(26,35,61,.12);
          background: #d6dde8;
        }
        .pemb-advantage-title {
          font-size: clamp(1.9rem, 2.8vw, 2.65rem);
          font-weight: 900;
          color: #17365a;
          margin-bottom: 22px;
          letter-spacing: -.04em;
          line-height: 1.1;
        }
        .pemb-advantage-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .pemb-advantage-item {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 14px;
          align-items: start;
          padding: 14px 0;
          border-bottom: 1px solid rgba(19,40,73,.08);
        }
        .pemb-advantage-item:last-child {
          border-bottom: none;
        }
        .pemb-advantage-icon {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d99020;
          background: rgba(217,144,32,.12);
          margin-top: 3px;
        }
        .pemb-advantage-item-title {
          font-size: 1rem;
          font-weight: 800;
          color: #183659;
          margin-bottom: 4px;
        }
        .pemb-advantage-item-desc {
          font-size: .9rem;
          line-height: 1.72;
          color: #717a8f;
        }

        @media (max-width: 1120px) {
          .pemb-hero-grid,
          .pemb-detailing-grid,
          .pemb-advantage-grid {
            grid-template-columns: 1fr;
          }
          .pemb-design-grid,
          .pemb-types-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .pemb-workflow-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            row-gap: 24px;
          }
        }
        @media (max-width: 780px) {
          .pemb-hero,
          .pemb-section,
          .pemb-stats,
          .pemb-workflow,
          .pemb-types,
          .pemb-advantage {
            padding-left: 24px;
            padding-right: 24px;
          }
          .pemb-hero {
            padding-top: 90px;
            padding-bottom: 72px;
          }
          .pemb-hero-media {
            min-height: 280px;
          }
          .pemb-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .pemb-btn,
          .pemb-btn-alt {
            width: 100%;
          }
          .pemb-design-grid,
          .pemb-detailing-cards,
          .pemb-stats-grid,
          .pemb-workflow-grid,
          .pemb-types-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="pemb">
        <section className="pemb-hero">
          <div className="pemb-wrap pemb-hero-grid">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="pemb-chip">Precision Engineered Solutions</div>
              <h1 className="pemb-title">Precision Engineering for Pre-Engineered Metal Buildings</h1>
              <p className="pemb-desc">
                Comprehensive engineering, detailing, and fabrication support to deliver efficient,
                cost-effective, and sustainable structural solutions for PEMB facilities worldwide.
              </p>
              <div className="pemb-actions">
                <Link href="/contact" className="pemb-btn">
                  Get a Quote <FiArrowRight size={15} />
                </Link>
                <Link href="/services" className="pemb-btn-alt">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="pemb-hero-media"
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.72 }}
            >
              <Image
                src="/pemb.png"
                alt="PEMB structural steel frame"
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1120px) 100vw, 48vw"
              />
            </motion.div>
          </div>
        </section>

        <section className="pemb-section white">
          <div className="pemb-wrap">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="pemb-kicker">PEMB Structural Design</div>
              <h2 className="pemb-h2">Advanced analytical engineering for peak structural performance</h2>
              <p className="pemb-sub">
                Our PEMB design solutions focus on stability, optimization, and code-driven detailing so each frame performs efficiently under project-specific environmental loads.
              </p>
            </motion.div>

            <div className="pemb-design-grid">
              {structuralDesign.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="pemb-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <div className="pemb-card-icon">{item.icon}</div>
                  <div className="pemb-card-title">{item.title}</div>
                  <div className="pemb-card-desc">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pemb-section">
          <div className="pemb-wrap pemb-detailing-grid">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="pemb-kicker">PEMB Detailing Services</div>
              <h2 className="pemb-h2">High-precision documentation that bridges engineering and the shop floor</h2>
              <p className="pemb-sub">
                We create coordinated PEMB documentation packages that keep fabricators, erectors, and project managers working from a single dependable source of truth.
              </p>
              <div className="pemb-detailing-points">
                <div className="pemb-detailing-point">Tekla and BIM-enabled expert modeling</div>
                <div className="pemb-detailing-point">AISC compliant standards and documentation controls</div>
                <div className="pemb-detailing-point">Zero-clash assurance before field execution</div>
              </div>
            </motion.div>

            <div className="pemb-detailing-cards">
              {detailingServices.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="pemb-detailing-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <div className="pemb-detailing-title">{item.title}</div>
                  <div className="pemb-detailing-desc">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pemb-stats">
          <div className="pemb-stats-grid">
            {stats.map((item) => (
              <div key={item.label} className="pemb-stat">
                <div className="pemb-stat-num">{item.num}</div>
                <div className="pemb-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pemb-workflow">
          <div className="pemb-wrap">
            <h2 className="pemb-workflow-title">Our Engineering Workflow</h2>
            <div className="pemb-workflow-grid">
              {workflow.map((item, index) => (
                <motion.div
                  key={item.num}
                  className="pemb-workflow-step"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.04 }}
                >
                  <div className="pemb-workflow-num">{item.num}</div>
                  <div className="pemb-workflow-step-title">{item.title}</div>
                  <div className="pemb-workflow-step-desc">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pemb-types">
          <div className="pemb-wrap">
            <h2 className="pemb-types-title">Building Types Supported</h2>
            <div className="pemb-types-grid">
              {buildingTypes.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="pemb-type"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pemb-advantage">
          <div className="pemb-wrap pemb-advantage-grid">
            <motion.div
              className="pemb-advantage-media"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <Image
                src="/structural-steel.png"
                alt="PEMB structural precision workflow"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1120px) 100vw, 44vw"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <div className="pemb-advantage-title">The Structural Precision Advantage</div>
              <div className="pemb-advantage-list">
                {advantageItems.map((item) => (
                  <div key={item.title} className="pemb-advantage-item">
                    <div className="pemb-advantage-icon">{item.icon}</div>
                    <div>
                      <div className="pemb-advantage-item-title">{item.title}</div>
                      <div className="pemb-advantage-item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
