"use client";

import gsap from "gsap";

export const animateAboutChips = (
  chips
) => {
  if (!chips?.length) return;

  chips.forEach((chip, index) => {
    gsap.set(chip, {
      opacity: 0,
      y: 12,
      scale: 0.95,
    });

    gsap.to(chip, {
      opacity: 1,
      y: -8,
      scale: 1,
      duration: 1.2,
      delay: index * 0.4,
      ease: "power3.out",
      repeat: -1,
      repeatDelay: 3,
      yoyo: true,
    });
  });
};