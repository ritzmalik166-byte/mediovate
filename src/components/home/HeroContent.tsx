import Image from "next/image";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="81"
      height="81"
      viewBox="0 0 78 74"
      fill="none"
      aria-hidden="true"
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

function SlashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="218.655"
      height="25.071"
      viewBox="0 0 220 15"
      fill="none"
      aria-hidden="true"
      className=""
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
    <div className="flex flex-col items-center gap-1 text-center">
      <div className="flex justify-center">
        <div className="relative inline-block pr-14">
          <span
            className="pointer-events-none absolute right-[-26px] top-1/2 z-0 -translate-y-[66%] -translate-x-[45%]"
            aria-hidden="true"
          >
            <StarIcon />
          </span>
          <span className="relative z-10 text-[70px] font-bold leading-none text-white">
            Best
          </span>
        </div>
      </div>

      <h1 className="m-0">
        <Image
          src="/assets/Home/influencer_marketing_2.png"
          alt="Influencer Marketing"
          width={535}
          height={167}
          className="w-[535px] max-w-full object-contain"
          priority
        />
      </h1>

      <div className="relative">
        <h2 className="m-0 text-center text-[40px] font-semibold uppercase leading-none text-white">
          Agency{" "}
          <span className="relative inline-block font-bold">
            in India
            <span className="absolute left-1/2 top-[calc(100%-8px)] -translate-x-1/2">
              <SlashIcon />
            </span>
          </span>
        </h2>
      </div>

      <div className="mt-3 flex w-full max-w-[340px] items-center gap-4">
        <span className="h-px flex-1 bg-white/70" />
        <span className="text-center text-[24px] font-semibold lowercase leading-[32px] text-white">
          for
        </span>
        <span className="h-px flex-1 bg-white/70" />
      </div>

      <div className="text-center text-[25px] font-semibold uppercase leading-[32px] text-white">
        <p>Creative &amp; Digital</p>
        <p>Growth Solutions</p>
      </div>
    </div>
  );
}
