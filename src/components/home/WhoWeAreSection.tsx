import Image from "next/image";

const stats = [
  {
    value: "5000+",
    label: "Verified Influencers",
    filled: true,
  },
  {
    value: "1B+",
    label: "Total Impressions",
    filled: false,
  },
  {
    value: "800+",
    label: "Brands Scaled",
    filled: false,
  },
  {
    value: "12+",
    label: "Years of Expertise",
    filled: true,
  },
];

function StatCard({
  value,
  label,
  filled,
}: {
  value: string;
  label: string;
  filled: boolean;
}) {
  return (
    <div
      className={`flex h-[120px] w-full flex-col justify-between rounded-[20px] p-4 md:h-[132px] md:p-5 lg:h-[148px] lg:w-[327px] lg:p-5 ${
        filled
          ? "bg-[#FFF5EB]"
          : "border border-[#FFE4C8] bg-white"
      }`}
    >
      <span className="font-sans text-[28px] font-semibold leading-[28px] text-black md:text-[32px] lg:text-[40px]">
        {value}
      </span>
      <span className="self-end text-right font-open-sans text-[13px] font-normal leading-[20px] text-black md:text-[14px] md:leading-[24px] lg:text-[16px] lg:leading-[28px]">
        {label}
      </span>
    </div>
  );
}

function CampaignCta() {
  return (
    <button
      type="button"
      className="group flex h-[140px] w-[140px] shrink-0 flex-col items-center justify-center gap-3 rounded-full border border-[#FFE4C8] bg-white transition-colors hover:border-mediovate-tan md:h-[152px] md:w-[152px] lg:h-[164px] lg:w-[164px]"
    >
      <div
        className="flex h-[9px] w-[33px] shrink-0 items-center justify-center overflow-visible"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          className="-rotate-[1.446deg]"
        >
          <line
            x1="3.1511"
            y1="26.3204"
            x2="20.9989"
            y2="8.81451"
            stroke="black"
          />
          <path
            d="M26.7101 3.21259L23.5493 11.7717L18.0915 6.20733L26.7101 3.21259Z"
            fill="black"
          />
        </svg>
      </div>
      <span className="mt-4 w-[120px] text-center font-sans text-[13px] font-semibold uppercase leading-[18px] text-black md:w-[140px] md:text-[14px] md:leading-[19px] lg:w-[153px] lg:text-[16px] lg:leading-[20px]">
        Start Your
        <br />
        Campaign Explore Services
      </span>
    </button>
  );
}

export default function WhoWeAreSection() {
  return (
    <section className="bg-white py-8 md:py-10 lg:py-11">
      <div className="mx-auto max-w-[1366px] px-4 md:px-8 lg:px-10">
        <div className="flex flex-col items-stretch gap-8 max-lg:gap-8 lg:flex-row lg:items-start lg:gap-0">
          <div className="w-full shrink-0 max-lg:order-1 lg:w-auto">
            <h2 className="w-full text-[36px] font-medium leading-[44px] text-black max-lg:text-center md:text-[48px] md:leading-[56px] lg:w-[702px] lg:text-left lg:text-[76px] lg:leading-[102px]">
              Influence.
              <br />
              <span className="text-mediovate-tan">Engage.</span> Convert.
            </h2>

            <div className="mt-6 grid w-full grid-cols-2 gap-3 max-lg:w-full md:mt-7 md:gap-4 lg:mt-8 lg:flex lg:w-[670px] lg:flex-wrap lg:gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col self-stretch max-lg:w-full max-lg:order-2">
            <div className="flex flex-col items-center pt-0 text-center max-lg:pl-0 md:pt-2 lg:items-start lg:pl-16 lg:text-left">
              <span className="inline-flex h-[34px] w-[120px] items-center justify-center rounded-[40px] border border-[#DAD2D2] font-open-sans text-[14px] font-semibold uppercase leading-[28px] text-mediovate-tan">
                Who we are
              </span>
              <p className="mt-4 w-full max-w-[340px] font-open-sans text-[15px] font-normal leading-[26px] text-black md:max-w-[520px] md:text-[16px] md:leading-[28px] lg:mt-6 lg:w-[546px] lg:max-w-none">
                Mediovate is a result-driven{" "}
                <strong className="font-bold">
                  Influencer Marketing agency in India
                </strong>{" "}
                working across brands in Delhi, Noida, Gurgaon &amp; Delhi NCR
                to scale through ROI-centric{" "}
                <strong className="font-bold">
                  influencer marketing campaigns
                </strong>
                , <strong className="font-bold">creator partnerships</strong>{" "}
                and end to end{" "}
                <strong className="font-bold">digital growth solutions</strong>.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-6 pt-0 max-lg:items-center md:gap-7 lg:mt-auto lg:flex-row lg:items-center lg:gap-8 lg:pt-14">
              <div className="relative h-[220px] w-full min-w-0 flex-1 overflow-hidden rounded-[20px] bg-[#f5f0ea] md:h-[260px] lg:h-[312px]">
                <Image
                  src="/assets/Home/photo_lady.png"
                  alt="Influencer filming content for a brand campaign"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex shrink-0 justify-center">
                <CampaignCta />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 h-px w-full bg-[#FFE4C8] md:my-10 lg:my-11" />
    </section>
  );
}
