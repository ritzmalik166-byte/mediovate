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
      className={`flex h-[148px] w-[327px] flex-col justify-between rounded-[20px] p-5 ${
        filled
          ? "bg-[#FFF5EB]"
          : "border border-[#FFE4C8] bg-white"
      }`}
    >
      <span className="font-sans text-[40px] font-semibold leading-[28px] text-black">
        {value}
      </span>
      <span className="self-end text-right font-open-sans text-[16px] font-normal leading-[28px] text-black">
        {label}
      </span>
    </div>
  );
}

function CampaignCta() {
  return (
    <button
      type="button"
      className="group flex h-[164px] w-[164px] shrink-0 flex-col items-center justify-center gap-3 rounded-full border border-[#FFE4C8] bg-white transition-colors hover:border-mediovate-tan"
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
      <span className="w-[153px] text-center font-sans text-[16px] font-semibold uppercase leading-[20px] text-black mt-4">
        Start Your
        <br />
        Campaign Explore Services
      </span>
    </button>
  );
}

export default function WhoWeAreSection() {
  return (
    <section className="bg-white py-11">
      <div className="mx-auto max-w-[1366px] px-10">
        <div className="flex items-start">
          <div className="shrink-0">
            <h2 className="w-[702px] max-w-full text-[76px] font-medium leading-normal text-black">
              Influence.
              <br />
              <span className="text-mediovate-tan">Engage.</span> Convert.
            </h2>

            <div className="mt-8 flex w-[670px] max-w-full flex-wrap gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col self-stretch">
            <div className="pt-2 pl-16">
              <span className="inline-flex h-[34px] w-[120px] items-center justify-center rounded-[40px] border border-[#DAD2D2] font-open-sans text-[14px] font-semibold uppercase leading-[28px] text-mediovate-tan">
                Who we are
              </span>
              <p className="mt-6 w-[546px]  font-open-sans text-[16px] font-normal leading-[28px] text-black">
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

            <div className="mt-auto flex items-center gap-8 pt-14">
              <div className="relative h-[312px] min-w-0 flex-1 overflow-hidden rounded-[20px] bg-[#f5f0ea]">
                <Image
                  src="/assets/Home/photo_lady.png"
                  alt="Influencer filming content for a brand campaign"
                  fill
                  className="object-cover"
                />
              </div>

              <CampaignCta />
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-[#FFE4C8] my-11" />
    </section>
  );
}
