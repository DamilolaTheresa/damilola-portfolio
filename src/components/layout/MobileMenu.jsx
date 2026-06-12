"use client";

import Image from "next/image";
import { navigationLinks } from "@/data/navigation";

export default function MobileMenu({
  menuRef,
  portraitRef,
  backRef,
  activeLink,
  setActiveLink,
  handleCloseMenu,
}) {
  return (
    <div
      className="fixed inset-0 z-[100] md:hidden"
      onClick={handleCloseMenu}
    >
      <div
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
        className="fixed top-0 left-0 h-[26vh] w-full bg-[#0F0F0F]"
      >
        {/* Portrait */}
        <div ref={portraitRef} className="absolute left-4 top-6">
          <div className="relative h-10 w-10 p-[0.125rem] bg-[#D9D9D9] rounded-[0.25rem] shadow-[0_0.25rem_2rem_0_rgba(0,0,0,0.10)]">
            <div className="relative h-full w-full overflow-hidden rounded-[0.09375rem]">
              <Image
                src="/images/hero/navimage.png"
                alt="Damilola Akinwande"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button
          ref={backRef}
          onClick={handleCloseMenu}
          className="absolute left-4 bottom-6 flex items-center gap-1.5 font-[family-name:var(--font-sfmono)] text-[0.75rem] text-white/70"
        >
          <img
            src="/images/hero/arrow-left-02-round.svg"
            alt="Back"
            className="h-5 w-5"
          />

          <span>BACK</span>
        </button>

        {/* Mobile Nav */}
        <div
          className="
            absolute
            right-4
            top-6
            flex
            flex-col
            items-end
            gap-4
          "
        >
          {navigationLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveLink(item.id);
                handleCloseMenu();
              }}
              className="
                mobile-nav-item
                flex
                items-center
                gap-[0.5rem]
                transition-all
                duration-150
                active:bg-white/10
                active:scale-95
              "
            >
              <span
                className={`
                  font-[family-name:var(--font-sfmono)]
                  font-normal
                  text-[0.75rem]
                  uppercase
                  ${
                    activeLink === item.id
                      ? "text-[#FFFFFF]"
                      : "text-white/70"
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
      </div>
    </div>
  );
}