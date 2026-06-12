"use client";

import { motion } from "framer-motion";
import LetsTalkButton from "@/components/buttons/LetsTalkButton";
import ServicesGrid from "./ServicesGrid";

export default function ServicesSection() {
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
          py-16
          md:px-8
          md:pt-15
          md:pb-10
          lg:px-[14rem]
        "
      >
        {/* Header */}

        <div
          className="
            mb-12
            flex
            items-center
            justify-between
            gap-6
          "
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
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
              text-[1.5em]
              md:text-[1.8rem]
              font-semibold
              text-[#262626]
            "
          >
            Services & Expertise
          </motion.h2>

          <LetsTalkButton />
        </div>

        {/* Grid */}

        <ServicesGrid />
      </div>
    </section>
  );
}