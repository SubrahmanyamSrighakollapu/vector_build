"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    const down = (e: MouseEvent) => {
      setClicking(true);
      const id = Date.now();
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
    };
    const up = () => setClicking(false);

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isInteractive = el.closest("a, button, [role='button'], input, textarea, select, label");
      setHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (pointer: coarse) { .cur-dot, .cur-ring, .cur-ripple { display: none !important; } }
        * { cursor: none !important; }
        .cur-dot {
          position: fixed;
          top: -4px; left: -4px;
          width: 8px; height: 8px;
          background: #ab8cf5;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
          transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, top 0.2s ease, left 0.2s ease;
          box-shadow: 0 0 10px rgba(171,140,245,0.8);
        }
        .cur-dot.clicking {
          width: 12px; height: 12px;
          top: -6px; left: -6px;
          background: #d8cafa;
        }
        .cur-dot.hovering {
          width: 12px; height: 12px;
          top: -6px; left: -6px;
          background: #ffffff;
        }
        .cur-ring {
          position: fixed;
          top: -20px; left: -20px;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(171,140,245,0.5);
          pointer-events: none;
          z-index: 99998;
          will-change: transform;
          transition: width 0.25s ease, height 0.25s ease, top 0.25s ease, left 0.25s ease, border-color 0.25s ease, background 0.25s ease;
          backdrop-filter: blur(2px);
        }
        .cur-ring.clicking {
          width: 28px; height: 28px;
          top: -14px; left: -14px;
          border-color: rgba(171,140,245,0.9);
          background: rgba(171,140,245,0.08);
        }
        .cur-ring.hovering {
          width: 56px; height: 56px;
          top: -28px; left: -28px;
          border-color: rgba(171,140,245,0.7);
          background: rgba(171,140,245,0.06);
        }
        .cur-ripple {
          position: fixed;
          pointer-events: none;
          z-index: 99997;
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: cur-ripple-anim 0.7s ease-out forwards;
          background: radial-gradient(circle, rgba(171,140,245,0.35) 0%, rgba(216,202,250,0.1) 50%, transparent 70%);
          border: 1px solid rgba(171,140,245,0.3);
          width: 80px; height: 80px;
        }
        @keyframes cur-ripple-anim {
          0%   { transform: translate(-50%,-50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%,-50%) scale(3); opacity: 0; }
        }
      `}</style>

      <div ref={dotRef} className={`cur-dot${clicking ? " clicking" : ""}${hovering ? " hovering" : ""}`} />
      <div ref={ringRef} className={`cur-ring${clicking ? " clicking" : ""}${hovering ? " hovering" : ""}`} />
      {ripples.map((r) => (
        <div
          key={r.id}
          className="cur-ripple"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </>
  );
}
