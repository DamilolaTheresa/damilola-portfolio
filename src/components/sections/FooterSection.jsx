"use client";

import FooterEmail from "./FooterEmail";
import FooterSocials from "./FooterSocials";
import FooterCopyright from "./FooterCopyright";

export default function FooterSection() {
  return (
    <footer
      className="
        w-full
        bg-[#ECECEC]
      "
    >
      <div
        className="
          mx-auto
          max-w-[90rem]
          px-6
          pt-6
          pb-7
          md:px-8
          lg:px-[3rem]
        "
      >
        {/* Desktop */}

        <div
          className="
            hidden
            lg:flex
            items-center
            justify-between
          "
        >
          <FooterEmail />

          <FooterCopyright />

          <FooterSocials />
        </div>

        {/* Tablet */}

        <div
          className="
            hidden
            md:flex
            lg:hidden
            flex-col
            items-center
          "
        >
          <div
            className="
              flex
              w-full
              items-center
              justify-between
            "
          >
            <FooterEmail />

            <FooterSocials />
          </div>

          <div className="mt-10">
            <FooterCopyright />
          </div>
        </div>

        {/* Mobile */}

        <div
          className="
            flex
            flex-col
            items-center
            md:hidden
          "
        >
          <FooterEmail />

          <div className="mt-10">
            <FooterSocials />
          </div>

          <div className="mt-12">
            <FooterCopyright />
          </div>
        </div>
      </div>
    </footer>
  );
}