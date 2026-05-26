"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useConsultationModal } from "@/components/providers/ConsultationModalProvider";
import { useCallUsModal } from "@/components/providers/CallUsModalProvider";
import MediovateLogo from "./MediovateLogo";

const NAV_LINKS = [
  { label: "Home", sectionId: "hero" },
  { label: "Who We Are", sectionId: "who-we-are" },
  { label: "Flagship Service", sectionId: "flagship-service" },
  { label: "Platform Reach", sectionId: "platform-reach" },
  { label: "Influencer Marketing", sectionId: "influencer-marketing" },
  { label: "Other Services", sectionId: "other-services" },
  { label: "Digital Marketing", sectionId: "digital-marketing" },
  { label: "Why Choose Mediovate", sectionId: "why-choose-mediovate" },
  { label: "How We Work", sectionId: "how-we-work" },
  { label: "Industries", sectionId: "industries" },
  { label: "Get Started", sectionId: "campaign-cta" },
];

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
  return <MediovateLogo priority />;
}

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(element, { offset: -88 });
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openConsultationModal } = useConsultationModal();
  const { openCallUsModal } = useCallUsModal();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const handleConsultationClick = useCallback(() => {
    closeMenu();
    openConsultationModal();
  }, [closeMenu, openConsultationModal]);

  const handleCallUsClick = useCallback(() => {
    closeMenu();
    openCallUsModal();
  }, [closeMenu, openCallUsModal]);

  const handleNavClick = useCallback(
    (sectionId: string) => {
      closeMenu();
      window.setTimeout(() => scrollToSection(sectionId), 150);
    },
    [closeMenu],
  );

  useEffect(() => {
    const updateNavbar = (scrollY = window.scrollY) => {
      setIsLight(scrollY > 0 || isMenuOpen);
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
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const scrollY = window.scrollY;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, isMenuOpen]);

  const showSolidHeader = isLight || isMenuOpen;

  return (
    <>
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 hidden bg-[#050102]/25 backdrop-blur-[2px] transition-opacity duration-500 ease-out lg:block ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
          showSolidHeader ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between py-3 max-lg:py-3 lg:py-0">
          <div className="flex shrink-0 items-center justify-start max-lg:min-w-0">
            <Logo />
          </div>

          <div className="flex shrink-0 items-center gap-2 max-lg:gap-2 lg:gap-4">
            <button
              type="button"
              onClick={handleConsultationClick}
              className="group hidden h-[40px] w-[250px] cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-transparent bg-[#A87C4F] text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F] lg:flex"
            >
              <span className="w-[182px] text-center text-[13px] font-semibold leading-5 transition-colors duration-300">
                Book a Free Consultation
              </span>
              <ConsultationArrowIcon className="transition-colors duration-300" />
            </button>

            <button
              type="button"
              onClick={handleCallUsClick}
              className={`group hidden h-[40px] w-[165px] cursor-pointer items-center justify-center gap-2 rounded-[50px] border bg-transparent transition-colors duration-300 lg:flex ${
                showSolidHeader
                  ? "border-[#A87C4F] text-[#A87C4F] hover:bg-[#A87C4F] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#A87C4F]"
              }`}
            >
              <span className="w-[86px] text-center text-[13px] font-semibold leading-5 transition-colors duration-300">
                Call Us Now
              </span>
              <CallUsArrowIcon className="transition-colors duration-300" />
            </button>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="site-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 lg:ml-2"
            >
              <Image
                src="/assets/Home/hamburger_menu.png"
                alt=""
                width={24}
                height={24}
                className={`h-6 w-6 object-contain transition-all duration-300 ${
                  showSolidHeader ? "brightness-0" : ""
                } ${isMenuOpen ? "rotate-90 opacity-80" : "rotate-0 opacity-100"}`}
              />
            </button>
          </div>
        </div>

        <div
          id="site-navigation"
          aria-hidden={!isMenuOpen}
          className={`transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-lg:fixed max-lg:inset-x-0 max-lg:bottom-0 max-lg:z-40 max-lg:top-[57px] max-lg:flex max-lg:flex-col lg:grid lg:overflow-hidden ${
            isMenuOpen
              ? "visible opacity-100 max-lg:h-[calc(100dvh-57px)] max-lg:bg-white lg:grid-rows-[1fr] lg:border-t lg:border-[#FFE4C8] lg:bg-white/95 lg:backdrop-blur-sm"
              : "invisible opacity-0 max-lg:pointer-events-none lg:grid-rows-[0fr] lg:border-0 lg:bg-transparent"
          }`}
        >
          <div className="flex min-h-0 flex-1 flex-col max-lg:h-full lg:overflow-hidden">
            <nav
              className={`section-container flex h-full min-h-0 flex-1 flex-col max-lg:items-center max-lg:py-6 lg:max-h-[calc(100dvh-72px)] lg:overflow-y-auto lg:py-6 md:py-8 ${
                isMenuOpen
                  ? "translate-y-0 opacity-100 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : "-translate-y-4 opacity-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              }`}
            >
              <div
                data-lenis-prevent
                data-lenis-prevent-touch
                className="mobile-menu-scroll min-h-0 flex-1 lg:overflow-visible"
              >
                <ul className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-1 max-lg:pb-2 max-lg:text-center lg:grid lg:gap-1 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
                  {NAV_LINKS.map((link, index) => (
                    <li
                      key={link.sectionId}
                      className={`w-full max-lg:max-w-[280px] shrink-0 transition-[transform,opacity] ease-out ${
                        isMenuOpen
                          ? "translate-y-0 opacity-100 duration-500"
                          : "translate-y-[-10px] opacity-0 duration-300"
                      }`}
                      style={{
                        transitionDelay: isMenuOpen
                          ? `${index * 40 + 80}ms`
                          : `${Math.min(index * 20, 120)}ms`,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(link.sectionId)}
                        className="w-full cursor-pointer rounded-xl px-3 py-3 text-center font-open-sans text-[15px] font-medium leading-6 text-[#050102] transition-colors duration-200 hover:bg-[#FFF5EB] hover:text-[#A87C4F] md:text-[16px] lg:text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`shrink-0 max-lg:flex max-lg:w-full max-lg:max-w-[320px] max-lg:flex-col max-lg:gap-3 max-lg:self-center max-lg:border-t max-lg:border-[#FFE4C8] max-lg:px-1 max-lg:pt-5 max-lg:pb-2 lg:hidden ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100 transition-[transform,opacity] duration-500 ease-out"
                    : "translate-y-[-10px] opacity-0 transition-[transform,opacity] duration-300 ease-out"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? "520ms" : "0ms",
                }}
              >
                <button
                  type="button"
                  onClick={handleConsultationClick}
                  className="group flex h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-transparent bg-[#A87C4F] px-4 text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F]"
                >
                  <span className="text-[13px] font-semibold leading-5">
                    Book a Free Consultation
                  </span>
                  <ConsultationArrowIcon className="transition-colors duration-300" />
                </button>

                <button
                  type="button"
                  onClick={handleCallUsClick}
                  className="group flex h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-[#A87C4F] bg-white px-4 text-[#A87C4F] transition-colors duration-300 hover:bg-[#A87C4F] hover:text-white"
                >
                  <span className="text-[13px] font-semibold leading-5">
                    Call Us Now
                  </span>
                  <CallUsArrowIcon className="transition-colors duration-300" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
