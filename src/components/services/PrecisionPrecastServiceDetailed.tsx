"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

const scopeItems = [
  { title: "Panel Detailing", desc: "Precast panel detailing (wall panels, sandwich panels, solid panels)" },
  { title: "Structural Elements", desc: "Structural precast elements: beams, columns, slabs, double tees, hollow core, stairs" },
  { title: "Connection Design", desc: "Connection detailing (weld plates, inserts, anchor systems, dowels)" },
  { title: "Embed Coordination", desc: "Embed detailing and coordinated embed lists" },
  { title: "Fabrication Drawings", desc: "Shop drawings for fabrication with dimensions, tolerances, lifting points" },
  { title: "Reinforcement Detailing", desc: "Reinforcement detailing and bar bending schedules" },
  { title: "3D BIM Modeling", desc: "3D precast modeling using Revit (LOD 300/400)" },
  { title: "Erection Layouts", desc: "Erection drawings and panel layout plans" },
  { title: "Cast-In Hardware", desc: "Cast-in hardware placement details" },
  { title: "Material Quantification", desc: "Material take-offs and production quantities" },
];

const workflow = [
  { num: "01", title: "Project Review", desc: "Analyze contract drawings and specifications to identify RFIs early." },
  { num: "02", title: "BIM Modeling", desc: "Develop precise 3D precast models, panelization, and piece marking." },
  { num: "03", title: "Detailing", desc: "Create reinforcement details, embeds, connections, and shop drawings." },
  { num: "04", title: "Quality Assurance", desc: "Verify models and drawings for accuracy and project compliance." },
  { num: "05", title: "Client Delivery", desc: "Deliver final IFC drawings after incorporating client review comments." },
];

const experience = [
  "Parking Structures", "Commercial & Office Buildings", "Stadiums & Arenas",
  "Residential Developments", "Healthcare Facilities",
  "Correctional Facilities / Modular Cells", "Warehouses & Distribution Centers",
];

