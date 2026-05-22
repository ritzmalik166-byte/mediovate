"use client";

import Image from "next/image";
import { useState } from "react";

const CARD_PAIR_WIDTH = 760;
const CARD_PAIR_GAP = 24;
const CARD_PAIR_STEP = CARD_PAIR_WIDTH + CARD_PAIR_GAP;

const featureCards = [
  {
    image: "/assets/Home/connect.png",
    imageAlt: "Verified influencer network illustration",
    title: "5000+ Verified Influencer Network",
    description:
      "Our curated network spans nano, micro, macro, and celebrity influencers across every niche beauty, tech, fitness, finance, food, travel, and more each vetted for authentic engagement.",
  },
  {
    image: "/assets/Home/stats.png",
    imageAlt: "ROI-driven campaign analytics dashboard",
    title: "ROI-Driven, Data-Backed Campaigns",
    description:
      "Every campaign decision is backed by deep audience data, competitor analysis, and performance benchmarks. We track impressions, engagement, conversions, and earned media value , not just post counts.",
  },
  {
    image: "/assets/Home/connect.png",
    imageAlt: "Influencer network across niches",
    title: "360° Brand Growth Approach",
    description:
      "Influencer marketing + creative branding + digital marketing , a unified strategy that builds your brand from awareness to conversion, ensuring consistent messaging across every platform and touchpoint.",
  },
  {
    image: "/assets/Home/stats.png",
    imageAlt: "Campaign performance reporting",
    title: "Transparent Reporting & Dedicated Teams",
    description:
      "Real-time campaign dashboards, monthly performance reports, zero hidden costs and a dedicated account team who knows your brand inside out. You're always in the loop, always in control.",
  },
];

function MediovateSwooshIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="220"
      height="15"
      viewBox="0 0 220 15"
      fill="none"
      aria-hidden="true"
      className="h-[14px] w-[120px] rotate-[1.352deg] md:h-[18px] md:w-[160px] lg:h-[25.071px] lg:w-[218.655px]"
    >
      <path
        d="M8.7038 7.21882C84.4704 -8.18173 180.865 4.59784 219.592 12.9127C105.691 2.24287 43.6912 8.98972 8.54875 14.2349C-7.11676 15.2784 2.33084 9.13277 8.7038 7.21882Z"
        fill="#A87C4F"
      />
    </svg>
  );
}

function CarouselArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous cards" : "Next cards"}
      className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center bg-transparent p-2 transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-30"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="9"
        viewBox="0 0 33 9"
        fill="none"
        aria-hidden="true"
        className={`h-[9px] w-[33px] ${direction === "left" ? "rotate-180" : ""}`}
      >
        <line y1="4.5" x2="25" y2="4.5" stroke="black" />
        <path
          d="M33 4.5L24.75 8.39712L24.75 0.602885L33 4.5Z"
          fill="black"
        />
      </svg>
    </button>
  );
}

function FeatureCardPair({
  image,
  imageAlt,
  title,
  description,
}: {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex shrink-0" style={{ marginRight: CARD_PAIR_GAP }}>
      <div className="relative h-[292px] w-[380px] overflow-hidden rounded-[20px] bg-[#FDF1E3]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain object-center"
          sizes="380px"
        />
      </div>

      <div className="flex h-[292px] w-[380px] flex-col justify-center rounded-[20px] border border-[#FFE7CE] bg-white px-8">
        <h3 className="w-[321px] font-sans text-[22px] font-semibold leading-[34px] text-black">
          {title}
        </h3>
        <p className="mt-4 h-[157px] w-[305px] font-open-sans text-[16px] font-normal leading-[28px] text-black">
          {description}
        </p>
      </div>
    </div>
  );
}

