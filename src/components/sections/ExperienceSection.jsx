"use client";

import { motion } from "framer-motion";
import ExperienceList from "./ExperienceList";
import ResumeButton from "@/components/buttons/ResumeButton";

export default function ExperienceSection() {
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
          py-4
          md:px-8
          md:py-10
          lg:px-[14rem]
        "
      >
        {/* Header */}

        <div
          className="
            mb-10
            flex
            items-start
            justify-between
            gap-6
          "
        >
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
            Experience And Resume
          </motion.h2>

          <ResumeButton />
        </div>

        {/* Experience Cards */}

        <ExperienceList />
      </div>
    </section>
  );
}