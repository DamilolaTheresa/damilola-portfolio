"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const revealQuoteLines = (
  lines,
  trigger
) => {
  if (!lines?.length) return;

  gsap.fromTo(
    lines,
    {
      yPercent: 100,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 85%",
        once: true,
      },
    }
  );
};