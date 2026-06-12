"use client";

const socials = [
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.svg",
    url: "https://www.linkedin.com/in/damilola-akinwande-aaba54229/",
  },
  {
    name: "X",
    icon: "/icons/x.svg",
    url: "https://x.com/Dammie_unusual",
  },
  {
    name: "WhatsApp",
    icon: "/icons/whatsapp.svg",
    url: "https://api.whatsapp.com/send/?phone=2348022512536&text&type=phone_number&app_absent=0",
  },
  {
    name: "Behance",
    icon: "/icons/behance.svg",
    url: "https://www.behance.net/damilolakinwan1",
  },
];

export default function FooterSocials() {
  return (
    <div
      className="
        flex
        items-center
        gap-3.5
      "
    >
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            h-[2.2rem]
            w-[2.2rem]
            items-center
            justify-center
            border
            border-dashed
            border-white/85
            bg-[#262626]
            transition-transform
            duration-150
            ease-out
            hover:-translate-y-1
          "
        >
          <img
            src={social.icon}
            alt={social.name}
            className="
              h-[1.2rem]
              w-[1.2rem]
              object-contain
            "
          />
        </a>
      ))}
    </div>
  );
}