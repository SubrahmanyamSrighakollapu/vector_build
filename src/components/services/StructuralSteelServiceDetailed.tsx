import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiArrowRight, FiAward, FiShield, FiTool, FiZap } from "react-icons/fi";

const stats = [
  { num: "20k",  label: "Tons Erected" },
  { num: "100%", label: "Compliance" },
  { num: "0",    label: "Reportable Injuries" },
];

const certifications = [
  { icon: <FiAward size={16}/>,  title: "ISO 9001:2015",    sub: "Quality Management" },
  { icon: <FiShield size={16}/>, title: "AISC Certified",   sub: "Steel Construction" },
  { icon: <FiTool size={16}/>,   title: "ASTM Standards",   sub: "Material Compliance" },
  { icon: <FiZap size={16}/>,    title: "LEED Compliant",   sub: "Sustainability" },
];

const whyUs = [
  "International project exposure (USA, UK, Middle East, Australia, India)",
  "Reduced rework through clash-free modeling",
  "Optimized steel tonnage and fabrication efficiency",
  "Time-bound deliverables with strict quality compliance",
];

const services = [
  {
    title: "Structural Steel Detailing",
    bullets: ["Fabrication drawings (GA & single part drawings)", "Erection drawings & anchor bolt plans", "Shop bolt lists & material take-offs", "Connection detailing (bolted and welded)", "Miscellaneous steel detailing (stairs, handrails, platforms, ladders)"],
  },
  {
    title: "3D Modeling & BIM Coordination",
    bullets: ["Intelligent 3D modeling using Tekla Structures / Revit", "LOD 300–500 development", "Clash detection & interdisciplinary coordination", "Model-based quantity extraction"],
  },
  {
    title: "Connection Design Support",
    bullets: ["Design assistance based on AISC, Eurocode, BS, IS and other international standards", "Structural calculations for moment, shear, axial and base plate connections", "Seismic and wind-resisting connection detailing"],
  },
  {
    title: "Estimation & Quantity Take-Off",
    bullets: ["Advance material take-offs (MTO)", "Weight calculations & cost optimization", "Revision comparison reports"],
  },
  {
    title: "Project Execution & Quality Control",
    bullets: ["Multi-level internal QA/QC review process", "Compliance with client standards & fabrication tolerances", "RFI management & revision tracking", "Dedicated project coordination team"],
  },
];

const techCaps = [
  { num: "01", title: "Standards",         desc: "AISC, AWS, Eurocode (EN), BS, IS, AS/NZS" },
  { num: "02", title: "Software",          desc: "Tekla Structures, AutoCAD, Revit, Navisworks" },
  { num: "03", title: "File Deliverables", desc: "IFC, CNC (DSTV), NC1, PDFs, DWG formats" },
  { num: "04", title: "Integration",       desc: "Seamless integration with fabrication workflows" },
];