export default function PrecisionPrecastServiceDetailed() {
  return (
    <>
      <style>{`
        .ppc { background: #0a0618; }

        /* Hero */
        .ppc-hero {
          padding: 96px 80px 80px; text-align: center;
          position: relative; overflow: hidden;
        }
        .ppc-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(171,140,245,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(171,140,245,0.05) 1px, transparent 1px);
          background-size: 60px 60px; pointer-events: none;
        }
        .ppc-hero-orb {
          position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 400px;
          background: radial-gradient(ellipse, rgba(171,140,245,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .ppc-hero-inner { position: relative; z-index: 1; }
        .ppc-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 20px;
        }
        .ppc-eyebrow::before, .ppc-eyebrow::after { content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px; }
        .ppc-hero-title {
          font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 900; color: #fff;
          letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 20px;
        }
        .ppc-hero-title span { background: linear-gradient(135deg,#ab8cf5,#d8cafa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ppc-hero-desc { font-size: 1.05rem; color: rgba(216,202,250,0.6); max-width: 540px; margin: 0 auto 36px; line-height: 1.8; }
        .ppc-hero-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #ab8cf5; color: #0a0618; font-size: 0.9rem; font-weight: 700;
          padding: 13px 28px; border-radius: 10px; transition: all 0.25s ease;
        }
        .ppc-hero-btn:hover { background: #d8cafa; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(171,140,245,0.4); }

        /* Intro */
        .ppc-intro { background: #fff; padding: 96px 80px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: center; }
        .ppc-section-eyebrow { display: flex; align-items: center; gap: 10px; font-size: 0.72rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #ab8cf5; margin-bottom: 14px; }
        .ppc-section-eyebrow::before { content: ''; width: 4px; height: 16px; background: #ab8cf5; border-radius: 2px; }
        .ppc-section-title { font-size: clamp(1.5rem, 2.5vw, 2.2rem); font-weight: 900; color: #0a0618; margin-bottom: 16px; letter-spacing: -0.5px; line-height: 1.1; }
        .ppc-intro-text { font-size: 0.95rem; color: #525252; line-height: 1.85; margin-bottom: 32px; }
        .ppc-mini-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .ppc-mini-stat {
          background: #0a0618; border-radius: 14px; padding: 24px 20px; text-align: center;
          position: relative; overflow: hidden;
        }
        .ppc-mini-stat::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #ab8cf5, transparent); }
        .ppc-mini-stat-num { font-size: 2rem; font-weight: 900; color: #fff; line-height: 1; margin-bottom: 6px; letter-spacing: -1px; }
        .ppc-mini-stat-num span { color: #ab8cf5; }
        .ppc-mini-stat-label { font-size: 0.75rem; color: rgba(216,202,250,0.6); font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }
        .ppc-intro-img { position: relative; border-radius: 20px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 32px 80px rgba(40,23,80,0.15); }

        /* Scope */
        .ppc-scope { background: #f9f8ff; padding: 96px 80px; }
        .ppc-scope-desc { font-size: 0.95rem; color: #525252; margin-bottom: 40px; line-height: 1.75; max-width: 600px; }
        .ppc-scope-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
        .ppc-scope-card {
          background: #fff; border: 1px solid #ede9ff; border-radius: 12px;
          padding: 20px 18px; transition: all 0.25s ease;
        }
        .ppc-scope-card:hover { border-color: #ab8cf5; box-shadow: 0 8px 28px rgba(40,23,80,0.08); transform: translateY(-3px); }
        .ppc-scope-num { font-size: 0.65rem; font-weight: 800; color: #ab8cf5; letter-spacing: 1px; margin-bottom: 8px; }
        .ppc-scope-card-title { font-size: 0.85rem; font-weight: 700; color: #281750; margin-bottom: 6px; }
        .ppc-scope-card-desc { font-size: 0.78rem; color: #6b6b80; line-height: 1.6; }

        /* Workflow */
        .ppc-workflow { background: #0a0618; padding: 96px 80px; text-align: center; position: relative; overflow: hidden; }
        .ppc-workflow::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(171,140,245,0.3), transparent); }
        .ppc-workflow-steps { display: grid; grid-template-columns: repeat(5,1fr); gap: 0; position: relative; margin-top: 56px; }
        .ppc-workflow-steps::before {
          content: ''; position: absolute; top: 26px;
          left: calc(10% + 16px); right: calc(10% + 16px);
          height: 1px; background: linear-gradient(90deg, #ab8cf5, rgba(171,140,245,0.3), #ab8cf5);
        }
        .ppc-wf-step { position: relative; z-index: 1; padding: 0 12px; text-align: center; }
        .ppc-wf-num {
          width: 52px; height: 52px; border-radius: 50%;
          background: #281750; color: #fff; font-size: 0.78rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          border: 2px solid rgba(171,140,245,0.4);
          box-shadow: 0 0 20px rgba(171,140,245,0.2);
        }
        .ppc-wf-title { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .ppc-wf-desc { font-size: 0.78rem; color: rgba(216,202,250,0.55); line-height: 1.6; }

        /* Experience */
        .ppc-exp { background: #fff; padding: 96px 80px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .ppc-exp-img { position: relative; border-radius: 20px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 32px 80px rgba(40,23,80,0.15); }
        .ppc-exp-desc { font-size: 0.95rem; color: #525252; line-height: 1.8; margin-bottom: 28px; }
        .ppc-checklist { display: flex; flex-direction: column; gap: 12px; }
        .ppc-check { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: #262626; font-weight: 500; }
        .ppc-check svg { color: #ab8cf5; flex-shrink: 0; }

        @media (max-width: 1024px) {
          .ppc-hero { padding: 72px 48px 64px; }
          .ppc-intro { padding: 72px 48px; gap: 48px; }
          .ppc-scope { padding: 72px 48px; }
          .ppc-scope-grid { grid-template-columns: repeat(2,1fr); }
          .ppc-workflow { padding: 72px 48px; }
          .ppc-workflow-steps { grid-template-columns: 1fr; gap: 28px; }
          .ppc-workflow-steps::before { display: none; }
          .ppc-exp { padding: 72px 48px; gap: 48px; }
        }
        @media (max-width: 768px) {
          .ppc-hero { padding: 64px 24px 48px; }
          .ppc-intro { grid-template-columns: 1fr; padding: 56px 24px; }
          .ppc-scope { padding: 56px 24px; }
          .ppc-scope-grid { grid-template-columns: 1fr; }
          .ppc-workflow { padding: 56px 24px; }
          .ppc-exp { grid-template-columns: 1fr; padding: 56px 24px; }
        }
      `}</style>

      <div className="ppc">
        <section className="ppc-hero">
          <div className="ppc-hero-grid" /><div className="ppc-hero-orb" />
          <motion.div className="ppc-hero-inner" initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            <div className="ppc-eyebrow">Precast Concrete</div>
            <h1 className="ppc-hero-title">Precision <span>Precast</span><br />Concrete Solutions</h1>
            <p className="ppc-hero-desc">Engineered for speed, durability, and architectural excellence. High-tolerance structural components manufactured in controlled environments.</p>
            <Link href="/contact" className="ppc-hero-btn">Get a Quote <FiArrowRight size={15}/></Link>
          </motion.div>
        </section>

        <section className="ppc-intro">
          <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="ppc-section-eyebrow">Precast Engineering</div>
            <h2 className="ppc-section-title">Precast Engineering & Detailing Services</h2>
            <p className="ppc-intro-text">We provide high-precision Precast Concrete Detailing Services for commercial, industrial, residential, infrastructure, and institutional projects worldwide. Our deliverables support design coordination, manufacturing, and site erection with full compliance to international standards.</p>
            <div className="ppc-mini-stats">
              <div className="ppc-mini-stat"><div className="ppc-mini-stat-num">40<span>%</span></div><div className="ppc-mini-stat-label">Faster Installation</div></div>
              <div className="ppc-mini-stat"><div className="ppc-mini-stat-num">Zero</div><div className="ppc-mini-stat-label">Weather Delays</div></div>
            </div>
          </motion.div>
          <motion.div className="ppc-intro-img" initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <Image src="/precision_image1.png" alt="Precast Engineering" fill style={{ objectFit:"cover" }} sizes="50vw" />
          </motion.div>
        </section>

        <section className="ppc-scope">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className="ppc-section-eyebrow">Scope of Services</div>
            <h2 className="ppc-section-title">What We Deliver</h2>
            <p className="ppc-scope-desc">We manufacture a diverse range of structural elements tailored to meet specific load requirements and architectural aesthetics.</p>
          </motion.div>
          <div className="ppc-scope-grid">
            {scopeItems.map((s, i) => (
              <motion.div key={s.title} className="ppc-scope-card" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay: i*0.05 }}>
                <div className="ppc-scope-num">0{i+1}</div>
                <div className="ppc-scope-card-title">{s.title}</div>
                <div className="ppc-scope-card-desc">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="ppc-workflow">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className="ppc-eyebrow">Process</div>
            <h2 className="ppc-section-title" style={{ color:"#fff" }}>Production Workflow</h2>
          </motion.div>
          <div className="ppc-workflow-steps">
            {workflow.map((w, i) => (
              <motion.div key={w.num} className="ppc-wf-step" initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay: i*0.1 }}>
                <div className="ppc-wf-num">{w.num}</div>
                <div className="ppc-wf-title">{w.title}</div>
                <div className="ppc-wf-desc">{w.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="ppc-exp">
          <motion.div className="ppc-exp-img" initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <Image src="/precision_image2.png" alt="Precast Experience" fill style={{ objectFit:"cover" }} sizes="50vw" />
          </motion.div>
          <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="ppc-section-eyebrow">Project Experience</div>
            <h2 className="ppc-section-title">Industries We Serve</h2>
            <p className="ppc-exp-desc">We have successfully contributed to a wide range of precast applications across multiple sectors.</p>
            <div className="ppc-checklist">
              {experience.map((e) => (
                <div className="ppc-check" key={e}><FiCheckCircle size={16}/> {e}</div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
