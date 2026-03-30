import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiArrowRight, FiEdit3, FiAlertTriangle, FiFileText } from "react-icons/fi";

const coreServices = [
  {
    icon: <FiEdit3 size={20} />,
    title: "Drafting & Modeling",
    desc: "From 2D sketches to complex 3D parametric models. We convert legacy PDFs into intelligent Revit families and project files.",
    bullets: ["Shop Drawings", "As-Built Modeling", "Parametric Family Creation"],
    link: "Explore Drafting",
  },
  {
    icon: <FiAlertTriangle size={20} />,
    title: "Clash Detection",
    desc: "Identify and resolve interdisciplinary conflicts before construction begins. Save costs by preventing on-site rework.",
    bullets: ["Automated Reports", "MEP Coordination", "Constructability Review"],
    link: "View Analysis Tools",
  },
  {
    icon: <FiFileText size={20} />,
    title: "Construction Docs",
    desc: "Generate comprehensive drawing sets for permitting, fabrication, and installation. Precision down to the millimeter.",
    bullets: ["Permit Sets", "Fabrication Details", "Material Takeoffs (BOM)"],
    link: "See Documentation",
  },
];

const workflow = [
  { num: "01", title: "Scan / Input",  desc: "Ingesting point clouds, PDF sketches, or legacy CAD files." },
  { num: "02", title: "Model",         desc: "Developing geometry and adding parametric data (LOD 300+)." },
  { num: "03", title: "Coordinate",    desc: "Running clash detection and resolving interdisciplinary conflicts." },
  { num: "04", title: "Deliver",       desc: "Exporting drawings sets, schedules, and federated models." },
];

const whyUs = [
  "Trusted by leading contractors and MEP firms across North America",
  "Experienced team with 10+ years average expertise",
  "Advanced technology and proven BIM workflows",
  "AISC, ISO, and ACI certified with 2200+ projects delivered",
  "24/7 support with cost-effective solutions",
];

const stats = [
  { num: "20+",     label: "Projects Delivered" },
  { num: "LOD 500", label: "Max Detail Level" },
  { num: "24h",     label: "Support Turnaround" },
];

