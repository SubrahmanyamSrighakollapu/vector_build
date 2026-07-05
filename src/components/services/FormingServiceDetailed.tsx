"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight, FiLayers, FiGrid, FiBox, FiTool } from "react-icons/fi";

const stats = [
  { num: "500+", label: "Drawings Delivered" },
  { num: "100%", label: "Code Compliant" },
  { num: "48h",  label: "Avg Turnaround" },
];

const serviceTypes = [
  { icon: <FiLayers size={18}/>, title: "Wall Formwork",       desc: "Detailed formwork drawings for shear walls, retaining walls, and core walls with tie hole patterns and panel layouts." },
  { icon: <FiGrid size={18}/>,   title: "Slab Shoring",        desc: "Comprehensive shoring layouts for elevated slabs, post-tensioned decks, and transfer plates with load calculations." },
  { icon: <FiBox size={18}/>,    title: "Column Formwork",     desc: "Custom column form designs for circular, square, and architectural concrete finishes." },
  { icon: <FiTool size={18}/>,   title: "Foundation Forming",  desc: "Raft, pile cap, and grade beam formwork with stripping sequences and re-use planning." },
];

const process = [
  { num: "01", title: "Structural Review",   desc: "Analyse structural drawings to understand loads, geometry, and pour sequences." },
  { num: "02", title: "Formwork Design",     desc: "Engineer the formwork system for pressure, deflection, and safety factors." },
  { num: "03", title: "Drawing Production",  desc: "Produce fabrication-ready shop drawings with full dimensions and hardware schedules." },
  { num: "04", title: "QC & Submission",     desc: "Internal review, clash check, and client submission with revision tracking." },
];

const deliverables = [
  "Formwork layout plans and elevation drawings",
  "Panel schedules with dimensions and quantities",
  "Tie rod and anchor bolt placement drawings",
  "Shoring layout plans with load distribution",
  "Stripping and re-shore sequence diagrams",
  "Material take-offs and hardware schedules",
  "Clash-free, fabrication-ready drawing sets",
];

const standards = [
  "ACI 347 – Guide to Formwork for Concrete",
  "BS 5975 – Code of Practice for Temporary Works",
  "AS 3610 – Formwork for Concrete (Australia)",
  "OSHA 29 CFR 1926 – Construction Safety Standards",
];

