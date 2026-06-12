"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { aboutChips } from "@/data/aboutChips";

const positions = [
  "top-8 left-0",
  "top-28 left-2",
  "top-56 left-0",

  "top-12 right-0",
  "top-40 right-2",
  "top-72 right-0",
];

export default function AboutFloatingChips() {
  const [activeChip, setActiveChip] =
    useState(0);

  const [activePosition, setActivePosition] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChip(
        Math.floor(
          Math.random() *
            aboutChips.length
        )
      );

      setActivePosition(
        Math.floor(
          Math.random() *
            positions.length
        )
      );
    }, 3500);

    return () =>
      clearInterval(interval);
  }, []);

  const chip =
    aboutChips[activeChip];

  return (
    <div
      className="
        absolute
        inset-0
        pointer-events-none
        z-[1]
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeChip}-${activePosition}`}
          initial={{
            opacity: 0,
            y: 10,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -10,
            scale: 0.95,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            absolute
            ${positions[activePosition]}
          `}
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundColor:
                chip.color,
            }}
            className="
              border
              border-dashed
              border-[#262626]/20

              px-3
              py-1.5

              whitespace-nowrap

              font-[family-name:var(--font-sfmono)]
              text-[0.6875rem]
              font-medium
              text-[#262626]

              shadow-sm
            "
          >
            {chip.label}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}