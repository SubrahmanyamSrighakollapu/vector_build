"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

const scope = [
  { title: "IFC-Based Detailing",      desc: "Structural reinforcement detailing from IFC" },
  { title: "2D Shop Drawings",         desc: "Preparation of fully coordinated 2D reinforcement shop drawings" },
  { title: "3D Rebar Modeling",        desc: "Advanced 3D rebar modeling using Revit Structures" },
  { title: "BBS Preparation",          desc: "Bar Bending Schedules (BBS) with shape codes, cutting tag lengths, and weight calculations" },
  { title: "Element Detailing",        desc: "Slab, beam, column, wall, footing, pile cap, staircase, and foundation detailing" },
  { title: "Splice Optimization",      desc: "Splice optimization and material take-off (MTO) reports" },
  { title: "CNC-Ready Drawings",       desc: "Fabrication-ready drawings compatible with CNC rebar cutting & bending systems" },
];

const capabilities = [
  {
    title: "2D & 3D Rebar Detailing",
    desc: "Comprehensive placement drawings and shop drawings. We model rebar in 3D to detect clashes before they happen on site.",
    bullets: ["Foundation & Footing Details", "Complex Mesh Configurations", "Retaining Wall Schematics"],
    link: "Estimation Speed · Fast Track",
  },
  {
    title: "Bar Bending Schedules (BBS)",
    desc: "Automated generation of cut and bent lists directly from the 3D model. Eliminates material waste and fabrication errors.",
    bullets: ["Optimized Cutting Patterns", "Shape Code Verification", "Tagging & Labelling Systems"],
    link: null,
  },
  {
    title: "Quantity Estimation",
    desc: "Precise material take-offs for bidding and procurement. We help you order exactly what you need with <1% variance.",
    bullets: [],
    link: null,
  },
  {
    title: "Pre-construction Engineering",
    desc: "Identify constructability issues early. We review structural drawings for RFI generation and value engineering opportunities.",
    bullets: [],
    link: "PE Licensed Engineers Review",
  },
];

const standards = [
  "ACI (American Concrete Institute)",
  "BS & Eurocode Standards",
  "IS Codes (India)",
  "ASTM specifications (as project-required)",
];

const qualityPoints = [
  "Strict compliance with project specifications and regional design codes",
  "Internal QA/QC review process before submission",
  "RFIs (Request for Information) management support",
  "Revision control and cloud-based collaboration workflow",
];

const deliverables = [
  { format: "PDF, DWG, BWG",       detail: "LOD 300 – 400",    codes: "ACI 318, Eurocode 2", revisions: "Unlimited" },
  { format: "IFC, NWD (Navisworks)",detail: "LOD 350 – 400",   codes: "BS 8666:2020",        revisions: "Included" },
  { format: "Excel, CSV (BBS)",     detail: "Fabrication Ready",codes: "Custom Standards",    revisions: "On Request" },
];

