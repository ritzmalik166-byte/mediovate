"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function ConsultationArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="8"
      viewBox="0 0 33 8"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <line y1="3.5" x2="25" y2="3.5" stroke="currentColor" />
      <path
        d="M25.25 6.71191L25.25 1.28809L31.709 4L25.25 6.71191Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}

function CallUsArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="8"
      viewBox="0 0 33 8"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <line y1="3.94444" x2="25" y2="3.94444" stroke="currentColor" />
      <path
        d="M33 4L24.75 7.4641L24.75 0.535898L33 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Logo() {
  return (
    <Image
      src="/assets/Home/mediovate_logo.png"
      alt="Mediovate"
      width={221}
      height={26}
      className="object-contain max-lg:h-[36px] max-lg:w-auto max-lg:object-left lg:h-auto lg:w-auto"
      style={{ width: "auto" }}
      priority
    />
  );
}

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const updateNavbar = (scrollY = window.scrollY) => {
      setIsLight(scrollY > 0);
    };

    const onWindowScroll = () => updateNavbar();
    const onAppScroll = (event: Event) => {
      const scroll = (event as CustomEvent<{ scroll: number }>).detail.scroll;
      updateNavbar(scroll);
    };

    updateNavbar();
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    window.addEventListener("app-scroll", onAppScroll);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
      window.removeEventListener("app-scroll", onAppScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isLight ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between py-3 max-lg:py-3 lg:py-0">
        <div className="flex shrink-0 items-center justify-start max-lg:min-w-0">
          <Logo />
        </div>

        <div className="flex shrink-0 items-center gap-2 max-lg:gap-2 lg:gap-4">
          <button
            type="button"
            className="group hidden h-[48px] w-[287px] cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-transparent bg-[#A87C4F] text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F] lg:flex"
          >
            <span className="w-[208px] text-center text-[14px] font-semibold leading-5 transition-colors duration-300">
              Book a Free Consultation
            </span>
            <ConsultationArrowIcon className="transition-colors duration-300" />
          </button>

          <button
            type="button"
            className={`group hidden h-[48px] w-[188px] cursor-pointer items-center justify-center gap-2 rounded-[50px] border bg-transparent transition-colors duration-300 lg:flex ${
              isLight
                ? "border-[#A87C4F] text-[#A87C4F] hover:bg-[#A87C4F] hover:text-white"
                : "border-white text-white hover:bg-white hover:text-[#A87C4F]"
            }`}
          >
            <span className="w-[98px] text-center text-[14px] font-semibold leading-5 transition-colors duration-300">
              Call Us Now
            </span>
            <CallUsArrowIcon className="transition-colors duration-300" />
          </button>

          <button
            type="button"
            aria-label="Open menu"
            className="cursor-pointer transition-opacity hover:opacity-80 lg:ml-2"
          >
            <Image
              src="/assets/Home/hamburger_menu.png"
              alt=""
              width={28}
              height={28}
              className={`h-7 w-7 object-contain ${isLight ? "brightness-0" : ""}`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
