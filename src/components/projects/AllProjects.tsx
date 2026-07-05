"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiMaximize2, FiArrowUpRight } from "react-icons/fi";

const CATEGORIES = ["All Projects", "Tilt-Up", "Precast", "Mini/Self Storages"];

const PROJECTS = [
  { id: 1, category: "Tilt-Up", image: "/Mega-Warehouse-Logistics-Hub-Image.png", title: "Mega Warehouse Logistics Hub", desc: "A state-of-the-art distribution center featuring reinforced tilt-up panels and expansive bay layouts optimised for logistics.", location: "Hyderabad", area: "150k sq ft", year: "2026" },
  { id: 2, category: "Tilt-Up", image: "/Skyline-Office-Tower-Image.png", title: "Skyline Office Tower", desc: "Twelve stories of precision steel framework engineered to withstand high wind loads and seismic activity.", location: "Hyderabad", area: "150k sq ft", year: "2025" },
  { id: 3, category: "Precast", image: "/Interstate-45-Expansion-Image.png", title: "Interstate 45 Expansion", desc: "Rapid deployment of precast concrete girders significantly reducing traffic disruption during construction.", location: "Hyderabad", area: "150k sq ft", year: "2025" },
  { id: 4, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image1.png", title: "Mini/Self Storages", desc: "A purpose-built mini storage facility designed for security, efficiency, and long-term performance.", location: "Hyderabad", area: "150k sq ft", year: "2024" },
  { id: 5, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image2.png", title: "Mini/Self Storages", desc: "A modern storage facility designed to maximize capacity, security, and operational efficiency.", location: "Hyderabad", area: "150k sq ft", year: "2024" },
];

const CAT_COLORS: Record<string, string> = {
  "Tilt-Up": "#ab8cf5",
  "Precast": "#6366f1",
  "Mini/Self Storages": "#ec4899",
};

export default function AllProjects() {
  const [active, setActive] = useState("All Projects");

  const filtered = active === "All Projects" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <style>{`
        .ap { background: #f9f8ff; padding: 0 80px 96px; }

        .ap-filters {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          padding: 40px 0 40px;
          border-bottom: 1px solid #ede9ff;
          margin-bottom: 40px;
        }
        .ap-filter-btn {
          padding: 9px 20px;
          border-radius: 100px;
          font-size: 0.83rem;
          font-weight: 600;
          border: 1.5px solid #e5e5e5;
          background: #ffffff;
          color: #525252;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .ap-filter-btn:hover { border-color: #ab8cf5; color: #281750; }
        .ap-filter-btn.active {
          background: #0a0618;
          border-color: #0a0618;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(10,6,24,0.2);
        }

        .ap-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }
        .ap-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ap-header-bar {
          width: 4px; height: 24px;
          background: linear-gradient(180deg, #ab8cf5, #281750);
          border-radius: 4px;
        }
        .ap-header-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0a0618;
        }
        .ap-header-count {
          font-size: 0.8rem;
          color: #a3a3a3;
          font-weight: 500;
          background: #f0eeff;
          padding: 3px 12px;
          border-radius: 100px;
        }

        .ap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ap-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #ede9ff;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .ap-card:hover {
          border-color: rgba(171,140,245,0.4);
          box-shadow: 0 16px 48px rgba(40,23,80,0.1);
          transform: translateY(-5px);
        }
        .ap-card-img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
          flex-shrink: 0;
          background: #0a0618;
        }
        .ap-card-img { transition: transform 0.5s ease; }
        .ap-card:hover .ap-card-img { transform: scale(1.07); }
        .ap-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,6,24,0.5) 0%, transparent 50%);
          z-index: 1;
        }
        .ap-card-cat {
          position: absolute;
          top: 12px; left: 12px;
          z-index: 2;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 4px 10px;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          color: #fff;
        }
        .ap-card-arrow {
          position: absolute;
          top: 12px; right: 12px;
          z-index: 2;
          width: 32px; height: 32px;
          border-radius: 8px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          opacity: 0;
          transform: translateY(-6px);
          transition: all 0.25s ease;
        }
        .ap-card:hover .ap-card-arrow { opacity: 1; transform: translateY(0); }

        .ap-card-body {
          padding: 20px 20px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .ap-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0a0618;
          margin-bottom: 8px;
          line-height: 1.3;
          transition: color 0.2s;
        }
        .ap-card:hover .ap-card-title { color: #281750; }
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
          gap: 12px;
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
        .ap-card-meta-item svg { color: #ab8cf5; }
        .ap-card-year {
          margin-left: auto;
          font-size: 0.72rem;
          font-weight: 700;
          color: #281750;
          background: #f0eeff;
          padding: 3px 10px;
          border-radius: 100px;
        }

        @media (max-width: 1024px) {
          .ap { padding: 0 48px 72px; }
          .ap-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .ap { padding: 0 20px 60px; }
          .ap-grid { grid-template-columns: 1fr; }
          .ap-filters { gap: 6px; }
          .ap-filter-btn { padding: 7px 14px; font-size: 0.78rem; }
        }
      `}</style>

      <section className="ap">
        <div className="ap-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`ap-filter-btn${active === cat ? " active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="ap-header">
          <div className="ap-header-left">
            <div className="ap-header-bar" />
            <span className="ap-header-title">
              {active}
            </span>
          </div>
          <span className="ap-header-count">{filtered.length} projects</span>
        </div>

        <motion.div className="ap-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                className="ap-card"
                layout
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              >
                <div className="ap-card-img-wrap">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="ap-card-img"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="ap-card-img-overlay" />
                  <span
                    className="ap-card-cat"
                    style={{ background: `${CAT_COLORS[p.category] ?? "#281750"}cc` }}
                  >
                    {p.category}
                  </span>
                  <div className="ap-card-arrow"><FiArrowUpRight size={14} /></div>
                </div>
                <div className="ap-card-body">
                  <div className="ap-card-title">{p.title}</div>
                  <p className="ap-card-desc">{p.desc}</p>
                  <div className="ap-card-meta">
                    <span className="ap-card-meta-item"><FiMapPin size={11} /> {p.location}</span>
                    <span className="ap-card-meta-item"><FiMaximize2 size={11} /> {p.area}</span>
                    <span className="ap-card-year">{p.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
