"use client";

import { motion } from "framer-motion";

const offsets = [
  { x: -80, y: -60 },
  { x: 0, y: -80 },
  { x: 80, y: -60 },

  { x: -80, y: 60 },
  { x: 0, y: 80 },
  { x: 80, y: 60 },
];

export default function TestimonialCard({
  testimonial,
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
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        border
        border-dashed
        border-[#BBBBBB]
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-4
          p-5
          border-b
          border-dashed
          border-[#BBBBBB]
        "
      >
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="
            h-12
            w-12
            md:h-14
            md:w-14
            object-cover
          "
        />

        <div>
          <h3
            className="
              font-geist
              text-[0.875rem]
              md:text-[0.9375rem]
              font-semibold
              text-[#262626]
            "
          >
            {testimonial.name}
          </h3>

          <p
            className="
              mt-1.5
              font-[family-name:var(--font-sfmono)]
              text-[0.75rem]
              leading-[1.5]
              text-[#767676]
            "
          >
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Quote */}

      <div className="p-5">
        <p
          className="
            font-[family-name:var(--font-sfmono)]
            text-[0.875rem]
            leading-[1.75]
            text-[#4F4F4F]
          "
        >
          "{testimonial.quote}"
        </p>
      </div>
    </motion.article>
  );
}