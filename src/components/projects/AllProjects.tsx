"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiMaximize2, FiCalendar, FiArrowUpRight, FiChevronDown } from "react-icons/fi";

const CATEGORIES = ["All Projects", "Tilt-Up", "Precast", "Structural Steel", "Formwork", "BIM", "Rebar"];

const PROJECTS = [
  {
    id: 1, category: "Tilt-Up",
    image: "/tilt-up.png",
    title: "Mega Warehouse Logistics Hub",
    desc: "A state-of-the-art distribution center featuring reinforced tilt-up panels and expansive bay layouts optimised for logistics.",
    location: "Hyderabad, TX", area: "150k sq ft", year: "2026",
  },
  {
    id: 2, category: "Structural Steel",
    image: "/structural-steel.png",
    title: "Skyline Office Tower",
    desc: "Twelve stories of precision steel framework engineered to withstand high wind loads and seismic activity.",
    location: "Hyderabad, TX", area: "150k sq ft", year: "2025",
  },
  {
    id: 3, category: "Precast",
    image: "/pre-cast.png",
    title: "Interstate 45 Expansion",
    desc: "Rapid deployment of precast concrete girders significantly reducing traffic disruption during construction.",
    location: "Hyderabad, TX", area: "150k sq ft", year: "2025",
  },
  {
    id: 4, category: "Formwork",
    image: "/forming.png",
    title: "Tech Manufacturing Facility",
    desc: "Pre-engineered metal building system designed for rapid assembly and flexible interior layout configurations.",
    location: "Hyderabad, TX", area: "150k sq ft", year: "2024",
  },
  {
    id: 5, category: "Rebar",
    image: "/reber.png",
    title: "Deep Foundation Mat",
    desc: "Complex rebar reinforcement for a 60-story skyscraper foundation, ensuring structural integrity at depth.",
    location: "Hyderabad, TX", area: "150k sq ft", year: "2024",
  },
  {
    id: 6, category: "Structural Steel",
    image: "/structural-steel.png",
    title: "Civic Center Arena",
    desc: "Long-span steel trusses creating an open, pillar-free interior for the city's new multi-purpose civic arena.",
    location: "Hyderabad, TX", area: "150k sq ft", year: "2024",
  },
  {
    id: 7, category: "BIM",
    image: "/bim-consulting.png",
    title: "Smart Industrial Campus",
    desc: "Full BIM coordination across 12 buildings, eliminating clashes and reducing rework by 40% on site.",
    location: "Hyderabad, TX", area: "200k sq ft", year: "2024",
  },
  {
    id: 8, category: "Precast",
    image: "/pre-cast.png",
    title: "Coastal Bridge Overpass",
    desc: "Precast segmental bridge construction delivering speed and durability in a challenging coastal environment.",
    location: "Hyderabad, TX", area: "80k sq ft", year: "2023",
  },
  {
    id: 9, category: "Tilt-Up",
    image: "/tilt-up.png",
    title: "Cold Storage Distribution",
    desc: "Insulated tilt-up panels engineered for temperature-controlled environments across a large footprint.",
    location: "Hyderabad, TX", area: "120k sq ft", year: "2023",
  },
];

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  "Tilt-Up":          { bg: "rgba(171,140,245,0.85)", color: "#fff" },
  "Precast":          { bg: "rgba(40,23,80,0.85)",    color: "#fff" },
  "Structural Steel": { bg: "rgba(34,168,90,0.85)",   color: "#fff" },
  "Formwork":         { bg: "rgba(245,158,11,0.85)",  color: "#fff" },
  "BIM":              { bg: "rgba(59,130,246,0.85)",  color: "#fff" },
  "Rebar":            { bg: "rgba(239,68,68,0.85)",   color: "#fff" },
};

const PAGE_SIZE = 6;

