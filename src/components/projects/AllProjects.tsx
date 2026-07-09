"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiMaximize2, FiArrowUpRight } from "react-icons/fi";

const CATEGORIES = ["All Projects", "Tilt-Up", "Precast", "Mini/Self Storages"];

const PROJECTS = [
  {
    id: 1,
    category: "Tilt-Up",
    image: "/tiltup-Trade-Park-East-Building.PNG",
    title: "Trade Park East Building 4",
    desc: "A modern tilt-up industrial facility engineered for durability, rapid construction, and long-term operational performance",
    location: "Weber Boulevard Ladson, SC",
    area: "145.6k sq ft",
    year: "2026",
  },
  {
    id: 2,
    category: "Tilt-Up",
    image: "/tiltup-WOODS-ROAD-BUILDING.PNG",
    title: "WOODS ROAD - BUILDING",
    desc: "A precision-built tilt-up commercial structure designed to deliver structural efficiency, reliability, and lasting value.",
    location: "WOODS RD BROOKSHIRE, TEXAS",
    area: "836.12k sq ft",
    year: "2025",
  },
  {
    id: 3,
    category: "Tilt-Up",
    image: "/tiltup-328-BARNES.PNG",
    title: "328 BARNES",
    desc: "A high-quality tilt-up development combining efficient construction techniques with exceptional structural performance.",
    location: "BARNES DRIVE SAN MARCOS, TX",
    area: "82.8k sq ft",
    year: "2024",
  },

  {
    id: 4,
    category: "Tilt-Up",
    image: "/tiltup-LAMPROS-STEEL.PNG",
    title: "LAMPROS STEEL",
    desc: "A robust tilt-up industrial building designed to support demanding operations through strength, precision, and durability.",
    location: "SE 13th AVENUE CANBY, OR",
    area: "92k sq ft",
    year: "2023",
  },

  {
    id: 5,
    category: "Tilt-Up",
    image: "/tiltup-FLORIDA-MECHANICAL-SYSTEMS-OFFICE-BUILDING.PNG",
    title: "FLORIDA MECHANICAL SYSTEMS OFFICE BUILDING",
    desc: "A professionally engineered tilt-up office facility delivering functional workspaces with superior structural integrity",
    location: "STOCKTON ST. JACKSONVILLE, FL",
    area: "22.248k sq ft",
    year: "2022",
  },

  {
    id: 6,
    category: "Tilt-Up",
    image: "/tiltup-ALLIANCE-HAFER- BLDG.PNG",
    title: "ALLIANCE - HAFER BLDG",
    desc: "A purpose-built tilt-up commercial facility designed to maximize efficiency, durability, and construction quality.",
    location: "NORTH FWY HOUSTON, TX",
    area: "362.03k sq ft",
    year: "2021",
  },

  {
    id: 7,
    category: "Tilt-Up",
    image: "/tiltup-TECTONIC-GREENSBORO.PNG",
    title: "TECTONIC - GREENSBORO",
    desc: "An advanced tilt-up industrial project engineered to meet high-performance operational and structural requirements.",
    location: "MCCONNELL ROAD GREENSBORO NC",
    area: "293.76k sq ft",
    year: "2020",
  },

  {
    id: 8,
    category: "Tilt-Up",
    image: "/tiltup-LINCOLN-LOGISTICS-ROCKLAND.PNG",
    title: "LINCOLN LOGISTICS - ROCKLAND",
    desc: "A state-of-the-art tilt-up logistics center designed for efficient distribution, operational flexibility, and long-term reliability.",
    location: "EXECUTIVE BOULEVARD, VALLEY COTTAGE, NY",
    area: "220k sq ft",
    year: "2019",
  },
  {
    id: 9,
    category: "Tilt-Up",
    image: "/tiltup-GATEWAY-NW-LOGISTICS-CENTER.PNG",
    title: "GATEWAY NW LOGISTICS CENTER",
    desc: "A modern tilt-up warehouse facility engineered to optimize logistics operations, durability, and construction efficiency.",
    location: "JENKINS ROAD GASTONIA, NC",
    area: "166.4k sq ft",
    year: "2018",
  },

  {
    id: 10,
    category: "Tilt-Up",
    image: "/tiltup-BRIDGE-POINT-EVERETT-500-BUILDING.PNG",
    title: "BRIDGE POINT EVERETT 500 - BUILDING",
    desc: "A large-scale tilt-up distribution facility designed to deliver exceptional strength, fast-track construction, and reliable long-term performance",
    location: "36TH AVE WEST EVERETT, WA",
    area: "100.848k sq ft",
    year: "2017",
  },

  {
    id: 11,
    category: "Precast",
    image: "/Interstate-45-Expansion-Image.png",
    title: "Interstate 45 Expansion",
    desc: "Rapid deployment of precast concrete girders significantly reducing traffic disruption during construction.",
    location: "Hyderabad",
    area: "150k sq ft",
    year: "2025",
  },
  { id: 12, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image-one.png", title: "Mini/Self Storages", desc: "Designed for secure access, convenient operation, and maximum tenant satisfaction.", location: "Henderson, North Carolina", area: "51k sq ft", year: "2024" },
  { id: 13, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image-two.png", title: "Mini/Self Storages", desc: "Engineered to protect valuable belongings with reliable, energy-efficient climate control.", location: "Las Vegas, NV", area: "83k sq ft", year: "2024" },
  { id: 14, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image3.png", title: "Mini/Self Storages", desc: "Optimized for high-capacity storage with efficient layouts and durable structural systems.", location: "Aloha, Oregon", area: "138k sq ft", year: "2024" },
  { id: 15, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image4.png", title: "Mini/Self Storages", desc: "A modern storage facility designed to maximize capacity, security, and operational efficiency.", location: "Aloha, Oregon", area: "138k sq ft", year: "2023" },
  { id: 16, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image5.png", title: "Mini/Self Storages", desc: "Purpose-designed to accommodate oversized vehicles with secure and accessible storage solutions.", location: "San Pablo, CA", area: "92k sq ft", year: "2023" },
  { id: 17, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image6.png", title: "Mini/Self Storages", desc: "Designed to support business inventory with flexible, secure, and scalable storage spaces.", location: "Burlington, North Carolina", area: "127k sq ft", year: "2022" },
  { id: 18, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image7.png", title: "Mini/Self Storages", desc: "A purpose-built mini storage facility designed for security, efficiency, and long-term performance.", location: "Woodbranch Village, TX", area: "93k sq ft", year: "2020" },
  { id: 19, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image8.png", title: "Mini/Self Storages", desc: "A modern storage facility designed to maximize capacity, security, and operational efficiency.", location: "San Barnadino, CA", area: "92k sq ft", year: "2018" },
  { id: 20, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image9.png", title: "Mini/Self Storages", desc: "Flexible building systems designed for rapid expansion and evolving storage requirements.", location: "Rexburg, ID 83440", area: "101k sq ft", year: "2018" },
  { id: 21, category: "Mini/Self Storages", image: "/MiniSelf-Storages-Image10.png", title: "Mini/Self Storages", desc: "Featuring robust structural design and advanced security for dependable asset protection.", location: "Tallahassee, FL", area: "113k sq ft", year: "2017" },
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
