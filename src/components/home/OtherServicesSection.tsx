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
    <section className="bg-white">
      <div className="mx-auto max-w-[1366px] px-10">
        <div className="flex flex-col items-center">
          <span className="text-center font-sans text-[16px] font-semibold uppercase leading-normal text-[#A87C4F]">
            Our Other Services
          </span>

          <h2 className="mt-4 text-center">
            <span className="mx-auto block w-[605px] font-sans text-[60px] font-medium leading-[72px] text-black">
              Creative Services &amp;
            </span>
            <span className="block font-sans text-[60px] font-medium leading-[72px] text-[#A87C4F]">
              Digital Marketing
            </span>
          </h2>

          <p className="mx-auto mt-6 h-[68px] w-[727px] text-center font-open-sans text-[16px] font-normal leading-[28px] text-black">
            From influencer collaborations to full-scale digital campaigns,
            Mediovate delivers complete marketing solutions for modern brands.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-[#FFF5EB] py-14">
        <div className="mx-auto flex max-w-[1366px] items-start justify-center px-10">
          <div className="w-[320px] shrink-0 pt-4">
            <h3 className="w-[363px] font-sans text-[36px] leading-[50px] text-black">
              <span className="font-extrabold">Creative Agency Services</span>{" "}
              <span className="font-medium">That Elevate Your Brand Identity</span>
            </h3>
            <p className="mt-6 h-[141px] w-[324px] font-open-sans text-[16px] font-normal leading-[28px] text-black">
              As the best creative branding agency in India, we don&apos;t just
              make things look good we craft creative solutions that communicate
              your brand&apos;s value, personality, and purpose with clarity and
              impact.
            </p>
            <button
              type="button"
              className="group mt-14 flex h-[54px] w-[296px] cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-transparent bg-[#A87C4F] text-center font-sans text-[16px] font-semibold leading-[20px] text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F]"
            >
              <span className="transition-colors duration-300">
                Get a Creative Proposal
              </span>
              <ProposalArrowIcon className="transition-colors duration-300" />
            </button>
          </div>

          <div className="relative mx-10 h-[519px] w-[367px] shrink-0 overflow-hidden rounded-[20px]">
            <Image
              src="/assets/Home/logo design 1.png"
              alt="Creative brand identity design showcase"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-[520px] shrink-0">
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
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <div className="flex flex-1 items-start gap-4">
                      <span className="font-sans text-[16px] font-semibold leading-[26px] text-black">
                        {service.id}.
                      </span>
                      <span
                        className={`font-sans text-[16px] font-semibold leading-[26px] text-black ${
                          isExpanded
                            ? "h-[69px] w-[159px] shrink-0"
                            : "flex-1"
                        }`}
                      >
                        {service.title}
                      </span>
                      {isExpanded ? (
                        <p className="h-[180px] w-[270px] shrink-0 font-open-sans text-[15px] font-normal leading-[26px] text-black">
                          {service.description}
                        </p>
                      ) : null}
                    </div>
                    <span className="font-sans text-[24px] font-light leading-none text-black">
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
