import Image from "next/image";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative box-border h-[649px]  max-h-[649px] w-full overflow-hidden"
    >
      <Image
        src="/assets/Home/Mediovate.jpg"
        alt=""
        fill
        priority
        className="object-cover object-right-bottom"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto h-full max-w-[1366px] pt-[88px]">
        <div className="flex h-full w-[52%] items-center">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
