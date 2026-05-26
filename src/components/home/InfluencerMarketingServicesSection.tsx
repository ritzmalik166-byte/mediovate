"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";

const services: {
  id: string;
  title: string;
  description: ReactNode;
  image: string;
}[] = [
  {
    id: "01",
    title: "Influencer Identification and Vetting",
    description:
      "We identify and vet influencers that are perfectly suited to your brand, by analyzing their audience demographics, engagement rate, niche relevance and authenticity to ensure that all creators can reach and influence your desired target audience.",
    image: "/assets/Home/website other parts-04.jpg",
  },
  {
    id: "02",
    title: "Micro & Macro Influencer Campaigns",
    description: (
      <>
        We design multi-tier influencer marketing strategies that leverage{" "}
        <strong className="font-bold">nano (1K-10K followers)</strong> for deeply
        specific niche communities and{" "}
        <strong className="font-bold">macro &amp; celebrities</strong> for brand
        awareness, to reach as wide an audience as possible while minimizing
        marketing expenditure.
      </>
    ),
    image: "/assets/Home/website other parts-05.jpg",
  },
  {
    id: "03",
    title: "Influencer Campaign Management",
    description: (
      <>
        Our end-to-end{" "}
        <strong className="font-bold">
          influencer marketing campaign management
        </strong>{" "}
        covers every step of the journey including creative briefing, approvals
        and posting schedules and even brand safety checks and compliance to
        ensure your campaigns are always successful, delivered on time and stay
        on message.
      </>
    ),
    image: "/assets/Home/website other parts-06.jpg",
  },
  {
    id: "04",
    title: "Performance Tracking & ROI Analytics",
    description: (
      <>
        Real-time{" "}
        <strong className="font-bold">
          influencer campaign analytics, impressions, reach, story views, link
          clicks, conversions, earned media value, and ROI dashboards.
        </strong>{" "}
        We measure every metric that matters and optimise campaigns for maximum
        commercial impact.
      </>
    ),
    image: "/assets/Home/website other parts-07.jpg",
  },
  {
    id: "05",
    title: "Long-Term Influencer Brand Partnerships",
    description: (
      <>
        Move beyond one-off posts. We build sustained{" "}
        <strong className="font-bold">
          influencer brand partnerships, ambassador programmes, seasonal
          collaborations, and recurring campaigns
        </strong>{" "}
        that create consistent brand recall and deep audience loyalty over time.
      </>
    ),
    image: "/assets/Home/website other parts-08.jpg",
  },
  {
    id: "06",
    title: "UGC & Regional Influencer Marketing",
    description: (
      <>
        Harness the power of{" "}
        <strong className="font-bold">user-generated content (UGC)</strong> and{" "}
        <strong className="font-bold">
          regional language creators ,Hindi, Tamil, Punjabi, Bengali
        </strong>{" "}
        and more to tap into India&apos;s massive tier-2 and tier-3 digital
        audiences with authentic, culturally relevant storytelling.
      </>
    ),
    image: "/assets/Home/website other parts-09.jpg",
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
  const previewPanelRef = useRef<HTMLDivElement>(null);
  const activeService = services[activeIndex];

  const handleSelectService = (index: number) => {
    setActiveIndex(index);

    if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) {
      window.requestAnimationFrame(() => {
        previewPanelRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      });
    }
  };

  return (
    <section
      id="influencer-marketing"
      className="scroll-mt-24 bg-white pt-4 pb-8 md:py-0"
    >
      <div className="mx-auto max-w-[1366px] px-4 md:px-8 lg:px-8 xl:px-10">
        <h2 className="text-center font-sans text-[28px] font-medium leading-[36px] text-black md:text-[40px] md:leading-[48px] lg:text-[42px] xl:text-[50px] xl:leading-normal">
          Our Influencer Marketing Services
        </h2>

        <div className="mt-8 flex flex-col gap-6 max-md:gap-6 md:mt-10 md:flex-row md:items-start md:gap-5 lg:mt-10 lg:gap-6 xl:mt-12 xl:justify-center xl:gap-0">
          <div className="flex w-full shrink-0 flex-col md:w-[min(100%,280px)] lg:w-[min(100%,240px)] xl:w-auto">
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleSelectService(index)}
                  aria-pressed={isActive}
                  className="flex min-h-[72px] w-full cursor-pointer items-center border border-[#D8D2D2] bg-white text-left -mt-px transition-colors duration-200 first:mt-0 hover:bg-[#FFFBF7] md:min-h-[76px] lg:min-h-[72px] xl:h-[92px] xl:w-[429px]"
                >
                  <span className="flex h-full w-[56px] shrink-0 items-center justify-center font-sans text-[14px] font-medium leading-[26px] text-black md:w-[60px] md:text-[15px] lg:w-[52px] lg:text-[14px] xl:w-[72px] xl:text-[16px]">
                    {service.id}
                  </span>
                  <span
                    className="h-full w-px shrink-0 bg-[#D8D2D2]"
                    aria-hidden="true"
                  />
                  <span className="flex min-w-0 flex-1 items-center py-3 pl-3 pr-2 md:pl-3 lg:py-2 lg:pl-3 lg:pr-2 xl:py-0 xl:pl-5 xl:pr-3">
                    <span className="font-sans text-[14px] font-semibold leading-[22px] text-black md:text-[13px] md:leading-[20px] lg:text-[13px] lg:leading-[20px] xl:w-[225px] xl:text-[16px] xl:leading-[26px]">
                      {service.title}
                    </span>
                  </span>
                  <span className="flex w-[40px] shrink-0 items-center justify-center pr-3 md:w-[44px] lg:w-[36px] xl:w-[52px] xl:pr-4">
                    {isActive ? <ServiceArrowIcon /> : null}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            ref={previewPanelRef}
            className="flex min-w-0 flex-1 flex-col gap-5 max-md:w-full md:sticky md:top-20 md:gap-4 lg:flex-row lg:gap-5 xl:static xl:contents"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="relative aspect-[417/547] w-full shrink-0 overflow-hidden rounded-[12px] bg-[#f5f0ea] max-lg:mx-auto max-lg:max-w-[560px] md:rounded-[16px] lg:mx-0 lg:w-[min(100%,300px)] lg:max-w-none lg:rounded-[16px] xl:aspect-auto xl:h-[547px] xl:w-[417px] xl:rounded-none">
              <Image
                key={activeService.image}
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 1024px) 560px, 300px, 417px"
              />
            </div>

            <div className="flex w-full min-w-0 flex-1 flex-col items-center py-0 text-center max-lg:max-w-[560px] max-lg:self-center lg:items-stretch lg:text-left lg:py-2 xl:ml-10 xl:min-h-[547px] xl:max-w-none xl:py-8">
              <h3 className="font-sans text-[18px] font-semibold leading-[26px] text-black md:text-[18px] md:leading-[26px] lg:text-[20px] lg:leading-[28px] xl:text-[24px] xl:leading-[34px]">
                {activeService.title}
              </h3>
              <p className="mt-4 w-full max-w-[340px] font-open-sans text-[15px] font-normal leading-[26px] text-black max-lg:mx-auto max-lg:text-center md:max-w-[480px] lg:mt-3 lg:max-w-none lg:text-left lg:text-[14px] lg:leading-[24px] xl:mt-6 xl:w-[382px] xl:text-[16px] xl:leading-[28px]">
                {activeService.description}
              </p>
              <button
                type="button"
                className="mt-6 flex items-center justify-center gap-2 font-sans text-[15px] font-semibold leading-[20px] text-black max-lg:mx-auto lg:mt-5 lg:justify-start xl:mt-10 xl:text-[16px]"
              >
                Launch Your Campaign
                <ServiceArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-8 h-px w-full bg-[#FFE4C8] md:my-12 xl:my-[60px]" />
    </section>
  );
}
