"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheckCircle, FiFileText, FiBox, FiTool, FiArrowRight } from "react-icons/fi";

const benefits = [
  { icon: <FiFileText size={18}/>,        title: "Shop Drawings",    desc: "Accurate, detailed panel documentation for every project phase." },
  { icon: <FiBox size={18}/>, title: "3D Modeling",       desc: "Advanced structural 3D models for visualization and coordination." },
  { icon: <FiTool size={18}/>,     title: "Engineering Support",   desc: "Expert guidance from experienced structural engineering professionals." },
  { icon: <FiCheckCircle size={18}/>,     title: "Quality Assurance",   desc: "Error-managed QA/QC processes ensuring zero-defect deliverables." },
];

const process = [
  { num: "01", title: "Document Review",  desc: "Review project documents and requirements." },
  { num: "02", title: "Panel Layout", desc: "Create optimized panel layouts." },
  { num: "03", title: "Shop Drawing Preparation",  desc: "Prepare accurate shop drawings." },
  { num: "04", title: "Quality Check",  desc: "Verify accuracy and compliance." },
  { num: "05", title: "Client Review",  desc: "Submit drawings and address feedback." },
];

const stats = [
  { num: "350M+",  label: "Sq ft delivered" },
  { num: "30%",  label: "Faster Build Time" },
  { num: "500+",  label: "Large scale projects" },
  { num: "100%", label: "Safety record" },
];

const deliverables = [
  "Complete panel layout drawings based on approved architectural and structural plans",
  "Casting layout plan",
  "Detailed embed layout and placement drawings for each panel",
  "Individual panel sheets with dimensions, openings, and reinforcement references",
  "Comprehensive embed lists (plates, angles, anchors, sizes & quantities)",
  "Connection and bracing details coordination",
  "Floor plan layout references for accurate site positioning",
  "Clash-free, fabrication-ready deliverables",
];

const overviewImages = [
  "/Tilt-up-service-image1.jpeg",
  "/Tilt-up-service-image2.jpeg",
  "/Tilt-up-service-image3.jpeg",
  "/Tilt-up-service-image4.jpeg",
  "/Tilt-up-service-image5.jpeg",
];

