"use client";

import AboutGallery from "./AboutGallery";
import AboutContent from "./AboutContent";
import { motion } from "framer-motion";
import LetsTalkButton from "@/components/buttons/LetsTalkButton";

export default function AboutSection() {
  return (
    <section
      className="
        relative
        w-full
        bg-[#ECECEC]
        overflow-hidden
      "
    >

      {/* Bottom Guide Line */}

      <div
        className="
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
          relative
          z-10
          mx-auto
          max-w-[90rem]
          px-4
          py-12
          md:px-8
          md:py-16
          lg:px-[14rem]
        "
      >
        {/* Header */}

        <div
          className="
            mb-10
            flex
            items-center
            justify-between
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
              font-semibold
              text-[#262626]
              md:text-[1.8rem]
            "
          >
            About Me
          </motion.h2>

          <LetsTalkButton />
        </div>

        <AboutGallery />

        <AboutContent />
      </div>
    </section>
  );
}