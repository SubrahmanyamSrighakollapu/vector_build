"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiZap, FiDollarSign, FiSliders, FiSun } from "react-icons/fi";

const stats = [
  { num: "20+",  label: "Projects Delivered" },
  { num: "Zero", label: "Safety Incidents YTD" },
  { num: "24/7", label: "On-Site Support" },
];

const whyPemb = [
  { icon: <FiZap size={18}/>,        title: "Quick Installation",  desc: "Precision-engineered components ready for rapid on-site assembly, cutting construction time by up to 40%." },
  { icon: <FiDollarSign size={18}/>, title: "Cost Efficiency",     desc: "Lower material costs and reduced labor hours translate to significant savings without compromising quality." },
  { icon: <FiSliders size={18}/>,    title: "Customization",       desc: "Highly versatile designs tailored to your specific spatial and aesthetic needs, from clear-span to multi-story." },
  { icon: <FiSun size={18}/>,        title: "Energy Efficiency",   desc: "Advanced insulation systems and thermal-efficient paneling designed for lower utility costs and LEED compliance." },
];

const methodology = [
  { num: "01", title: "Design Optimization",  desc: "Leveraging BIM technology to create the most material-efficient structure possible." },
  { num: "02", title: "Load Calculations",    desc: "Rigorous stress analysis for seismic, wind, and snow loads customized to your site location." },
  { num: "03", title: "Precision Fabrication",desc: "CNC-guided manufacturing ensuring every bolt hole aligns perfectly for field assembly." },
  { num: "04", title: "On-Site Assembly",     desc: "Rapid construction phase guided by detailed erection drawings and technical support." },
];

const applications = [
  "Industrial Warehouses & Distribution Centers",
  "Aircraft Hangars & Aviation Facilities",
  "Manufacturing Plants & Factories",
  "Retail & Commercial Buildings",
  "Sports & Recreation Facilities",
  "Cold Storage & Refrigerated Warehouses",
];

