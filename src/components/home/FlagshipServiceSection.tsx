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
    <section className="bg-white">
      <div className="mx-auto max-w-[1366px] px-10">
        <div className="grid grid-cols-[397px_407px_1fr] items-start gap-x-16 gap-y-6">
          <h2 className="font-sans text-[50px] font-medium leading-normal text-black">
            Our Flagship Service
          </h2>

          <h3 className="w-[344px] font-sans text-[24px] font-semibold leading-[34px] text-black">
            Influencer Marketing That Builds Brands &amp; Drives Sales
          </h3>

          <div className="col-start-1 row-start-2 h-[488px] w-[407px] font-open-sans text-[16px] font-normal leading-[30px] text-black">
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
            <div className="w-[418px]">

         
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

          <div className="col-start-2 row-start-2 flex h-[461px] w-[420px] flex-col rounded-[20px] bg-[#FFF5EB] px-8 py-8">
            <p className="font-sans text-[20px] font-semibold leading-[28px] text-black">
              As a trusted:
            </p>

            <div className="mt-5 flex h-[300px] w-[354px] flex-col gap-4">
              {trustedAgencies.map((agency, index) => (
                <p key={index} className="flex gap-3">
                  <ListStarIcon />
                  <span
                    className={`font-open-sans text-[18px] font-normal leading-[32px] text-black ${
                      index === 1 ? "whitespace-nowrap" : ""
                    }`}
                  >
                    {agency}
                  </span>
                </p>
              ))}
            </div>

            <p className="mt-auto w-[364px] font-open-sans text-[16px] font-normal leading-[28px] text-black">
              We help brands create high-impact influencer campaigns that
              actually convert.
            </p>
          </div>

          <div className="col-start-3 row-span-2 row-start-1 flex flex-col">
            <div className="relative h-[280px] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/assets/Home/hands_up_lady.png"
                alt="Influencer creating content for a brand campaign"
                fill
                className="object-cover"
              />
            </div>

            <ul className="mt-6 flex h-[210px] flex-col justify-between font-open-sans text-[16px] font-normal leading-[28px] text-black">
              {influencerFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-mediovate-tan"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-8 flex h-[54px] w-[379px] items-center justify-center gap-2 rounded-[50px] bg-[#A87C4F] text-center font-sans text-[16px] font-semibold leading-[20px] text-white transition-colors hover:bg-mediovate-tan-dark"
            >
              Launch Your Influencer Campaign
              <CampaignArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-[#FFE4C8] my-11" />
    </section>
  );
}
