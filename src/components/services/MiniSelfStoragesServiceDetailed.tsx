"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight, FiEdit3, FiLayers, FiRefreshCw, FiGrid, FiColumns, FiSidebar, FiLink2, FiBox } from "react-icons/fi";

const scopeItems = [
  { icon: <FiEdit3 size={18} />, title: "Shop Drawings", desc: "Detailed architectural and structural shop drawings for onsite execution." },
  { icon: <FiLayers size={18} />, title: "Fabrication Packages", desc: "Complete data sets for automated and manual fabrication processes." },
  { icon: <FiRefreshCw size={18} />, title: "As-Built Documentation", desc: "Accurate documentation reflecting final structural modifications." },
  { icon: <FiSidebar size={18} />, title: "Revision Management", desc: "Streamlined tracking of design changes and document versioning." },
  { icon: <FiColumns size={18} />, title: "Framing Layouts", desc: "Complete framing layouts for efficient assembly and installation." },
  { icon: <FiGrid size={18} />, title: "Partition Panels", desc: "Specialized layouts for internal partition and wall panel systems." },
  { icon: <FiLink2 size={18} />, title: "Connection Details", desc: "High-precision detailing for structural junctions and fasteners." },
  { icon: <FiBox size={18} />, title: "BIM Modeling", desc: "Advanced Revit modeling of all LGS and structural steel elements." },
];

const workflowItems = [
  { title: "Comprehensive Document Review", desc: "In-depth analysis of architectural and structural design intent." },
  { title: "BIM-Driven Coordination", desc: "Clash detection and multi-trade synchronization in a 3D environment." },
  { title: "Fabrication-Focused Detailing", desc: "Creating data files optimized for production equipment." },
  { title: "Multi-Level Quality Control", desc: "Rigorous verification steps to ensure zero-error documentation." },
];

const applications = [
  "Single & Multi-Story",
  "Commercial Units",
  "Climate-Controlled",
  "Mixed-Use Sites",
  "Drive-Up Access",
  "Warehouse-Style",
  "Boat & RV Storage",
  "Mini Storage",
];

const workflowGallery = [
  "/mini-storages-pw1.jpeg",
  "/mini-storages-pw2.jpeg",
  "/mini-storages-pw3.jpeg",
  "/mini-storages-pw4.jpeg",
  "/mini-storages-pw5.jpeg",
  "/mini-storages-pw6.jpeg",
  "/mini-storages-pw7.jpeg",
  "/mini-storages-pw8.jpeg",
  "/mini-storages-pw9.jpeg",
];

