"use client";

import { motion } from "framer-motion";

export default function ExperienceCard({
  experience,
  index,
}) {
  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        border
        border-dashed
        border-[#BBBBBB]
        p-6
        md:p-8
      "
    >
      {/* Logo */}

      <img
        src={experience.logo}
        alt={experience.company}
        className="
          h-10
          w-10
          object-contain
        "
      />

      {/* Header */}

      <div
        className="
          mt-4
          flex
          items-start
          justify-between
          gap-6
        "
      >
        {/* Left */}

        <div>
          <h3
            className="
              font-geist
              text-[0.9375rem]
              font-semibold
              text-[#262626]
            "
          >
            {experience.company} ·{" "}
            {experience.employment}
          </h3>

          <p
            className="
              mt-2
              font-[family-name:var(--font-sfmono)]
              text-[0.8125rem]
              md:text-[0.875rem]
              text-[#767676]
            "
          >
            {experience.role}
          </p>
        </div>

        {/* Right */}

        <div
          className="
            text-right
            shrink-0
          "
        >
          <p
            className="
              font-geist
              font-semibold
              text-[#262626]
              text-[0.8125rem]
              md:text-[0.875rem]
            "
          >
            {experience.period}
          </p>

          <p
            className="
              mt-2
              font-[family-name:var(--font-sfmono)]
              text-[#767676]
              text-[0.8125rem]
              md:text-[0.875rem]
            "
          >
            {experience.location}
          </p>
        </div>
      </div>

      {/* Description */}

      <p
        className="
          mt-5
          font-[family-name:var(--font-sfmono)]
          leading-[1.9]
          text-[#4F4F4F]
          text-[0.875rem]
        "
      >
        {experience.description}
      </p>
    </motion.article>
  );
}