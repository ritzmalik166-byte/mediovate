import Image from "next/image";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative box-border h-[649px] max-h-[649px] w-full overflow-hidden max-lg:h-auto max-lg:min-h-[520px] max-lg:max-h-none md:min-h-[580px] lg:h-[649px] lg:max-h-[649px]"
    >
      <Image
        src="/assets/Home/Mediovate.jpg"
        alt=""
        fill
        priority
        className="object-cover object-right-bottom max-lg:object-[62%_center] md:object-[55%_center] lg:object-right-bottom"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto h-full max-w-[1366px] px-4 pt-[68px] max-lg:box-border max-lg:flex max-lg:items-center max-lg:pb-8 md:px-8 md:pt-[76px] lg:px-0 lg:pt-[88px] lg:pb-0">
        <div className="flex h-full w-full items-center justify-center max-lg:h-auto lg:w-[52%] lg:justify-start">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
