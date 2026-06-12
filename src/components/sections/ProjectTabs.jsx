"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { buttonScramble } from "@/animations/buttonScramble";

export default function ProjectTabs({
  activeTab,
  setActiveTab,
}) {
  const tabs = [
    "design",
    "dev",
    "graphics",
  ];

  const textRefs = useRef({});

  return (
    <div
      className="
        flex
        items-center
        gap-2
        bg-[#E6E6E6]
        p-1.5
        w-fit
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() =>
            setActiveTab(tab)
          }
          onMouseEnter={() => {
            if (
              window.innerWidth >= 1024 &&
              activeTab !== tab
            ) {
              buttonScramble(
                textRefs.current[tab],
                tab.toUpperCase()
              );
            }
          }}
          className="
            relative
            overflow-hidden
            border
            border-dashed
            border-[#BBBBBB]
            px-3
            py-2
            font-[family-name:var(--font-sfmono)]
            text-[0.6875rem]
            uppercase
          "
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
                mass: 1,
              }}
              className="
                absolute
                inset-0
                bg-[#F2F2F2]
              "
            />
          )}

          <span
            ref={(el) =>
              (textRefs.current[tab] =
                el)
            }
            className={`
              relative
              z-10
              font-medium

              ${
                activeTab === tab
                  ? "text-[#262626]"
                  : "text-[#767676]"
              }
            `}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
}