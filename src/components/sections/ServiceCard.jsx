"use client";

import { motion } from "framer-motion";

const offsets = [
  { x: -120, y: -80 },
  { x: 0, y: -100 },
  { x: 120, y: -80 },

  { x: -120, y: 0 },
  { x: 0, y: 0 },
  { x: 120, y: 0 },

  { x: -120, y: 80 },
  { x: 0, y: 100 },
  { x: 120, y: 80 },
];

export default function ServiceCard({
  service,
  index,
}) {
  const offset =
    offsets[index] || {
      x: 0,
      y: 0,
    };

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        min-h-[11rem]
        flex-col
        justify-between
        border
        border-white/40
        bg-[rgba(236,236,236,0.20)]
        backdrop-blur-[12px]
        p-4
        shadow-[0_4px_12px_rgba(0,0,0,0.10)]
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-[0.375rem]
          border
          border-[#D1D1D1]
          bg-white/30
        "
      >
        <img
          src={service.icon}
          alt={service.title}
          className="
            h-4.5
            w-4.5
            object-contain
          "
        />
      </div>

      {/* Content */}

      <div>
        <h3
          className="
            font-geist
            text-[1rem]
            md:text-[0.9375rem]
            font-semibold
            leading-[1.3]
            text-[#262626]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-[2.5rem]
            font-[family-name:var(--font-sfmono)]
            text-[0.75rem]
            md:text-[0.875rem]
            text-[#767676]
          "
        >
          {service.level}
        </p>
      </div>
    </motion.article>
  );
}