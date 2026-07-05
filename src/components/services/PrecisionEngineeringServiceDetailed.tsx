"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight, FiEdit3, FiAlertTriangle, FiFileText } from "react-icons/fi";

const coreServices = [
  { icon: <FiEdit3 size={20}/>, title: "Drafting & Modeling", desc: "From 2D sketches to complex 3D parametric models. We convert legacy PDFs into intelligent Revit families and project files.", bullets: ["Shop Drawings", "As-Built Modeling", "Parametric Family Creation"], link: "Explore Drafting" },
  { icon: <FiAlertTriangle size={20}/>, title: "Clash Detection", desc: "Identify and resolve interdisciplinary conflicts before construction begins. Save costs by preventing on-site rework.", bullets: ["Automated Reports", "MEP Coordination", "Constructability Review"], link: "View Analysis Tools" },
  { icon: <FiFileText size={20}/>, title: "Construction Docs", desc: "Generate comprehensive drawing sets for permitting, fabrication, and installation. Precision down to the millimeter.", bullets: ["Permit Sets", "Fabrication Details", "Material Takeoffs (BOM)"], link: "See Documentation" },
];
const workflow = [
  { num: "01", title: "Scan / Input", desc: "Ingesting point clouds, PDF sketches, or legacy CAD files." },
  { num: "02", title: "Model", desc: "Developing geometry and adding parametric data (LOD 300+)." },
  { num: "03", title: "Coordinate", desc: "Running clash detection and resolving interdisciplinary conflicts." },
  { num: "04", title: "Deliver", desc: "Exporting drawings sets, schedules, and federated models." },
];
const whyUs = [
  "Trusted by leading contractors and MEP firms across North America",
  "Experienced team with 10+ years average expertise",
  "Advanced technology and proven BIM workflows",
  "AISC, ISO, and ACI certified with 2200+ projects delivered",
  "24/7 support with cost-effective solutions",
];
const stats = [
  { num: "20+", label: "Projects Delivered" },
  { num: "LOD 500", label: "Max Detail Level" },
  { num: "24h", label: "Support Turnaround" },
];

