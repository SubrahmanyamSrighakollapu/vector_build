"use client";
import { useState } from "react";
import { FiLinkedin, FiMail } from "react-icons/fi";

const teams = [
  {
    group: "Engineering Leads",
    members: [
      {
        name: "Sarah Jenkins",
        role: "Lead Civil Engineer",
        bio: "Specializing in large-scale infrastructure and seismic retrofitting. Sarah brings 15 years of innovation to our core structural projects.",
        badge: "PE Licensed, LEED AP",
        img: "/team1.jpg",
      },
      {
        name: "David Chen",
        role: "Senior Mechanical Lead",
        bio: "Expert in HVAC systems for industrial complexes. David ensures our buildings operate with maximum energy efficiency and reliability.",
        badge: "ASHRAE Fellow",
        img: "/team2.jpg",
      },
      {
        name: "Amara Okeke",
        role: "Electrical Systems Director",
        bio: "Leading our smart-grid integration and sustainable power initiatives. Amara focuses on future-proofing electrical infrastructure.",
        badge: "PE Licensed, LEED AP",
        img: "/team3.jpg",
      },
    ],
  },
  {
    group: "Project Managers",
    members: [
      {
        name: "James Whitfield",
        role: "Lead Civil Engineer",
        bio: "Specializing in large-scale infrastructure and seismic retrofitting. James brings 15 years of innovation to our core structural projects.",
        badge: "PE Licensed, LEED AP",
        img: "/team4.jpg",
      },
      {
        name: "Elena Rodriguez",
        role: "Site Coordinator",
        bio: "The bridge between design and execution. Elena manages on-site logistics, safety compliance, and crew coordination seamlessly.",
        badge: "Safety First Lead",
        img: "/team5.jpg",
      },
      {
        name: "Michael Ross",
        role: "Senior Project Manager",
        bio: "With a track record of delivering ₹50M+ projects on schedule, Michael excels in stakeholder communication and timeline optimization.",
        badge: "PMP Certified",
        img: "/team6.jpg",
      },
    ],
  },
];

function MemberCard({ member }: { member: (typeof teams)[0]["members"][0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`tm-card${hovered ? " tm-card-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="tm-card-img-wrap">
        <img src={member.img} alt={member.name} className="tm-card-img" />
        <div className="tm-card-overlay">
          <div className="tm-card-actions">
            <button className="tm-action-btn" aria-label="LinkedIn"><FiLinkedin size={16} /></button>
            <button className="tm-action-btn" aria-label="Email"><FiMail size={16} /></button>
          </div>
        </div>
      </div>
      <div className="tm-card-body">
        <div className="tm-card-top">
          <div>
            <h3 className="tm-card-name">{member.name}</h3>
            <p className="tm-card-role">{member.role}</p>
          </div>
        </div>
        <p className="tm-card-bio">{member.bio}</p>
        <div className="tm-card-badge">{member.badge}</div>
      </div>
    </div>
  );
}

export default function AllEngineeringLeads() {
  return (
    <>
      <style>{`
        .tm-hero {
          background: linear-gradient(135deg, #1a0e38 0%, #281750 60%, #1e1040 100%);
          padding: 80px 48px 72px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .tm-hero::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(171,140,245,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .tm-hero::after {
          content: '';
          position: absolute;
          bottom: -60px; left: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(171,140,245,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .tm-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(171,140,245,0.12);
          border: 1px solid rgba(171,140,245,0.3);
          color: #d8cafa;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
        }
        .tm-hero-dot {
          width: 6px; height: 6px;
          background: #ab8cf5;
          border-radius: 50%;
          animation: tm-pulse 2s infinite;
        }
        @keyframes tm-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(1.4); }
        }
        .tm-hero-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }
        .tm-hero-title span { color: #ab8cf5; }
        .tm-hero-desc {
          font-size: 1rem;
          color: rgba(216,202,250,0.75);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.75;
          position: relative;
          z-index: 1;
        }

        .tm-page {
          background: #f9f8ff;
          padding: 72px 48px 96px;
        }
        .tm-section { margin-bottom: 72px; }
        .tm-section:last-child { margin-bottom: 0; }

        .tm-section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 36px;
        }
        .tm-section-bar {
          width: 4px;
          height: 28px;
          background: linear-gradient(180deg, #ab8cf5, #281750);
          border-radius: 4px;
          flex-shrink: 0;
        }
        .tm-section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f0824;
          letter-spacing: -0.2px;
        }
        .tm-section-count {
          margin-left: auto;
          font-size: 0.78rem;
          font-weight: 600;
          color: #ab8cf5;
          background: rgba(171,140,245,0.1);
          border: 1px solid rgba(171,140,245,0.2);
          padding: 3px 12px;
          border-radius: 100px;
        }

        .tm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .tm-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e8e3f8;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .tm-card-hovered {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(40,23,80,0.13);
          border-color: rgba(171,140,245,0.4);
        }

        .tm-card-img-wrap {
          position: relative;
          height: 300px;
          overflow: hidden;
          background: #f0eeff;
        }
        .tm-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition: transform 0.4s ease;
          display: block;
        }
        .tm-card-hovered .tm-card-img {
          transform: scale(1.04);
        }
        .tm-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(40,23,80,0.7) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 16px;
        }
        .tm-card-hovered .tm-card-overlay { opacity: 1; }
        .tm-card-actions {
          display: flex;
          gap: 8px;
        }
        .tm-action-btn {
          width: 34px; height: 34px;
          border-radius: 8px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
          backdrop-filter: blur(4px);
        }
        .tm-action-btn:hover {
          background: #ab8cf5;
          border-color: #ab8cf5;
        }

        .tm-card-body {
          padding: 20px 20px 18px;
        }
        .tm-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .tm-card-name {
          font-size: 1rem;
          font-weight: 700;
          color: #281750;
          margin-bottom: 3px;
        }
        .tm-card-role {
          font-size: 0.8rem;
          color: #ab8cf5;
          font-weight: 500;
        }
        .tm-card-bio {
          font-size: 0.82rem;
          color: #525252;
          line-height: 1.65;
          margin-bottom: 14px;
        }
        .tm-card-badge {
          display: inline-flex;
          align-items: center;
          font-size: 0.72rem;
          font-weight: 600;
          color: #281750;
          background: #f0eeff;
          border: 1px solid #d8cafa;
          padding: 4px 10px;
          border-radius: 6px;
          letter-spacing: 0.2px;
        }

        @media (max-width: 1024px) {
          .tm-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .tm-hero { padding: 60px 20px 56px; }
          .tm-page { padding: 48px 20px 72px; }
          .tm-grid { grid-template-columns: 1fr; }
          .tm-card-img-wrap { height: 260px; }
        }
      `}</style>

      {/* Hero */}
      <section className="tm-hero">
        <div className="tm-hero-badge">
          <span className="tm-hero-dot" />
          Our People
        </div>
        <h1 className="tm-hero-title">
          Meet Our <span>Experts</span>
        </h1>
        <p className="tm-hero-desc">
          The architects, engineers, and project managers building the future with precision.
          We combine technical excellence with unwavering dedication.
        </p>
      </section>

      {/* Teams */}
      <div className="tm-page">
        {teams.map((team) => (
          <div className="tm-section" key={team.group}>
            <div className="tm-section-header">
              <div className="tm-section-bar" />
              <h2 className="tm-section-title">{team.group}</h2>
              <span className="tm-section-count">{team.members.length} members</span>
            </div>
            <div className="tm-grid">
              {team.members.map((m) => (
                <MemberCard key={m.name} member={m} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