export default function PembServiceDetailed() {
  return (
    <>
      <style>{`
        .pemb { background: #0a0618; }
        .pemb-hero { background: #0a0618; padding: 96px 80px 80px; text-align: center; position: relative; overflow: hidden; }
        .pemb-hero::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(171,140,245,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(171,140,245,0.05) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
        .pemb-hero::after { content: ''; position: absolute; top: -60px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(171,140,245,0.12) 0%, transparent 70%); pointer-events: none; }
        .pemb-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 0.72rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #ab8cf5; margin-bottom: 20px; position: relative; z-index: 1; }
        .pemb-eyebrow::before, .pemb-eyebrow::after { content: ''; width: 24px; height: 1.5px; background: #ab8cf5; border-radius: 2px; }
        .pemb-hero-title { font-size: clamp(2rem,4vw,3.5rem); font-weight: 900; color: #fff; letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 20px; position: relative; z-index: 1; }
        .pemb-hero-desc { font-size: 1.05rem; color: rgba(216,202,250,0.6); max-width: 540px; margin: 0 auto 36px; line-height: 1.8; position: relative; z-index: 1; }
        .pemb-hero-btn { display: inline-flex; align-items: center; gap: 8px; background: #ab8cf5; color: #0a0618; font-size: 0.9rem; font-weight: 700; padding: 13px 28px; border-radius: 10px; transition: all 0.25s ease; position: relative; z-index: 1; }
        .pemb-hero-btn:hover { background: #d8cafa; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(171,140,245,0.4); }

        /* stats */
        .pemb-stats {
          background: #281750; padding: 48px;
          display: grid; grid-template-columns: repeat(3,1fr); gap: 0;
        }
        .pemb-stat { text-align: center; padding: 0 24px; border-right: 1px solid rgba(171,140,245,0.2); }
        .pemb-stat:last-child { border-right: none; }
        .pemb-stat-num { font-size: 2.2rem; font-weight: 900; color: #fff; line-height: 1; margin-bottom: 8px; }
        .pemb-stat-label { font-size: 0.82rem; color: rgba(216,202,250,0.7); font-weight: 500; }

        /* why */
        .pemb-why { padding: 80px 48px; }
        .pemb-section-label {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ab8cf5; margin-bottom: 12px;
        }
        .pemb-section-label::before { content: ''; width: 4px; height: 16px; background: #ab8cf5; border-radius: 2px; }
        .pemb-section-title { font-size: clamp(1.3rem,2vw,1.8rem); font-weight: 800; color: #0f0824; margin-bottom: 8px; }
        .pemb-section-sub { font-size: 0.92rem; color: #6b6b80; margin-bottom: 36px; }
        .pemb-why-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .pemb-why-card {
          background: #f9f8ff; border: 1px solid #ede9ff; border-radius: 14px;
          padding: 24px 20px; transition: all 0.22s ease;
        }
        .pemb-why-card:hover { border-color: #ab8cf5; box-shadow: 0 8px 28px rgba(40,23,80,0.08); transform: translateY(-3px); }
        .pemb-why-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(171,140,245,0.12); color: #ab8cf5;
          display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
        }
        .pemb-why-title { font-size: 0.9rem; font-weight: 700; color: #0f0824; margin-bottom: 8px; }
        .pemb-why-desc { font-size: 0.82rem; color: #6b6b80; line-height: 1.65; }

        /* methodology */
        .pemb-method {
          background: #f9f8ff; padding: 80px 48px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        .pemb-method-steps { display: flex; flex-direction: column; gap: 20px; }
        .pemb-method-step {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 18px; background: #fff; border: 1px solid #ede9ff;
          border-radius: 12px; transition: all 0.22s ease;
        }
        .pemb-method-step:hover { border-color: #ab8cf5; box-shadow: 0 4px 16px rgba(40,23,80,0.07); }
        .pemb-method-num {
          width: 36px; height: 36px; border-radius: 50%; background: #281750;
          color: #fff; font-size: 0.72rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(171,140,245,0.25);
        }
        .pemb-method-title { font-size: 0.9rem; font-weight: 700; color: #0f0824; margin-bottom: 4px; }
        .pemb-method-desc { font-size: 0.82rem; color: #6b6b80; line-height: 1.6; }
        .pemb-method-img { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 16px 48px rgba(40,23,80,0.12); }

        /* applications */
        .pemb-apps {
          padding: 80px 48px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        .pemb-apps-img { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 16px 48px rgba(40,23,80,0.12); }
        .pemb-apps-list { display: flex; flex-direction: column; gap: 12px; margin-top: 20px; }
        .pemb-app-item {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 16px; background: #f9f8ff; border: 1px solid #ede9ff;
          border-radius: 10px; font-size: 0.88rem; color: #281750; font-weight: 600;
          transition: all 0.2s ease;
        }
        .pemb-app-item:hover { border-color: #ab8cf5; background: #faf8ff; }
        .pemb-app-item::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: #ab8cf5; flex-shrink: 0; }

        @media (max-width: 960px) {
          .pemb-hero { padding: 56px 20px 48px; }
          .pemb-stats { grid-template-columns: 1fr; padding: 40px 20px; gap: 24px; }
          .pemb-stat { border-right: none; border-bottom: 1px solid rgba(171,140,245,0.2); padding-bottom: 20px; }
          .pemb-stat:last-child { border-bottom: none; }
          .pemb-why { padding: 56px 20px; }
          .pemb-why-grid { grid-template-columns: repeat(2,1fr); }
          .pemb-method { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
          .pemb-apps { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
        }
        @media (max-width: 560px) {
          .pemb-why-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="pemb">
        <div className="pemb-hero">
          <div className="pemb-eyebrow">PEMB</div>
          <h1 className="pemb-hero-title">Smart & Scalable Metal Building Systems</h1>
          <p className="pemb-hero-desc">
            High-performance structural solutions engineered for speed, cost-efficiency,
            and lifelong durability. We redefine industrial architecture.
          </p>
          <Link href="/projects" className="pemb-hero-btn">View Projects <FiArrowRight size={15}/></Link>
        </div>

        <div className="pemb-stats">
          {stats.map((s) => (
            <div className="pemb-stat" key={s.label}>
              <div className="pemb-stat-num">{s.num}</div>
              <div className="pemb-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="pemb-why">
          <div className="pemb-section-label">Why Choose Pre-Engineered Systems</div>
          <h2 className="pemb-section-title">The Smart Choice for Industrial Construction</h2>
          <p className="pemb-section-sub">Our structural solutions provide the perfect balance of engineering precision and economic value.</p>
          <div className="pemb-why-grid">
            {whyPemb.map((w) => (
              <div className="pemb-why-card" key={w.title}>
                <div className="pemb-why-icon">{w.icon}</div>
                <div className="pemb-why-title">{w.title}</div>
                <p className="pemb-why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pemb-method">
          <div>
            <div className="pemb-section-label">Our Methodology</div>
            <h2 className="pemb-section-title">Engineering Approach</h2>
            <p className="pemb-section-sub" style={{ marginBottom: 28 }}>A structured process from concept to completion.</p>
            <div className="pemb-method-steps">
              {methodology.map((m) => (
                <div className="pemb-method-step" key={m.num}>
                  <div className="pemb-method-num">{m.num}</div>
                  <div>
                    <div className="pemb-method-title">{m.title}</div>
                    <div className="pemb-method-desc">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pemb-method-img">
            <Image src="/pemb.png" alt="PEMB Engineering" fill style={{ objectFit: "cover" }} sizes="50vw"/>
          </div>
        </div>

        <div className="pemb-apps">
          <div className="pemb-apps-img">
            <Image src="/structural-steel.png" alt="PEMB Applications" fill style={{ objectFit: "cover" }} sizes="50vw"/>
          </div>
          <div>
            <div className="pemb-section-label">Applications</div>
            <h2 className="pemb-section-title">Built for Every Industry</h2>
            <p className="pemb-section-sub">From aviation to retail, our PEMB solutions adapt to any requirement.</p>
            <div className="pemb-apps-list">
              {applications.map((a) => (
                <div className="pemb-app-item" key={a}>{a}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
