"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const draw = (delay: number, duration = 1.2) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay, duration, ease: "easeInOut" as const }, opacity: { delay, duration: 0.1 } },
  },
});

export default function BlueprintReveal() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "#0a0618",
            display: "flex", alignItems: "center", justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {/* Blueprint grid lines */}
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }}
            preserveAspectRatio="none"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.line
                key={`h${i}`}
                x1="0" y1={`${(i + 1) * 8}%`} x2="100%" y2={`${(i + 1) * 8}%`}
                stroke="#ab8cf5" strokeWidth="0.5"
                variants={draw(i * 0.04, 0.8)}
                initial="hidden" animate="visible"
              />
            ))}
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.line
                key={`v${i}`}
                x1={`${(i + 1) * 6}%`} y1="0" x2={`${(i + 1) * 6}%`} y2="100%"
                stroke="#ab8cf5" strokeWidth="0.5"
                variants={draw(i * 0.03, 0.8)}
                initial="hidden" animate="visible"
              />
            ))}
          </svg>

          {/* Central blueprint monogram drawing */}
          <svg width="420" height="280" viewBox="0 0 420 280" fill="none">
            {/* Outer frame */}
            <motion.rect x="20" y="20" width="380" height="240" rx="2"
              stroke="#ab8cf5" strokeWidth="1.5"
              variants={draw(0.1)} initial="hidden" animate="visible"
            />
            {/* Inner frame */}
            <motion.rect x="40" y="40" width="340" height="200" rx="1"
              stroke="rgba(171,140,245,0.4)" strokeWidth="0.8"
              variants={draw(0.3)} initial="hidden" animate="visible"
            />
            {/* Center axes */}
            <motion.line x1="210" y1="56" x2="210" y2="208"
              stroke="rgba(171,140,245,0.16)" strokeWidth="0.8" strokeDasharray="5 6"
              variants={draw(0.48)} initial="hidden" animate="visible"
            />
            <motion.line x1="82" y1="140" x2="338" y2="140"
              stroke="rgba(171,140,245,0.16)" strokeWidth="0.8" strokeDasharray="5 6"
              variants={draw(0.54)} initial="hidden" animate="visible"
            />
            {/* Construction circle */}
            <motion.circle cx="210" cy="140" r="56"
              stroke="rgba(171,140,245,0.14)" strokeWidth="0.8"
              variants={draw(0.58, 0.9)} initial="hidden" animate="visible"
            />
            {/* BR monogram */}
            <motion.text
              x="210" y="182"
              textAnchor="middle"
              fontSize="118"
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="700"
              letterSpacing="-6"
              initial={{ opacity: 0, scale: 0.94, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.72, ease: "easeOut" }}
            >
              <tspan fill="#ab8cf5">B</tspan>
              <tspan fill="rgba(255, 213, 231, 1)">R</tspan>
            </motion.text>
            {/* Internal construction guides on monogram */}
            <motion.line x1="148" y1="94" x2="272" y2="94"
              stroke="rgba(171,140,245,0.22)" strokeWidth="0.8"
              variants={draw(0.82, 0.55)} initial="hidden" animate="visible"
            />
            <motion.line x1="142" y1="140" x2="278" y2="140"
              stroke="rgba(171,140,245,0.22)" strokeWidth="0.8"
              variants={draw(0.88, 0.55)} initial="hidden" animate="visible"
            />
            <motion.line x1="148" y1="186" x2="272" y2="186"
              stroke="rgba(171,140,245,0.22)" strokeWidth="0.8"
              variants={draw(0.94, 0.55)} initial="hidden" animate="visible"
            />
            <motion.line x1="220" y1="92" x2="220" y2="188"
              stroke="rgba(171,140,245,0.22)" strokeWidth="0.8"
              variants={draw(1.0, 0.55)} initial="hidden" animate="visible"
            />
            {/* Corner marks */}
            {[[40,40],[380,40],[40,240],[380,240]].map(([cx,cy], i) => (
              <motion.circle key={i} cx={cx} cy={cy} r="3"
                stroke="#ab8cf5" strokeWidth="1.5" fill="none"
                variants={draw(1.08 + i * 0.05, 0.3)}
                initial="hidden" animate="visible"
              />
            ))}
            {/* Dimension lines */}
            <motion.line x1="20" y1="10" x2="400" y2="10"
              stroke="rgba(171,140,245,0.35)" strokeWidth="0.8" strokeDasharray="4 4"
              variants={draw(1.16, 0.6)} initial="hidden" animate="visible"
            />
            <motion.line x1="410" y1="20" x2="410" y2="260"
              stroke="rgba(171,140,245,0.35)" strokeWidth="0.8" strokeDasharray="4 4"
              variants={draw(1.24, 0.6)} initial="hidden" animate="visible"
            />
            {/* Logo text */}
            <motion.text x="210" y="216" textAnchor="middle"
              fill="#ab8cf5" fontSize="11" fontFamily="monospace" letterSpacing="4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.68, duration: 0.5 }}
            >
              BUILD RIGHT TECH
            </motion.text>
            <motion.text x="210" y="228" textAnchor="middle"
              fill="rgba(216,202,250,0.5)" fontSize="7" fontFamily="monospace" letterSpacing="3"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.86, duration: 0.5 }}
            >
              ENGINEERING EXCELLENCE
            </motion.text>
          </svg>

          {/* Loading bar */}
          <motion.div style={{
            position: "absolute", bottom: 48, left: "50%", translateX: "-50%",
            width: 200, height: 2, background: "rgba(171,140,245,0.15)", borderRadius: 2,
            overflow: "hidden",
          }}>
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 2.2, delay: 0.2, ease: "easeInOut" }}
              style={{
                height: "100%", originX: 0,
                background: "linear-gradient(90deg, #6c3fc5, #ab8cf5, #d8cafa)",
                boxShadow: "0 0 8px rgba(171,140,245,0.8)",
              }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              position: "absolute", bottom: 28,
              fontFamily: "monospace", fontSize: "0.6rem",
              letterSpacing: "3px", color: "rgba(171,140,245,0.5)",
              textTransform: "uppercase",
            }}
          >
            Initializing...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
