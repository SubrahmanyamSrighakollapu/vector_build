import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

const scopeItems = [
  { title: "Panel Detailing",         desc: "Precast panel detailing (wall panels, sandwich panels, solid panels)" },
  { title: "Structural Elements",     desc: "Structural precast elements: beams, columns, slabs, double tees, hollow core, stairs" },
  { title: "Connection Design",       desc: "Connection detailing (weld plates, inserts, anchor systems, dowels)" },
  { title: "Embed Coordination",      desc: "Embed detailing and coordinated embed lists" },
  { title: "Fabrication Drawings",    desc: "Shop drawings for fabrication with dimensions, tolerances, lifting points, and casting information" },
  { title: "Reinforcement Detailing", desc: "Reinforcement detailing and bar bending schedules" },
  { title: "3D BIM Modeling",         desc: "3D precast modeling using Revit (LOD 300/400)" },
  { title: "Erection Layouts",        desc: "Erection drawings and panel layout plans" },
  { title: "Cast-In Hardware",        desc: "Cast-in hardware placement details" },
  { title: "Material Quantification", desc: "Material take-offs and production quantities" },
];

const workflow = [
  { num: "01", title: "Design",          desc: "CAD modeling and structural engineering analysis." },
  { num: "02", title: "Mold Fabrication",desc: "Custom steel or wood formwork construction." },
  { num: "03", title: "Casting",         desc: "Precise concrete pouring and vibration settling." },
  { num: "04", title: "Inspection",      desc: "Rigorous QC checks for dimensions and finish." },
  { num: "05", title: "Installation",    desc: "Logistics and crane-assisted site assembly." },
];

const experience = [
  "Parking Structures",
  "Commercial & Office Buildings",
  "Stadiums & Arenas",
  "Residential Developments",
  "Healthcare Facilities",
  "Correctional Facilities / Modular Cells",
  "Warehouses & Distribution Centers",
];

