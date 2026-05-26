"use client";

import { useEffect, useState } from "react";

export const MODAL_ANIMATION_MS = 620;

export function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4L16 16M16 4L4 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const modalFieldClassName =
  "h-[48px] w-full rounded-[50px] border border-[#F3BB82] bg-white px-5 font-open-sans text-[15px] leading-[22px] text-[#050102] outline-none transition-colors duration-200 placeholder:text-[#A87C4F]/70 focus:border-[#A87C4F] md:h-[52px] md:text-[16px]";

export function useAnimatedModal(isOpen: boolean) {
  const [isPresent, setIsPresent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsPresent(true);

      const frame = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsVisible(true));
      });

      return () => window.cancelAnimationFrame(frame);
    }

    setIsVisible(false);

    const timer = window.setTimeout(() => {
      setIsPresent(false);
    }, MODAL_ANIMATION_MS);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isPresent) return;

    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      window.__lenis?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isPresent]);

  const backdropAnimation = isVisible
    ? "animate-[consultation-backdrop-in_0.62s_cubic-bezier(0.22,1,0.36,1)_forwards]"
    : "animate-[consultation-backdrop-out_0.62s_cubic-bezier(0.22,1,0.36,1)_forwards]";

  const panelAnimation = isVisible
    ? "animate-[consultation-panel-in_0.62s_cubic-bezier(0.22,1,0.36,1)_forwards]"
    : "animate-[consultation-panel-out_0.62s_cubic-bezier(0.22,1,0.36,1)_forwards]";

  const staggerClass = (_delayMs: number) =>
    `transition-[opacity,transform] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
    }`;

  const staggerStyle = (delayMs: number) => ({
    transitionDelay: isVisible ? `${delayMs}ms` : "0ms",
  });

  return {
    isPresent,
    isVisible,
    backdropAnimation,
    panelAnimation,
    staggerClass,
    staggerStyle,
  };
}
