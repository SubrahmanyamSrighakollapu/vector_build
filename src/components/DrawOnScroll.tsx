"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function DrawOnScroll() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Structural blueprint path — vertical column with floor plates
  const pathLength = useTransform(smooth, [0, 0.85], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{
        position: "fixed",
        right: 18,
        top: "50%",
        translateY: "-50%",
        zIndex: 40,
        opacity,
        pointerEvents: "none",
      }}
    >
      <svg width="28" height="320" viewBox="0 0 28 320" fill="none">
        {/* Static faint track */}
        <path
          d="M14 0 L14 320"
          stroke="rgba(171,140,245,0.08)"
          strokeWidth="1"
        />
        {/* Animated structural column */}
        <motion.path
          d="M6 0 L22 0 M14 0 L14 60 M6 60 L22 60 M14 60 L14 120 M6 120 L22 120 M14 120 L14 180 M6 180 L22 180 M14 180 L14 240 M6 240 L22 240 M14 240 L14 300 M6 300 L22 300 M14 300 L14 320"
          stroke="#ab8cf5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ pathLength }}
        />
        {/* Glow dot at drawing tip */}
        <motion.circle
          cx="14"
          r="3"
          fill="#ab8cf5"
          style={{
            cy: useTransform(smooth, [0, 0.85], [0, 320]),
            opacity: useTransform(smooth, [0, 0.05, 0.85, 0.9], [0, 1, 1, 0]),
            filter: "drop-shadow(0 0 4px rgba(171,140,245,0.9))",
          }}
        />
      </svg>

      {/* Scroll % label */}
      <motion.div
        style={{
          marginTop: 8,
          fontFamily: "monospace",
          fontSize: "0.55rem",
          color: "rgba(171,140,245,0.45)",
          letterSpacing: "1px",
          textAlign: "center",
          opacity: useTransform(scrollYProgress, [0, 0.05], [0, 1]),
        }}
      >
        <motion.span>
          {useTransform(smooth, (v) => `${Math.round(v * 100)}%`) as unknown as string}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
