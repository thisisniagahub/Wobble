"use client";

import { motion } from "motion/react";

interface BackgroundBarsProps {
  color: string;
}

export function BackgroundBars({ color }: BackgroundBarsProps) {
  return (
    <div className="absolute inset-0 z-0 flex overflow-hidden pointer-events-none">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.1
          }}
          className="h-full flex-1"
          style={{
            backgroundColor: color,
            opacity: 1 - i * 0.1,
            filter: i === 0 ? "none" : `brightness(${100 - i * 10}%)`
          }}
        />
      ))}
    </div>
  );
}
