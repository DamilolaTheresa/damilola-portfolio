"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import LetsTalkButton from "@/components/buttons/LetsTalkButton";
import { buttonScramble } from "@/animations/buttonScramble";

const introVariants = {
  hidden: {
    y: "100%",
  },
  show: {
    y: "0%",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0,
    },
  },
};

const bodyVariants = {
  hidden: {
    y: "100%",
  },
  show: {
    y: "0%",
    transition: {
      duration: 0.8,
      delay: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonOneVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 2,
      ease: "easeOut",
    },
  },
};

const buttonTwoVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 2.25,
      ease: "easeOut",
    },
  },
};

export default function HeroContent() {

  const upworkTextRef = useRef(null);

  return (
    <div
      className="
        mx-auto
        flex
        min-h-[70vh]
        w-full
        max-w-[90rem]
        flex-col
        justify-center
        px-6
        pt-24
        md:pt-34
        lgpt-24
        pb-12
        md:px-12
        lg:px-20
        lg:pt-32
      "
    >
      <div className="w-full max-w-[62rem] mx-auto">

        {/* Intro */}

        <div className="overflow-hidden mb-5 md:mb-8 lg:mb-6">
          <motion.p
            initial="hidden"
            animate="show"
            variants={introVariants}
            className="
              font-[family-name:var(--font-sfmono)]
              text-[0.875rem]
              text-[#767676]
            "
          >
            Hi, I'm Damilola Akinwande.
          </motion.p>
        </div>

        {/* Heading */}

        <motion.h1
          className="
            font-geist
            font-semibold
            text-[#262626]
            leading-[1.15]
            md:leading-[1.2]
            tracking-[-0.04em]
            text-[2.7rem]
            md:text-[4rem]
            lg:text-[4.25rem]
          "
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                delayChildren: 0.4,
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {"A Design Engineer Who Builds Experiences That Converts."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 18,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
        </motion.h1>

        {/* Body */}

        <div className="overflow-hidden mt-5 md:mt-6">
        <motion.p
          initial="hidden"
          animate="show"
          variants={bodyVariants}
          className="
            mt-2
            max-w-[60rem]
            font-[family-name:var(--font-sfmono)]
            text-[1rem]
            leading-[1.8]
            text-[#767676]
          "
        >
          I design and build modern digital products across{" "}
          <span className="text-[#242424] underline font-medium">
            fintech
          </span>
          ,{" "}
          <span className="text-[#242424] underline font-medium">
            SaaS
          </span>
          ,{" "}
          <span className="text-[#242424] underline font-medium">
            AI
          </span>
          , and{" "}
          <span className="text-[#242424] underline font-medium">
            digital platforms,
          </span>{" "}
          creating experiences that balance usability,
          motion, performance, and growth.
        </motion.p>
        </div>

        {/* Buttons */}

        <div className="mt-10 md:mt-12 flex flex-wrap gap-6">

          <motion.a
            href="https://www.upwork.com/freelancers/~011d96979202a8a6a0?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            animate="show"
            variants={buttonOneVariants}
            onMouseEnter={() => {
              if (window.innerWidth >= 768) {
                buttonScramble(
                  upworkTextRef.current,
                  "Hire me on Upwork"
                );
              }
            }}
            className="
              flex
              items-center
              gap-2
              border
              border-dashed
              border-[#767676]
              bg-white
              px-5
              py-3
              font-[family-name:var(--font-sfmono)]
              font-medium
              text-[0.75rem]
              uppercase
              text-[#262626]
            "
          >
            <img
              src="/images/hero/upwork.svg"
              alt="Upwork"
              className="h-5 w-auto"
            />

            <span ref={upworkTextRef}>
              Hire me on Upwork
            </span>
          </motion.a>

          <motion.div
            initial="hidden"
            animate="show"
            variants={buttonTwoVariants}
          >
            <LetsTalkButton />
          </motion.div>

        </div>
      </div>
    </div>
  );
}