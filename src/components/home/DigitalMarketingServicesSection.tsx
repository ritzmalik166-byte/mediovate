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
      title: "PPC & Google Ads Management",
      description: (
        <>
          High ROI pay per click advertising for{" "}
          <strong className="font-bold">
            Google Search, Display, Shopping, YouTube
          </strong>{" "}
          and others with targeted campaigns, efficient bid management, split
          tested ads and conversion optimised landing pages, thereby reducing the
          Cost Per Acquisition.
        </>
      ),
      image: "/assets/Home/seo_image.png",
    },
    {
      title: "Social Media Marketing (SMM)",
      description: (
        <>
          From organic content calendar planning to community management and
          effective Meta Ads for organic audience expansion and tangible business
          outcome, we design strategy on{" "}
          <strong className="font-bold">Instagram, Facebook, LinkedIn,</strong> and{" "}
          <strong className="font-bold">YouTube.</strong>
        </>
      ),
      image: "/assets/Home/seo_image.png",
    },

    {
      title: "Content Marketing & SEO Blogging",
      description: (
        <>
          Organic SEO focused content marketing:{" "}
          <strong className="font-bold">
            pillar pages, topic clusters, blog strategies,
          </strong>{" "}
          and{" "}
          <strong className="font-bold">
            thought-leadership content, email newsletters
          </strong>{" "}
          that drive rankings on search engines, education and nurturing of leads
          throughout the sales funnel.
        </>
      ),
      image: "/assets/Home/seo_image.png",
    },
    {
      title: "Website Design & Development",
      description: (
        <>
          Responsive and Google Core Web Vitals optimised design with best possible
          speed and conversion focused development tailored for high quality organic
          traffic and enhanced lead generation across{" "}
          <strong className="font-bold">
            landing pages, e-commerce sites, and corporate websites.
          </strong>
        </>
      ),
      image: "/assets/Home/seo_image.png",
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
    <section
      id="digital-marketing"
      className="scroll-mt-24 overflow-hidden bg-white pt-5 pb-10 md:py-12 lg:py-12 xl:py-16"
    >
      <div className="mx-auto max-w-[1366px] px-4 md:px-8 lg:px-8 xl:px-10">
        <div className="flex flex-col items-center gap-5 text-center md:gap-6 lg:items-start lg:gap-4 xl:flex-row xl:justify-between xl:gap-0 xl:text-left">
          <h2 className="w-full shrink-0 font-sans text-[24px] leading-[34px] text-black md:text-[30px] md:leading-[42px] lg:text-left lg:text-[28px] lg:leading-[38px] xl:w-[520px] xl:text-[36px] xl:leading-[50px]">
            <span className="font-extrabold">Digital Marketing Services</span>
            <br />
            <span className="font-medium">For Your Business Growth</span>
          </h2>

          <p className="w-full shrink-0 font-open-sans text-[15px] font-normal leading-[26px] text-black md:max-w-[600px] md:text-[16px] md:leading-[28px] lg:max-w-none lg:text-left lg:leading-[28px] xl:h-[92px] xl:w-[510px] xl:leading-[30px]">
            The business and creative strategies we create in conjunction with
            SEO and social media deliver quantifiable business growth to brands
            looking to expand.
          </p>

          <button
            type="button"
            className="group flex h-[48px] w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-[#A87C4F] bg-white px-4 text-[#A87C4F] transition-colors duration-300 hover:bg-[#A87C4F] hover:text-white md:max-w-[400px] lg:max-w-[320px] lg:self-start xl:h-[74px] xl:w-[221px] xl:max-w-none"
          >
            <span className="font-sans text-[14px] font-semibold leading-[22px] transition-colors duration-300 lg:text-left xl:w-[148px] xl:text-[16px]">
              Drive More Qualified Leads
            </span>
            <LeadsArrowIcon className="transition-colors duration-300" />
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-5 md:mt-12 md:gap-6 lg:mt-10 lg:flex-row lg:items-stretch lg:gap-6 xl:mt-16 xl:gap-0">
          <div className="flex w-full shrink-0 flex-col justify-between rounded-[20px] bg-[#FFF5EB] px-5 py-6 md:px-7 md:py-8 lg:min-h-[400px] lg:flex-1 lg:px-7 lg:py-8 xl:h-[472px] xl:w-[445px] xl:flex-none xl:px-10 xl:py-10">
            <div className="overflow-hidden">
              <div
                key={contentKey}
                className={
                  slideDirection > 0
                    ? "animate-[dm-content-slide-in-right_0.45s_ease-out]"
                    : "animate-[dm-content-slide-in-left_0.45s_ease-out]"
                }
              >
                <h3 className="text-center font-sans text-[18px] font-semibold leading-[28px] text-black md:text-[20px] md:leading-[32px] lg:text-left lg:text-[20px] lg:leading-[32px] xl:h-[69px] xl:w-[327px] xl:text-[22px] xl:leading-[36px]">
                  {activeSlide.title}
                </h3>
                <p className="mx-auto mt-4 max-w-[340px] text-center font-open-sans text-[15px] font-normal leading-[26px] text-black md:max-w-[480px] md:text-[15px] lg:mx-0 lg:mt-5 lg:max-w-none lg:text-left lg:text-[15px] lg:leading-[26px] xl:mt-6 xl:h-[192px] xl:w-[336px] xl:text-[16px] xl:leading-[28px]">
                  {activeSlide.description}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 md:mt-8 lg:mt-6 lg:justify-start xl:mt-0">
              <p className="font-sans text-[16px] font-medium leading-[28px]">
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

          <div className="relative h-[240px] w-full min-w-0 flex-1 shrink-0 overflow-hidden rounded-[20px] bg-[#f5f0ea] md:h-[320px] lg:h-[400px] xl:h-[472px] xl:w-[835px] xl:flex-none">
            <Image
              src={slides[activeIndex].image}
              alt={slides[activeIndex].title}
              fill
              className={`object-cover ${isImageTransitioning
                  ? "animate-[dm-image-fade-in_0.5s_ease-out_forwards]"
                  : ""
                }`}
              sizes="(max-width: 1024px) 100vw, 835px"
            />
            {outgoingImageIndex !== null ? (
              <Image
                src={slides[outgoingImageIndex].image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 835px"
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