export default function PrecisionEngineeringServiceDetailed() {
  return (
    <>
      <style>{`
        .bim { background: #0a0618; }

        /* Hero */
        .bim-hero { padding: 96px 80px 80px; text-align: center; position: relative; overflow: hidden; }
        .bim-hero::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(171,140,245,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(171,140,245,0.05) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
        .bim-hero::after { content: ''; position: absolute; top: -60px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(171,140,245,0.12) 0%, transparent 70%); pointer-events: none; }
        .bim-hero-inner { position: relative; z-index: 1; }
        .bim-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 0.72rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #ab8cf5; margin-bottom: 20px; }
        .bim-eyebrow::before, .bim-eyebrow::after { content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px; }
        .bim-hero-title { font-size: clamp(2rem,4vw,3.5rem); font-weight: 900; color: #fff; letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 20px; }
        .bim-hero-title span { background: linear-gradient(135deg,#ab8cf5,#d8cafa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .bim-hero-desc { font-size: 1.05rem; color: rgba(216,202,250,0.6); max-width: 540px; margin: 0 auto 36px; line-height: 1.8; }
        .bim-hero-btn { display: inline-flex; align-items: center; gap: 8px; background: #ab8cf5; color: #0a0618; font-size: 0.9rem; font-weight: 700; padding: 13px 28px; border-radius: 10px; transition: all 0.25s ease; }
        .bim-hero-btn:hover { background: #d8cafa; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(171,140,245,0.4); }

        /* Stats */
        .bim-stats-row { background: #fff; display: grid; grid-template-columns: repeat(3,1fr); }
        .bim-stat { padding: 32px 24px; text-align: center; border-right: 1px solid #f0eeff; position: relative; }
        .bim-stat::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #ab8cf5, transparent); }
        .bim-stat:last-child { border-right: none; }
        .bim-stat-num { font-size: 2.2rem; font-weight: 900; color: #0a0618; line-height: 1; margin-bottom: 6px; letter-spacing: -1px; }
        .bim-stat-label { font-size: 0.75rem; color: #a3a3a3; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }

        /* Core Services */
        .bim-core { background: #f9f8ff; padding: 96px 80px; }
        .bim-section-eyebrow { display: flex; align-items: center; gap: 10px; font-size: 0.72rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #ab8cf5; margin-bottom: 14px; }
        .bim-section-eyebrow::before { content: ''; width: 4px; height: 16px; background: #ab8cf5; border-radius: 2px; }
        .bim-section-title { font-size: clamp(1.5rem,2.5vw,2.2rem); font-weight: 900; color: #0a0618; margin-bottom: 16px; letter-spacing: -0.5px; line-height: 1.1; }
        .bim-section-sub { font-size: 0.95rem; color: #525252; margin-bottom: 40px; line-height: 1.75; max-width: 600px; }
        .bim-core-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .bim-core-card { background: #fff; border: 1px solid #ede9ff; border-radius: 16px; padding: 28px 24px; transition: all 0.25s ease; display: flex; flex-direction: column; }
        .bim-core-card:hover { border-color: #ab8cf5; box-shadow: 0 12px 36px rgba(40,23,80,0.09); transform: translateY(-4px); }
        .bim-core-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(171,140,245,0.1); border: 1px solid rgba(171,140,245,0.2); color: #ab8cf5; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; transition: all 0.25s ease; }
        .bim-core-card:hover .bim-core-icon { background: #ab8cf5; color: #0a0618; border-color: #ab8cf5; }
        .bim-core-title { font-size: 1rem; font-weight: 700; color: #0a0618; margin-bottom: 10px; }
        .bim-core-desc { font-size: 0.85rem; color: #6b6b80; line-height: 1.7; margin-bottom: 16px; flex: 1; }
        .bim-core-bullets { list-style: none; display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
        .bim-core-bullets li { font-size: 0.8rem; color: #525252; display: flex; align-items: center; gap: 7px; }
        .bim-core-bullets li::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #ab8cf5; flex-shrink: 0; }
        .bim-core-link { font-size: 0.8rem; font-weight: 700; color: #ab8cf5; display: inline-flex; align-items: center; gap: 5px; transition: gap 0.2s ease; }
        .bim-core-link:hover { gap: 9px; }

        /* Workflow */
        .bim-workflow { background: #0a0618; padding: 96px 80px; text-align: center; position: relative; overflow: hidden; }
        .bim-workflow::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(171,140,245,0.3), transparent); }
        .bim-workflow-steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; position: relative; margin-top: 56px; }
        .bim-workflow-steps::before { content: ''; position: absolute; top: 26px; left: calc(12.5% + 16px); right: calc(12.5% + 16px); height: 1px; background: linear-gradient(90deg, #ab8cf5, rgba(171,140,245,0.3), #ab8cf5); }
        .bim-wf-step { position: relative; z-index: 1; padding: 0 16px; text-align: center; }
        .bim-wf-num { width: 52px; height: 52px; border-radius: 50%; background: #281750; color: #fff; font-size: 0.78rem; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; border: 2px solid rgba(171,140,245,0.4); box-shadow: 0 0 20px rgba(171,140,245,0.2); }
        .bim-wf-title { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .bim-wf-desc { font-size: 0.78rem; color: rgba(216,202,250,0.55); line-height: 1.6; }

        /* Why */
        .bim-why { background: #fff; padding: 96px 80px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .bim-why-img { position: relative; border-radius: 20px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 32px 80px rgba(40,23,80,0.15); }
        .bim-why-sub { font-size: 0.95rem; color: #525252; margin-bottom: 28px; line-height: 1.8; }
        .bim-checklist { display: flex; flex-direction: column; gap: 14px; }
        .bim-check { display: flex; align-items: flex-start; gap: 12px; font-size: 0.92rem; color: #525252; line-height: 1.6; }
        .bim-check svg { color: #ab8cf5; flex-shrink: 0; margin-top: 2px; }

        @media (max-width: 1024px) {
          .bim-hero { padding: 72px 48px 64px; }
          .bim-core { padding: 72px 48px; }
          .bim-core-grid { grid-template-columns: 1fr 1fr; }
          .bim-workflow { padding: 72px 48px; }
          .bim-workflow-steps { grid-template-columns: repeat(2,1fr); gap: 32px; }
          .bim-workflow-steps::before { display: none; }
          .bim-why { padding: 72px 48px; gap: 48px; }
        }
        @media (max-width: 768px) {
          .bim-hero { padding: 64px 24px 48px; }
          .bim-stats-row { grid-template-columns: 1fr; }
          .bim-stat { border-right: none; border-bottom: 1px solid #f0eeff; }
          .bim-core { padding: 56px 24px; }
          .bim-core-grid { grid-template-columns: 1fr; }
          .bim-workflow { padding: 56px 24px; }
          .bim-workflow-steps { grid-template-columns: 1fr; gap: 28px; }
          .bim-why { grid-template-columns: 1fr; padding: 56px 24px; }
        }
      `}</style>

      <div className="bim">
        <section className="bim-hero">
          <motion.div className="bim-hero-inner" initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            <div className="bim-eyebrow">BIM &amp; Precision Engineering</div>
            <h1 className="bim-hero-title">Precision <span>Engineering</span><br />for Modern Construction</h1>
            <p className="bim-hero-desc">Accelerate project timelines with LOD 400 modeling, clash detection, and comprehensive construction documentation. We bridge the gap between design and build.</p>
            <Link href="/contact" className="bim-hero-btn">Get a Quote <FiArrowRight size={15}/></Link>
          </motion.div>
        </section>

        <div className="bim-stats-row">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="bim-stat" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}>
              <div className="bim-stat-num">{s.num}</div>
              <div className="bim-stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <section className="bim-core">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className="bim-section-eyebrow">Core Services</div>
            <h2 className="bim-section-title">End-to-End BIM Support</h2>
            <p className="bim-section-sub">Tailored for architects, engineers, and fabricators across commercial, industrial, and infrastructure sectors.</p>
          </motion.div>
          <div className="bim-core-grid">
            {coreServices.map((s, i) => (
              <motion.div key={s.title} className="bim-core-card" initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}>
                <div className="bim-core-icon">{s.icon}</div>
                <div className="bim-core-title">{s.title}</div>
                <p className="bim-core-desc">{s.desc}</p>
                <ul className="bim-core-bullets">{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <Link href="/contact" className="bim-core-link">{s.link} <FiArrowRight size={12}/></Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bim-workflow">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className="bim-eyebrow">Workflow</div>
            <h2 className="bim-section-title" style={{ color:"#fff" }}>Workflow Methodology</h2>
          </motion.div>
          <div className="bim-workflow-steps">
            {workflow.map((w, i) => (
              <motion.div key={w.num} className="bim-wf-step" initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}>
                <div className="bim-wf-num">{w.num}</div>
                <div className="bim-wf-title">{w.title}</div>
                <div className="bim-wf-desc">{w.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bim-why">
          <motion.div className="bim-why-img" initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <Image src="/bim-consulting.png" alt="BIM Engineering" fill style={{ objectFit:"cover" }} sizes="50vw"/>
          </motion.div>
          <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="bim-section-eyebrow">Why Partner With Us</div>
            <h2 className="bim-section-title">Why Partner with Build Right Tech BIM</h2>
            <p className="bim-why-sub">We provide reliable Architectural, Structural, and MEP-HVAC BIM modeling and drafting services for residential, commercial, infrastructure, and industrial projects delivered to international standards.</p>
            <div className="bim-checklist">
              {whyUs.map((w) => <div className="bim-check" key={w}><FiCheckCircle size={16}/> {w}</div>)}
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