function MobileFeatureCard({
  image,
  imageAlt,
  title,
  description,
}: {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-full min-w-full shrink-0 basis-full px-1">
      <div className="flex w-full flex-col overflow-hidden rounded-[20px] border border-[#FFE7CE] bg-white">
        <div className="relative h-[200px] w-full bg-[#FDF1E3]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain object-center p-4"
            sizes="100vw"
          />
        </div>
        <div className="px-5 py-5 text-center">
          <h3 className="font-sans text-[18px] font-semibold leading-[26px] text-black">
            {title}
          </h3>
          <p className="mt-3 font-open-sans text-[14px] font-normal leading-[24px] text-black">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function TabletFeatureCard({
  image,
  imageAlt,
  title,
  description,
}: {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#FFE7CE] bg-white">
      <div className="relative h-[160px] w-full bg-[#FDF1E3]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain object-center p-3"
          sizes="(max-width: 1024px) 50vw, 380px"
        />
      </div>
      <div className="flex flex-1 flex-col px-4 py-4">
        <h3 className="font-sans text-[15px] font-semibold leading-[22px] text-black">
          {title}
        </h3>
        <p className="mt-2 font-open-sans text-[13px] font-normal leading-[20px] text-black">
          {description}
        </p>
      </div>
    </div>
  );
}

const tabletCarouselCards = [...featureCards, featureCards[0]];

export default function WhyChooseMediovateSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex(
      (index) => (index - 1 + featureCards.length) % featureCards.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((index) => (index + 1) % featureCards.length);
  };

  return (
    <section className="overflow-hidden bg-white pt-4 pb-10 md:pb-12 lg:pb-16">
      <div className="mx-auto max-w-[1366px] px-4 md:px-8 lg:px-10">
        <div className="flex flex-col items-center">
          <h2 className="text-center font-sans text-[32px] font-medium leading-[40px] md:text-[44px] md:leading-[52px] lg:text-[60px] lg:leading-[72px]">
            <span className="text-black">Why Choose </span>
            <span className="relative inline-block text-[#A87C4F]">
              Mediovate
              <span className="absolute left-1/2 top-[calc(100%+4px)] -translate-x-1/2">
                <MediovateSwooshIcon />
              </span>
            </span>
          </h2>

          <p className="mt-4 w-full max-w-[349px] text-center font-sans text-[18px] font-semibold leading-[26px] text-black md:mt-6 md:max-w-[480px] md:text-[20px] md:leading-[30px] lg:mt-8 lg:max-w-none lg:text-[24px] lg:leading-[34px]">
            Performance-First. Always.
          </p>
        </div>

        <div className="relative mt-4 flex flex-col items-center gap-5 md:mt-5 md:gap-6 lg:mt-2 lg:min-h-[67px] lg:justify-center">
          <p className="w-full max-w-[340px] px-0 text-center font-open-sans text-[15px] font-normal leading-[26px] text-black md:max-w-[600px] md:text-[16px] md:leading-[28px] lg:max-w-[795px] lg:px-10">
            We don&apos;t chase vanity metrics. Every strategy, every campaign,
            every creative decision at Mediovate is built to drive measurable
            business outcomes, leads, revenue, and brand equity.
          </p>

          <div className="flex items-center justify-center gap-4 lg:hidden">
            <CarouselArrow direction="left" onClick={goToPrevious} />
            <span className="min-w-[48px] text-center font-sans text-[14px] font-medium text-black">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(featureCards.length).padStart(2, "0")}
            </span>
            <CarouselArrow direction="right" onClick={goToNext} />
          </div>

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-4 lg:flex">
            <CarouselArrow direction="left" onClick={goToPrevious} />
            <CarouselArrow direction="right" onClick={goToNext} />
          </div>
        </div>

        {/* Mobile: single card */}
        <div className="relative mt-6 md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {featureCards.map((card) => (
                <MobileFeatureCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet: two cards with smooth slide */}
        <div
          className="relative mt-6 hidden overflow-hidden md:block lg:hidden"
          aria-live="polite"
          aria-atomic="true"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 50}%)` }}
          >
            {tabletCarouselCards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className="box-border w-1/2 shrink-0 basis-1/2 px-2"
              >
                <TabletFeatureCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: image + text pair carousel */}
        <div className="mt-10 hidden overflow-hidden lg:mt-12 lg:block">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeIndex * CARD_PAIR_STEP}px)`,
            }}
          >
            {featureCards.map((card) => (
              <FeatureCardPair key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