export default function AllProjects() {
  const [active, setActive] = useState("All Projects");
  const [count, setCount] = useState(PAGE_SIZE);

  const filtered = active === "All Projects"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  const visible = filtered.slice(0, count);
  const hasMore = count < filtered.length;

  return (
    <>
      <style>{`
        .ap {
          background: #f9f8ff;
          padding: 0 48px 96px;
        }

        /* ── Filter tabs ── */
        .ap-filters {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          padding: 32px 0 36px;
          border-bottom: 1px solid #ede9ff;
          margin-bottom: 36px;
        }
        .ap-filter-btn {
          padding: 9px 20px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1.5px solid #e5e5e5;
          background: #ffffff;
          color: #525252;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .ap-filter-btn:hover {
          border-color: #ab8cf5;
          color: #281750;
        }
        .ap-filter-btn.active {
          background: #281750;
          border-color: #281750;
          color: #ffffff;
        }

        /* ── Showing label ── */
        .ap-showing {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .ap-showing-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f0824;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ap-showing-title::before {
          content: '';
          width: 4px;
          height: 22px;
          background: #ab8cf5;
          border-radius: 2px;
          display: inline-block;
        }
        .ap-showing-count {
          font-size: 0.82rem;
          color: #a3a3a3;
          font-weight: 500;
        }

        /* ── Grid ── */
        .ap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ── Card ── */
        .ap-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #ede9ff;
          transition: all 0.28s ease;
          display: flex;
          flex-direction: column;
        }
        .ap-card:hover {
          border-color: #ab8cf5;
          box-shadow: 0 12px 40px rgba(40,23,80,0.1);
          transform: translateY(-4px);
        }
        .ap-card-img-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .ap-card-img {
          transition: transform 0.5s ease;
        }
        .ap-card:hover .ap-card-img {
          transform: scale(1.06);
        }
        .ap-card-cat {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 2;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 4px 10px;
          border-radius: 100px;
          backdrop-filter: blur(6px);
        }
        .ap-card-arrow {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          opacity: 0;
          transform: translateY(-4px);
          transition: all 0.22s ease;
        }
        .ap-card:hover .ap-card-arrow {
          opacity: 1;
          transform: translateY(0);
        }

        /* card body */
        .ap-card-body {
          padding: 20px 20px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .ap-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #281750;
          margin-bottom: 8px;
          line-height: 1.3;
          transition: color 0.2s;
        }
        .ap-card:hover .ap-card-title { color: #ab8cf5; }
        .ap-card-desc {
          font-size: 0.83rem;
          color: #6b6b80;
          line-height: 1.65;
          flex: 1;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ap-card-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 14px;
          border-top: 1px solid #f0eeff;
          flex-wrap: wrap;
        }
        .ap-card-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          color: #a3a3a3;
          font-weight: 500;
        }
        .ap-card-meta-item svg { color: #ab8cf5; flex-shrink: 0; }
        .ap-card-year {
          margin-left: auto;
          font-size: 0.75rem;
          font-weight: 700;
          color: #281750;
          background: #f0eeff;
          padding: 3px 10px;
          border-radius: 100px;
        }

        /* ── Load more ── */
        .ap-load-wrap {
          text-align: center;
          margin-top: 48px;
        }
        .ap-load-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #281750;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 13px 32px;
          border-radius: 10px;
          border: 1.5px solid #d8cafa;
          cursor: pointer;
          transition: all 0.22s ease;
        }
        .ap-load-btn:hover {
          background: #281750;
          color: #ffffff;
          border-color: #281750;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(40,23,80,0.15);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .ap { padding: 0 24px 72px; }
          .ap-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .ap { padding: 0 16px 60px; }
          .ap-grid { grid-template-columns: 1fr; }
          .ap-filters { gap: 6px; }
          .ap-filter-btn { padding: 7px 14px; font-size: 0.8rem; }
        }
      `}</style>

      <section className="ap">
        {/* Filter tabs */}
        <div className="ap-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`ap-filter-btn${active === cat ? " active" : ""}`}
              onClick={() => { setActive(cat); setCount(PAGE_SIZE); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Showing label */}
        <div className="ap-showing">
          <div className="ap-showing-title">
            Showing {active}
          </div>
          <span className="ap-showing-count">{filtered.length} projects</span>
        </div>

        {/* Grid */}
        <div className="ap-grid">
          {visible.map((p) => {
            const catStyle = CATEGORY_COLORS[p.category] ?? { bg: "rgba(40,23,80,0.8)", color: "#fff" };
            return (
              <div key={p.id} className="ap-card">
                <div className="ap-card-img-wrap">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="ap-card-img"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                  <span
                    className="ap-card-cat"
                    style={{ background: catStyle.bg, color: catStyle.color }}
                  >
                    {p.category}
                  </span>
                  <div className="ap-card-arrow">
                    <FiArrowUpRight size={14} />
                  </div>
                </div>
                <div className="ap-card-body">
                  <div className="ap-card-title">{p.title}</div>
                  <p className="ap-card-desc">{p.desc}</p>
                  <div className="ap-card-meta">
                    <span className="ap-card-meta-item">
                      <FiMapPin size={11} /> {p.location}
                    </span>
                    <span className="ap-card-meta-item">
                      <FiMaximize2 size={11} /> {p.area}
                    </span>
                    <span className="ap-card-year">
                      {p.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="ap-load-wrap">
            <button
              className="ap-load-btn"
              onClick={() => setCount((c) => c + PAGE_SIZE)}
            >
              Load more Projects <FiChevronDown size={16} />
            </button>
          </div>
        )}
      </section>
    </>
  );
}
