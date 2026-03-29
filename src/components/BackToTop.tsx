"use client";
import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .back-to-top {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 999;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #281750;
          border: 1.5px solid rgba(171,140,245,0.4);
          color: #ab8cf5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(40,23,80,0.35);
          transition: all 0.25s ease;
          opacity: 0;
          transform: translateY(12px);
          pointer-events: none;
        }
        .back-to-top.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .back-to-top:hover {
          background: #ab8cf5;
          color: #281750;
          border-color: #ab8cf5;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(171,140,245,0.4);
        }
        .back-to-top svg {
          display: block;
        }
        @media (max-width: 600px) {
          .back-to-top { bottom: 20px; right: 20px; }
        }
      `}</style>
      <button
        className={`back-to-top${visible ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FiChevronUp size={20} />
      </button>
    </>
  );
}
