"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Influencer Identification and Vetting",
    description:
      "We identify and vet influencers that are perfectly suited to your brand, by analyzing their audience demographics, engagement rate, niche relevance and authenticity to ensure that all creators can reach and influence your desired target audience.",
    image: "/assets/Home/game_lady.png",
  },
  {
    id: "02",
    title: "Micro & Macro Influencer Campaigns",
    description:
      "We design and execute micro and macro influencer campaigns tailored to your goals, combining creator scale, audience fit, and content quality to maximize reach, engagement, and conversions across platforms.",
    image: "/assets/Home/photo_lady.png",
  },
  {
    id: "03",
    title: "Influencer Campaign Management",
    description:
      "From briefing and content approvals to posting schedules and creator coordination, we manage every stage of your influencer campaign so your brand stays on message and on time.",
    image: "/assets/Home/hands_up_lady.png",
  },
  {
    id: "04",
    title: "Performance Tracking & ROI Analytics",
    description:
      "We track campaign performance with data-backed reporting on reach, engagement, clicks, and conversions, giving you clear visibility into ROI and actionable insights for future campaigns.",
    image: "/assets/Home/campaign-creator.png",
  },
  {
    id: "05",
    title: "Long-Term Influencer Brand Partnerships",
    description:
      "We build lasting creator partnerships that strengthen brand affinity over time, turning one-off collaborations into consistent advocacy and sustained audience growth.",
    image: "/assets/Home/lady.png",
  },
  {
    id: "06",
    title: "UGC & Regional Influencer Marketing",
    description:
      "We activate user-generated content and regional creators to deliver authentic, localized storytelling that resonates with niche communities and drives trust at scale.",
    image: "/assets/Home/game_lady.png",
  },
];

function ServiceArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="9"
      viewBox="0 0 33 9"
      fill="none"
      aria-hidden="true"
      className="h-[9px] w-[33px] shrink-0"
    >
      <line y1="4.5" x2="25" y2="4.5" stroke="black" />
      <path
        d="M33 4.5L24.75 8.39712L24.75 0.602885L33 4.5Z"
        fill="black"
      />
    </svg>
  );
}

export default function InfluencerMarketingServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1366px] px-10">
        <h2 className="text-center font-sans text-[50px] font-medium leading-normal text-black">
          Our Influencer Marketing Services
        </h2>

        <div className="mt-12 flex items-start justify-center">
          <div className="flex flex-col">
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className="flex h-[92px] w-[429px] items-center border border-[#D8D2D2] bg-white text-left -mt-px first:mt-0"
                >
                  <span className="flex h-full w-[72px] shrink-0 items-center justify-center font-sans text-[16px] font-medium leading-[26px] text-black">
                    {service.id}
                  </span>
                  <span
                    className="h-full w-px shrink-0 bg-[#D8D2D2]"
                    aria-hidden="true"
                  />
                  <span className="flex flex-1 items-center pl-5 pr-3">
                    <span className="w-[225px] font-sans text-[16px] font-semibold leading-[26px] text-black">
                      {service.title}
                    </span>
                  </span>
                  <span className="flex w-[52px] shrink-0 items-center justify-center pr-4">
                    {isActive ? <ServiceArrowIcon /> : null}
                  </span>
                </button>
              );
            })}
          </div>

          {/* <div
            className="h-[547px] w-px shrink-0 bg-[#D8D2D2]"
            aria-hidden="true"
          /> */}

          <div className="relative h-[547px] w-[417px] shrink-0 overflow-hidden bg-[#f5f0ea]">
            <Image
              key={activeService.image}
              src={activeService.image}
              alt={activeService.title}
              fill
              className="object-cover transition-opacity duration-300"
            />
          </div>

          <div className="ml-10 flex min-h-[547px] flex-1 flex-col py-8">
            <h3 className="font-sans text-[24px] font-semibold leading-[34px] text-black">
              {activeService.title}
            </h3>
            <p className="mt-6 font-open-sans text-[16px] font-normal leading-[28px] text-black w-[382px]">
              {activeService.description}
            </p>
            <button
              type="button"
              className="mt-10 flex items-center gap-2 self-start font-sans text-[16px] font-semibold leading-[20px] text-black"
            >
              Launch Your Campaign
              <ServiceArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-[#FFE4C8] my-15" />
    </section>
  );
}
