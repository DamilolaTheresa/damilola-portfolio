"use client";

import { motion } from "framer-motion";

const marqueeGraphics = [
  "/images/hero/graa.png",
  "/images/hero/fave.png",
  "/images/hero/rail.png",
  "/images/hero/dev.png",
  "/images/hero/myp.png",
  "/images/hero/aux1.png",
];

export default function ProjectsMarquee() {
  const duplicatedGraphics = [
    ...marqueeGraphics,
    ...marqueeGraphics,
  ];

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#E2E2E2]
        py-2
        md:py-3
      "
    >
      <motion.div
        animate={{
          x: [0, -2700],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          willChange: "transform",
        }}
        className="
          flex
          gap-1
          w-max
        "
      >
        {duplicatedGraphics.map(
          (graphic, index) => (
            <div
              key={index}
              className="
                h-[12rem]
                md:h-[16rem]
                lg:h-[20rem]
                w-[20rem]
                md:w-[28rem]
                lg:w-[34rem]
                flex-shrink-0
                overflow-hidden
                bg-white
              "
            >
              <img
                src={graphic}
                alt={`Project ${index + 1}`}
                className="
                  h-full
                  w-full
                  object-cover
                  object-top
                "
                draggable={false}
              />
            </div>
          )
        )}
      </motion.div>
    </section>
  );
}