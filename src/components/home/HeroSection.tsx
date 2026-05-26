import Image from "next/image";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative box-border h-[649px] max-h-[649px] w-full scroll-mt-24 overflow-hidden max-lg:h-[580px] max-lg:min-h-[580px] max-lg:max-h-none md:min-h-[580px] lg:h-[649px] lg:max-h-[649px]"
    >
      <Image
        src="/assets/Home/banner-06 (2).jpg"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        alt="banner"
        className="object-cover object-center"
      />
      <Image
        src="/assets/Home/mediovate hero banner.jpg"
        alt=""
        fill
        priority
        className="hidden object-cover object-right-bottom lg:block"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1366px] flex-col px-4 max-lg:items-center max-lg:justify-end max-lg:pb-10 max-lg:pt-14 md:px-8 md:pt-[76px] lg:px-0 lg:block lg:pt-[88px] lg:pb-0">
        <div className="flex w-full items-center justify-center max-lg:w-full lg:h-full lg:w-[52%] lg:justify-start">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
