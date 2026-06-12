"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={scrollToTop}
          className="
            fixed
            bottom-6
            right-4
            z-[999]
            flex
            h-12
            w-12
            items-center
            justify-center
            border
            border-dashed
            border-white/80
            bg-[#262626]
            transition-transform
            duration-150
            hover:-translate-y-1
            md:right-8
          "
          aria-label="Back to top"
        >
          <img
            src="/icons/arrow-up.svg"
            alt="Back to top"
            className="
              h-5
              w-5
              object-contain
            "
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}