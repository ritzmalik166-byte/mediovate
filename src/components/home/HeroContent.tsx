import Image from "next/image";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="81"
      height="81"
      viewBox="0 0 78 74"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M38.5178 0L50.4681 24.0519L77.0356 27.9848L57.8537 46.7826L62.3231 73.2652L38.5178 60.831L14.7125 73.2652L19.1819 46.7826L3.8147e-06 27.9848L26.5675 24.0519L38.5178 0Z"
        fill="url(#hero-star-gradient)"
      />
      <defs>
        <linearGradient
          id="hero-star-gradient"
          x1="6.83957"
          y1="13.6337"
          x2="70.196"
          y2="81"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC909" />
          <stop offset="1" stopColor="#FF369B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SlashIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="218.655"
      height="25.071"
      viewBox="0 0 220 15"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8.70377 7.21876C84.4704 -8.18179 180.865 4.59778 219.592 12.9126C105.691 2.2428 43.6912 8.98966 8.54872 14.2349C-7.11679 15.2783 2.33081 9.13271 8.70377 7.21876Z"
        fill="white"
      />
    </svg>
  );
}

export default function HeroContent() {
  return (
    <div
      aria-hidden="true"
      className="flex w-full max-w-full flex-col items-center gap-1 px-1 text-center max-md:gap-1.5 md:gap-2 lg:gap-1 lg:px-0"
    >
      <span className="flex w-full justify-center">
        <span className="relative inline-block pr-8 max-md:pr-8 md:pr-12 lg:pr-14">
          <span
            className="pointer-events-none absolute right-[-14px] top-1/2 z-0 -translate-y-[66%] -translate-x-[45%] scale-[0.5] max-md:right-[-14px] md:right-[-18px] md:scale-[0.65] lg:right-[-26px] lg:scale-100"
          >
            <StarIcon />
          </span>
          <span className="relative z-10 text-[36px] font-bold leading-none text-white md:text-[48px] lg:text-[70px]">
            Best
          </span>
        </span>
      </span>

      <Image
        src="/assets/Home/influencer_marketing_2.png"
        alt="Mediovate hero headline graphic"
        title="Mediovate hero headline graphic"
        aria-hidden="true"
        width={535}
        height={167}
        className="mx-auto mt-1 w-full max-w-[min(100%,268px)] object-contain md:max-w-[min(100%,380px)] lg:mt-0 lg:max-w-[535px] lg:w-[535px]"
        priority
      />

      <span className="relative mt-1 block w-full max-w-full px-1">
        <span className="m-0 block text-center text-[18px] font-semibold uppercase leading-[1.15] text-white md:text-[28px] md:leading-none lg:text-[40px]">
          Agency in India
          <span className="absolute left-1/2 top-[calc(100%-4px)] -translate-x-1/2 md:top-[calc(100%-6px)] lg:top-[calc(100%-8px)]">
            <SlashIcon className="h-[12px] w-[110px] md:h-[16px] md:w-[150px] lg:h-[25px] lg:w-[218px]" />
          </span>
        </span>
      </span>

      <div className="mt-2 flex w-full max-w-[240px] items-center gap-2 max-md:mt-2 md:mt-3 md:max-w-[300px] md:gap-3 lg:mt-3 lg:max-w-[340px] lg:gap-4">
        <span className="h-px flex-1 bg-white/70" />
        <span className="text-center text-[14px] font-semibold lowercase leading-[20px] text-white md:text-[18px] md:leading-[26px] lg:text-[24px] lg:leading-[32px]">
          for
        </span>
        <span className="h-px flex-1 bg-white/70" />
      </div>

      <div className="text-center text-[13px] font-semibold uppercase leading-[18px] tracking-wide text-white md:text-[18px] md:leading-[24px] lg:text-[25px] lg:leading-[32px] lg:tracking-normal">
        <p className="m-0">Creative &amp; Digital</p>
        <p className="m-0">Growth Solutions</p>
      </div>
    </div>
  );
}
