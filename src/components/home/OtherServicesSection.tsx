"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

const creativeServices: {
  id: string;
  title: string;
  description: ReactNode;
}[] = [
  {
    id: "01",
    title: "Brand Identity & Logo Design",
    description: (
      <>
        Complete brand identity design
        <br />
        <strong className="font-bold">
          logo creation, typography selection, colour palettes,
        </strong>{" "}
        and <strong className="font-bold">brand guidelines</strong> that ensure
        a unified, professional look across all platforms and media.
      </>
    ),
  },
  {
    id: "02",
    title: "Social Media Creative Design",
    description: (
      <>
        Scroll-stopping social media creatives such as{" "}
        <strong className="font-bold">
          Instagram posts, Reels thumbnails, Facebook ads, LinkedIn banners,
        </strong>{" "}
        and <strong className="font-bold">YouTube channel art</strong> designed
        to boost engagement and reinforce brand recall consistently.
      </>
    ),
  },
  {
    id: "03",
    title: "Ad Creatives & Campaign Visuals",
    description: (
      <>
        High-converting digital ad creatives for{" "}
        <strong className="font-bold">
          Google Display, Meta Ads, YouTube pre-roll,
        </strong>{" "}
        and <strong className="font-bold">programmatic advertising</strong>,
        designed with messaging and visual hierarchy that drives clicks and
        conversions.
      </>
    ),
  },
  {
    id: "04",
    title: "Packaging & Brand Collateral Design",
    description: (
      <>
        Product packaging design, brochures, pitch decks,{" "}
        <strong className="font-bold">business cards,</strong> and all{" "}
        <strong className="font-bold">brand collateral</strong>, crafted to
        leave a lasting impression whether your customer is online or holding
        your product in their hands.
      </>
    ),
  },
  {
    id: "05",
    title: "Video Production & Motion Graphics",
    description: (
      <>
        <strong className="font-bold">
          Brand films, explainer videos, Instagram Reels production, product
          demo videos,
        </strong>{" "}
        and <strong className="font-bold">animated motion graphics</strong>,
        compelling video content that communicates your brand story with impact
        and shareability.
      </>
    ),
  },
];

function ProposalArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="9"
      viewBox="0 0 33 9"
      fill="none"
      aria-hidden="true"
      className={`h-[9px] w-[33px] shrink-0 ${className ?? ""}`}
    >
      <line y1="4.5" x2="25" y2="4.5" stroke="currentColor" />
      <path
        d="M25.25 7.6084L25.25 1.3916L31.8291 4.5L25.25 7.6084Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}