export default function PrecisionEngineeringServiceDetailed() {
  return (
    <>
      <style>{`
        .bim-page { background: #ffffff; }

        /* ── Hero ── */
        .bim-hero {
          background: #f9f8ff; padding: 72px 48px 64px;
          text-align: center; border-bottom: 1px solid #ede9ff;
        }
        .bim-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 16px;
        }
        .bim-hero-eyebrow::before, .bim-hero-eyebrow::after {
          content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px;
        }
        .bim-hero-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900;
          color: #0f0824; letter-spacing: -0.8px; margin-bottom: 14px;
        }
        .bim-hero-desc {
          font-size: 1rem; color: #6b6b80; max-width: 540px;
          margin: 0 auto 28px; line-height: 1.75;
        }
        .bim-hero-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #281750; color: #ffffff; font-size: 0.88rem;
          font-weight: 700; padding: 12px 28px; border-radius: 10px;
          transition: all 0.22s ease;
        }
        .bim-hero-btn:hover {
          background: #ab8cf5; color: #281750;
          transform: translateY(-2px); box-shadow: 0 6px 20px rgba(171,140,245,0.35);
        }

        /* ── Stats bar ── */
        .bim-stats {
          background: #281750; padding: 48px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 0;
        }
        .bim-stat {
          text-align: center; padding: 0 24px;
          border-right: 1px solid rgba(171,140,245,0.2);
        }
        .bim-stat:last-child { border-right: none; }
        .bim-stat-num {
          font-size: 2rem; font-weight: 900; color: #ffffff;
          line-height: 1; margin-bottom: 8px;
        }
        .bim-stat-label { font-size: 0.82rem; color: rgba(216,202,250,0.7); font-weight: 500; }

        /* ── Core Services ── */
        .bim-core { padding: 80px 48px; }
        .bim-section-title {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 800;
          color: #0f0824; margin-bottom: 6px;
        }
        .bim-section-sub { font-size: 0.92rem; color: #6b6b80; margin-bottom: 40px; }
        .bim-core-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        .bim-core-card {
          background: #f9f8ff; border: 1px solid #ede9ff; border-radius: 16px;
          padding: 28px 24px; transition: all 0.25s ease; display: flex; flex-direction: column;
        }
        .bim-core-card:hover {
          border-color: #ab8cf5; box-shadow: 0 10px 36px rgba(40,23,80,0.09);
          transform: translateY(-3px);
        }
        .bim-core-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(171,140,245,0.12); color: #ab8cf5;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .bim-core-title {
          font-size: 1rem; font-weight: 700; color: #0f0824; margin-bottom: 10px;
        }
        .bim-core-desc {
          font-size: 0.83rem; color: #6b6b80; line-height: 1.7; margin-bottom: 16px; flex: 1;
        }
        .bim-core-bullets {
          list-style: none; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;
        }
        .bim-core-bullets li {
          font-size: 0.8rem; color: #525252;
          display: flex; align-items: center; gap: 7px;
        }
        .bim-core-bullets li::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: #ab8cf5; flex-shrink: 0;
        }
        .bim-core-link {
          font-size: 0.8rem; font-weight: 700; color: #ab8cf5;
          display: inline-flex; align-items: center; gap: 5px;
          transition: gap 0.2s ease;
        }
        .bim-core-link:hover { gap: 8px; }

        /* ── Workflow ── */
        .bim-workflow { background: #f9f8ff; padding: 72px 48px; text-align: center; }
        .bim-workflow-steps {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0; position: relative; margin-top: 48px;
        }
        .bim-workflow-steps::before {
          content: ''; position: absolute; top: 26px;
          left: calc(12.5% + 16px); right: calc(12.5% + 16px);
          height: 2px; background: linear-gradient(90deg, #ab8cf5, #d8cafa, #ab8cf5);
        }
        .bim-wf-step { position: relative; z-index: 1; padding: 0 16px; text-align: center; }
        .bim-wf-num {
          width: 52px; height: 52px; border-radius: 50%;
          background: #281750; color: #ffffff; font-size: 0.78rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px; border: 3px solid #f9f8ff;
          box-shadow: 0 0 0 2px #ab8cf5;
        }
        .bim-wf-title { font-size: 0.9rem; font-weight: 700; color: #0f0824; margin-bottom: 6px; }
        .bim-wf-desc { font-size: 0.8rem; color: #6b6b80; line-height: 1.6; }

        /* ── Why Partner ── */
        .bim-why {
          padding: 80px 48px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        .bim-why-img {
          position: relative; border-radius: 16px; overflow: hidden;
          aspect-ratio: 4/3; box-shadow: 0 16px 48px rgba(40,23,80,0.12);
        }
        .bim-why-title {
          font-size: clamp(1.3rem, 2vw, 1.7rem); font-weight: 800;
          color: #0f0824; margin-bottom: 10px;
        }
        .bim-why-sub { font-size: 0.92rem; color: #6b6b80; margin-bottom: 24px; line-height: 1.75; }
        .bim-checklist { display: flex; flex-direction: column; gap: 12px; }
        .bim-check-item {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.88rem; color: #525252; line-height: 1.5;
        }
        .bim-check-item svg { color: #ab8cf5; flex-shrink: 0; margin-top: 2px; }

        @media (max-width: 960px) {
          .bim-hero { padding: 56px 20px 48px; }
          .bim-stats { grid-template-columns: 1fr; padding: 40px 20px; gap: 24px; }
          .bim-stat { border-right: none; border-bottom: 1px solid rgba(171,140,245,0.2); padding-bottom: 20px; }
          .bim-stat:last-child { border-bottom: none; }
          .bim-core { padding: 56px 20px; }
          .bim-core-grid { grid-template-columns: 1fr; }
          .bim-workflow { padding: 56px 20px; }
          .bim-workflow-steps { grid-template-columns: 1fr; gap: 28px; }
          .bim-workflow-steps::before { display: none; }
          .bim-why { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
        }
      `}</style>

      <div className="bim-page">
        {/* Hero */}
        <div className="bim-hero">
          <div className="bim-hero-eyebrow">BIM & Precision Engineering</div>
          <h1 className="bim-hero-title">Precision Engineering for Modern Construction</h1>
          <p className="bim-hero-desc">
            Accelerate project timelines with LOD 400 modeling, clash detection, and
            comprehensive construction documentation. We bridge the gap between design and build.
          </p>
          <Link href="/projects" className="bim-hero-btn">
            View Projects <FiArrowRight size={15} />
          </Link>
        </div>

        {/* Stats */}
        <div className="bim-stats">
          {stats.map((s) => (
            <div className="bim-stat" key={s.label}>
              <div className="bim-stat-num">{s.num}</div>
              <div className="bim-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Core Services */}
        <div className="bim-core">
          <div className="bim-section-title">Core Engineering Services</div>
          <div className="bim-section-sub">
            End-to-end BIM support tailored for architects, engineers, and fabricators.
          </div>
          <div className="bim-core-grid">
            {coreServices.map((s) => (
              <div className="bim-core-card" key={s.title}>
                <div className="bim-core-icon">{s.icon}</div>
                <div className="bim-core-title">{s.title}</div>
                <p className="bim-core-desc">{s.desc}</p>
                <ul className="bim-core-bullets">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <Link href="/contact" className="bim-core-link">
                  {s.link} <FiArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="bim-workflow">
          <div className="bim-section-title">Workflow Methodology</div>
          <div className="bim-section-sub">A structured approach to complex modeling challenges.</div>
          <div className="bim-workflow-steps">
            {workflow.map((w) => (
              <div className="bim-wf-step" key={w.num}>
                <div className="bim-wf-num">{w.num}</div>
                <div className="bim-wf-title">{w.title}</div>
                <div className="bim-wf-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner */}
        <div className="bim-why">
          <div className="bim-why-img">
            <Image src="/bim_image1.png" alt="BIM Engineering" fill style={{ objectFit: "cover" }} sizes="50vw" />
          </div>
          <div>
            <div className="bim-section-title">Why Partner with Vector Build BIM</div>
            <p className="bim-why-sub">
              We provide reliable Architectural, Structural, and MEP-HVAC BIM modeling and
              drafting services for residential, commercial, infrastructure, and industrial
              projects delivered to international standards.
            </p>
            <div className="bim-checklist">
              {whyUs.map((w) => (
                <div className="bim-check-item" key={w}>
                  <FiCheckCircle size={16} /> {w}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
