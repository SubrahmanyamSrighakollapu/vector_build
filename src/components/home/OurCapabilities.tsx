import Link from "next/link";
import { FiLayers, FiGrid, FiRotateCcw, FiBox, FiMonitor, FiLayout, FiHome, FiArrowRight } from "react-icons/fi";
import { ReactNode } from "react";

type Capability = {
  num: string;
  icon: ReactNode;
  title: string;
  desc: string;
  href: string;
  wide?: boolean;
};

const capabilities: Capability[] = [
  {
    num: "01",
    icon: <FiLayers size={18} />,
    title: "Precast",
    desc: "We provide high-precision Precast Concrete Detailing Services for commercial, industrial, residential, infrastructure, and institutional projects worldwide.",
    href: "/services",
  },
  {
    num: "02",
    icon: <FiGrid size={18} />,
    title: "Rebar Detailing",
    desc: "We provide comprehensive, standards-compliant Rebar Detailing Services for residential, commercial, high-rise, industrial, and infrastructure projects worldwide.",
    href: "/services",
  },
  {
    num: "03",
    icon: <FiRotateCcw size={18} />,
    title: "Tilt-Up Services",
    desc: "We provide accurate and construction-ready Tilt-Up Shop Drawings and Embed Detailing Services tailored to meet contractor and engineer requirements.",
    href: "/services",
  },
  {
    num: "04",
    icon: <FiBox size={18} />,
    title: "Structural Steel",
    desc: "We deliver high-precision structural steel detailing and engineering solutions tailored to international construction standards and project requirements.",
    href: "/services",
  },
  {
    num: "05",
    icon: <FiMonitor size={18} />,
    title: "BIM Consulting Services",
    desc: "Smart BIM solutions for better coordination, clash detection, and efficient project delivery.",
    href: "/services",
  },
  {
    num: "06",
    icon: <FiLayout size={18} />,
    title: "Formwork Detailing",
    desc: "We provide comprehensive Formwork Detailing Services for cast-in-place concrete structures, delivering precise, fabrication-ready drawings.",
    href: "/services",
  },
  {
    num: "07",
    icon: <FiHome size={18} />,
    title: "PEMB (Pre-Engineered Metal Buildings)",
    desc: "Complete building systems designed for optimum strength and flexibility. Our PEMB solutions are perfect for hangars, manufacturing plants, and logistics centers.",
    href: "/services",
    wide: true,
  },
];

export default function OurCapabilities() {
  return (
    <>
      <style>{`
        .capabilities {
          padding: 96px 48px;
          background: #f5f5f5;
        }
        .capabilities-header {
          margin-bottom: 56px;
        }
        .capabilities-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .capabilities-label-line {
          width: 36px;
          height: 3px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .capabilities-label-text {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #281750;
        }
        .capabilities-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #281750;
          margin-bottom: 10px;
        }
        .capabilities-subtitle {
          font-size: 1rem;
          color: #525252;
        }
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cap-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 28px 24px 24px;
          border: 1px solid #e5e5e5;
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .cap-card:hover {
          border-color: #ab8cf5;
          box-shadow: 0 12px 40px rgba(40,23,80,0.1);
          transform: translateY(-4px);
        }
        .cap-card-wide {
          grid-column: 1 / -1;
          flex-direction: row;
          align-items: flex-start;
          gap: 32px;
          border-left: 4px solid #281750;
        }
        .cap-card-wide:hover {
          border-left-color: #ab8cf5;
        }
        .cap-card-wide .cap-card-body {
          flex: 1;
        }
        .cap-num {
          position: absolute;
          top: 16px;
          right: 20px;
          font-size: 3.5rem;
          font-weight: 900;
          color: rgba(40,23,80,0.06);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .cap-icon {
          width: 40px;
          height: 40px;
          background: rgba(171,140,245,0.12);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          margin-bottom: 16px;
          color: #281750;
          flex-shrink: 0;
        }
        .cap-title {
          font-size: 1rem;
          font-weight: 700;
          color: #281750;
          margin-bottom: 10px;
        }
        .cap-desc {
          font-size: 0.875rem;
          color: #525252;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 20px;
        }
        .cap-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #ffffff;
          background: #281750;
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.2s ease;
          align-self: flex-start;
        }
        .cap-link:hover {
          background: #ab8cf5;
          color: #281750;
        }
        @media (max-width: 900px) {
          .capabilities { padding: 64px 20px; }
          .capabilities-grid { grid-template-columns: 1fr 1fr; }
          .cap-card-wide { grid-column: 1 / -1; flex-direction: column; }
        }
        @media (max-width: 600px) {
          .capabilities-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section className="capabilities">
        <div className="capabilities-header">
          <div className="capabilities-label">
            <div className="capabilities-label-line" />
            <span className="capabilities-label-text">Our Capabilities</span>
          </div>
          <h2 className="capabilities-title">Engineering Precision</h2>
          <p className="capabilities-subtitle">
            Comprehensive industrial construction services tailored for the modern age.
          </p>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((cap) => (
            <div key={cap.num} className={`cap-card${cap.wide ? " cap-card-wide" : ""}`}>
              <div className="cap-num">{cap.num}</div>
              <div className="cap-icon">{cap.icon}</div>
              <div className="cap-card-body">
                <div className="cap-title">{cap.title}</div>
                <p className="cap-desc">{cap.desc}</p>
                <Link href={cap.href} className="cap-link">
                  {cap.wide ? "Explore PEMB Solutions" : "Learn more"} <FiArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
