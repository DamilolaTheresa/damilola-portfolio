"use client";

import { motion } from "framer-motion";

export default function FooterEmail() {
  return (
    <motion.a
      href="mailto:damilolalove45@gmail.com"
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
        amount: 0.8,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        items-center
        gap-2
      "
    >
      {/* Email Icon */}

      <div
        className="
          flex
          h-5
          w-5
          items-center
          justify-center
        "
      >
        <img
          src="/icons/email.svg"
          alt="Email"
          className="
            h-full
            w-full
            object-contain
          "
        />
      </div>

      {/* Email Address */}

      <span
        className="
          relative
          cursor-pointer
          font-geist
          text-[0.9375rem]
          font-normal
          text-[#767676]

          after:absolute
          after:left-0
          after:-bottom-[2px]
          after:h-[1px]
          after:w-0
          after:bg-[#767676]
          after:transition-all
          after:duration-300

          hover:after:w-full
        "
      >
        damilolalove45@gmail.com
      </span>
    </motion.a>
  );
}