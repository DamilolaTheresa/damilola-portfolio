"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

import LetsTalkButton from "@/components/buttons/LetsTalkButton";
import UpworkButton from "@/components/buttons/UpworkButton";
import { revealQuoteLines } from "@/animations/quoteRevealAnimation";

export default function CTASection() {
  const quoteRef = useRef(null);

  useGSAP(() => {
    const lines =
      quoteRef.current?.querySelectorAll(
        ".quote-line"
      );

    revealQuoteLines(
      lines,
      quoteRef.current
    );
  }, []);

  return (
    <section
      id="contact"
      className="
        w-full
        bg-[#ECECEC]
      "
    >
      <div
        className="
          mx-auto
          max-w-[70rem]
          px-4
          pt-12
          pb-8
          md:px-8
          md:py-13
          lg:px-[14rem]
        "
      >
        {/* Avatar */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -14, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              h-[4.5rem]
              w-[4.5rem]
              p-[0.1875rem]
              bg-[#D9D9D9]
              rounded-[0.5rem]
              shadow-[0_0.25rem_2rem_0_rgba(0,0,0,0.10)]
              md:h-[5.5rem]
              md:w-[5.5rem]
            "
          >
            <div
              className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-[0.1875rem]
              "
            >
              <img
                src="/images/hero/navimage.png"
                alt="Damilola Akinwande"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Eyebrow */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            text-center
            font-[family-name:var(--font-sfmono)]
            text-[0.875rem]
            md:text-[1rem]
            leading-[2]
            text-[#767676]
          "
        >
          What do you say? Let&apos;s make magic together.
        </motion.p>

        {/* Main Text */}

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
            amount: 0.4,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-6
            max-w-[38rem]
            text-center
            font-geist
            text-[1.1rem]
            md:text-[1.25rem]
            font-normal
            leading-[1.5625rem]
            md:leading-[1.6]
            text-[#262626]
          "
        >
          I&apos;m available for full-time opportunities,
          product collaborations, and freelance
          projects focused on product design,
          frontend engineering, and modern digital
          experiences. Let&apos;s connect and create
          impactful digital experiences.
        </motion.h2>

        {/* Buttons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-14
            flex
            justify-center
            gap-4
            md:gap-6
          "
        >
          <UpworkButton />
          <LetsTalkButton />
        </motion.div>

        {/* Divider */}

        <div
          className="
            mt-14
            h-px
            w-full
            bg-[repeating-linear-gradient(to_right,#BDBDBD_0px,#BBBBBB_2px,transparent_2px,transparent_6px)]
          "
        />

        {/* Closing Quote */}

        <div
          ref={quoteRef}
          className="
            mx-auto
            mt-10
            max-w-[38rem]
            text-center
          "
        >
          {[
            "Dami believes that design isn't just what we see,",
            "it's what we feel. It's about intention,",
            "emotion, and crafting experiences that quietly",
            "shape how people move, think, and connect.",
          ].map((line, index) => (
            <div
              key={index}
              className="overflow-hidden"
            >
              <p
                className="
                  quote-line
                  font-[family-name:var(--font-sfmono)]
                  font-normal
                  text-[0.875rem]
                  md:text-[0.9375rem]
                  leading-[1.5rem]
                  md:leading-[1.6]
                  text-[#767676]
                "
              >
                {line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}