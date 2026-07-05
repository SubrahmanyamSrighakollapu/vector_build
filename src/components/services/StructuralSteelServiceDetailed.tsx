"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight, FiAward, FiShield, FiTool, FiZap } from "react-icons/fi";

const stats = [
  { num: "20k", label: "Tons Erected" },
  { num: "100%", label: "Compliance" },
  { num: "0", label: "Reportable Injuries" },
];
const certifications = [
  { icon: <FiAward size={16}/>, title: "ISO 9001:2015", sub: "Quality Management" },
  { icon: <FiShield size={16}/>, title: "AISC Certified", sub: "Steel Construction" },
  { icon: <FiTool size={16}/>, title: "ASTM Standards", sub: "Material Compliance" },
  { icon: <FiZap size={16}/>, title: "LEED Compliant", sub: "Sustainability" },
];
const whyUs = [
  "International project exposure (USA, UK, Middle East, Australia, India)",
  "Reduced rework through clash-free modeling",
  "Optimized steel tonnage and fabrication efficiency",
  "Time-bound deliverables with strict quality compliance",
];
const services = [
  { title: "Structural Steel Detailing", bullets: ["Fabrication drawings (GA & single part drawings)", "Erection drawings & anchor bolt plans", "Shop bolt lists & material take-offs", "Connection detailing (bolted and welded)"] },
  { title: "3D Modeling & BIM Coordination", bullets: ["Intelligent 3D modeling using Tekla Structures / Revit", "LOD 300–500 development", "Clash detection & interdisciplinary coordination", "Model-based quantity extraction"] },
  { title: "Connection Design Support", bullets: ["Design assistance based on AISC, Eurocode, BS, IS", "Structural calculations for moment, shear, axial connections", "Seismic and wind-resisting connection detailing"] },
  { title: "Estimation & Quantity Take-Off", bullets: ["Advance material take-offs (MTO)", "Weight calculations & cost optimization", "Revision comparison reports"] },
  { title: "Project Execution & QC", bullets: ["Multi-level internal QA/QC review process", "Compliance with client standards & fabrication tolerances", "RFI management & revision tracking"] },
];
const techCaps = [
  { num: "01", title: "Standards", desc: "AISC, AWS, Eurocode (EN), BS, IS, AS/NZS" },
  { num: "02", title: "Software", desc: "Tekla Structures, AutoCAD, Revit, Navisworks" },
  { num: "03", title: "File Deliverables", desc: "IFC, CNC (DSTV), NC1, PDFs, DWG formats" },
  { num: "04", title: "Integration", desc: "Seamless integration with fabrication workflows" },
];

