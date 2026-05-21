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
    });

    const onLenisScroll = ({ scroll }: { scroll: number }) => {
      window.dispatchEvent(
        new CustomEvent("app-scroll", { detail: { scroll } }),
      );
    };

    lenis.on("scroll", onLenisScroll);

    return () => {
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
    };
  }, []);

  return children;
}
