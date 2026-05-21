"use client";

import Image from "next/image";
import { useState } from "react";

const CARD_PAIR_WIDTH = 776;
const CARD_PAIR_GAP = 24;

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
      "Every campaign decision is backed by deep audience data, competitor analysis, and performance benchmarks. We track impressions, engagement, conversions, and earned media value.",
  },
  {
    image: "/assets/Home/connect.png",
    imageAlt: "Influencer network across niches",
    title: "Niche-First Creator Matching",
    description:
      "We match brands with creators whose audiences align with your category, geography, and campaign goals to deliver authentic reach that converts into measurable business impact.",
  },
  {
    image: "/assets/Home/stats.png",
    imageAlt: "Campaign performance reporting",
    title: "Transparent Performance Reporting",
    description:
      "Get clear visibility into campaign KPIs with real-time dashboards, post-campaign analysis, and actionable insights that help you scale what works and optimize what does not.",
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
      className="h-[25.071px] w-[218.655px] rotate-[1.352deg]"
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
      className="cursor-pointer transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-30"
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
    <div
      className="flex shrink-0"
      style={{marginRight: CARD_PAIR_GAP }}
    >
      <div className="relative h-[292px] w-[380px] overflow-hidden rounded-[20px] bg-[#FDF1E3]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain object-center"
          sizes="380px"
        />
      </div>

      <div className=" flex h-[292px] w-[380px] flex-col justify-center rounded-[20px] border border-[#FFE7CE] bg-white px-8">
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

export default function WhyChooseMediovateSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(0, featureCards.length - 2);

  const goToPrevious = () => {
    setActiveIndex((index) => Math.max(index - 1, 0));
  };

  const goToNext = () => {
    setActiveIndex((index) => Math.min(index + 1, maxIndex));
  };

  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-[1366px] px-10">
        <div className="flex flex-col items-center">
          <h2 className="text-center font-sans text-[60px] font-medium leading-[72px]">
            <span className="text-black">Why Choose </span>
            <span className="relative inline-block text-[#A87C4F]">
              Mediovate
              <span className="absolute left-1/2 top-[calc(100%+4px)] -translate-x-1/2">
                <MediovateSwooshIcon />
              </span>
            </span>
          </h2>

          <p className="mt-8 w-[349px] text-center font-sans text-[24px] font-semibold leading-[34px] text-black">
            Performance-First. Always.
          </p>
        </div>

        <div className="relative mt-2 flex min-h-[67px] items-center justify-center">
          <p className="w-[795px] text-center font-open-sans text-[16px] font-normal leading-[28px] text-black">
            We don&apos;t chase vanity metrics. Every strategy, every campaign,
            every creative decision at Mediovate is built to drive measurable
            business outcomes, leads, revenue, and brand equity.
          </p>

          <div className="absolute right-0 top-1/2 flex  items-center gap-4">
            <CarouselArrow
              direction="left"
              onClick={goToPrevious}
              disabled={activeIndex === 0}
            />
            <CarouselArrow
              direction="right"
              onClick={goToNext}
              disabled={activeIndex === maxIndex}
            />
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeIndex * (CARD_PAIR_WIDTH + CARD_PAIR_GAP)}px)`,
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
