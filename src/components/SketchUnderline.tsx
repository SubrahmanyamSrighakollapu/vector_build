"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  color?: string;
  width?: number | string;
  delay?: number;
}

export default function SketchUnderline({ color = "#ab8cf5", width = "100%", delay = 0.2 }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <svg
      ref={ref}
      width={width}
      height="10"
      viewBox="0 0 200 10"
      preserveAspectRatio="none"
      style={{ display: "block", marginTop: 4, overflow: "visible" }}
    >
      {/* Wobbly hand-drawn path */}
      <motion.path
        d="M2 6 C20 2, 40 9, 60 5 C80 1, 100 8, 120 5 C140 2, 160 8, 180 5 C190 3, 196 6, 198 5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ pathLength: { delay, duration: 0.9, ease: "easeOut" }, opacity: { delay, duration: 0.1 } }}
      />
      {/* Second slightly offset stroke for sketch feel */}
      <motion.path
        d="M2 7.5 C25 5, 45 9.5, 65 7 C85 4, 105 9, 125 6.5 C145 4, 165 8.5, 185 6 C192 5, 197 7, 198 6.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity={0.35}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 0.35 } : {}}
        transition={{ pathLength: { delay: delay + 0.15, duration: 0.9, ease: "easeOut" }, opacity: { delay: delay + 0.15, duration: 0.1 } }}
      />
    </svg>
  );
}
