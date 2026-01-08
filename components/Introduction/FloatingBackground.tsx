"use client";

import { motion } from "framer-motion";

const ORBS_CONFIG = [
  {
    size: 400,
    background: "#10b981",
    left: "25%",
    top: "15%",
    duration: 15,
    delay: 0,
  },
  {
    size: 520,
    background: "#d4af37",
    left: "55%",
    top: "35%",
    duration: 18,
    delay: 1.5,
  },
  {
    size: 640,
    background: "#10b981",
    left: "85%",
    top: "55%",
    duration: 21,
    delay: 3,
  },
];

export const FloatingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {ORBS_CONFIG.map((orb, i) => (
        <motion.div
          key={`orb-${orb.size}-${orb.left}`}
          className="absolute rounded-full blur-3xl opacity-8 gpu-accelerated"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: orb.background,
            left: orb.left,
            top: orb.top,
            willChange: "transform",
          }}
          animate={{
            x: [0, 40, -40, 0],
            y: [0, 25, -25, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
};
