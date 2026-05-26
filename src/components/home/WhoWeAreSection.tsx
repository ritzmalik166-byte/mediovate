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
      className={`flex h-[120px] w-full flex-col justify-between rounded-[20px] p-4 md:h-[132px] md:p-5 lg:h-[128px] lg:p-4 xl:h-[148px] xl:w-[327px] xl:p-5 ${
        filled
          ? "bg-[#FFF5EB]"
          : "border border-[#FFE4C8] bg-white"
      }`}
    >
      <span className="font-sans text-[28px] font-semibold leading-[28px] text-black md:text-[32px] lg:text-[34px] xl:text-[40px]">
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
      className="group flex h-[140px] w-[140px] shrink-0 cursor-pointer flex-col items-center justify-center rounded-full border border-[#FFE4C8] bg-white px-3 text-black transition-colors duration-300 hover:border-[#A87C4F] hover:bg-[#A87C4F] hover:text-white md:h-[152px] md:w-[152px] lg:h-[136px] lg:w-[136px] xl:h-[164px] xl:w-[164px] xl:px-4"
    >
      <div
        className="flex w-full items-center justify-center transition-colors duration-300"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          className="-rotate-[1.446deg] transition-colors duration-300"
        >
          <line
            x1="3.1511"
            y1="26.3204"
            x2="20.9989"
            y2="8.81451"
            stroke="currentColor"
          />
          <path
            d="M26.7101 3.21259L23.5493 11.7717L18.0915 6.20733L26.7101 3.21259Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className="mt-2 w-full max-w-[120px] text-center font-sans text-[13px] font-semibold uppercase leading-[18px] transition-colors duration-300 md:max-w-[140px] md:text-[14px] md:leading-[19px] xl:max-w-[153px] xl:text-[16px] xl:leading-[20px]">
        Start Your
        <br />
        Campaign
      </span>
    </button>
  );
}

export default function WhoWeAreSection() {
  return (
    <section
      id="who-we-are"
      className="scroll-mt-24 bg-white pt-4 pb-8 md:py-10 lg:py-10 xl:py-11 "
    >
      <div className="mx-auto max-w-[1366px] px-4 md:px-8 lg:px-8 xl:px-10 xl:py-12">
        <div className="flex flex-col items-stretch gap-8 max-lg:gap-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-6 xl:flex xl:flex-row xl:gap-x-0">
          <div className="contents lg:block lg:col-start-1">
            <div className="max-lg:order-1" id="who-we-are-content">
              <h2 className="w-full text-[36px] font-medium leading-[44px] text-black max-lg:text-center md:text-[48px] md:leading-[56px] lg:text-left lg:text-[52px] lg:leading-[68px] xl:w-[702px] xl:text-[76px] xl:leading-[102px]">
                Influence.
                <br />
                <span className="text-mediovate-tan">Engage.</span> Convert.
              </h2>
            </div>

            <div className="max-lg:order-3 lg:mt-6 xl:mt-8">
              <div className="grid w-full grid-cols-2 gap-3 max-lg:w-full md:gap-4 xl:flex xl:w-[670px] xl:flex-wrap xl:gap-4">
                {stats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </div>

          <div className="contents lg:flex lg:min-w-0 lg:flex-col lg:self-stretch xl:flex-1">
            <div className="flex max-lg:order-4 flex-col items-center pt-0 text-center max-lg:w-full lg:items-start lg:text-left xl:pl-16">
              <span className="inline-flex h-[34px] w-[120px] items-center justify-center rounded-[40px] border border-[#DAD2D2] font-open-sans text-[14px] font-semibold uppercase leading-[28px] text-mediovate-tan">
                Who we are
              </span>
              <p className="mt-4 w-full max-w-[340px] font-open-sans text-[15px] font-normal leading-[26px] text-black md:max-w-[520px] md:text-[16px] md:leading-[28px] lg:mt-4 lg:max-w-none xl:mt-6 xl:w-[546px]">
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

            <div className="mt-8 flex max-lg:order-2 flex-col items-stretch gap-6 pt-0 max-lg:items-center md:gap-7 lg:mt-6 lg:flex-row lg:items-center lg:gap-5 lg:pt-0 xl:mt-auto xl:gap-8 xl:pt-14">
              <div className="relative aspect-[1667/1321] w-full min-w-0 overflow-hidden rounded-[20px] bg-[#f5f0ea] max-lg:mx-auto max-lg:max-w-[560px] max-lg:flex-none lg:aspect-auto lg:h-[220px] lg:flex-1 xl:h-[312px]">
                <Image
                  src="/assets/Home/website other parts-01 (1).jpg"
                  alt="Influencer filming content for a brand campaign"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 560px, 50vw"
                />
              </div>

              <div className="flex shrink-0 justify-center lg:justify-end xl:justify-center">
                <CampaignCta />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-8 h-px w-full bg-[#FFE4C8] md:my-10 xl:my-11" />
    </section>
  );
}
