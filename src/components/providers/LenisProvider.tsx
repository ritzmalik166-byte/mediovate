"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
      allowNestedScroll: true,
      prevent: (node) => Boolean(node.closest("#site-navigation")),
    });

    const onLenisScroll = ({ scroll }: { scroll: number }) => {
      window.dispatchEvent(
        new CustomEvent("app-scroll", { detail: { scroll } }),
      );
    };

    lenis.on("scroll", onLenisScroll);
    window.__lenis = lenis;

    return () => {
      lenis.off("scroll", onLenisScroll);
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return children;
}