export default function MiniSelfStoragesServiceDetailed() {
  const [activeWorkflowImage, setActiveWorkflowImage] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveWorkflowImage((current) => (current + 1) % workflowGallery.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <style>{`
        .mss { background:#0a0618; }
        .mss-hero { position:relative; min-height:620px; padding:108px 80px 88px; display:flex; align-items:center; overflow:hidden; }
        .mss-hero::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg, rgba(10,6,24,.82) 0%, rgba(10,6,24,.66) 38%, rgba(10,6,24,.48) 60%, rgba(10,6,24,.62) 100%), linear-gradient(180deg, rgba(10,6,24,.12) 0%, rgba(10,6,24,.58) 100%); }
        .mss-grid { position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size:64px 64px; opacity:.24; z-index:1; }
        .mss-hero-inner { position:relative; z-index:2; max-width:680px; }
        .mss-chip { display:inline-flex; align-items:center; gap:8px; padding:8px 14px; margin-bottom:22px; border-radius:999px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.08); backdrop-filter:blur(10px); color:rgba(255,255,255,.74); font-size:.68rem; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
        .mss-title { font-size:clamp(2.4rem, 4.6vw, 4.2rem); font-weight:900; line-height:1.04; letter-spacing:-.04em; color:#fff; margin-bottom:18px; }
        .mss-title span { color:#d8cafa; }
        .mss-desc { font-size:1.02rem; line-height:1.85; color:rgba(255,255,255,.72); max-width:580px; margin-bottom:30px; }
        .mss-actions { display:flex; gap:14px; flex-wrap:wrap; }
        .mss-btn, .mss-btn-ghost { display:inline-flex; align-items:center; gap:8px; padding:13px 24px; border-radius:10px; font-size:.9rem; font-weight:700; transition:all .25s ease; }
        .mss-btn { background:#ab8cf5; color:#0a0618; box-shadow:0 12px 28px rgba(171,140,245,.28); }
        .mss-btn:hover { background:#d8cafa; transform:translateY(-2px); }
        .mss-btn-ghost { color:#fff; border:1px solid rgba(255,255,255,.18); background:rgba(255,255,255,.06); backdrop-filter:blur(10px); }
        .mss-btn-ghost:hover { background:rgba(255,255,255,.12); }

        .mss-story, .mss-scope { background:#fff; }
        .mss-story { padding:80px 80px 72px; }
        .mss-wrap { max-width:1240px; margin:0 auto; }
        .mss-story-grid { display:grid; grid-template-columns:minmax(0, 1.15fr) minmax(320px, .9fr); gap:42px; align-items:start; }
        .mss-kicker { display:inline-flex; align-items:center; gap:8px; color:#ab8cf5; font-size:.74rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; margin-bottom:18px; }
        .mss-kicker::before { content:''; width:28px; height:2px; border-radius:2px; background:#ab8cf5; }
        .mss-h2 { font-size:clamp(1.7rem, 2.6vw, 2.45rem); font-weight:900; color:#281750; letter-spacing:-.04em; margin-bottom:16px; }
        .mss-copy { font-size:1rem; line-height:1.8; color:#5b5e72; max-width:640px; }
        .mss-copy + .mss-copy { margin-top:16px; }
        .mss-stats { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:16px; }
        .mss-stat { background:linear-gradient(180deg, #fff 0%, #faf8ff 100%); border:1px solid #ece6fb; border-radius:18px; padding:28px 24px; min-height:166px; box-shadow:0 14px 36px rgba(40,23,80,.08); }
        .mss-stat-value { font-size:clamp(2rem, 3vw, 2.8rem); font-weight:900; line-height:1; margin-bottom:12px; letter-spacing:-.05em; }
        .mss-stat:first-child .mss-stat-value { color:#f97316; }
        .mss-stat:last-child .mss-stat-value { color:#3b5f8a; }
        .mss-stat-label { font-size:.72rem; font-weight:800; letter-spacing:.14em; text-transform:uppercase; color:#7f86a0; }

        .mss-scope { padding:0 80px 84px; }
        .mss-section-desc { font-size:.98rem; line-height:1.8; color:#65697f; max-width:720px; margin-bottom:32px; }
        .mss-scope-grid { display:grid; grid-template-columns:repeat(4, minmax(0,1fr)); gap:14px; }
        .mss-card { background:#fff; border:1px solid #ece7fb; border-radius:16px; padding:22px 18px 20px; box-shadow:0 10px 28px rgba(40,23,80,.05); transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease; }
        .mss-card:hover { transform:translateY(-4px); border-color:rgba(171,140,245,.42); box-shadow:0 18px 38px rgba(40,23,80,.08); }
        .mss-icon { width:40px; height:40px; border-radius:12px; display:flex; align-items:center; justify-content:center; color:#537297; background:rgba(83,114,151,.08); margin-bottom:18px; }
        .mss-card-title { font-size:.98rem; font-weight:700; color:#1d2840; margin-bottom:8px; }
        .mss-card-desc { font-size:.84rem; line-height:1.7; color:#70758d; }

        .mss-flow, .mss-exp { background:#f8f6fc; }
        .mss-flow { padding:86px 80px; }
        .mss-flow-grid { max-width:1320px; margin:0 auto; display:grid; grid-template-columns:minmax(420px, 1.08fr) minmax(0, .92fr); gap:52px; align-items:center; }
        .mss-media, .mss-exp-media { position:relative; border-radius:22px; overflow:hidden; background:#d7dbe3; box-shadow:0 28px 68px rgba(40,23,80,.12); }
        .mss-media { aspect-ratio:16/10; min-height: 420px; }
        .mss-media::before {
          content:'';
          position:absolute;
          inset:0;
          background:linear-gradient(180deg, rgba(18,13,31,0) 0%, rgba(18,13,31,.08) 100%);
          z-index:1;
          pointer-events:none;
        }
        .mss-media-stage {
          position:absolute;
          inset:0;
          background:linear-gradient(135deg, #eef1f8 0%, #f8f6fc 60%, #eef2f8 100%);
        }
        .mss-slide {
          position:absolute;
          inset:0;
        }
        .mss-carousel-caption {
          position:absolute;
          left:20px;
          right:20px;
          bottom:18px;
          z-index:2;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
        }
        .mss-carousel-label {
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:8px 12px;
          border-radius:999px;
          background:rgba(17,12,31,.72);
          color:rgba(255,255,255,.88);
          font-size:.68rem;
          font-weight:800;
          letter-spacing:.14em;
          text-transform:uppercase;
          backdrop-filter:blur(10px);
        }
        .mss-dots {
          display:flex;
          align-items:center;
          gap:8px;
          padding:8px 10px;
          border-radius:999px;
          background:rgba(255,255,255,.82);
          box-shadow:0 10px 24px rgba(40,23,80,.14);
        }
        .mss-dot {
          width:8px;
          height:8px;
          border-radius:999px;
          border:none;
          padding:0;
          background:rgba(40,23,80,.18);
          cursor:pointer;
          transition:all .24s ease;
        }
        .mss-dot.active {
          width:24px;
          background:#ab8cf5;
        }
        .mss-flow-list { display:flex; flex-direction:column; gap:18px; }
        .mss-flow-item { display:grid; grid-template-columns:26px 1fr; gap:14px; align-items:start; }
        .mss-flow-mark { color:#281750; font-size:1.1rem; font-weight:900; margin-top:2px; }
        .mss-flow-title { font-size:1rem; font-weight:800; color:#1f1f2e; margin-bottom:6px; }
        .mss-flow-desc { font-size:.88rem; line-height:1.7; color:#6d7082; }

        .mss-exp { padding:0 80px 96px; }
        .mss-exp-grid { max-width:1240px; margin:0 auto; display:grid; grid-template-columns:minmax(0,.92fr) minmax(320px,1.08fr); gap:38px; align-items:start; }
        .mss-exp-card { background:linear-gradient(180deg, #fff 0%, #fbfaff 100%); border:1px solid #ece7fb; border-radius:22px; padding:34px 34px 30px; box-shadow:0 18px 42px rgba(40,23,80,.07); }
        .mss-panel-title { font-size:2rem; font-weight:900; color:#46688f; letter-spacing:-.04em; margin-bottom:22px; text-align:center; }
        .mss-apps { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:12px 22px; }
        .mss-app { display:flex; align-items:flex-start; gap:8px; font-size:.9rem; line-height:1.6; color:#5f657d; }
        .mss-app::before { content:''; width:5px; height:5px; border-radius:50%; background:#f97316; margin-top:9px; flex-shrink:0; }
        .mss-exp-side { display:flex; flex-direction:column; gap:16px; }
        .mss-tags { display:flex; justify-content:flex-end; gap:10px; flex-wrap:wrap; }
        .mss-tag { padding:7px 12px; border-radius:999px; background:rgba(83,157,226,.14); color:#5c8bc3; font-size:.68rem; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
        .mss-exp-media { aspect-ratio:16/10; }

        @media (max-width:1100px) {
          .mss-hero, .mss-story, .mss-scope, .mss-flow, .mss-exp { padding-left:48px; padding-right:48px; }
          .mss-story-grid, .mss-flow-grid, .mss-exp-grid { grid-template-columns:1fr; }
          .mss-scope-grid { grid-template-columns:repeat(2, minmax(0,1fr)); }
          .mss-media { min-height: 360px; }
        }
        @media (max-width:720px) {
          .mss-hero { min-height:560px; padding:88px 24px 72px; }
          .mss-story, .mss-scope, .mss-flow, .mss-exp { padding-left:24px; padding-right:24px; }
          .mss-story { padding-top:64px; }
          .mss-scope { padding-top:0; padding-bottom:64px; }
          .mss-flow { padding-top:64px; padding-bottom:64px; }
          .mss-exp { padding-bottom:72px; }
          .mss-stats, .mss-scope-grid, .mss-apps { grid-template-columns:1fr; }
          .mss-actions { flex-direction:column; align-items:flex-start; }
          .mss-btn, .mss-btn-ghost { width:100%; justify-content:center; }
          .mss-media { min-height: 300px; }
        }
      `}</style>

      <div className="mss">
        <section className="mss-hero">
          <Image src="/mini-self-storages.png" alt="Mini self storages structural framing" fill priority style={{ objectFit: "cover" }} sizes="100vw" />
          <div className="mss-grid" />
          <motion.div className="mss-hero-inner" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mss-chip">Precision Engineered</div>
            <h1 className="mss-title">Engineering Precision for Modern<br /><span>Self Storage Construction</span></h1>
            <p className="mss-desc">Comprehensive detailing for Light Gauge Steel framing and self storage facilities, built for constructability, production clarity, and dependable field execution.</p>
            <div className="mss-actions">
              <Link href="/contact" className="mss-btn">Get a Quote <FiArrowRight size={15} /></Link>
              <Link href="/services" className="mss-btn-ghost">Our Services <FiArrowRight size={15} /></Link>
            </div>
          </motion.div>
        </section>

        <section className="mss-story">
          <div className="mss-wrap mss-story-grid">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="mss-kicker">Reliability in Every Rivet</div>
              <h2 className="mss-h2">Mini & Self Storage Detailing Services</h2>
              <p className="mss-copy">At BuildRight Technologies, we specialize in delivering comprehensive detailing for mini and self storage facilities. Our experienced team supports contractors, fabricators, manufacturers, and developers with accurate, buildable, and production-ready documentation that ensures structural integrity from foundation to finish.</p>
              <p className="mss-copy">Whether the project calls for light gauge steel framing, partition layouts, or coordinated BIM deliverables, we focus on clean execution, fabrication efficiency, and strong documentation control at every stage.</p>
            </motion.div>
            <motion.div className="mss-stats" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="mss-stat"><div className="mss-stat-value">2000+</div><div className="mss-stat-label">Projects Completed</div></div>
              <div className="mss-stat"><div className="mss-stat-value">1/8 inch</div><div className="mss-stat-label">Modeling Precision</div></div>
            </motion.div>
          </div>
        </section>

        <section className="mss-scope">
          <div className="mss-wrap">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="mss-kicker">Scope of Services</div>
              <h2 className="mss-h2">Production-Ready Detailing Deliverables</h2>
              <p className="mss-section-desc">Our self storage detailing packages are structured to improve coordination, reduce fabrication friction, and keep installation teams working from a reliable, revision-controlled drawing set.</p>
            </motion.div>
            <div className="mss-scope-grid">
              {scopeItems.map((item, index) => (
                <motion.div key={item.title} className="mss-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.04 }}>
                  <div className="mss-icon">{item.icon}</div>
                  <div className="mss-card-title">{item.title}</div>
                  <div className="mss-card-desc">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mss-flow">
          <div className="mss-flow-grid">
            <motion.div className="mss-media" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="mss-media-stage">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={workflowGallery[activeWorkflowImage]}
                    className="mss-slide"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  >
                    <Image
                      src={workflowGallery[activeWorkflowImage]}
                      alt={`Mini self storages workflow ${activeWorkflowImage + 1}`}
                      fill
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      sizes="(max-width: 1100px) 100vw, 40vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mss-carousel-caption">
                <div className="mss-carousel-label">Workflow Gallery {activeWorkflowImage + 1}/9</div>
                <div className="mss-dots">
                  {workflowGallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className={`mss-dot ${index === activeWorkflowImage ? "active" : ""}`}
                      onClick={() => setActiveWorkflowImage(index)}
                      aria-label={`Show workflow image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="mss-kicker">Production Workflow</div>
              <h2 className="mss-h2">A Controlled Detailing Process</h2>
              <div className="mss-flow-list">
                {workflowItems.map((item) => (
                  <div key={item.title} className="mss-flow-item">
                    <div className="mss-flow-mark">{">>"}</div>
                    <div>
                      <div className="mss-flow-title">{item.title}</div>
                      <div className="mss-flow-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mss-exp">
          <div className="mss-exp-grid">
            <motion.div className="mss-exp-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="mss-kicker">Project Experience</div>
              <p className="mss-section-desc" style={{ marginBottom: 24 }}>We bring specialized expertise across a diverse range of storage facility types and structural applications.</p>
              <div className="mss-h2">Facility Applications</div>
              <div className="mss-apps">
                {applications.map((item) => <div key={item} className="mss-app">{item}</div>)}
              </div>
            </motion.div>
            <motion.div className="mss-exp-side" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="mss-exp-media">
                <Image src="/mini-storage-detailed-image2.png" alt="Mini self storages BIM structural model" fill style={{ objectFit: "cover" }} sizes="(max-width: 1100px) 100vw, 45vw" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
