"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { splashAnimation } from "@/animations/splashAnimation";

export default function SplashScreen({
  onComplete,
}) {
  const splashRef = useRef(null);
  const counterRef = useRef(null);
  const imageRef = useRef(null);
  const [displayName, setDisplayName] =
    useState("");
  const labelsRef = useRef([]);

  useGSAP(() => {
    splashAnimation({
      splashRef,
      counterRef,
      imageRef,
      labelsRef,
      setDisplayName,
      onComplete,
    });
  }, []);

  return (
    <section
      ref={splashRef}
      className="
        fixed
        inset-0
        z-[9999]
        h-dvh
        w-full
        overflow-hidden
        bg-[#0F0F0F]
        text-white
      "
    >
      {/* Frame Lines */}
      <div
        className="
          absolute
          left-4
          md:left-8
          top-0
          h-full
          w-px
          bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.10)_0px,rgba(255,255,255,0.12)_2px,transparent_2px,transparent_4px)]
        "
      />

      <div
        className="
          absolute
          right-4
          md:right-8
          top-0
          h-full
          w-px
          bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.10)_2px,transparent_2px,transparent_4px)]
        "
      />

      {/* Top Left */}
      <p
        ref={counterRef}
        className="
          absolute
          top-6
          left-8
          md:left-12
          font-[family-name:var(--font-sfmono)]
          text-[0.6875rem]
          font-medium
          text-white/70
        "
      >
        (000)
      </p>

      {/* Top Right */}
      <p
        ref={(el) =>
          (labelsRef.current[0] = el)
        }
        className="
          absolute
          top-6
          right-8
          md:right-12
          font-[family-name:var(--font-sfmono)]
          text-[0.75rem]
          text-white/60
          opacity-0
        "
      >
        Management
      </p>

      {/* Left Center */}
      <p
        ref={(el) =>
          (labelsRef.current[1] = el)
        }
        className="
          absolute
          left-8
          md:left-12
          top-1/2
          -translate-y-1/2
          font-[family-name:var(--font-sfmono)]
          text-[0.75rem]
          text-white/60
          opacity-0
        "
      >
        Design
      </p>

      {/* Right Center */}
      <p
        ref={(el) =>
          (labelsRef.current[2] = el)
        }
        className="
          absolute
          right-8
          md:right-12
          top-1/2
          -translate-y-1/2
          font-[family-name:var(--font-sfmono)]
          text-[0.75rem]
          text-white/60
          opacity-0
        "
      >
        Engineering
      </p>

      {/* Bottom Left */}
      <p
        ref={(el) =>
          (labelsRef.current[3] = el)
        }
        className="
          absolute
          bottom-6
          left-8
          md:left-12
          font-[family-name:var(--font-sfmono)]
          text-[0.75rem]
          text-white/60
          opacity-0
        "
      >
        Portfolio
      </p>

      {/* Bottom Right */}
      <p
        ref={(el) =>
          (labelsRef.current[4] = el)
        }
        className="
          absolute
          bottom-6
          right-8
          md:right-12
          font-[family-name:var(--font-sfmono)]
          text-[0.75rem]
          text-white/60
          opacity-0
        "
      >
        ©2026
      </p>

      {/* Center Content */}
      <div
        className="
          flex
          h-full
          flex-col
          items-center
          justify-center
          px-6
        "
      >
        {/* Image */}
        <div className="mb-6 overflow-hidden">
          <div
            ref={imageRef}
            className="
              relative
              h-16
              w-16
              md:h-20
              md:w-20
              opacity-0
            "
          >
            <Image
              src="/images/hero/portrait.png"
              alt="Damilola Akinwande"
              fill
              sizes="80px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="
            font-[family-name:var(--font-geist)]
            text-center
            text-[1.8rem]
            md:text-[3rem]
            lg:text-[3.75rem]
            font-semibold
            uppercase
            tracking-tight
          "
        >
          {displayName}
        </h1>
      </div>
    </section>
  );
}