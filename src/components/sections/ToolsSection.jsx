"use client";

import { motion } from "framer-motion";
import ToolsGrid from "./ToolsGrid";

export default function ToolsSection() {
  return (
    <section
      className="
        w-full
        bg-[#ECECEC]
      "
    >
      <div
        className="
          mx-auto
          max-w-[90rem]
          px-4
          py-0
          md:px-8
          md:py-6
          lg:px-[14rem]
        "
      >
        {/* Header */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-geist
            text-[1.5rem]
            md:text-[1.8rem]
            font-semibold
            text-[#262626]
          "
        >
          Tools I Use
        </motion.h2>

        {/* Marquee */}

        <ToolsGrid />
      </div>
    </section>
  );
}