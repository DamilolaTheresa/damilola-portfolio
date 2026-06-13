"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [showBanner, setShowBanner] =
    useState(false);

  useEffect(() => {
    const consent =
      localStorage.getItem(
        "cookie-consent"
      );

    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(
      "cookie-consent",
      "accepted"
    );

    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(
      "cookie-consent",
      "declined"
    );

    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 40,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            fixed
            bottom-4
            left-4
            right-4
            z-[9999]
            bg-[#262626]
            border
            border-dashed
            border-white/20
            p-5
            md:left-8
            md:right-8
            md:bottom-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Text */}

            <p
              className="
                font-[family-name:var(--font-sfmono)]
                text-[0.95rem]
                leading-[1.7]
                text-white/80
                max-w-[48rem]
              "
            >
              I use privacy-friendly analytics
              to understand which projects
              get viewed most and how the
              site performs. No advertising,
              no tracking across websites.

              <span
                className="
                  ml-2
                  text-[#F50084]
                "
              >
                Privacy policy
              </span>
            </p>

            {/* Buttons */}

            <div
              className="
                flex
                items-center
                gap-3
                shrink-0
              "
            >
              <button
                onClick={handleAccept}
                className="
                  px-6
                  py-3
                  bg-[#F50084]
                  text-white
                  border
                  border-dashed
                  border-[#F50084]
                  font-[family-name:var(--font-sfmono)]
                  text-[0.9rem]
                  transition-opacity
                  duration-300
                  hover:opacity-90
                "
              >
                that's fine
              </button>

              <button
                onClick={handleDecline}
                className="
                  px-6
                  py-3
                  border
                  border-dashed
                  border-white/20
                  text-white/70
                  font-[family-name:var(--font-sfmono)]
                  text-[0.9rem]
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                no thanks
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}