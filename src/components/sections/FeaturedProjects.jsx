"use client";

import { useState } from "react";
import ProjectTabs from "./ProjectTabs";
import ProjectGrid from "./ProjectGrid";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] =
    useState("design");

  return (
    <section
      className="
        relative
        w-full
        bg-[#ECECEC]
      "
    >
      {/* Left Guide Line */}
      <div
        className="
          hidden
          lg:block
          absolute
          left-[13rem]
          top-0
          h-full
          w-px
          bg-[repeating-linear-gradient(to_bottom,#ADADAD_0px,#D3D3D3_2px,transparent_2px,transparent_6px)]
        "
      />

      {/* Right Guide Line */}
      <div
        className="
          hidden
          lg:block
          absolute
          right-[13rem]
          top-0
          h-full
          w-px
          bg-[repeating-linear-gradient(to_bottom,#ADADAD_0px,#D3D3D3_2px,transparent_2px,transparent_6px)]
        "
      />

      {/* Bottom Guide Line */}
      <div
        className="
          lg:block
          absolute
          left-0
          right-0
          bottom-0
          h-px
          bg-[repeating-linear-gradient(to_right,#ADADAD_0px,#D3D3D3_2px,transparent_2px,transparent_6px)]
        "
      />

      <div
        className="
          mx-auto
          max-w-[90rem]
          px-4
          md:px-8
          lg:px-[14rem]
          py-12
          md:py-18
        "
      >
        {/* Header */}
        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
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
              ease: "easeOut",
            }}
            className="
              font-geist
              text-[1.5rem]
              md:text-[1.8rem]
              font-semibold
              text-[#262626]
            "
          >
            Featured Projects
         </motion.h2>
          
          <ProjectTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Grid */}
        <div className="mt-10 md:mt-14">
          <ProjectGrid
            activeTab={activeTab}
          />
        </div>
      </div>
    </section>
  );
}