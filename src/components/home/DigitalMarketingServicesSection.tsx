"use client";

import Image from "next/image";
import { useCallback, useState, type ReactNode } from "react";

const slides: {
  title: string;
  description: ReactNode;
  image: string;
}[] = [
  {
    title: "Search Engine Optimisation (SEO)",
    description: (
      <>
        Become dominant on Google with our white-hat SEO services :{" "}
        <strong className="font-bold">
          on-page optimisation, technical SEO audits, local SEO, link building
        </strong>
        , and <strong className="font-bold">keyword strategy</strong> that
        yields sustained organic traffic and quality leads every month.
      </>
    ),
    image: "/assets/Home/seo_image.png",
  },
  {
    title: "Social Media Marketing (SMM)",
    description: (
      <>
        Build brand visibility and engagement with platform-specific{" "}
        <strong className="font-bold">
          content strategy, community management, paid social campaigns
        </strong>
        , and <strong className="font-bold">performance analytics</strong>{" "}
        that turn followers into loyal customers.
      </>
    ),
    image: "/assets/Home/campaign-creator.png",
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description: (
      <>
        Drive instant qualified traffic with data-driven{" "}
        <strong className="font-bold">
          Google Ads, Meta Ads, remarketing funnels
        </strong>
        , and <strong className="font-bold">conversion tracking</strong> that
        maximise ROI and reduce cost per acquisition.
      </>
    ),
    image: "/assets/Home/photo_lady.png",
  },
  {
    title: "Content Marketing",
    description: (
      <>
        Attract and nurture leads through strategic{" "}
        <strong className="font-bold">
          blogs, landing pages, email copy, and thought leadership
        </strong>{" "}
        backed by <strong className="font-bold">SEO-led content planning</strong>{" "}
        that builds authority and long-term organic growth.
      </>
    ),
    image: "/assets/Home/hands_up_lady.png",
  },
  {
    title: "Conversion Rate Optimisation (CRO)",
    description: (
      <>
        Turn more visitors into customers with{" "}
        <strong className="font-bold">
          funnel analysis, A/B testing, UX improvements
        </strong>
        , and <strong className="font-bold">landing page optimisation</strong>{" "}
        designed to increase conversions across every digital touchpoint.
      </>
    ),
    image: "/assets/Home/game_lady.png",
  },
];

function LeadsArrowIcon({ className }: { className?: string }) {
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

function SliderNavArrow({
  direction,
  className,
}: {
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="9"
      viewBox="0 0 33 9"
      fill="none"
      aria-hidden="true"
      className={`h-[9px] w-[33px] ${direction === "left" ? "rotate-180" : ""} ${className ?? ""}`}
    >
      <line y1="4.5" x2="25" y2="4.5" stroke="black" />
      <path
        d="M33 4.5L24.75 8.39712L24.75 0.602885L33 4.5Z"
        fill="black"
      />
    </svg>
  );
}

export default function DigitalMarketingServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [contentKey, setContentKey] = useState(0);
  const [outgoingImageIndex, setOutgoingImageIndex] = useState<number | null>(
    null,
  );
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);

  const goToSlide = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex || isImageTransitioning) return;

      setSlideDirection(nextIndex > activeIndex ? 1 : -1);
      setContentKey((key) => key + 1);
      setOutgoingImageIndex(activeIndex);
      setIsImageTransitioning(true);
      setActiveIndex(nextIndex);

      window.setTimeout(() => {
        setOutgoingImageIndex(null);
        setIsImageTransitioning(false);
      }, 500);
    },
    [activeIndex, isImageTransitioning],
  );

  const goToPrevious = () => {
    goToSlide((activeIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    goToSlide((activeIndex + 1) % slides.length);
  };

  const activeSlide = slides[activeIndex];
  const slideNumber = String(activeIndex + 1).padStart(2, "0");

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1366px] px-10">
        <div className="flex items-start justify-between">
          <h2 className="w-[520px] shrink-0 font-sans text-[36px] leading-[50px] text-black">
            <span className="font-extrabold">Digital Marketing Services</span>
            <br />
            <span className="font-medium">For Your Business Growth</span>
          </h2>

          <p className="h-[92px] w-[510px] shrink-0 font-open-sans text-[16px] font-normal leading-[30px] text-black">
            The business and creative strategies we create in conjunction with
            SEO and social media deliver quantifiable business growth to brands
            looking to expand.
          </p>

          <button
            type="button"
            className="group flex h-[74px] w-[221px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-[#A87C4F] bg-white text-[#A87C4F] transition-colors duration-300 hover:bg-[#A87C4F] hover:text-white"
          >
            <span className="w-[148px] text-left font-sans text-[16px] font-semibold leading-[22px] transition-colors duration-300">
              Drive More Qualified Leads
            </span>
            <LeadsArrowIcon className="transition-colors duration-300" />
          </button>
        </div>

        <div className="mt-16 flex items-stretch ">
          <div className="flex h-[472px] w-[445px] shrink-0 flex-col justify-between rounded-[20px] bg-[#FFF5EB] px-10 py-10">
            <div className="overflow-hidden">
              <div
                key={contentKey}
                className={
                  slideDirection > 0
                    ? "animate-[dm-content-slide-in-right_0.45s_ease-out]"
                    : "animate-[dm-content-slide-in-left_0.45s_ease-out]"
                }
              >
                <h3 className="h-[69px] w-[327px] font-sans text-[22px] font-semibold leading-[36px] text-black">
                  {activeSlide.title}
                </h3>
                <p className="mt-6 h-[192px] w-[336px] font-open-sans text-[16px] font-normal leading-[28px] text-black">
                  {activeSlide.description}
                </p>
              </div>
            </div>

            <div className="flex items-center  gap-6">
              <p className="text-right font-sans text-[16px] font-medium leading-[28px]">
                <span className="text-black">{slideNumber}</span>
                <span className="text-[#888]">
                  {" "}
                  / {String(slides.length).padStart(2, "0")}
                </span>
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous slide"
                  className="cursor-pointer transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={isImageTransitioning}
                >
                  <SliderNavArrow direction="left" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next slide"
                  className="cursor-pointer transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={isImageTransitioning}
                >
                  <SliderNavArrow direction="right" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-[472px] w-[835px] shrink-0 overflow-hidden rounded-[20px] bg-[#f5f0ea]">
            <Image
              src={slides[activeIndex].image}
              alt={slides[activeIndex].title}
              fill
              className={`object-cover ${
                isImageTransitioning
                  ? "animate-[dm-image-fade-in_0.5s_ease-out_forwards]"
                  : ""
              }`}
            />
            {outgoingImageIndex !== null ? (
              <Image
                src={slides[outgoingImageIndex].image}
                alt=""
                fill
                className="z-10 object-cover animate-[dm-image-fade-out_0.5s_ease-out_forwards]"
                aria-hidden="true"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
