"use client";

import { motion } from "framer-motion";
import AboutFloatingChips from "./AboutFloatingChips";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const word = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedParagraph({ text }) {
  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="
        font-geist
        text-[1.25rem]
        md:text-[1.5rem]
        font-medium
        leading-[1.6]
        text-[#242424]
      "
    >
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className="inline-block"
        >
          {w}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function AboutContent() {
  return (
    <div
      className="
        relative
        mx-auto
        mt-12
        max-w-[42rem]
        text-center
        space-y-3
      "
    >
      <AboutFloatingChips />

      <AnimatedParagraph
        text="I’m Damilola Akinwande, a multidisciplinary Design Engineer focused on building digital products that are intuitive, scalable, and built to perform."
      />

      <AnimatedParagraph
        text="Over the past few years, I've worked across fintech, SaaS, AI, and modern web platforms, combining product design, frontend engineering, motion, and strategic thinking to create experiences that not only look good, but drive real impact. My work has also contributed to investor-ready platforms and digital experiences that have helped raise over $200K in funding for startups and growing businesses."
      />

      <AnimatedParagraph
        text="My approach goes beyond visuals. I care deeply about usability, conversion, systems, performance, and how people actually interact with products. From product strategy and interface design to motion and frontend implementation, I enjoy turning complex ideas into experiences that feel simple, engaging, and effortless to use."
      />
    </div>
  );
}