export default function TiltUpServiceDetailed() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % overviewImages.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <style>{`
        .tilt-page { background: #ffffff; }
        .tilt-hero {
          background: #0a0618; padding: 96px 80px 80px;
          text-align: center; position: relative; overflow: hidden;
        }
        .tilt-hero::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(171,140,245,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(171,140,245,0.05) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
        .tilt-hero::after { content: ''; position: absolute; top: -60px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(171,140,245,0.12) 0%, transparent 70%); pointer-events: none; }
        .tilt-hero-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 0.72rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #ab8cf5; margin-bottom: 20px; position: relative; z-index: 1; }
        .tilt-hero-eyebrow::before, .tilt-hero-eyebrow::after { content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px; }
        .tilt-hero-title { font-size: clamp(2rem,4vw,3.5rem); font-weight: 900; color: #fff; letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 20px; position: relative; z-index: 1; }
        .tilt-hero-desc { font-size: 1.05rem; color: rgba(216,202,250,0.6); max-width: 520px; margin: 0 auto 36px; line-height: 1.8; position: relative; z-index: 1; }
        .tilt-hero-btn { display: inline-flex; align-items: center; gap: 8px; background: #ab8cf5; color: #0a0618; font-size: 0.9rem; font-weight: 700; padding: 13px 28px; border-radius: 10px; transition: all 0.25s ease; position: relative; z-index: 1; }
        .tilt-hero-btn:hover { background: #d8cafa; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(171,140,245,0.4); }

        /* ── Overview ── */
        .tilt-overview {
          background: #ffffff;
          padding: 80px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .tilt-overview-img {
          position: relative;
          width: min(100%, 700px);
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 16/11;
          box-shadow: 0 20px 60px rgba(40,23,80,0.12);
          background: #ece6fb;
        }
        .tilt-overview-img::before {
          content: '';
          position: absolute;
          top: -8px; left: -8px; right: 8px; bottom: 8px;
          border: 2px solid #ab8cf5;
          border-radius: 18px;
          z-index: 0;
          pointer-events: none;
        }
        .tilt-overview-slide {
          position: absolute;
          inset: 14px;
          z-index: 1;
          border-radius: 12px;
          overflow: hidden;
          background: linear-gradient(180deg, #faf8ff 0%, #f2edff 100%);
        }
        .tilt-overview-overlay {
          position: absolute;
          inset: 14px;
          z-index: 2;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(10,6,24,0.04) 0%, rgba(10,6,24,0.01) 45%, rgba(10,6,24,0.18) 100%);
          pointer-events: none;
        }
        .tilt-overview-dots {
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(10,6,24,0.45);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
        }
        .tilt-overview-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: none;
          padding: 0;
          background: rgba(255,255,255,0.34);
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .tilt-overview-dot.active {
          width: 24px;
          border-radius: 999px;
          background: #ab8cf5;
          box-shadow: 0 0 16px rgba(171,140,245,0.45);
        }
        .tilt-overview-text {
          font-size: 0.95rem;
          color: #525252;
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .tilt-benefit {
          display: flex;
          gap: 14px;
          margin-bottom: 20px;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #f0eeff;
          transition: all 0.2s ease;
        }
        .tilt-benefit:hover {
          border-color: #ab8cf5;
          background: #faf8ff;
        }
        .tilt-benefit-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(171,140,245,0.12);
          color: #ab8cf5;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .tilt-benefit-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0f0824;
          margin-bottom: 4px;
        }
        .tilt-benefit-desc {
          font-size: 0.82rem;
          color: #6b6b80;
          line-height: 1.6;
        }

        /* ── Process ── */
        .tilt-process {
          background: linear-gradient(180deg, #f8f5ff 0%, #f3efff 100%);
          padding: 72px 48px;
          text-align: center;
          border-top: 1px solid #efe9ff;
          border-bottom: 1px solid #ece4ff;
        }
        .tilt-section-title {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 800;
          color: #0f0824;
          margin-bottom: 8px;
        }
        .tilt-section-sub {
          font-size: 0.92rem;
          color: #6b6b80;
          margin-bottom: 48px;
        }
        .tilt-process-steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          position: relative;
        }
        .tilt-process-steps::before {
          content: '';
          position: absolute;
          top: 28px;
          left: calc(10% + 20px);
          right: calc(10% + 20px);
          height: 2px;
          background: linear-gradient(90deg, #ab8cf5, #d8cafa, #ab8cf5);
          z-index: 0;
        }
        .tilt-step {
          position: relative;
          z-index: 1;
          padding: 0 24px;
          text-align: center;
        }
        .tilt-step-num {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: #281750;
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          border: 3px solid #f9f8ff;
          box-shadow: 0 0 0 2px #ab8cf5;
        }
        .tilt-step-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f0824;
          margin-bottom: 8px;
        }
        .tilt-step-desc {
          font-size: 0.82rem;
          color: #6b6b80;
          line-height: 1.65;
        }

        /* ── Stats ── */
        .tilt-stats {
          background: linear-gradient(180deg, #281750 0%, #1a0f37 100%);
          padding: 56px 48px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .tilt-stat {
          text-align: center;
          padding: 0 20px;
          border-right: 1px solid rgba(171,140,245,0.2);
        }
        .tilt-stat:last-child { border-right: none; }
        .tilt-stat-num {
          font-size: 2.2rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 8px;
        }
        .tilt-stat-num span { color: #ab8cf5; }
        .tilt-stat-label {
          font-size: 0.82rem;
          color: rgba(216,202,250,0.7);
          font-weight: 500;
        }

        /* ── What We Provide ── */
        .tilt-provide {
          background: #ffffff;
          padding: 80px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          position: relative;
          z-index: 1;
        }
        .tilt-provide-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ab8cf5;
          margin-bottom: 12px;
        }
        .tilt-provide-label::before {
          content: ''; width: 4px; height: 16px;
          background: #ab8cf5; border-radius: 2px;
        }
        .tilt-provide-title {
          font-size: clamp(1.3rem, 2vw, 1.7rem);
          font-weight: 800;
          color: #0f0824;
          margin-bottom: 12px;
        }
        .tilt-provide-desc {
          font-size: 0.92rem;
          color: #6b6b80;
          line-height: 1.75;
          margin-bottom: 6px;
        }
        .tilt-checklist {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 8px;
        }
        .tilt-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: #525252;
          line-height: 1.5;
        }
        .tilt-check-item svg { color: #ab8cf5; flex-shrink: 0; margin-top: 2px; }
        .tilt-provide-img {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 6/4;
          box-shadow: 0 16px 48px rgba(40,23,80,0.1);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .tilt-hero { padding: 56px 20px 48px; }
          .tilt-overview { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
          .tilt-process { padding: 56px 20px; }
          .tilt-process-steps { grid-template-columns: 1fr; gap: 32px; }
          .tilt-process-steps::before { display: none; }
          .tilt-stats { grid-template-columns: repeat(2, 1fr); padding: 48px 20px; gap: 24px; }
          .tilt-stat { border-right: none; border-bottom: 1px solid rgba(171,140,245,0.2); padding-bottom: 24px; }
          .tilt-stat:nth-child(odd) { border-right: 1px solid rgba(171,140,245,0.2); }
          .tilt-provide { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
        }
      `}</style>

      <div className="tilt-page">
        {/* Hero */}
        <div className="tilt-hero">
          <div className="tilt-hero-eyebrow">Tilt-Up Construction</div>
          <h1 className="tilt-hero-title">Build Right Tech CONSTRUCTION SPECIALISTS</h1>
          <p className="tilt-hero-desc">
            Build Right Tech delivers industrial-scale tilt-up solutions that compress construction
            schedules and maximize structural integrity.
          </p>
          <Link href="/projects" className="tilt-hero-btn">
            View Projects <FiArrowRight size={15} />
          </Link>
        </div>

        {/* Overview */}
        <div className="tilt-overview">
          <div className="tilt-overview-img">
            <motion.div
              key={overviewImages[activeImage]}
              className="tilt-overview-slide"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src={overviewImages[activeImage]}
                alt={`Tilt-Up Construction ${activeImage + 1}`}
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                sizes="50vw"
              />
            </motion.div>
            <div className="tilt-overview-overlay" />
            <div className="tilt-overview-dots">
              {overviewImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={`tilt-overview-dot${activeImage === index ? " active" : ""}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show tilt-up image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="tilt-overview-text">
              Using advanced tools like AutoCAD and Revit, our team ensures precision,
              coordination, and constructability — helping reduce site errors, delays, and
              costly rework. With hands-on experience in tilt-up construction and embed
              detailing, we deliver drawings that support smooth field execution and faster
              project turnaround.
            </p>
            {benefits.map((b) => (
              <div className="tilt-benefit" key={b.title}>
                <div className="tilt-benefit-icon">{b.icon}</div>
                <div>
                  <div className="tilt-benefit-title">{b.title}</div>
                  <div className="tilt-benefit-desc">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="tilt-process">
          <div className="tilt-section-title">Tilt-Up Process</div>
          <div className="tilt-section-sub">Streamlined execution from ground to sky.</div>
          <div className="tilt-process-steps">
            {process.map((s) => (
              <div className="tilt-step" key={s.num}>
                <div className="tilt-step-num">{s.num}</div>
                <div className="tilt-step-title">{s.title}</div>
                <div className="tilt-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="tilt-stats">
          {stats.map((s) => (
            <div className="tilt-stat" key={s.label}>
              <div className="tilt-stat-num">{s.num}</div>
              <div className="tilt-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* What We Provide */}
        <div className="tilt-provide">
          <div>
            <div className="tilt-provide-label">What We Provide</div>
            <h2 className="tilt-provide-title">Comprehensive Tilt-Up Detailing Services</h2>
            <p className="tilt-provide-desc">
              We provide accurate and construction-ready Tilt-Up Shop Drawings and Embed Panel
              Detailing Services tailored to meet contractor and engineer requirements.
            </p>
            <p className="tilt-provide-desc">Our services include:</p>
            <div className="tilt-checklist">
              {deliverables.map((d) => (
                <div className="tilt-check-item" key={d}>
                  <FiCheckCircle size={16} /> {d}
                </div>
              ))}
            </div>
          </div>
          <div className="tilt-provide-img">
            <Image src="/tilt_image2.png" alt="Tilt-Up Detailing" fill style={{ objectFit: "cover" }} sizes="50vw" />
          </div>
        </div>
      </div>
    </>
  );
}
