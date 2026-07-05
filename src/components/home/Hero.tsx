"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";


const stats = [
  { num: 10000, suffix: "+", label: "Projects Completed" },
  { num: 100, suffix: "%", label: "Safety Record" },
  { num: 20, suffix: "+", label: "Years Experience" },
  { num: 38, suffix: "+", label: "Expert Engineers" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1800;

    const updateCount = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        window.requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    const animationId = window.requestAnimationFrame(updateCount);
    return () => window.cancelAnimationFrame(animationId);
  }, [target]);

  return <div>{count}{suffix}</div>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const } }),
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -20 },
  show: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" as const },
  }),
};

const line1Words = ["Building", "Precision."];
const line2Words = ["Engineering", "Excellence."];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a0618;
        }

        /* Animated engineering grid */
        .hero-grid-canvas {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 1;
          background-image:
            linear-gradient(rgba(171,140,245,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171,140,245,0.07) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 70% 70% at 30% 50%, transparent 40%, black 100%);
        }

        /* Glow orbs */
        .hero-orb-1 {
          position: absolute;
          top: -10%;
          left: -5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(171,140,245,0.22) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
          animation: hero-float 8s ease-in-out infinite;
        }
        .hero-orb-2 {
          position: absolute;
          bottom: -10%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(40,23,80,0.6) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
          animation: hero-float 10s ease-in-out infinite reverse;
        }
        .hero-orb-3 {
          position: absolute;
          top: 40%;
          right: 20%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(216,202,250,0.08) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
          animation: hero-float 12s ease-in-out infinite 2s;
        }
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        /* Floating geometric shapes */
        .hero-geo {
          position: absolute;
          z-index: 1;
          pointer-events: none;
        }
        .hero-geo-1 {
          top: 15%;
          right: 8%;
          width: 80px;
          height: 80px;
          border: 1.5px solid rgba(171,140,245,0.25);
          border-radius: 12px;
          animation: hero-spin 20s linear infinite;
        }
        .hero-geo-2 {
          top: 60%;
          right: 15%;
          width: 40px;
          height: 40px;
          border: 1.5px solid rgba(171,140,245,0.2);
          border-radius: 50%;
          animation: hero-float 6s ease-in-out infinite 1s;
        }
        .hero-geo-3 {
          top: 30%;
          right: 30%;
          width: 12px;
          height: 12px;
          background: rgba(171,140,245,0.4);
          border-radius: 50%;
          animation: hero-float 4s ease-in-out infinite 0.5s;
        }
        .hero-geo-4 {
          bottom: 25%;
          left: 8%;
          width: 60px;
          height: 60px;
          border: 1px solid rgba(171,140,245,0.15);
          transform: rotate(45deg);
          animation: hero-spin 30s linear infinite reverse;
        }
        @keyframes hero-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/hero-bg.png');
          background-size: cover;
          background-position: center top;
          z-index: 0;
          opacity: 0.55;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, rgba(10,6,24,0.92) 0%, rgba(10,6,24,0.55) 55%, rgba(10,6,24,0.2) 100%),
            linear-gradient(to top, rgba(10,6,24,0.95) 0%, transparent 40%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          padding: 0 80px 160px;
          max-width: 760px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(171,140,245,0.1);
          border: 1px solid rgba(171,140,245,0.3);
          color: #d8cafa;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 7px 16px;
          border-radius: 100px;
          margin-bottom: 32px;
          backdrop-filter: blur(8px);
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          background: #ab8cf5;
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 8px rgba(171,140,245,0.8);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }

        .hero-title {
          font-size: clamp(2.2rem, 4.5vw, 3rem);
          font-weight: 900;
          line-height: 1.0;
          color: #ffffff;
          margin-bottom: 0;
          letter-spacing: -2px;
        }
        .hero-title-line2 {
          display: block;
          background: linear-gradient(135deg, #ab8cf5 0%, #d8cafa 50%, #ab8cf5 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .hero-desc {
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          color: rgba(216,202,250,0.7);
          line-height: 1.8;
          margin-top: 28px;
          margin-bottom: 48px;
          max-width: 540px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
        }
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: #0f0824;
          font-size: 0.92rem;
          font-weight: 700;
          padding: 15px 32px;
          border-radius: 10px;
          border: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .hero-btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ab8cf5, #d8cafa);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .hero-btn-primary:hover::before { opacity: 1; }
        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(171,140,245,0.4);
          color: #0f0824;
        }
        .hero-btn-primary span { position: relative; z-index: 1; }
        .hero-btn-primary svg { position: relative; z-index: 1; transition: transform 0.3s ease; }
        .hero-btn-primary:hover svg { transform: translateX(4px); }

        .hero-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.05);
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 600;
          padding: 15px 28px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .hero-btn-ghost:hover {
          background: rgba(171,140,245,0.15);
          border-color: rgba(171,140,245,0.4);
          transform: translateY(-3px);
        }
        .hero-btn-ghost .play-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: rgba(171,140,245,0.2);
          border: 1px solid rgba(171,140,245,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }
        .hero-btn-ghost:hover .play-icon {
          background: #ab8cf5;
        }

        /* Stats bar */
        .hero-stats-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(171,140,245,0.12);
          background: rgba(10,6,24,0.7);
          backdrop-filter: blur(20px);
        }
        .hero-stat {
          padding: 28px 32px;
          border-right: 1px solid rgba(171,140,245,0.1);
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #ab8cf5, #d8cafa);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }
        .hero-stat:hover::before { transform: scaleX(1); }
        .hero-stat:hover { background: rgba(171,140,245,0.05); }
        .hero-stat-num {
          font-size: 2.2rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 6px;
          letter-spacing: -1px;
        }
        .hero-stat-num span { color: #ab8cf5; }
        .hero-stat-label {
          font-size: 0.75rem;
          color: rgba(216,202,250,0.55);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 500;
        }

        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          bottom: 120px;
          right: 48px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(216,202,250,0.4);
          font-size: 0.65rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
        }
        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(171,140,245,0.6), transparent);
          animation: scroll-line 2s ease-in-out infinite;
        }
        @keyframes scroll-line {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.5); opacity: 0.4; }
        }

        .hero-sketch {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 48%;
          z-index: 3;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 100px;
        }
        .hero-sketch svg { width: 100%; height: auto; max-width: 520px; }
        @keyframes sk-draw-in { to { stroke-dashoffset: 0; } }
        @keyframes sk-fade { from { opacity: 0; } to { opacity: 1; } }
        .sk-draw {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: sk-draw-in 1.4s ease forwards;
        }
        .sk-d0 { animation-delay: 0.3s; }
        .sk-d1 { animation-delay: 0.6s; }
        .sk-d2 { animation-delay: 0.9s; }
        .sk-d3 { animation-delay: 1.1s; }
        .sk-d4 { animation-delay: 1.3s; }
        .sk-d5 { animation-delay: 1.5s; }
        .sk-d6 { animation-delay: 1.7s; }
        .sk-d7 { animation-delay: 1.9s; }
        .sk-d8 { animation-delay: 2.1s; }
        .sk-txt { opacity: 0; animation: sk-fade 0.5s ease forwards; }
        .sk-t0 { animation-delay: 2.3s; }
        .sk-t1 { animation-delay: 2.5s; }
        .sk-t2 { animation-delay: 2.7s; }
        .sk-t3 { animation-delay: 2.9s; }

        /* Idle animations — sketch right side */
        @keyframes sk-node-blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.1; }
        }
        @keyframes sk-measure-breathe {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
        @keyframes sk-scan {
          0%   { transform: translateY(-10px); opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { transform: translateY(460px); opacity: 0; }
        }
        @keyframes sk-detail-breathe {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.03); opacity: 1; }
        }
        @keyframes sk-glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(171,140,245,0.3)); }
          50%       { filter: drop-shadow(0 0 8px rgba(171,140,245,0.9)); }
        }
        .sk-idle-node0 { animation: sk-node-blink 4s ease infinite 3.5s; }
        .sk-idle-node1 { animation: sk-node-blink 4s ease infinite 4.1s; }
        .sk-idle-node2 { animation: sk-node-blink 4s ease infinite 4.8s; }
        .sk-idle-node3 { animation: sk-node-blink 4s ease infinite 5.3s; }
        .sk-idle-measure {
          animation: sk-measure-breathe 5s ease-in-out infinite;
          animation-delay: 3.5s;
        }
        .sk-idle-scan {
          animation: sk-scan 4s linear infinite;
          animation-delay: 3.2s;
        }
        .sk-idle-detail {
          transform-origin: 408px 144px;
          animation: sk-detail-breathe 4.5s ease-in-out infinite;
          animation-delay: 3.5s;
        }
        .sk-idle-glow {
          animation: sk-glow-pulse 2.5s ease-in-out infinite;
          animation-delay: 3s;
        }

        /* Idle animations — left content */
        @keyframes badge-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes btn-glow {
          0%, 100% { box-shadow: 0 0 0px rgba(171,140,245,0); }
          50%       { box-shadow: 0 0 24px 6px rgba(171,140,245,0.35); }
        }
        @keyframes desc-breathe {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 0px rgba(255,255,255,0); }
          50%       { text-shadow: 0 0 40px rgba(171,140,245,0.25), 0 0 80px rgba(171,140,245,0.1); }
        }
        @keyframes title-line2-glow {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 0px rgba(171,140,245,0)); }
          50%       { filter: brightness(1.15) drop-shadow(0 0 12px rgba(171,140,245,0.6)); }
        }
        @keyframes btn-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes left-sketch-scan {
          0%   { transform: scaleX(0); transform-origin: left; opacity: 0.6; }
          50%  { transform: scaleX(1); transform-origin: left; opacity: 1; }
          51%  { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; opacity: 0.6; }
        }
        @keyframes coord-blink {
          0%, 80%, 100% { opacity: 0.35; }
          85%            { opacity: 0.9; }
        }
        .hero-badge-idle {
          animation: badge-float 4s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .hero-btn-glow {
          animation: btn-glow 3s ease-in-out infinite;
          animation-delay: 2s;
        }
        .hero-desc-idle {
          animation: desc-breathe 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .hero-title-idle {
          animation: title-glow 5s ease-in-out infinite;
          animation-delay: 1.8s;
        }
        .hero-title-line2-idle {
          animation: title-line2-glow 4s ease-in-out infinite;
          animation-delay: 2.5s;
        }

        /* Left side engineering sketch overlay */
        .hero-left-sketch {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 54%;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-left-sketch svg {
          width: 100%;
          height: 100%;
        }
        /* corner marks */
        @keyframes lsk-corner {
          0%, 100% { opacity: 0.2; }
          50%       { opacity: 0.55; }
        }
        /* horizontal rule line under title */
        @keyframes lsk-rule {
          0%   { stroke-dashoffset: 600; opacity: 0; }
          20%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes lsk-rule-idle {
          0%, 100% { opacity: 0.25; }
          50%       { opacity: 0.7; }
        }
        /* vertical axis line */
        @keyframes lsk-axis {
          0%   { stroke-dashoffset: 800; }
          100% { stroke-dashoffset: 0; }
        }
        /* coord label blink */
        @keyframes lsk-coord {
          0%, 85%, 100% { opacity: 0.25; }
          90%            { opacity: 0.7; }
        }
        /* crosshair pulse */
        @keyframes lsk-cross {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%       { opacity: 0.5;  transform: scale(1.15); }
        }
        .lsk-corner-tl { animation: lsk-corner 4s ease-in-out infinite 1s; }
        .lsk-corner-bl { animation: lsk-corner 4s ease-in-out infinite 2.2s; }
        .lsk-rule {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: lsk-rule 1.2s ease forwards 0.8s, lsk-rule-idle 5s ease-in-out infinite 2.5s;
        }
        .lsk-axis {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: lsk-axis 1.5s ease forwards 0.5s;
        }
        .lsk-coord0 { animation: lsk-coord 5s ease-in-out infinite 3s; opacity: 0.25; }
        .lsk-coord1 { animation: lsk-coord 5s ease-in-out infinite 4.1s; opacity: 0.25; }
        .lsk-coord2 { animation: lsk-coord 5s ease-in-out infinite 5.3s; opacity: 0.25; }
        .lsk-cross {
          transform-origin: 72px 52%;
          animation: lsk-cross 6s ease-in-out infinite 2s;
        }

        @media (max-width: 1024px) {
          .hero-sketch { display: none; }
        }
        @media (max-width: 1024px) {
          .hero-content { padding: 0 48px; }
          .hero-stats-bar { grid-template-columns: repeat(2, 1fr); }
          .hero-stat:nth-child(2) { border-right: none; }
          .hero-stat:nth-child(1),
          .hero-stat:nth-child(2) { border-bottom: 1px solid rgba(171,140,245,0.1); }
          .hero-scroll { display: none; }
        }
        @media (max-width: 768px) {
          .hero-content { padding: 60px 24px 200px; max-width: 100%; }
          .hero-title { font-size: clamp(2.2rem, 8vw, 3rem); letter-spacing: -1px; }
          .hero-stats-bar { grid-template-columns: repeat(2, 1fr); }
          .hero-stat { padding: 20px 20px; }
          .hero-stat-num { font-size: 1.6rem; }
          .hero-geo-1, .hero-geo-4 { display: none; }
        }
      `}</style>

      <section className="hero" ref={containerRef}>
        <motion.div className="hero-bg" style={{ y: bgY }} />
        <div className="hero-overlay" />
        <div className="hero-grid-canvas" />
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-orb-3" />
        <div className="hero-geo hero-geo-4" />

        {/* Left side engineering sketch overlay */}
        <div className="hero-left-sketch">
          <svg viewBox="0 0 600 900" fill="none" preserveAspectRatio="xMinYMid meet">
            {/* Top-left corner bracket */}
            <g className="lsk-corner-tl">
              <line x1="40" y1="40" x2="90" y2="40" stroke="rgba(171,140,245,0.5)" strokeWidth="1"/>
              <line x1="40" y1="40" x2="40" y2="90" stroke="rgba(171,140,245,0.5)" strokeWidth="1"/>
              <circle cx="40" cy="40" r="2" fill="rgba(171,140,245,0.6)"/>
            </g>
            {/* Bottom-left corner bracket */}
            <g className="lsk-corner-bl">
              <line x1="40" y1="860" x2="90" y2="860" stroke="rgba(171,140,245,0.5)" strokeWidth="1"/>
              <line x1="40" y1="860" x2="40" y2="810" stroke="rgba(171,140,245,0.5)" strokeWidth="1"/>
              <circle cx="40" cy="860" r="2" fill="rgba(171,140,245,0.6)"/>
            </g>
            {/* Vertical axis line on far left */}
            <line className="lsk-axis" x1="22" y1="60" x2="22" y2="840"
              stroke="rgba(171,140,245,0.18)" strokeWidth="0.8" strokeDasharray="6 4"/>
            {/* Horizontal rule line — sits just below the title area */}
            <line className="lsk-rule" x1="40" y1="420" x2="560" y2="420"
              stroke="rgba(171,140,245,0.4)" strokeWidth="0.8"/>
            {/* Small tick marks on rule */}
            {[80,160,240,320,400,480].map((x,i) => (
              <line key={i} x1={x} y1="415" x2={x} y2="425"
                stroke="rgba(171,140,245,0.3)" strokeWidth="0.7"/>
            ))}
            {/* Coordinate labels on axis */}
            <text className="lsk-coord0" x="8" y="200"
              fill="rgba(171,140,245,0.35)" fontSize="7" fontFamily="monospace"
              transform="rotate(-90,8,200)">Y+</text>
            <text className="lsk-coord1" x="8" y="500"
              fill="rgba(171,140,245,0.35)" fontSize="7" fontFamily="monospace"
              transform="rotate(-90,8,500)">0,0</text>
            <text className="lsk-coord2" x="8" y="780"
              fill="rgba(171,140,245,0.35)" fontSize="7" fontFamily="monospace"
              transform="rotate(-90,8,780)">Y-</text>
            {/* Crosshair at content origin point */}
            <g className="lsk-cross">
              <line x1="58" y1="420" x2="86" y2="420" stroke="rgba(171,140,245,0.5)" strokeWidth="0.8"/>
              <line x1="72" y1="406" x2="72" y2="434" stroke="rgba(171,140,245,0.5)" strokeWidth="0.8"/>
              <circle cx="72" cy="420" r="2.5" stroke="rgba(171,140,245,0.6)" strokeWidth="0.8" fill="none"/>
            </g>
            {/* Dashed horizontal guide lines */}
            <line x1="40" y1="200" x2="200" y2="200"
              stroke="rgba(171,140,245,0.07)" strokeWidth="0.6" strokeDasharray="3 5"/>
            <line x1="40" y1="620" x2="200" y2="620"
              stroke="rgba(171,140,245,0.07)" strokeWidth="0.6" strokeDasharray="3 5"/>
          </svg>
        </div>

        <div className="hero-sketch">
          <svg viewBox="0 0 500 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className="sk-draw sk-d0" x="30" y="20" width="440" height="440" rx="2" stroke="rgba(171,140,245,0.25)" strokeWidth="1"/>
            <rect className="sk-draw sk-d0" x="50" y="40" width="400" height="400" rx="1" stroke="rgba(171,140,245,0.12)" strokeWidth="0.5"/>
            <rect className="sk-draw sk-d1" x="320" y="390" width="150" height="50" rx="1" stroke="rgba(171,140,245,0.3)" strokeWidth="0.8"/>
            <line className="sk-draw sk-d1" x1="320" y1="405" x2="470" y2="405" stroke="rgba(171,140,245,0.2)" strokeWidth="0.5"/>

            {/* Primary structural elevation */}
            <polyline className="sk-draw sk-d2 sk-idle-glow" points="130,330 130,150 220,110 310,150 310,330" stroke="#ab8cf5" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
            <line className="sk-draw sk-d2" x1="130" y1="330" x2="310" y2="330" stroke="#ab8cf5" strokeWidth="2.2" strokeLinecap="round"/>
            <line className="sk-draw sk-d3" x1="220" y1="110" x2="220" y2="330" stroke="rgba(171,140,245,0.38)" strokeWidth="0.9" strokeDasharray="5 4"/>
            <line className="sk-draw sk-d3" x1="130" y1="150" x2="310" y2="150" stroke="rgba(171,140,245,0.22)" strokeWidth="0.8" strokeDasharray="5 5"/>
            <line className="sk-draw sk-d3" x1="130" y1="195" x2="310" y2="195" stroke="rgba(171,140,245,0.22)" strokeWidth="0.8"/>
            <line className="sk-draw sk-d3" x1="130" y1="240" x2="310" y2="240" stroke="rgba(171,140,245,0.22)" strokeWidth="0.8"/>
            <line className="sk-draw sk-d3" x1="130" y1="285" x2="310" y2="285" stroke="rgba(171,140,245,0.22)" strokeWidth="0.8"/>
            <line className="sk-draw sk-d4" x1="158" y1="305" x2="220" y2="180" stroke="rgba(171,140,245,0.34)" strokeWidth="1"/>
            <line className="sk-draw sk-d4" x1="282" y1="305" x2="220" y2="180" stroke="rgba(171,140,245,0.34)" strokeWidth="1"/>
            <line className="sk-draw sk-d4" x1="146" y1="330" x2="146" y2="348" stroke="rgba(171,140,245,0.34)" strokeWidth="1"/>
            <line className="sk-draw sk-d4" x1="294" y1="330" x2="294" y2="348" stroke="rgba(171,140,245,0.34)" strokeWidth="1"/>

            {/* Base plates and anchor points */}
            <rect className="sk-draw sk-d5" x="118" y="330" width="24" height="8" stroke="rgba(171,140,245,0.42)" strokeWidth="1"/>
            <rect className="sk-draw sk-d5" x="298" y="330" width="24" height="8" stroke="rgba(171,140,245,0.42)" strokeWidth="1"/>
            {[130,140,310,320].map((x, i) => (
              <circle key={i} className={`sk-draw sk-d5 sk-idle-node${i % 4}`} cx={x} cy="334" r="2.8" fill="rgba(171,140,245,0.72)"/>
            ))}

            {/* Dimension strings */}
            <line className="sk-draw sk-d6 sk-idle-measure" x1="130" y1="78" x2="310" y2="78" stroke="rgba(171,140,245,0.42)" strokeWidth="0.8"/>
            <line className="sk-draw sk-d6 sk-idle-measure" x1="130" y1="86" x2="130" y2="64" stroke="rgba(171,140,245,0.42)" strokeWidth="0.8"/>
            <line className="sk-draw sk-d6 sk-idle-measure" x1="310" y1="86" x2="310" y2="64" stroke="rgba(171,140,245,0.42)" strokeWidth="0.8"/>
            <polyline className="sk-draw sk-d6 sk-idle-measure" points="130,78 138,74 138,82 130,78" fill="rgba(171,140,245,0.42)"/>
            <polyline className="sk-draw sk-d6 sk-idle-measure" points="310,78 302,74 302,82 310,78" fill="rgba(171,140,245,0.42)"/>

            <line className="sk-draw sk-d6 sk-idle-measure" x1="96" y1="330" x2="96" y2="110" stroke="rgba(171,140,245,0.42)" strokeWidth="0.8"/>
            <line className="sk-draw sk-d6 sk-idle-measure" x1="88" y1="330" x2="104" y2="330" stroke="rgba(171,140,245,0.42)" strokeWidth="0.8"/>
            <line className="sk-draw sk-d6 sk-idle-measure" x1="88" y1="110" x2="104" y2="110" stroke="rgba(171,140,245,0.42)" strokeWidth="0.8"/>
            <polyline className="sk-draw sk-d6 sk-idle-measure" points="96,110 92,118 100,118 96,110" fill="rgba(171,140,245,0.42)"/>
            <polyline className="sk-draw sk-d6 sk-idle-measure" points="96,330 92,322 100,322 96,330" fill="rgba(171,140,245,0.42)"/>

            <line className="sk-draw sk-d6 sk-idle-measure" x1="346" y1="330" x2="346" y2="150" stroke="rgba(171,140,245,0.38)" strokeWidth="0.8"/>
            <line className="sk-draw sk-d6 sk-idle-measure" x1="338" y1="330" x2="354" y2="330" stroke="rgba(171,140,245,0.38)" strokeWidth="0.8"/>
            <line className="sk-draw sk-d6 sk-idle-measure" x1="338" y1="150" x2="354" y2="150" stroke="rgba(171,140,245,0.38)" strokeWidth="0.8"/>

            {/* Grid markers */}
            {[130,220,310].map((x, i) => (
              <g key={`grid-top-${i}`} className="sk-draw sk-d7">
                <circle cx={x} cy="52" r="10" stroke="rgba(171,140,245,0.32)" strokeWidth="0.8"/>
                <text x={x - 3.2} y="55" fill="rgba(171,140,245,0.6)" fontSize="8" fontFamily="monospace">{String.fromCharCode(65 + i)}</text>
              </g>
            ))}
            {[146,294].map((x, i) => (
              <g key={`grid-btm-${i}`} className="sk-draw sk-d7">
                <circle cx={x} cy="362" r="10" stroke="rgba(171,140,245,0.28)" strokeWidth="0.8"/>
                <text x={x - 2.5} y="365" fill="rgba(171,140,245,0.58)" fontSize="8" fontFamily="monospace">{i + 1}</text>
              </g>
            ))}

            {/* Callouts */}
            <line className="sk-draw sk-d7" x1="220" y1="110" x2="392" y2="78" stroke="rgba(171,140,245,0.3)" strokeWidth="0.7"/>
            <line className="sk-draw sk-d7" x1="282" y1="182" x2="388" y2="182" stroke="rgba(171,140,245,0.3)" strokeWidth="0.7"/>
            <line className="sk-draw sk-d7" x1="310" y1="334" x2="392" y2="350" stroke="rgba(171,140,245,0.3)" strokeWidth="0.7"/>
            <circle className="sk-draw sk-d7 sk-idle-node0" cx="220" cy="110" r="3.2" fill="rgba(171,140,245,0.78)"/>
            <circle className="sk-draw sk-d7 sk-idle-node1" cx="282" cy="182" r="3.2" fill="rgba(171,140,245,0.78)"/>
            <circle className="sk-draw sk-d7 sk-idle-node2" cx="310" cy="334" r="3.2" fill="rgba(171,140,245,0.78)"/>

            {/* Connection detail bubble */}
            <g className="sk-idle-detail">
              <circle className="sk-draw sk-d8" cx="408" cy="144" r="40" stroke="rgba(171,140,245,0.35)" strokeWidth="1"/>
              <line className="sk-draw sk-d8" x1="388" y1="126" x2="388" y2="164" stroke="rgba(171,140,245,0.8)" strokeWidth="1.7"/>
              <line className="sk-draw sk-d8" x1="388" y1="144" x2="428" y2="144" stroke="rgba(171,140,245,0.8)" strokeWidth="1.7"/>
              <line className="sk-draw sk-d8" x1="400" y1="118" x2="423" y2="130" stroke="rgba(171,140,245,0.46)" strokeWidth="1"/>
              <line className="sk-draw sk-d8" x1="400" y1="170" x2="423" y2="158" stroke="rgba(171,140,245,0.46)" strokeWidth="1"/>
              <circle className="sk-draw sk-d8 sk-idle-node3" cx="404" cy="136" r="3.2" stroke="rgba(171,140,245,0.56)" strokeWidth="1" fill="none"/>
              <circle className="sk-draw sk-d8 sk-idle-node1" cx="404" cy="152" r="3.2" stroke="rgba(171,140,245,0.56)" strokeWidth="1" fill="none"/>
              <circle className="sk-draw sk-d8 sk-idle-node2" cx="416" cy="136" r="3.2" stroke="rgba(171,140,245,0.56)" strokeWidth="1" fill="none"/>
              <circle className="sk-draw sk-d8 sk-idle-node0" cx="416" cy="152" r="3.2" stroke="rgba(171,140,245,0.56)" strokeWidth="1" fill="none"/>
            </g>

            {/* Scan line sweeping top to bottom */}
            <rect className="sk-idle-scan" x="50" y="40" width="400" height="2" fill="none"
              stroke="rgba(171,140,245,0.45)" strokeWidth="1"
              style={{ filter: "drop-shadow(0 0 4px rgba(171,140,245,0.8))" }}/>

            {/* Drafting cross marks */}
            {([[50,40],[450,40],[50,440],[450,440]] as [number,number][]).map(([x,y],i) => (
              <g key={i}>
                <line className="sk-draw sk-d1" x1={x-8} y1={y} x2={x+8} y2={y} stroke="rgba(171,140,245,0.4)" strokeWidth="0.8"/>
                <line className="sk-draw sk-d1" x1={x} y1={y-8} x2={x} y2={y+8} stroke="rgba(171,140,245,0.4)" strokeWidth="0.8"/>
              </g>
            ))}

            {/* Labels */}
            <text className="sk-txt sk-t0" x="194" y="68" fill="rgba(171,140,245,0.6)" fontSize="9" fontFamily="monospace" letterSpacing="1">24.0m</text>
            <text className="sk-txt sk-t0" x="76" y="226" fill="rgba(171,140,245,0.6)" fontSize="9" fontFamily="monospace" letterSpacing="1" transform="rotate(-90,76,226)">11.2m</text>
            <text className="sk-txt sk-t1" x="353" y="82" fill="rgba(171,140,245,0.55)" fontSize="8" fontFamily="monospace">RIDGE BEAM</text>
            <text className="sk-txt sk-t1" x="352" y="186" fill="rgba(171,140,245,0.55)" fontSize="8" fontFamily="monospace">KNEE BRACE</text>
            <text className="sk-txt sk-t2" x="355" y="353" fill="rgba(171,140,245,0.55)" fontSize="8" fontFamily="monospace">BASE PLATE</text>
            <text className="sk-txt sk-t2" x="372" y="195" fill="rgba(171,140,245,0.45)" fontSize="7.5" fontFamily="monospace">DETAIL A</text>
            <text className="sk-txt sk-t2" x="176" y="378" fill="rgba(171,140,245,0.42)" fontSize="7" fontFamily="monospace" letterSpacing="0.8">GRID 1-2 / A-C</text>
            <text className="sk-txt sk-t3" x="328" y="402" fill="rgba(171,140,245,0.5)" fontSize="7" fontFamily="monospace" letterSpacing="1">BUILD RIGHT TECH</text>
            <text className="sk-txt sk-t3" x="328" y="415" fill="rgba(171,140,245,0.35)" fontSize="6" fontFamily="monospace">PORTAL FRAME ELEVATION</text>
            <text className="sk-txt sk-t3" x="328" y="428" fill="rgba(171,140,245,0.3)" fontSize="6" fontFamily="monospace">DWG-H01  REV.B</text>
          </svg>
        </div>

        <motion.div className="hero-content" style={{ y: contentY, opacity }}>
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="hero-badge hero-badge-idle"
          >
            <span className="hero-badge-dot" />
            Industrial Construction Experts
          </motion.div>

          <motion.h1 className="hero-title hero-title-idle" initial="hidden" animate="show" style={{ perspective: 600 }}>
            <span style={{ display: "block" }}>
              {line1Words.map((w, i) => (
                <motion.span key={w} custom={i} variants={wordVariants} initial="hidden" animate="show"
                  style={{ display: "inline-block", marginRight: "0.25em" }}>
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="hero-title-line2 hero-title-line2-idle" style={{ display: "block" }}>
              {line2Words.map((w, i) => (
                <motion.span key={w} custom={i + 2} variants={wordVariants} initial="hidden" animate="show"
                  style={{ display: "inline-block", marginRight: "0.25em" }}>
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            className="hero-desc hero-desc-idle"
            variants={fadeUp} initial="hidden" animate="show" custom={2}
          >
            Leading the industry in modern structural solutions. We deliver complex
            industrial projects with safety, speed, and unparalleled accuracy.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <Link href="/services" className="hero-btn-primary hero-btn-glow">
              <span>View Services</span>
              <FiArrowRight size={16} />
            </Link>
            <Link href="/contact" className="hero-btn-ghost">
              <div className="play-icon"><FiPlay size={10} /></div>
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll
        </div>

        <motion.div
          className="hero-stats-bar"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-num">
                <AnimatedCounter target={s.num} suffix={s.suffix} />
              </div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
