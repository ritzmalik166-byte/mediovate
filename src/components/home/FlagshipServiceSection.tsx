import Image from "next/image";
import ConsultationTrigger from "@/components/consultation/ConsultationTrigger";

const influencerFeatures = [
  "Influencer Campaign Management",
  "ROI-Focused Campaigns",
  "Verified Creator Network",
  "Niche Audience Targeting",
  "End-to-End Influencer Solutions",
];

const trustedAgencies = [
  <>
    Influencer Marketing Agency in
    <br />
    Noida
  </>,
  "Influencer Marketing Agency in Delhi",
  <>
    Influencer Marketing Agency in
    <br />
    Gurgaon
  </>,
  <>
    &amp; As the Best Influencer Marketing
    <br />
    Agency in India
  </>,
];

function ListStarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 18"
      fill="none"
      aria-hidden="true"
      className="mt-1.5 shrink-0"
    >
      <path
        d="M9.03503 0L11.8382 5.6418L18.0701 6.56434L13.5706 10.9737L14.619 17.1857L9.03503 14.269L3.45107 17.1857L4.49945 10.9737L-2.86102e-06 6.56434L6.23189 5.6418L9.03503 0Z"
        fill="url(#flagship-star-gradient)"
      />
      <defs>
        <linearGradient
          id="flagship-star-gradient"
          x1="1.60434"
          y1="3.19802"
          x2="16.4657"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC909" />
          <stop offset="1" stopColor="#FF369B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CampaignArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="9"
      viewBox="0 0 33 9"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-colors duration-300 ${className ?? ""}`}
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

export default function FlagshipServiceSection() {
  return (
    <section
      id="flagship-service"
      className="scroll-mt-24 bg-white pt-4 pb-8 lg:py-0"
    >
      <div className="mx-auto max-w-[1366px] px-4 md:px-8 lg:px-8 xl:px-10">
        <div className="flex flex-col gap-5 max-lg:gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] lg:items-start lg:gap-x-6 xl:grid-cols-[397px_1fr] xl:gap-x-16">
          <div className="flex min-w-0 flex-col">
            <h2 className="text-center font-sans text-[28px] font-medium leading-normal text-black md:text-[36px] lg:text-left lg:text-[44px] xl:text-[50px]">
              Our Flagship Service
            </h2>

            <div className="mt-5 w-full text-center font-open-sans text-[16px] font-normal leading-[26px] text-black md:mt-6 md:text-left md:text-[17px] md:leading-[28px] lg:mt-8 lg:text-[15px] lg:leading-[28px] xl:text-[16px] xl:leading-[30px]">
              <p>
                Influence means a lot more than mere visibility. It&apos;s about
                trust, culture, engagement, and driving real consumer action. We
                are an{" "}
                <strong className="font-bold">
                  Influencer Marketing Agency in India
                </strong>
                , &amp; help brands to become visible, stay relevant and lead
                their category. We use ROI-driven influencer marketing campaigns
                that reach audiences across{" "}
                <strong className="font-bold">
                  Instagram, YouTube, LinkedIn
                </strong>{" "}
                and budding creator economy platforms.
              </p>
              <p className="mt-4">
                From effective niche{" "}
                <strong className="font-bold">nano influencer marketing</strong>{" "}
                to top-notch{" "}
                <strong className="font-bold">
                  micro/macro influencer campaigns
                </strong>{" "}
                and{" "}
                <strong className="font-bold">celebrity collaborations</strong>,
                we engineer tailored, data-backed{" "}
                <strong className="font-bold">
                  social media influencer marketing
                </strong>{" "}
                to generate organic reach, high-quality engagement and measurable
                business impact, instead of just reach metrics and fan-following
                numbers
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-5 max-lg:gap-6 md:grid md:grid-cols-2 md:items-start md:gap-x-6 md:gap-y-6 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.12fr)] lg:items-stretch lg:gap-x-6 xl:grid-cols-[420px_1fr] xl:gap-x-16">
          <div className="flex min-w-0 flex-col">
            <h3 className="w-full text-center font-sans text-[18px] font-semibold leading-[26px] text-black md:text-left md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px] xl:text-[24px] xl:leading-[34px]">
              Influencer Marketing That Builds Brands &amp; Drives Sales
            </h3>

            <div className="mt-5 flex w-full flex-1 flex-col rounded-[20px] bg-[#FFF5EB] px-5 py-6 text-left md:mt-6 md:px-6 md:py-7 lg:mt-6 lg:px-6 lg:py-7 xl:px-8 xl:py-8">
              <p className="w-full font-sans text-[18px] font-semibold leading-[28px] text-black md:text-[19px] xl:text-[20px]">
                As a trusted:
              </p>

              <div className="mt-4 flex w-full flex-col gap-2 md:mt-5 md:gap-2.5 lg:max-w-none lg:gap-2 xl:mt-4 xl:gap-2">
                {trustedAgencies.map((agency, index) => (
                  <p
                    key={index}
                    className="flex w-full items-start gap-3"
                  >
                    <ListStarIcon />
                    <span
                      className={`text-left font-open-sans text-[15px] font-normal leading-[24px] text-black md:text-[16px] md:leading-[26px] lg:text-[15px] lg:leading-[26px] xl:text-[18px] xl:leading-[32px] ${
                        index === 1 ? "xl:whitespace-nowrap" : ""
                      }`}
                    >
                      {agency}
                    </span>
                  </p>
                ))}
              </div>

              <p className="mt-4 w-full font-open-sans text-[16px] font-normal leading-[28px] text-black lg:mt-auto">
                We help brands create high-impact influencer campaigns that
                actually convert.
              </p>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col max-md:items-center max-md:text-center md:text-left lg:items-stretch lg:text-left">
            <div className="relative aspect-[1667/1250] w-full shrink-0 overflow-hidden rounded-[20px] max-md:mx-auto max-md:max-w-[560px] lg:aspect-auto lg:h-[220px] lg:max-w-none xl:h-[280px]">
              <Image
                src="/assets/Home/website other parts-02.jpg"
                alt="Influencer creating content for a brand campaign"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 420px"
              />
            </div>

            <div className="mt-5 flex min-h-0 flex-col md:mt-5 lg:mt-6 lg:flex-1">
              <ul className="flex w-full shrink-0 flex-col gap-2 text-left font-open-sans text-[13px] font-normal leading-[20px] text-black md:gap-2.5 md:text-[14px] md:leading-[22px] lg:gap-2.5 lg:text-[14px] lg:leading-[24px] xl:gap-7 xl:text-[16px] xl:leading-[28px]">
                {influencerFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 lg:gap-2.5 xl:gap-3"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mediovate-tan lg:mt-2 xl:mt-2.5"
                      aria-hidden="true"
                    />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <div
                className="hidden min-h-6 flex-1 lg:block"
                aria-hidden="true"
              />

              <ConsultationTrigger
                className="group mt-6 flex h-[48px] w-full shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[50px] border border-transparent bg-[#A87C4F] px-4 text-center font-sans text-[13px] font-semibold leading-[20px] text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F] md:text-[14px] lg:mt-0 lg:h-[50px] lg:justify-start lg:px-3 lg:text-[13px] xl:h-[54px] xl:w-[379px] xl:px-8 xl:text-[16px]"
              >
                Launch Your Influencer Campaign
                <CampaignArrowIcon className="shrink-0" />
              </ConsultationTrigger>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-8 h-px w-full bg-[#FFE4C8] md:my-10 lg:my-11" />
    </section>
  );
}