export default function OtherServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section
      id="other-services"
      className="scroll-mt-24 overflow-hidden bg-white pt-4 pb-8 lg:py-0"
    >
      <div className="mx-auto max-w-[1366px] px-4 md:px-8 lg:px-10">
        <div className="flex flex-col items-center">
          <span className="text-center font-sans text-[14px] font-semibold uppercase leading-normal text-[#A87C4F] md:text-[15px] lg:text-[16px]">
            Our Other Services
          </span>

          <h2 className="mt-4 w-full text-center">
            <span className="mx-auto block w-full font-sans text-[32px] font-medium leading-[40px] text-black md:text-[44px] md:leading-[52px] lg:w-[605px] lg:text-[60px] lg:leading-[72px]">
              Creative Services &amp;
            </span>
            <span className="block font-sans text-[32px] font-medium leading-[40px] text-[#A87C4F] md:text-[44px] md:leading-[52px] lg:text-[60px] lg:leading-[72px]">
              Digital Marketing
            </span>
          </h2>

          <p className="mx-auto mt-4 w-full text-center font-open-sans text-[15px] font-normal leading-[26px] text-black md:mt-5 md:max-w-[600px] md:text-[16px] md:leading-[28px] lg:mt-6 lg:h-[68px] lg:w-[727px] lg:max-w-none">
            From influencer collaborations to full-scale digital campaigns,
            Mediovate delivers complete marketing solutions for modern brands.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-[#FFF5EB] py-8 md:mt-10 md:py-10 lg:mt-12 lg:py-14">
        <div className="mx-auto flex max-w-[1366px] flex-col items-stretch gap-8 px-4 md:gap-10 md:px-8 lg:flex-row lg:items-start lg:justify-center lg:gap-0 lg:px-10">
          <div className="w-full shrink-0 pt-0 md:max-w-[560px] md:self-center lg:w-[320px] lg:max-w-none lg:pt-4">
            <h3 className="w-full text-center font-sans text-[24px] leading-[34px] text-black md:text-[28px] md:leading-[40px] lg:w-[363px] lg:text-left lg:text-[36px] lg:leading-[50px]">
              <span className="font-extrabold">Creative Agency Services</span>{" "}
              <span className="font-medium">That Elevate Your Brand Identity</span>
            </h3>
            <p className="mt-4 w-full text-center font-open-sans text-[15px] font-normal leading-[26px] text-black md:mt-5 md:text-[16px] md:leading-[28px] lg:mt-6 lg:h-[141px] lg:w-[324px] lg:text-left">
              As the best creative branding agency in India, we don&apos;t just
              make things look good we craft creative solutions that communicate
              your brand&apos;s value, personality, and purpose with clarity and
              impact.
            </p>
            <button
              type="button"
              className="group mx-auto mt-6 flex h-[48px] w-full max-w-full cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-transparent bg-[#A87C4F] text-center font-sans text-[15px] font-semibold leading-[20px] text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F] md:mt-8 md:max-w-[400px] lg:mx-0 lg:mt-14 lg:h-[54px] lg:w-[296px] lg:max-w-none lg:text-[16px]"
            >
              <span className="transition-colors duration-300">
                Get a Creative Proposal
              </span>
              <ProposalArrowIcon className="transition-colors duration-300" />
            </button>
          </div>

          <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-[20px] md:h-[300px] md:max-w-[560px] md:self-center lg:mx-10 lg:h-[519px] lg:w-[367px] lg:max-w-none">
            <Image
              src="/assets/Home/logo design 1.png"
              alt="Creative brand identity design showcase"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 560px, 367px"
            />
          </div>

          <div className="w-full shrink-0 md:max-w-[640px] md:self-center lg:w-[520px] lg:max-w-none">
            {creativeServices.map((service, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={service.id}
                  className="border-b border-[#D8D2D2] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedIndex(isExpanded ? 0 : index)
                    }
                    aria-expanded={isExpanded}
                    className="relative flex w-full cursor-pointer flex-col py-4 pr-10 text-left md:py-5 lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:py-6 lg:pr-0"
                  >
                    <div
                      className={`flex w-full gap-3 md:gap-4 lg:flex-1 ${
                        isExpanded
                          ? "flex-col lg:flex-row lg:items-start"
                          : "flex-row items-start"
                      }`}
                    >
                      <div className="flex min-w-0 flex-1 items-start gap-3">
                        <span className="shrink-0 font-sans text-[14px] font-semibold leading-[22px] text-black md:text-[15px] lg:text-[16px] lg:leading-[26px]">
                          {service.id}.
                        </span>
                        <span
                          className={`font-sans text-[14px] font-semibold leading-[22px] text-black md:text-[15px] lg:text-[16px] lg:leading-[26px] ${
                            isExpanded
                              ? "lg:h-[69px] lg:w-[159px] lg:shrink-0"
                              : "flex-1"
                          }`}
                        >
                          {service.title}
                        </span>
                      </div>
                      {isExpanded ? (
                        <p className="w-full pl-7 font-open-sans text-[14px] font-normal leading-[24px] text-black md:pl-8 md:text-[14px] md:leading-[25px] lg:pl-0 lg:h-[180px] lg:w-[270px] lg:shrink-0 lg:text-[15px] lg:leading-[26px]">
                          {service.description}
                        </p>
                      ) : null}
                    </div>
                    <span className="absolute right-0 top-4 font-sans text-[24px] font-light leading-none text-black lg:relative lg:top-auto lg:shrink-0">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