export default function StructuralSteelServiceDetailed() {
  return (
    <>
      <style>{`
        .ss { background: #ffffff; }

        /* ── Hero ── */
        .ss-hero {
          background: #f9f8ff; padding: 72px 48px 64px;
          text-align: center; border-bottom: 1px solid #ede9ff;
        }
        .ss-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 16px;
        }
        .ss-eyebrow::before, .ss-eyebrow::after {
          content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px;
        }
        .ss-hero-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900;
          color: #0f0824; letter-spacing: -0.8px; text-transform: uppercase; margin-bottom: 14px;
        }
        .ss-hero-desc {
          font-size: 1rem; color: #6b6b80; max-width: 540px;
          margin: 0 auto 28px; line-height: 1.75;
        }
        .ss-hero-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #281750; color: #fff; font-size: 0.88rem;
          font-weight: 700; padding: 12px 28px; border-radius: 10px; transition: all 0.22s ease;
        }
        .ss-hero-btn:hover { background: #ab8cf5; color: #281750; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(171,140,245,0.35); }

        /* ── Stats ── */
        .ss-stats-wrap { padding: 0 48px; }
        .ss-stats {
          background: #fff; border: 1px solid #ede9ff; border-radius: 16px;
          display: grid; grid-template-columns: auto repeat(3,1fr);
          overflow: hidden; box-shadow: 0 4px 24px rgba(40,23,80,0.07);
          margin-top: -32px; position: relative; z-index: 2;
        }
        .ss-stats-img {
          width: 80px; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg,#281750,#ab8cf5);
          padding: 20px;
        }
        .ss-stats-img svg { color: #fff; }
        .ss-stat {
          padding: 28px 20px; text-align: center;
          border-left: 1px solid #f0eeff;
        }
        .ss-stat-num { font-size: 2rem; font-weight: 900; color: #281750; line-height: 1; margin-bottom: 6px; }
        .ss-stat-label { font-size: 0.78rem; color: #a3a3a3; font-weight: 500; }

        /* ── Certs ── */
        .ss-certs {
          background: #281750; padding: 20px 48px;
          display: grid; grid-template-columns: repeat(4,1fr); gap: 0;
        }
        .ss-cert {
          display: flex; align-items: center; gap: 12px; padding: 16px 20px;
          border-right: 1px solid rgba(171,140,245,0.2);
        }
        .ss-cert:last-child { border-right: none; }
        .ss-cert-icon { color: #ab8cf5; flex-shrink: 0; }
        .ss-cert-title { font-size: 0.85rem; font-weight: 700; color: #fff; }
        .ss-cert-sub { font-size: 0.72rem; color: rgba(216,202,250,0.65); }

        /* ── Why ── */
        .ss-why {
          padding: 80px 48px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        .ss-section-label {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 12px;
        }
        .ss-section-label::before { content: ''; width: 4px; height: 16px; background: #ab8cf5; border-radius: 2px; }
        .ss-section-title { font-size: clamp(1.3rem,2vw,1.8rem); font-weight: 800; color: #0f0824; margin-bottom: 24px; }
        .ss-checklist { display: flex; flex-direction: column; gap: 12px; }
        .ss-check { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #525252; line-height: 1.5; }
        .ss-check svg { color: #ab8cf5; flex-shrink: 0; margin-top: 2px; }
        .ss-why-img { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 16px 48px rgba(40,23,80,0.12); }

        /* ── Services ── */
        .ss-services { background: #f9f8ff; padding: 72px 48px; }
        .ss-svc-intro { font-size: 0.92rem; color: #6b6b80; line-height: 1.75; margin-bottom: 36px; max-width: 800px; }
        .ss-svc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .ss-svc-card {
          background: #fff; border: 1px solid #ede9ff; border-radius: 14px;
          padding: 24px 20px; transition: all 0.22s ease;
        }
        .ss-svc-card:hover { border-color: #ab8cf5; box-shadow: 0 8px 28px rgba(40,23,80,0.08); transform: translateY(-3px); }
        .ss-svc-card-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(171,140,245,0.12); color: #ab8cf5;
          display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
          font-size: 0.85rem; font-weight: 800;
        }
        .ss-svc-card-title { font-size: 0.9rem; font-weight: 700; color: #281750; margin-bottom: 12px; }
        .ss-svc-bullets { display: flex; flex-direction: column; gap: 6px; }
        .ss-svc-bullet { font-size: 0.78rem; color: #6b6b80; display: flex; align-items: flex-start; gap: 7px; line-height: 1.5; }
        .ss-svc-bullet::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #ab8cf5; flex-shrink: 0; margin-top: 5px; }

        /* ── Tech Caps ── */
        .ss-tech { padding: 72px 48px; }
        .ss-tech-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-top: 36px; }
        .ss-tech-card {
          background: #f9f8ff; border: 1px solid #ede9ff; border-radius: 14px;
          padding: 24px 20px; transition: all 0.22s ease;
        }
        .ss-tech-card:hover { border-color: #ab8cf5; transform: translateY(-2px); }
        .ss-tech-num { font-size: 0.7rem; font-weight: 800; color: #ab8cf5; letter-spacing: 1px; margin-bottom: 10px; }
        .ss-tech-title { font-size: 0.9rem; font-weight: 700; color: #0f0824; margin-bottom: 6px; }
        .ss-tech-desc { font-size: 0.8rem; color: #6b6b80; line-height: 1.6; }

        @media (max-width: 960px) {
          .ss-hero { padding: 56px 20px 48px; }
          .ss-stats-wrap { padding: 0 20px; }
          .ss-stats { grid-template-columns: repeat(3,1fr); }
          .ss-stats-img { display: none; }
          .ss-certs { grid-template-columns: repeat(2,1fr); padding: 16px 20px; }
          .ss-cert:nth-child(2) { border-right: none; }
          .ss-cert:nth-child(3) { border-top: 1px solid rgba(171,140,245,0.2); }
          .ss-why { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
          .ss-services { padding: 56px 20px; }
          .ss-svc-grid { grid-template-columns: 1fr 1fr; }
          .ss-tech { padding: 56px 20px; }
          .ss-tech-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 560px) {
          .ss-svc-grid { grid-template-columns: 1fr; }
          .ss-tech-grid { grid-template-columns: 1fr; }
          .ss-certs { grid-template-columns: 1fr; }
          .ss-cert { border-right: none; border-bottom: 1px solid rgba(171,140,245,0.2); }
        }
      `}</style>

      <div className="ss">
        {/* Hero */}
        <div className="ss-hero">
          <div className="ss-eyebrow">Structural Steel</div>
          <h1 className="ss-hero-title">Structural Steel Division</h1>
          <p className="ss-hero-desc">
            Bridging the gap between digital precision and physical reality. We deliver
            end-to-end structural engineering for complex industrial and commercial projects.
          </p>
          <Link href="/projects" className="ss-hero-btn">View Projects <FiArrowRight size={15}/></Link>
        </div>

        {/* Stats card */}
        <div className="ss-stats-wrap">
          <div className="ss-stats">
            <div className="ss-stats-img"><FiTool size={28}/></div>
            {stats.map((s) => (
              <div className="ss-stat" key={s.label}>
                <div className="ss-stat-num">{s.num}</div>
                <div className="ss-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications bar */}
        <div className="ss-certs" style={{ marginTop: 32 }}>
          {certifications.map((c) => (
            <div className="ss-cert" key={c.title}>
              <div className="ss-cert-icon">{c.icon}</div>
              <div>
                <div className="ss-cert-title">{c.title}</div>
                <div className="ss-cert-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="ss-why">
          <div>
            <div className="ss-section-label">Why Choose Us</div>
            <h2 className="ss-section-title">Global Expertise, Local Precision</h2>
            <div className="ss-checklist">
              {whyUs.map((w) => (
                <div className="ss-check" key={w}><FiCheckCircle size={16}/> {w}</div>
              ))}
            </div>
          </div>
          <div className="ss-why-img">
            <Image src="/structural-steel.png" alt="Structural Steel" fill style={{ objectFit: "cover" }} sizes="50vw"/>
          </div>
        </div>

        {/* Our Services */}
        <div className="ss-services">
          <div className="ss-section-label">Our Services</div>
          <h2 className="ss-section-title">End-to-End Steel Detailing</h2>
          <p className="ss-svc-intro">
            We deliver high-precision structural steel detailing and engineering solutions
            tailored to international construction standards and project requirements. Our
            services support fabricators, contractors, and EPC firms across commercial,
            industrial, infrastructure, and residential sectors.
          </p>
          <div className="ss-svc-grid">
            {services.map((s, i) => (
              <div className="ss-svc-card" key={s.title}>
                <div className="ss-svc-card-icon">{String.fromCharCode(65 + i)}</div>
                <div className="ss-svc-card-title">{s.title}</div>
                <div className="ss-svc-bullets">
                  {s.bullets.map((b) => <div className="ss-svc-bullet" key={b}>{b}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Capabilities */}
        <div className="ss-tech">
          <div className="ss-section-label">Technical Capabilities</div>
          <h2 className="ss-section-title">Built on Industry Standards</h2>
          <div className="ss-tech-grid">
            {techCaps.map((t) => (
              <div className="ss-tech-card" key={t.num}>
                <div className="ss-tech-num">{t.num}</div>
                <div className="ss-tech-title">{t.title}</div>
                <div className="ss-tech-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
