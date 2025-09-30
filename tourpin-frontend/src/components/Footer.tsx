import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { FaXTwitter } from 'react-icons/fa6';
import { SiTiktok } from "react-icons/si"; 
import React from "react";

export default function Footer() {
  const navGroups = [
    [
      { name: "Home", href: "/" },
      { name: "Features", href: "#features" },
    ],
    [
      { name: "About", href: "#who-we-are" },
      { name: "Demo", href: "#demo" },
    ],
    [
      { name: "Team", href: "#team-and-vision" },
      { name: "Contact", href: "#contact" },
    ],
  ];

  const bottomLinks = [
    "Dominican Republic",
    "©2025 TourPin",
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#f9fafb] to-[#eaf4ef] text-neutral-900 text-center px-6 py-32 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-[#7ed957]/20 to-[#50e2d3]/20 blur-3xl -z-10" />

      {/* Nav Links */}
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto text-sm sm:text-base uppercase tracking-wide mb-16">
        {navGroups.map((group, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 items-center sm:items-start"
          >
            {group.map((link, i) => (
              <a
                key={i}
                href={link.href} // ✅ Now links to section
                className="text-[#abb1b9] hover:text-[#00af19] transition-colors hover:cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Brand */}
      <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight uppercase">
        TourPin
      </h1>

      <p className="mt-6 text-[#abb1b9] text-sm sm:text-base max-w-xl mx-auto">
        Turning your adventures into unforgettable journeys, while connecting
        travelers and communities worldwide.
      </p>

    

      {/* Social Icons */}
<div className="flex justify-center gap-6 mt-12">
  {[
    // { Icon: Instagram, href: "#" },
    // { Icon: SiTiktok as React.ElementType, href: "#" },
    { Icon: Linkedin, href: "https://www.linkedin.com/posts/tourpinapp_tourpin-linkedin-activity-7377699070909247488-Hrx_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACoN4EABK6clLRyojG-Z_4GMllk-duSbJ48" },
    { Icon: FaXTwitter as React.ElementType, href: "https://x.com/pin_tour369" },
    // { Icon: Youtube, href: "#" },
  ].map(({ Icon, href }, idx) => (
    <a
      key={idx}
      href={href}
      className="text-neutral-700 hover:text-[#50e2d3] transition-colors"
    >
      <Icon className="h-6 w-6" />
    </a>
  ))}
</div>

      {/* Divider */}
      <div className="mt-16 h-px bg-[#abb1b9]/30 w-full max-w-6xl mx-auto" />

      {/* Bottom Links */}
      <div className="flex justify-between gap-4 mt-12 text-xs sm:text-sm text-[#abb1b9] uppercase tracking-wider max-w-6xl mx-auto">
        {bottomLinks.map((text, idx) => (
          <p key={idx} className="text-center sm:text-left">
            {text}
          </p>
        ))}
      </div>
    </footer>
  );
}
