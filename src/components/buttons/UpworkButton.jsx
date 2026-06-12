"use client";

import { useRef } from "react";
import { buttonScramble } from "@/animations/buttonScramble";

export default function UpworkButton() {
  const upworkTextRef = useRef(null);

  return (
    <a
      href="https://www.upwork.com/freelancers/~011d96979202a8a6a0?mp_source=share"
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
  );
}