export default function PrecisionPrecastServiceDetailed() {
  return (
    <>
      <style>{`
        .ppc-page { background: #ffffff; }

        .ppc-hero {
          background: #f9f8ff;
          padding: 72px 48px 64px;
          text-align: center;
          border-bottom: 1px solid #ede9ff;
        }
        .ppc-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 16px;
        }
        .ppc-hero-eyebrow::before, .ppc-hero-eyebrow::after {
          content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px;
        }
        .ppc-hero-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900;
          color: #0f0824; letter-spacing: -0.8px; margin-bottom: 14px;
        }
        .ppc-hero-desc {
          font-size: 1rem; color: #6b6b80; max-width: 540px;
          margin: 0 auto 28px; line-height: 1.75;
        }
        .ppc-hero-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #281750; color: #ffffff; font-size: 0.88rem;
          font-weight: 700; padding: 12px 28px; border-radius: 10px;
          transition: all 0.22s ease;
        }
        .ppc-hero-btn:hover {
          background: #ab8cf5; color: #281750;
          transform: translateY(-2px); box-shadow: 0 6px 20px rgba(171,140,245,0.35);
        }

        /* ── Intro ── */
        .ppc-intro {
          padding: 80px 48px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .ppc-intro-label {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 12px;
        }
        .ppc-intro-label::before {
          content: ''; width: 4px; height: 16px; background: #ab8cf5; border-radius: 2px;
        }
        .ppc-intro-title {
          font-size: clamp(1.3rem, 2vw, 1.7rem); font-weight: 800;
          color: #0f0824; margin-bottom: 16px;
        }
        .ppc-intro-text {
          font-size: 0.92rem; color: #6b6b80; line-height: 1.8; margin-bottom: 28px;
        }
        .ppc-mini-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
        }
        .ppc-mini-stat {
          background: #281750; border-radius: 12px; padding: 20px;
          text-align: center;
        }
        .ppc-mini-stat-num {
          font-size: 1.6rem; font-weight: 800; color: #ffffff; line-height: 1; margin-bottom: 6px;
        }
        .ppc-mini-stat-num span { color: #ab8cf5; }
        .ppc-mini-stat-label { font-size: 0.78rem; color: #d8cafa; font-weight: 500; }
        .ppc-intro-img {
          position: relative; border-radius: 16px; overflow: hidden;
          aspect-ratio: 4/3; box-shadow: 0 16px 48px rgba(40,23,80,0.12);
        }

        /* ── Scope ── */
        .ppc-scope {
          background: #f9f8ff; padding: 72px 48px;
        }
        .ppc-section-title {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 800;
          color: #0f0824; margin-bottom: 6px;
        }
        .ppc-section-sub {
          font-size: 0.92rem; color: #6b6b80; margin-bottom: 36px;
        }
        .ppc-scope-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
        }
        .ppc-scope-card {
          background: #ffffff; border: 1px solid #ede9ff; border-radius: 12px;
          padding: 18px 16px; transition: all 0.22s ease;
        }
        .ppc-scope-card:hover {
          border-color: #ab8cf5; box-shadow: 0 6px 24px rgba(40,23,80,0.08);
          transform: translateY(-2px);
        }
        .ppc-scope-card-title {
          font-size: 0.85rem; font-weight: 700; color: #281750; margin-bottom: 6px;
        }
        .ppc-scope-card-desc {
          font-size: 0.78rem; color: #6b6b80; line-height: 1.6;
        }

        /* ── Workflow ── */
        .ppc-workflow { padding: 72px 48px; text-align: center; }
        .ppc-workflow-steps {
          display: grid; grid-template-columns: repeat(5, 1fr);
          gap: 0; position: relative; margin-top: 48px;
        }
        .ppc-workflow-steps::before {
          content: ''; position: absolute; top: 26px;
          left: calc(10% + 16px); right: calc(10% + 16px);
          height: 2px; background: linear-gradient(90deg, #ab8cf5, #d8cafa, #ab8cf5);
        }
        .ppc-wf-step { position: relative; z-index: 1; padding: 0 12px; text-align: center; }
        .ppc-wf-num {
          width: 52px; height: 52px; border-radius: 50%;
          background: #281750; color: #ffffff; font-size: 0.78rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px; border: 3px solid #f9f8ff;
          box-shadow: 0 0 0 2px #ab8cf5;
        }
        .ppc-wf-title { font-size: 0.88rem; font-weight: 700; color: #0f0824; margin-bottom: 6px; }
        .ppc-wf-desc { font-size: 0.78rem; color: #6b6b80; line-height: 1.6; }

        /* ── Experience ── */
        .ppc-exp {
          padding: 80px 48px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        .ppc-exp-img {
          position: relative; border-radius: 16px; overflow: hidden;
          aspect-ratio: 4/3; box-shadow: 0 16px 48px rgba(40,23,80,0.12);
        }
        .ppc-exp-title {
          font-size: clamp(1.3rem, 2vw, 1.7rem); font-weight: 800;
          color: #0f0824; margin-bottom: 8px;
        }
        .ppc-exp-sub { font-size: 0.92rem; color: #6b6b80; margin-bottom: 24px; line-height: 1.7; }
        .ppc-checklist { display: flex; flex-direction: column; gap: 10px; }
        .ppc-check-item {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.88rem; color: #525252; line-height: 1.5;
        }
        .ppc-check-item svg { color: #ab8cf5; flex-shrink: 0; margin-top: 2px; }

        @media (max-width: 960px) {
          .ppc-hero { padding: 56px 20px 48px; }
          .ppc-intro { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
          .ppc-scope { padding: 56px 20px; }
          .ppc-scope-grid { grid-template-columns: repeat(2, 1fr); }
          .ppc-workflow { padding: 56px 20px; }
          .ppc-workflow-steps { grid-template-columns: 1fr; gap: 28px; }
          .ppc-workflow-steps::before { display: none; }
          .ppc-exp { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
        }
        @media (max-width: 560px) {
          .ppc-scope-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ppc-page">
        {/* Hero */}
        <div className="ppc-hero">
          <div className="ppc-hero-eyebrow">Precast Concrete</div>
          <h1 className="ppc-hero-title">Precision Precast Concrete Solutions</h1>
          <p className="ppc-hero-desc">
            Engineered for speed, durability, and architectural excellence. We deliver
            high-tolerance structural components manufactured in controlled environments
            for your most demanding projects.
          </p>
          <Link href="/services" className="ppc-hero-btn">
            View Capabilities <FiArrowRight size={15} />
          </Link>
        </div>

        {/* Intro */}
        <div className="ppc-intro">
          <div>
            <div className="ppc-intro-label">Precast Engineering & Detailing Services</div>
            <h2 className="ppc-intro-title">High-Precision Precast Concrete Detailing</h2>
            <p className="ppc-intro-text">
              We provide high-precision Precast Concrete Detailing Services for commercial,
              industrial, residential, infrastructure, and institutional projects worldwide.
              Our deliverables support design coordination, manufacturing, and site erection
              with full compliance to international standards.
            </p>
            <div className="ppc-mini-stats">
              <div className="ppc-mini-stat">
                <div className="ppc-mini-stat-num">40<span>%</span></div>
                <div className="ppc-mini-stat-label">Faster Installation</div>
              </div>
              <div className="ppc-mini-stat">
                <div className="ppc-mini-stat-num">Zero</div>
                <div className="ppc-mini-stat-label">Weather Delays</div>
              </div>
            </div>
          </div>
          <div className="ppc-intro-img">
            <Image src="/precision_image1.png" alt="Precast Engineering" fill style={{ objectFit: "cover" }} sizes="50vw" />
          </div>
        </div>

        {/* Scope */}
        <div className="ppc-scope">
          <div className="ppc-section-title">Scope of Services</div>
          <div className="ppc-section-sub">
            We manufacture a diverse range of structural elements tailored to meet specific
            load requirements and architectural aesthetics.
          </div>
          <div className="ppc-scope-grid">
            {scopeItems.map((s) => (
              <div className="ppc-scope-card" key={s.title}>
                <div className="ppc-scope-card-title">{s.title}</div>
                <div className="ppc-scope-card-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="ppc-workflow">
          <div className="ppc-section-title">Production Workflow</div>
          <div className="ppc-section-sub">
            From engineering drawings to final site installation, our process is optimized
            for efficiency and precision.
          </div>
          <div className="ppc-workflow-steps">
            {workflow.map((w) => (
              <div className="ppc-wf-step" key={w.num}>
                <div className="ppc-wf-num">{w.num}</div>
                <div className="ppc-wf-title">{w.title}</div>
                <div className="ppc-wf-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="ppc-exp">
          <div className="ppc-exp-img">
            <Image src="/precision_image2.png" alt="Precast Project Experience" fill style={{ objectFit: "cover" }} sizes="50vw" />
          </div>
          <div>
            <div className="ppc-section-title">Project Experience</div>
            <p className="ppc-exp-sub">
              We have successfully contributed to a wide range of precast applications, including:
            </p>
            <div className="ppc-checklist">
              {experience.map((e) => (
                <div className="ppc-check-item" key={e}>
                  <FiCheckCircle size={16} /> {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
