"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type MediovateLogoProps = {
  priority?: boolean;
  className?: string;
};

function scrollToHero() {
  const element = document.getElementById("hero");

  if (element) {
    if (window.__lenis) {
      window.__lenis.scrollTo(element, { offset: -88 });
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (window.__lenis) {
    window.__lenis.scrollTo(0);
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function MediovateLogo({
  priority = false,
  className = "",
}: MediovateLogoProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      scrollToHero();
      return;
    }

    router.push("/");
  };

  return (
    <Image
      src="/assets/Home/mediovate_logo.png"
      alt="Mediovate"
      width={190}
      height={22}
      priority={priority}
      className={`object-contain max-lg:h-[30px] max-lg:w-auto max-lg:object-left lg:h-auto lg:w-auto ${className} cursor-pointer`}
      onClick={handleClick}
    />
  );
}
