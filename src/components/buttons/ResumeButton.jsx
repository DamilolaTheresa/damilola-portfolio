"use client";

import { useRef } from "react";
import { buttonScramble } from "@/animations/buttonScramble";

export default function ResumeButton() {
  const resumeTextRef = useRef(null);

  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => {
        if (window.innerWidth >= 768) {
          buttonScramble(
            resumeTextRef.current,
            "Download Resume"
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
      <span ref={resumeTextRef}>
        Download Resume
      </span>
    </a>
  );
}