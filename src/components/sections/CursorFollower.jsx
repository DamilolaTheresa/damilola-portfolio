"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    });

  const [isProjectHover, setIsProjectHover] =
    useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleProjectEnter = () =>
      setIsProjectHover(true);

    const handleProjectLeave = () =>
      setIsProjectHover(false);

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    window.addEventListener(
      "project-hover-enter",
      handleProjectEnter
    );

    window.addEventListener(
      "project-hover-leave",
      handleProjectLeave
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      window.removeEventListener(
        "project-hover-enter",
        handleProjectEnter
      );

      window.removeEventListener(
        "project-hover-leave",
        handleProjectLeave
      );
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        width: isProjectHover
          ? 90
          : 8,
        height: isProjectHover
          ? 90
          : 8,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 25,
      }}
      className="
        hidden
        lg:flex
        items-center
        justify-center
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#F50084]
        text-white
      "
    >
      {isProjectHover && (
        <span
          className="
            text-[0.55rem]
            leading-tight
            text-center
            uppercase
            font-[family-name:var(--font-sfmono)]
          "
        >
          View
          <br />
          Project
        </span>
      )}
    </motion.div>
  );
}