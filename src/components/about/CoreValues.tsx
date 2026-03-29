import { FiShield, FiCheckCircle, FiZap, FiStar } from "react-icons/fi";

const values = [
  {
    icon: <FiShield size={20} />,
    iconBg: "#fff0f0",
    iconColor: "#e05252",
    title: "Safety First",
    desc: "We operate with a zero-compromise approach to safety. Every site, every person returns home safe. It is the bedrock of our operational excellence.",
  },
  {
    icon: <FiCheckCircle size={20} />,
    iconBg: "#f0fff4",
    iconColor: "#22a85a",
    title: "Integrity",
    desc: "Transparent communication and honest delivery are non-negotiable. We build trust as carefully as we build structures, honoring our commitments to clients and partners.",
  },
  {
    icon: <FiZap size={20} />,
    iconBg: "#f5f0ff",
    iconColor: "#ab8cf5",
    title: "Innovation",
    desc: "We embrace modern methodologies like BIM and modular construction to reduce waste, accelerate timelines, and improve precision in every project phase.",
  },
  {
    icon: <FiStar size={20} />,
    iconBg: "#fff8f0",
    iconColor: "#f59e0b",
    title: "Client Success",
    desc: "Your vision is our blueprint. We measure our success not just by the quality of the build, but by the value it generates for your business operations long-term.",
  },
];

export default function CoreValues() {
  return (
    <>
      <style>{`
        .cv {
          padding: 96px 48px;
          background: #f9f8ff;
        }
        .cv-header {
          margin-bottom: 48px;
        }
        .cv-title {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 800;
          color: #0f0824;
          margin-bottom: 4px;
        }
        .cv-title-underline {
          width: 40px;
          height: 3px;
          background: #ab8cf5;
          border-radius: 2px;
          margin-bottom: 14px;
        }
        .cv-subtitle {
          font-size: 0.95rem;
          color: #525252;
        }
        .cv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .cv-card {
          background: #ffffff;
          border: 1px solid #ede9ff;
          border-radius: 14px;
          padding: 32px 28px;
          transition: all 0.25s ease;
        }
        .cv-card:hover {
          border-color: #ab8cf5;
          box-shadow: 0 8px 32px rgba(40,23,80,0.08);
          transform: translateY(-3px);
        }
        .cv-card-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .cv-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0f0824;
          margin-bottom: 10px;
        }
        .cv-card-desc {
          font-size: 0.875rem;
          color: #525252;
          line-height: 1.75;
        }
        @media (max-width: 768px) {
          .cv { padding: 64px 20px; }
          .cv-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section className="cv">
        <div className="cv-header">
          <h2 className="cv-title">Core Values</h2>
          <div className="cv-title-underline" />
          <p className="cv-subtitle">
            The pillars that support every decision we make and every structure we build.
          </p>
        </div>
        <div className="cv-grid">
          {values.map((v) => (
            <div className="cv-card" key={v.title}>
              <div
                className="cv-card-icon"
                style={{ background: v.iconBg, color: v.iconColor }}
              >
                {v.icon}
              </div>
              <div className="cv-card-title">{v.title}</div>
              <p className="cv-card-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