export default function ReberServiceDetailed() {
  return (
    <>
      <style>{`
        .rb { background: #0a0618; }
        .rb-hero {
          background: #0a0618; padding: 96px 80px 80px;
          text-align: center; position: relative; overflow: hidden;
        }
        .rb-hero::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(171,140,245,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(171,140,245,0.05) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
        .rb-hero::after { content: ''; position: absolute; top: -60px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(171,140,245,0.12) 0%, transparent 70%); pointer-events: none; }
        .rb-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 16px;
        }
        .rb-eyebrow::before, .rb-eyebrow::after { content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px; }
        .rb-hero-title { font-size: clamp(2rem,4vw,3.5rem); font-weight: 900; color: #fff; letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 20px; }
        .rb-hero-desc { font-size: 1.05rem; color: rgba(216,202,250,0.6); max-width: 540px; margin: 0 auto 36px; line-height: 1.8; }
        .rb-hero-btn { display: inline-flex; align-items: center; gap: 8px; background: #ab8cf5; color: #0a0618; font-size: 0.9rem; font-weight: 700; padding: 13px 28px; border-radius: 10px; transition: all 0.25s ease; position: relative; z-index: 1; }
        .rb-hero-btn:hover { background: #d8cafa; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(171,140,245,0.4); }

        .rb-hero-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 0.72rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #ab8cf5; margin-bottom: 20px; position: relative; z-index: 1; }
        .rb-hero-eyebrow::before, .rb-hero-eyebrow::after { content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px; }
        .rb-hero-title, .rb-hero-desc, .rb-hero-btn { position: relative; z-index: 1; }
        /* badges bar */
        .rb-badges {
          background: #281750; padding: 16px 48px;
          display: flex; align-items: center; justify-content: center; gap: 48px; flex-wrap: wrap;
        }
        .rb-badge { display: flex; align-items: center; gap: 8px; color: #d8cafa; font-size: 0.85rem; font-weight: 600; }
        .rb-badge svg { color: #ab8cf5; }

        /* scope */
        .rb-scope { padding: 72px 48px; }
        .rb-section-label {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 12px;
        }
        .rb-section-label::before { content: ''; width: 4px; height: 16px; background: #ab8cf5; border-radius: 2px; }
        .rb-section-title { font-size: clamp(1.3rem,2vw,1.8rem); font-weight: 800; color: #0f0824; margin-bottom: 8px; }
        .rb-section-sub { font-size: 0.92rem; color: #6b6b80; margin-bottom: 32px; }
        .rb-scope-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
        .rb-scope-card {
          background: #f9f8ff; border: 1px solid #ede9ff; border-radius: 12px;
          padding: 18px 16px; transition: all 0.22s ease;
        }
        .rb-scope-card:hover { border-color: #ab8cf5; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(40,23,80,0.07); }
        .rb-scope-title { font-size: 0.85rem; font-weight: 700; color: #281750; margin-bottom: 6px; }
        .rb-scope-desc { font-size: 0.78rem; color: #6b6b80; line-height: 1.6; }

        /* standards + image */
        .rb-standards {
          padding: 72px 48px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
          background: #f9f8ff;
        }
        .rb-standards-text { font-size: 0.92rem; color: #6b6b80; line-height: 1.8; margin-bottom: 20px; }
        .rb-std-list { display: flex; flex-direction: column; gap: 10px; margin-top: 16px; }
        .rb-std-item { display: flex; align-items: center; gap: 8px; font-size: 0.88rem; color: #525252; }
        .rb-std-item::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #ab8cf5; flex-shrink: 0; }
        .rb-std-img { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 16px 48px rgba(40,23,80,0.12); }

        /* capabilities */
        .rb-caps { padding: 72px 48px; }
        .rb-caps-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; margin-top: 32px; }
        .rb-cap-card {
          background: #f9f8ff; border: 1px solid #ede9ff; border-radius: 14px;
          padding: 24px 22px; transition: all 0.22s ease;
        }
        .rb-cap-card:hover { border-color: #ab8cf5; box-shadow: 0 8px 28px rgba(40,23,80,0.08); transform: translateY(-3px); }
        .rb-cap-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(171,140,245,0.12); color: #ab8cf5;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem; font-weight: 800; margin-bottom: 14px;
        }
        .rb-cap-title { font-size: 0.92rem; font-weight: 700; color: #281750; margin-bottom: 8px; }
        .rb-cap-desc { font-size: 0.82rem; color: #6b6b80; line-height: 1.65; margin-bottom: 12px; }
        .rb-cap-bullets { display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px; }
        .rb-cap-bullet { font-size: 0.78rem; color: #525252; display: flex; align-items: center; gap: 7px; }
        .rb-cap-bullet::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #ab8cf5; flex-shrink: 0; }
        .rb-cap-link { font-size: 0.78rem; font-weight: 700; color: #ab8cf5; }

        /* quality */
        .rb-quality {
          padding: 72px 48px; background: #f9f8ff;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        .rb-quality-img { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 16px 48px rgba(40,23,80,0.12); }
        .rb-quality-text { font-size: 0.92rem; color: #6b6b80; line-height: 1.75; margin-bottom: 24px; }
        .rb-checklist { display: flex; flex-direction: column; gap: 12px; }
        .rb-check { display: flex; align-items: flex-start; gap: 10px; font-size: 0.88rem; color: #525252; line-height: 1.5; }
        .rb-check svg { color: #ab8cf5; flex-shrink: 0; margin-top: 2px; }

        /* deliverables table */
        .rb-deliverables { padding: 72px 48px; }
        .rb-table { width: 100%; border-collapse: collapse; margin-top: 28px; border-radius: 12px; overflow: hidden; border: 1px solid #ede9ff; }
        .rb-table th {
          background: #281750; color: #d8cafa; font-size: 0.8rem; font-weight: 700;
          padding: 14px 20px; text-align: left; letter-spacing: 0.5px;
        }
        .rb-table td { padding: 14px 20px; font-size: 0.85rem; color: #525252; border-bottom: 1px solid #f0eeff; }
        .rb-table tr:last-child td { border-bottom: none; }
        .rb-table tr:hover td { background: #faf8ff; }

        @media (max-width: 960px) {
          .rb-hero { padding: 56px 20px 48px; }
          .rb-badges { padding: 16px 20px; gap: 24px; }
          .rb-scope { padding: 56px 20px; }
          .rb-scope-grid { grid-template-columns: repeat(2,1fr); }
          .rb-standards { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
          .rb-caps { padding: 56px 20px; }
          .rb-caps-grid { grid-template-columns: 1fr; }
          .rb-quality { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
          .rb-deliverables { padding: 56px 20px; }
          .rb-table { font-size: 0.78rem; }
          .rb-table th, .rb-table td { padding: 10px 12px; }
        }
        @media (max-width: 560px) {
          .rb-scope-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="rb">
        <div className="rb-hero">
          <div className="rb-hero-eyebrow">Rebar Detailing</div>
          <h1 className="rb-hero-title">Rebar Detailing &amp; Reinforcement Service</h1>
          <p className="rb-hero-desc">
            High-precision structural detailing for complex concrete projects. We deliver
            accurate shop drawings, Bar Bending Schedules (BBS), and placement drawings
            with industry-leading turnaround times.
          </p>
          <Link href="/projects" className="rb-hero-btn">View Projects <FiArrowRight size={15}/></Link>
        </div>

        <div className="rb-badges">
          {["99.9% Accuracy Rate", "ACI / BS / Eurocode Compliant", "24h Rush Available"].map((b) => (
            <div className="rb-badge" key={b}><FiCheckCircle size={15}/> {b}</div>
          ))}
        </div>

        <div className="rb-scope">
          <div className="rb-section-label">Scope of Services</div>
          <h2 className="rb-section-title">Comprehensive Rebar Detailing</h2>
          <div className="rb-scope-grid">
            {scope.map((s) => (
              <div className="rb-scope-card" key={s.title}>
                <div className="rb-scope-title">{s.title}</div>
                <div className="rb-scope-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rb-standards">
          <div>
            <div className="rb-section-label">International Standards</div>
            <h2 className="rb-section-title">Globally Compliant Detailing</h2>
            <p className="rb-standards-text">
              We provide comprehensive, standards-compliant Rebar Detailing Services for
              residential, commercial, high-rise, industrial, and infrastructure projects
              worldwide. Our deliverables are prepared in accordance with international
              codes such as:
            </p>
            <div className="rb-std-list">
              {standards.map((s) => <div className="rb-std-item" key={s}>{s}</div>)}
            </div>
          </div>
          <div className="rb-std-img">
            <Image src="/reber.png" alt="Rebar Detailing" fill style={{ objectFit: "cover" }} sizes="50vw"/>
          </div>
        </div>

        <div className="rb-caps">
          <div className="rb-section-label">Reinforcement Capabilities</div>
          <h2 className="rb-section-title">Detailed to Construction Standards</h2>
          <div className="rb-caps-grid">
            {capabilities.map((c, i) => (
              <div className="rb-cap-card" key={c.title}>
                <div className="rb-cap-icon">{String.fromCharCode(65 + i)}</div>
                <div className="rb-cap-title">{c.title}</div>
                <p className="rb-cap-desc">{c.desc}</p>
                {c.bullets.length > 0 && (
                  <div className="rb-cap-bullets">
                    {c.bullets.map((b) => <div className="rb-cap-bullet" key={b}>{b}</div>)}
                  </div>
                )}
                {c.link && <div className="rb-cap-link">{c.link}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="rb-quality">
          <div className="rb-quality-img">
            <Image src="/structural-steel.png" alt="Quality & Coordination" fill style={{ objectFit: "cover" }} sizes="50vw"/>
          </div>
          <div>
            <div className="rb-section-label">Quality & Coordination</div>
            <h2 className="rb-section-title">Zero-Error Delivery Process</h2>
            <p className="rb-quality-text">
              Our detailing approach focuses on constructability, steel optimization,
              minimized wastage, and reduced site conflicts — ensuring smooth fabrication
              and faster on-site reinforcement placement.
            </p>
            <div className="rb-checklist">
              {qualityPoints.map((q) => (
                <div className="rb-check" key={q}><FiCheckCircle size={16}/> {q}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="rb-deliverables">
          <div className="rb-section-label">Deliverable Standards</div>
          <h2 className="rb-section-title">What You Receive</h2>
          <table className="rb-table">
            <thead>
              <tr>
                <th>Output Format</th>
                <th>Detail Level</th>
                <th>Codes Supported</th>
                <th>Revisions</th>
              </tr>
            </thead>
            <tbody>
              {deliverables.map((d) => (
                <tr key={d.format}>
                  <td>{d.format}</td>
                  <td>{d.detail}</td>
                  <td>{d.codes}</td>
                  <td>{d.revisions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
