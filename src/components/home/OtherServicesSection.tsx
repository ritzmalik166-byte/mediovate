"use client";

import Image from "next/image";
import { useCallback, useState, type ReactNode } from "react";

const creativeServices: {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  description: ReactNode;
}[] = [
  {
    id: "01",
    title: "Brand Identity & Logo Design",
    image: "/assets/Home/website other parts-10.jpg",
    imageAlt: "Brand identity and logo design showcase",
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
    image: "/assets/Home/website other parts-11.jpg",
    imageAlt: "Social media creative design workspace",
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
    image: "/assets/Home/website other parts-12.jpg",
    imageAlt: "Digital ad creatives and campaign visuals",
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
    image: "/assets/Home/website other parts-13.jpg",
    imageAlt: "Packaging and brand collateral design",
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
    image: "/assets/Home/website other parts-14.jpg",
    imageAlt: "Video production and motion graphics studio",
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
  const [outgoingImageIndex, setOutgoingImageIndex] = useState<number | null>(
    null,
  );
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);

  const handleAccordionClick = useCallback(
    (index: number) => {
      if (isImageTransitioning) return;

      const nextIndex = expandedIndex === index ? 0 : index;
      if (nextIndex === expandedIndex) return;

      setOutgoingImageIndex(expandedIndex);
      setIsImageTransitioning(true);
      setExpandedIndex(nextIndex);

      window.setTimeout(() => {
        setOutgoingImageIndex(null);
        setIsImageTransitioning(false);
      }, 500);
    },
    [expandedIndex, isImageTransitioning],
  );

  const activeService = creativeServices[expandedIndex];

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
            <span className="mx-auto block w-full font-sans text-[32px] font-medium leading-[40px] text-black md:text-[44px] md:leading-[52px] lg:w-full xl:w-[605px] xl:text-[60px] xl:leading-[72px]">
              Creative Services &amp;
            </span>
            <span className="block font-sans text-[32px] font-medium leading-[40px] text-[#A87C4F] md:text-[44px] md:leading-[52px] xl:text-[60px] xl:leading-[72px]">
              Digital Marketing
            </span>
          </h2>

          <p className="mx-auto mt-4 w-full text-center font-open-sans text-[15px] font-normal leading-[26px] text-black md:mt-5 md:max-w-[600px] md:text-[16px] md:leading-[28px] lg:mt-6 xl:mt-6 xl:h-[68px] xl:w-[727px] xl:max-w-none">
            From influencer collaborations to full-scale digital campaigns,
            Mediovate delivers complete marketing solutions for modern brands.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-[#FFF5EB] py-8 md:mt-10 md:py-10 lg:mt-10 lg:py-12 xl:mt-12 xl:py-14">
        <div className="mx-auto flex max-w-[1366px] flex-col items-stretch gap-8 px-4 md:gap-10 md:px-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-8 lg:gap-y-8 lg:px-8 xl:flex xl:flex-row xl:justify-center xl:gap-0 xl:px-10">
          <div className="w-full shrink-0 pt-0 md:max-w-[560px] md:self-center lg:col-start-1 lg:row-start-1 lg:w-full lg:max-w-none lg:pt-0 xl:w-[320px] xl:max-w-none xl:pt-4">
            <h3 className="w-full text-center font-sans text-[24px] leading-[34px] text-black md:text-[28px] md:leading-[40px] lg:text-left xl:w-[363px] xl:text-[36px] xl:leading-[50px]">
              <span className="font-extrabold">Creative Agency Services</span>{" "}
              <span className="font-medium">That Elevate Your Brand Identity</span>
            </h3>
            <p className="mt-4 w-full text-center font-open-sans text-[15px] font-normal leading-[26px] text-black md:mt-5 md:text-[16px] md:leading-[28px] lg:text-left xl:mt-6 xl:h-[141px] xl:w-[324px]">
              As the best creative branding agency in India, we don&apos;t just
              make things look good we craft creative solutions that communicate
              your brand&apos;s value, personality, and purpose with clarity and
              impact.
            </p>
            <button
              type="button"
              className="group mx-auto mt-6 flex h-[48px] w-full max-w-full cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-transparent bg-[#A87C4F] text-center font-sans text-[15px] font-semibold leading-[20px] text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F] md:mt-8 md:max-w-[400px] lg:mx-0 lg:mt-8 xl:mt-14 xl:h-[54px] xl:w-[296px] xl:max-w-none xl:text-[16px]"
            >
              <span className="transition-colors duration-300">
                Get a Creative Proposal
              </span>
              <ProposalArrowIcon className="transition-colors duration-300" />
            </button>
          </div>

          <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-[20px] md:h-[300px] md:max-w-[560px] md:self-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:h-full lg:min-h-[320px] lg:w-full lg:max-w-none xl:mx-10 xl:h-[519px] xl:w-[367px]">
            <Image
              src={activeService.image}
              alt={activeService.imageAlt}
              fill
              className={`object-cover ${
                isImageTransitioning
                  ? "animate-[dm-image-fade-in_0.5s_ease-out_forwards]"
                  : ""
              }`}
              sizes="(max-width: 1024px) 560px, 367px"
            />
            {outgoingImageIndex !== null ? (
              <Image
                src={creativeServices[outgoingImageIndex].image}
                alt=""
                fill
                sizes="(max-width: 1024px) 560px, 367px"
                className="z-10 object-cover animate-[dm-image-fade-out_0.5s_ease-out_forwards]"
                aria-hidden="true"
              />
            ) : null}
          </div>

          <div className="w-full shrink-0 md:max-w-[640px] md:self-center lg:col-start-1 lg:row-start-2 lg:w-full lg:max-w-none xl:w-[520px]">
            {creativeServices.map((service, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={service.id}
                  className="border-b border-[#D8D2D2] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => handleAccordionClick(index)}
                    aria-expanded={isExpanded}
                    className="relative flex w-full cursor-pointer flex-col py-4 pr-10 text-left md:py-5 xl:flex-row xl:items-start xl:justify-between xl:gap-6 xl:py-6 xl:pr-0"
                  >
                    <div
                      className={`flex w-full gap-3 md:gap-4 ${
                        isExpanded
                          ? "flex-col xl:flex-row xl:items-start xl:gap-6"
                          : "flex-row items-start"
                      }`}
                    >
                      <div className="flex min-w-0 flex-1 items-start gap-3 xl:min-w-[159px] xl:flex-none">
                        <span className="shrink-0 font-sans text-[14px] font-semibold leading-[22px] text-black md:text-[15px] xl:text-[16px] xl:leading-[26px]">
                          {service.id}.
                        </span>
                        <span
                          className={`min-w-0 font-sans text-[14px] font-semibold leading-[22px] text-black md:text-[15px] xl:text-[16px] xl:leading-[26px] ${
                            isExpanded
                              ? "xl:h-[69px] xl:w-[159px] xl:shrink-0"
                              : "flex-1"
                          }`}
                        >
                          {service.title}
                        </span>
                      </div>
                      {isExpanded ? (
                        <p className="w-full pl-7 font-open-sans text-[14px] font-normal leading-[24px] text-black md:pl-8 md:text-[14px] md:leading-[25px] xl:pl-0 xl:h-[180px] xl:w-[270px] xl:shrink-0 xl:text-[15px] xl:leading-[26px]">
                          {service.description}
                        </p>
                      ) : null}
                    </div>
                    <span className="absolute right-0 top-4 font-sans text-[24px] font-light leading-none text-black xl:relative xl:top-auto xl:shrink-0">
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
