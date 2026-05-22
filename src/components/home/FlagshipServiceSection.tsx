import Image from "next/image";

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

function CampaignArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="9"
      viewBox="0 0 33 9"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <line y1="4.5" x2="25" y2="4.5" stroke="white" />
      <path
        d="M25.25 7.6084L25.25 1.3916L31.8291 4.5L25.25 7.6084Z"
        fill="white"
        stroke="white"
      />
    </svg>
  );
}

export default function FlagshipServiceSection() {
  return (
    <section className="bg-white pt-4 pb-8 lg:py-0">
      <div className="mx-auto max-w-[1366px] px-4 md:px-8 lg:px-10">
        <div className="flex flex-col gap-5 max-lg:gap-6 lg:grid lg:grid-cols-[397px_407px_1fr] lg:items-start lg:gap-x-16 lg:gap-y-6">
          <h2 className="text-center font-sans text-[28px] font-medium leading-normal text-black md:text-[36px] lg:text-left lg:text-[50px]">
            Our Flagship Service
          </h2>

          <h3 className="w-full text-center font-sans text-[18px] font-semibold leading-[26px] text-black md:text-[20px] md:leading-[30px] lg:col-start-2 lg:row-start-1 lg:w-[344px] lg:text-left lg:text-[24px] lg:leading-[34px]">
            Influencer Marketing That Builds Brands &amp; Drives Sales
          </h3>

          <div className="w-full text-center font-open-sans text-[16px] font-normal leading-[26px] text-black md:text-[17px] md:leading-[28px] lg:col-start-1 lg:row-start-2 lg:h-[488px] lg:w-[407px] lg:text-left lg:text-[16px] lg:leading-[30px]">
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
            <div className="mt-3 w-full lg:mt-0 lg:w-[418px]">
              <p className="mt-4 lg:mt-4">
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

          <div className="flex w-full flex-col rounded-[20px] bg-[#FFF5EB] px-5 py-6 text-left md:items-center md:text-center md:px-6 md:py-7 lg:col-start-2 lg:row-start-2 lg:h-[461px] lg:w-[420px] lg:items-stretch lg:px-8 lg:py-8 lg:text-left">
            <p className="font-sans text-[18px] font-semibold leading-[28px] text-black md:text-[19px] lg:text-[20px]">
              As a trusted:
            </p>

            <div className="mt-4 flex w-full flex-col gap-3 md:mt-5 md:max-w-[520px] md:items-center md:gap-3.5 lg:mt-5 lg:h-[300px] lg:w-[354px] lg:max-w-none lg:items-stretch lg:gap-4">
              {trustedAgencies.map((agency, index) => (
                <p
                  key={index}
                  className="flex w-full items-start gap-3 md:w-fit md:max-w-full lg:w-full"
                >
                  <ListStarIcon />
                  <span
                    className={`text-left font-open-sans text-[15px] font-normal leading-[24px] text-black md:text-[16px] md:leading-[28px] lg:text-[18px] lg:leading-[32px] ${
                      index === 1 ? "lg:whitespace-nowrap" : ""
                    }`}
                  >
                    {agency}
                  </span>
                </p>
              ))}
            </div>

            <p className="mt-4 w-full font-open-sans text-[16px] font-normal leading-[28px] text-black md:mx-auto md:max-w-[520px] md:text-center lg:mt-auto lg:w-[364px] lg:mx-0 lg:max-w-none lg:text-left">
              We help brands create high-impact influencer campaigns that
              actually convert.
            </p>
          </div>

          <div className="flex w-full flex-col md:items-center md:text-center lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:items-stretch lg:text-left">
            <div className="relative h-[200px] w-full overflow-hidden rounded-[20px] md:h-[240px] lg:h-[280px]">
              <Image
                src="/assets/Home/hands_up_lady.png"
                alt="Influencer creating content for a brand campaign"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <ul className="mt-5 grid w-full grid-cols-2 gap-x-3 gap-y-4 text-left font-open-sans text-[13px] font-normal leading-[20px] text-black md:gap-x-4 md:text-[14px] md:leading-[22px] lg:mt-6 lg:flex lg:h-[210px] lg:flex-col lg:justify-between lg:gap-0 lg:text-[16px] lg:leading-[28px]">
              {influencerFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 lg:w-full lg:gap-3"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mediovate-tan lg:mt-2.5"
                    aria-hidden="true"
                  />
                  <span className="flex-1 text-left">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-6 flex h-[48px] w-full items-center justify-center gap-2 rounded-[50px] bg-[#A87C4F] px-4 text-center font-sans text-[14px] font-semibold leading-[20px] text-white transition-colors hover:bg-mediovate-tan-dark md:mt-7 lg:mt-8 lg:h-[54px] lg:w-[379px] lg:text-[16px]"
            >
              Launch Your Influencer Campaign
              <CampaignArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-8 h-px w-full bg-[#FFE4C8] md:my-10 lg:my-11" />
    </section>
  );
}