export default function FormingServiceDetailed() {
  return (
    <>
      <style>{`
        .fm { background: #0a0618; }
        .fm-hero { background: #0a0618; padding: 96px 80px 80px; text-align: center; position: relative; overflow: hidden; }
        .fm-hero::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(171,140,245,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(171,140,245,0.05) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
        .fm-hero::after { content: ''; position: absolute; top: -60px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(171,140,245,0.12) 0%, transparent 70%); pointer-events: none; }
        .fm-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 0.72rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #ab8cf5; margin-bottom: 20px; position: relative; z-index: 1; }
        .fm-eyebrow::before, .fm-eyebrow::after { content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px; }
        .fm-hero-title { font-size: clamp(2rem,4vw,3.5rem); font-weight: 900; color: #fff; letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 20px; position: relative; z-index: 1; }
        .fm-hero-desc { font-size: 1.05rem; color: rgba(216,202,250,0.6); max-width: 540px; margin: 0 auto 36px; line-height: 1.8; position: relative; z-index: 1; }
        .fm-hero-btn { display: inline-flex; align-items: center; gap: 8px; background: #ab8cf5; color: #0a0618; font-size: 0.9rem; font-weight: 700; padding: 13px 28px; border-radius: 10px; transition: all 0.25s ease; position: relative; z-index: 1; }
        .fm-hero-btn:hover { background: #d8cafa; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(171,140,245,0.4); }

        /* stats */
        .fm-stats {
          background: #281750; padding: 48px;
          display: grid; grid-template-columns: repeat(3,1fr); gap: 0;
        }
        .fm-stat { text-align: center; padding: 0 24px; border-right: 1px solid rgba(171,140,245,0.2); }
        .fm-stat:last-child { border-right: none; }
        .fm-stat-num { font-size: 2.2rem; font-weight: 900; color: #fff; line-height: 1; margin-bottom: 8px; }
        .fm-stat-label { font-size: 0.82rem; color: rgba(216,202,250,0.7); font-weight: 500; }

        /* service types */
        .fm-types { padding: 80px 48px; }
        .fm-section-label {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 12px;
        }
        .fm-section-label::before { content: ''; width: 4px; height: 16px; background: #ab8cf5; border-radius: 2px; }
        .fm-section-title { font-size: clamp(1.3rem,2vw,1.8rem); font-weight: 800; color: #0f0824; margin-bottom: 8px; }
        .fm-section-sub { font-size: 0.92rem; color: #6b6b80; margin-bottom: 36px; }
        .fm-types-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .fm-type-card {
          background: #f9f8ff; border: 1px solid #ede9ff; border-radius: 14px;
          padding: 24px 20px; transition: all 0.22s ease;
        }
        .fm-type-card:hover { border-color: #ab8cf5; box-shadow: 0 8px 28px rgba(40,23,80,0.08); transform: translateY(-3px); }
        .fm-type-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(171,140,245,0.12); color: #ab8cf5;
          display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
        }
        .fm-type-title { font-size: 0.9rem; font-weight: 700; color: #0f0824; margin-bottom: 8px; }
        .fm-type-desc { font-size: 0.82rem; color: #6b6b80; line-height: 1.65; }

        /* process */
        .fm-process { background: #f9f8ff; padding: 72px 48px; text-align: center; }
        .fm-process-steps {
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: 0; position: relative; margin-top: 48px;
        }
        .fm-process-steps::before {
          content: ''; position: absolute; top: 26px;
          left: calc(12.5% + 16px); right: calc(12.5% + 16px);
          height: 2px; background: linear-gradient(90deg,#ab8cf5,#d8cafa,#ab8cf5);
        }
        .fm-step { position: relative; z-index: 1; padding: 0 16px; text-align: center; }
        .fm-step-num {
          width: 52px; height: 52px; border-radius: 50%;
          background: #281750; color: #fff; font-size: 0.78rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px; border: 3px solid #f9f8ff; box-shadow: 0 0 0 2px #ab8cf5;
        }
        .fm-step-title { font-size: 0.9rem; font-weight: 700; color: #0f0824; margin-bottom: 6px; }
        .fm-step-desc { font-size: 0.8rem; color: #6b6b80; line-height: 1.6; }

        /* deliverables + standards */
        .fm-deliver {
          padding: 80px 48px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start;
        }
        .fm-deliver-img { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 16px 48px rgba(40,23,80,0.12); margin-bottom: 32px; }
        .fm-checklist { display: flex; flex-direction: column; gap: 10px; }
        .fm-check { display: flex; align-items: flex-start; gap: 10px; font-size: 0.88rem; color: #525252; line-height: 1.5; }
        .fm-check svg { color: #ab8cf5; flex-shrink: 0; margin-top: 2px; }
        .fm-std-list { display: flex; flex-direction: column; gap: 10px; margin-top: 16px; }
        .fm-std-item { display: flex; align-items: center; gap: 8px; font-size: 0.88rem; color: #525252; }
        .fm-std-item::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #ab8cf5; flex-shrink: 0; }

        @media (max-width: 960px) {
          .fm-hero { padding: 56px 20px 48px; }
          .fm-stats { grid-template-columns: 1fr; padding: 40px 20px; gap: 24px; }
          .fm-stat { border-right: none; border-bottom: 1px solid rgba(171,140,245,0.2); padding-bottom: 20px; }
          .fm-stat:last-child { border-bottom: none; }
          .fm-types { padding: 56px 20px; }
          .fm-types-grid { grid-template-columns: repeat(2,1fr); }
          .fm-process { padding: 56px 20px; }
          .fm-process-steps { grid-template-columns: 1fr; gap: 28px; }
          .fm-process-steps::before { display: none; }
          .fm-deliver { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
        }
        @media (max-width: 560px) {
          .fm-types-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="fm">
        <div className="fm-hero">
          <div className="fm-eyebrow">Forming & Shoring</div>
          <h1 className="fm-hero-title">Formwork & Shoring Engineering</h1>
          <p className="fm-hero-desc">
            Precision formwork detailing and shoring design for cast-in-place concrete
            structures. We deliver fabrication-ready drawings that ensure safe, efficient
            construction execution.
          </p>
          <Link href="/projects" className="fm-hero-btn">View Projects <FiArrowRight size={15}/></Link>
        </div>

        <div className="fm-stats">
          {stats.map((s) => (
            <div className="fm-stat" key={s.label}>
              <div className="fm-stat-num">{s.num}</div>
              <div className="fm-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="fm-types">
          <div className="fm-section-label">Service Types</div>
          <h2 className="fm-section-title">Comprehensive Forming Solutions</h2>
          <p className="fm-section-sub">Every concrete structure demands a unique approach. We cover the full spectrum.</p>
          <div className="fm-types-grid">
            {serviceTypes.map((s) => (
              <div className="fm-type-card" key={s.title}>
                <div className="fm-type-icon">{s.icon}</div>
                <div className="fm-type-title">{s.title}</div>
                <p className="fm-type-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fm-process">
          <div className="fm-section-title">Our Process</div>
          <div className="fm-section-sub" style={{ marginBottom: 0 }}>From structural review to fabrication-ready submission.</div>
          <div className="fm-process-steps">
            {process.map((p) => (
              <div className="fm-step" key={p.num}>
                <div className="fm-step-num">{p.num}</div>
                <div className="fm-step-title">{p.title}</div>
                <div className="fm-step-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fm-deliver">
          <div>
            <div className="fm-deliver-img">
              <Image src="/forming.png" alt="Forming & Shoring" fill style={{ objectFit: "cover" }} sizes="50vw"/>
            </div>
            <div className="fm-section-label">Compliance Standards</div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f0824", marginBottom: 12 }}>International Code Compliance</h3>
            <div className="fm-std-list">
              {standards.map((s) => <div className="fm-std-item" key={s}>{s}</div>)}
            </div>
          </div>
          <div>
            <div className="fm-section-label">What We Deliver</div>
            <h2 className="fm-section-title">Fabrication-Ready Deliverables</h2>
            <p className="fm-section-sub">Every drawing set is clash-checked, dimensionally accurate, and ready for immediate use on site.</p>
            <div className="fm-checklist">
              {deliverables.map((d) => (
                <div className="fm-check" key={d}><FiCheckCircle size={16}/> {d}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
