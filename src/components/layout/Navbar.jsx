"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "@/data/navigation";
import { useGSAP } from "@gsap/react";
import { scrambleText } from "../../animations/navScrambleAnimation";
import {
  openMobileMenu,
  closeMobileMenu,
} from "@/animations/mobileMenuAnimation";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef(null);
  const backRef = useRef(null);
  const portraitRef = useRef(null);

  const handleCloseMenu = () => {
    closeMobileMenu({
      menuRef,
      setMenuOpen,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useGSAP(() => {
    if (!menuOpen) return;

    openMobileMenu({
      menuRef,
      portraitRef,
      backRef,
    });
  }, [menuOpen]);

  return (
    <>
      {/* Juan Mora Style Scroll Blur */}
      <div
        className={`
          fixed
          top-0
          left-0
          z-40
          h-[7rem]
          w-full
          pointer-events-none
          transition-opacity
          duration-500
          ${
            isScrolled
              ? "opacity-100"
              : "opacity-0"
          }
        `}
        style={{
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      <nav className="fixed top-0 left-0 z-50 w-full px-4 py-6 md:px-12 lg:px-14 md:py-8">
        <div className="flex items-start justify-between">

          {/* Portrait */}
          <div className="relative h-10 w-10 md:h-14 md:w-14 p-[0.125rem] md:p-[0.15625rem] bg-[#D9D9D9] rounded-[0.25rem] md:rounded-[0.375rem] shadow-[0_0.25rem_2rem_0_rgba(0,0,0,0.10)]">
            <div className="relative h-full w-full overflow-hidden rounded-[0.09375rem] md:rounded-[0.14375rem]">
              <Image
                src="/images/hero/navimage.png"
                alt="Damilola Akinwande"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col items-end gap-4">
            {navigationLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveLink(item.id)}
                className="group flex items-start gap-[0.5rem]"
              >
                <span
                  onMouseEnter={(e) => {
                    if (activeLink === item.id) return;

                    scrambleText(
                      e.currentTarget,
                      item.label
                    );
                  }}
                  className={`
                    font-[family-name:var(--font-sfmono)]
                    font-normal
                    text-[0.75rem]
                    uppercase
                    transition-all
                    ${
                      activeLink === item.id
                        ? "text-[#262626]"
                        : "text-[#767676]"
                    }
                  `}
                >
                  {activeLink === item.id
                    ? `[ ${item.label} ]`
                    : item.label}
                </span>

                <span
                  className={`
                    size-[0.5625rem]
                    mt-[0.15rem]
                    transition-all
                    ${
                      activeLink === item.id
                        ? "bg-[#F50084]"
                        : "bg-transparent"
                    }
                  `}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 8H20"
                stroke="#262626"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
              <path
                d="M4 16H20"
                stroke="#262626"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <MobileMenu
          menuRef={menuRef}
          portraitRef={portraitRef}
          backRef={backRef}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          handleCloseMenu={handleCloseMenu}
        />
      )}
    </>
  );
}