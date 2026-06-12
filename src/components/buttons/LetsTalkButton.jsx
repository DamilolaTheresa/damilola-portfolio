"use client";

import { useRef } from "react";
import { buttonScramble } from "@/animations/buttonScramble";

export default function LetsTalkButton() {
  const talkTextRef = useRef(null);

  return (
    <a
      href="mailto:damilolalove45@gmail.com"
      onMouseEnter={() => {
        if (window.innerWidth >= 768) {
          buttonScramble(
            talkTextRef.current,
            "Let's Talk"
          );
        }
      }}
      className="
        shrink-0
        inline-flex
        items-center
        justify-center
        bg-[#262626]
        border
        border-dashed
        border-white/85
        px-5
        py-3
        font-[family-name:var(--font-sfmono)]
        font-medium
        text-[0.75rem]
        uppercase
        text-white
      "
    >
      <span ref={talkTextRef}>
        Let's Talk
      </span>
    </a>
  );
}