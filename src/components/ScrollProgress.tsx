"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <>
      {/* Background track */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0,
        height: 6,
        background: "rgba(171,140,245,0.12)",
        zIndex: 1001,
      }} />

      {/* Progress bar */}
      <motion.div
        style={{
          position: "fixed", top: 0, left: 0, right: 0,
          height: 6,
          background: "linear-gradient(90deg, #6c3fc5 0%, #ab8cf5 50%, #d8cafa 100%)",
          transformOrigin: "0%",
          scaleX,
          zIndex: 1002,
          boxShadow: "0 0 14px 4px rgba(171,140,245,0.75), 0 0 28px 8px rgba(171,140,245,0.3)",
        }}
      >
        {/* Shimmer sweep */}
        <motion.div
          animate={{ x: ["-100%", "250%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          style={{
            position: "absolute", inset: 0, width: "35%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          }}
        />
      </motion.div>


    </>
  );
}
