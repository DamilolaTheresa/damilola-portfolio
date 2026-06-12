"use client";

import { motion } from "framer-motion";
import { aboutImages } from "@/data/about";

export default function AboutGallery() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="
        mt-10
        grid
        grid-cols-2
        md:grid-cols-4
        gap-3
      "
    >
      {aboutImages.map((image) => (
        <motion.div
          key={image}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            overflow-hidden
          "
        >
          <motion.img
            src={image}
            alt=""
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              block
              w-full
              object-cover
            "
          />
        </motion.div>
      ))}
    </motion.div>
  );
}