const fadeIn = (delay = 0) => ({ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" as const } } });

export default function StructuralSteelServiceDetailed() {
  return (
    <>
      <style>{`
        .ss2 { background: #0a0618; }
        .ss2-hero { padding: 96px 80px 80px; text-align: center; position: relative; overflow: hidden; }
        .ss2-hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(171,140,245,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(171,140,245,0.05) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
        .ss2-hero-orb { position: absolute; top: -60px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(171,140,245,0.12) 0%, transparent 70%); pointer-events: none; }
        .ss2-hero-inner { position: relative; z-index: 1; }
        .ss2-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 0.72rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #ab8cf5; margin-bottom: 20px; }
        .ss2-eyebrow::before, .ss2-eyebrow::after { content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px; }
        .ss2-hero-title { font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 900; color: #fff; letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 20px; }
        .ss2-hero-title span { background: linear-gradient(135deg,#ab8cf5,#d8cafa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ss2-hero-desc { font-size: 1.05rem; color: rgba(216,202,250,0.6); max-width: 540px; margin: 0 auto 36px; line-height: 1.8; }
        .ss2-hero-btn { display: inline-flex; align-items: center; gap: 8px; background: #ab8cf5; color: #0a0618; font-size: 0.9rem; font-weight: 700; padding: 13px 28px; border-radius: 10px; transition: all 0.25s ease; }
        .ss2-hero-btn:hover { background: #d8cafa; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(171,140,245,0.4); }

        /* Stats */
        .ss2-stats-row { background: #fff; display: grid; grid-template-columns: repeat(3,1fr); }
        .ss2-stat { padding: 32px 24px; text-align: center; border-right: 1px solid #f0eeff; position: relative; }
        .ss2-stat::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #ab8cf5, transparent); }
        .ss2-stat:last-child { border-right: none; }
        .ss2-stat-num { font-size: 2.4rem; font-weight: 900; color: #0a0618; line-height: 1; margin-bottom: 6px; letter-spacing: -1px; }
        .ss2-stat-label { font-size: 0.75rem; color: #a3a3a3; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }

        /* Certs */
        .ss2-certs { background: #281750; padding: 20px 80px; display: grid; grid-template-columns: repeat(4,1fr); }
        .ss2-cert { display: flex; align-items: center; gap: 12px; padding: 16px 20px; border-right: 1px solid rgba(171,140,245,0.2); }
        .ss2-cert:last-child { border-right: none; }
        .ss2-cert-icon { color: #ab8cf5; flex-shrink: 0; }
        .ss2-cert-title { font-size: 0.85rem; font-weight: 700; color: #fff; }
        .ss2-cert-sub { font-size: 0.72rem; color: rgba(216,202,250,0.6); }

        /* Why */
        .ss2-why { background: #fff; padding: 96px 80px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .ss2-section-eyebrow { display: flex; align-items: center; gap: 10px; font-size: 0.72rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #ab8cf5; margin-bottom: 14px; }
        .ss2-section-eyebrow::before { content: ''; width: 4px; height: 16px; background: #ab8cf5; border-radius: 2px; }
        .ss2-section-title { font-size: clamp(1.5rem,2.5vw,2.2rem); font-weight: 900; color: #0a0618; margin-bottom: 24px; letter-spacing: -0.5px; line-height: 1.1; }
        .ss2-checklist { display: flex; flex-direction: column; gap: 14px; }
        .ss2-check { display: flex; align-items: flex-start; gap: 12px; font-size: 0.92rem; color: #525252; line-height: 1.6; }
        .ss2-check svg { color: #ab8cf5; flex-shrink: 0; margin-top: 2px; }
        .ss2-why-img { position: relative; border-radius: 20px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 32px 80px rgba(40,23,80,0.15); }

        /* Services */
        .ss2-services { background: #f9f8ff; padding: 96px 80px; }
        .ss2-svc-desc { font-size: 0.95rem; color: #525252; line-height: 1.8; margin-bottom: 40px; max-width: 700px; }
        .ss2-svc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .ss2-svc-card { background: #fff; border: 1px solid #ede9ff; border-radius: 14px; padding: 24px 20px; transition: all 0.25s ease; }
        .ss2-svc-card:hover { border-color: #ab8cf5; box-shadow: 0 8px 28px rgba(40,23,80,0.08); transform: translateY(-3px); }
        .ss2-svc-num { font-size: 0.65rem; font-weight: 800; color: #ab8cf5; letter-spacing: 1px; margin-bottom: 10px; }
        .ss2-svc-title { font-size: 0.9rem; font-weight: 700; color: #281750; margin-bottom: 12px; }
        .ss2-svc-bullets { display: flex; flex-direction: column; gap: 6px; }
        .ss2-svc-bullet { font-size: 0.78rem; color: #6b6b80; display: flex; align-items: flex-start; gap: 7px; line-height: 1.5; }
        .ss2-svc-bullet::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #ab8cf5; flex-shrink: 0; margin-top: 5px; }

        /* Tech */
        .ss2-tech { background: #0a0618; padding: 96px 80px; position: relative; overflow: hidden; }
        .ss2-tech::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(171,140,245,0.3), transparent); }
        .ss2-tech-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-top: 40px; }
        .ss2-tech-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(171,140,245,0.12); border-radius: 14px; padding: 24px 20px; transition: all 0.25s ease; }
        .ss2-tech-card:hover { border-color: rgba(171,140,245,0.35); background: rgba(171,140,245,0.06); transform: translateY(-3px); }
        .ss2-tech-num { font-size: 0.65rem; font-weight: 800; color: #ab8cf5; letter-spacing: 1px; margin-bottom: 10px; }
        .ss2-tech-title { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .ss2-tech-desc { font-size: 0.8rem; color: rgba(216,202,250,0.55); line-height: 1.6; }

        @media (max-width: 1024px) {
          .ss2-hero { padding: 72px 48px 64px; }
          .ss2-certs { padding: 16px 48px; grid-template-columns: repeat(2,1fr); }
          .ss2-cert:nth-child(2) { border-right: none; }
          .ss2-why { padding: 72px 48px; gap: 48px; }
          .ss2-services { padding: 72px 48px; }
          .ss2-svc-grid { grid-template-columns: repeat(2,1fr); }
          .ss2-tech { padding: 72px 48px; }
          .ss2-tech-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .ss2-hero { padding: 64px 24px 48px; }
          .ss2-stats-row { grid-template-columns: 1fr; }
          .ss2-stat { border-right: none; border-bottom: 1px solid #f0eeff; }
          .ss2-certs { grid-template-columns: 1fr; padding: 16px 24px; }
          .ss2-cert { border-right: none; border-bottom: 1px solid rgba(171,140,245,0.15); }
          .ss2-why { grid-template-columns: 1fr; padding: 56px 24px; }
          .ss2-services { padding: 56px 24px; }
          .ss2-svc-grid { grid-template-columns: 1fr; }
          .ss2-tech { padding: 56px 24px; }
          .ss2-tech-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ss2">
        <section className="ss2-hero">
          <div className="ss2-hero-grid" /><div className="ss2-hero-orb" />
          <motion.div className="ss2-hero-inner" initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            <div className="ss2-eyebrow">Structural Steel</div>
            <h1 className="ss2-hero-title"><span>Structural Steel</span><br />Division</h1>
            <p className="ss2-hero-desc">Bridging the gap between digital precision and physical reality. End-to-end structural engineering for complex industrial and commercial projects.</p>
            <Link href="/contact" className="ss2-hero-btn">Get a Quote <FiArrowRight size={15}/></Link>
          </motion.div>
        </section>

        <div className="ss2-stats-row">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="ss2-stat" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}>
              <div className="ss2-stat-num">{s.num}</div>
              <div className="ss2-stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="ss2-certs">
          {certifications.map((c) => (
            <div className="ss2-cert" key={c.title}>
              <div className="ss2-cert-icon">{c.icon}</div>
              <div><div className="ss2-cert-title">{c.title}</div><div className="ss2-cert-sub">{c.sub}</div></div>
            </div>
          ))}
        </div>

        <section className="ss2-why">
          <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="ss2-section-eyebrow">Why Choose Us</div>
            <h2 className="ss2-section-title">Global Expertise,<br />Local Precision</h2>
            <div className="ss2-checklist">
              {whyUs.map((w) => <div className="ss2-check" key={w}><FiCheckCircle size={16}/> {w}</div>)}
            </div>
          </motion.div>
          <motion.div className="ss2-why-img" initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <Image src="/structural-steel.png" alt="Structural Steel" fill style={{ objectFit:"cover" }} sizes="50vw"/>
          </motion.div>
        </section>

        <section className="ss2-services">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className="ss2-section-eyebrow">Our Services</div>
            <h2 className="ss2-section-title">End-to-End Steel Detailing</h2>
            <p className="ss2-svc-desc">We deliver high-precision structural steel detailing and engineering solutions tailored to international construction standards and project requirements.</p>
          </motion.div>
          <div className="ss2-svc-grid">
            {services.map((s, i) => (
              <motion.div key={s.title} className="ss2-svc-card" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.07 }}>
                <div className="ss2-svc-num">0{i+1}</div>
                <div className="ss2-svc-title">{s.title}</div>
                <div className="ss2-svc-bullets">{s.bullets.map((b) => <div className="ss2-svc-bullet" key={b}>{b}</div>)}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="ss2-tech">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className="ss2-eyebrow">Technical Capabilities</div>
            <h2 className="ss2-section-title" style={{ color:"#fff" }}>Built on Industry Standards</h2>
          </motion.div>
          <div className="ss2-tech-grid">
            {techCaps.map((t, i) => (
              <motion.div key={t.num} className="ss2-tech-card" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.1 }}>
                <div className="ss2-tech-num">{t.num}</div>
                <div className="ss2-tech-title">{t.title}</div>
                <div className="ss2-tech-desc">{t.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
