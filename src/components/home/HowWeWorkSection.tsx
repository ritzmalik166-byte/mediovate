import type { ReactNode } from "react";

const processSteps = [
  {
    title: "Brand Discovery",
    description: (
      <>
        Deep-dive into your brand,
        <br />
        audience, competitors,
        <br />
        and goals to map the
        <br />
        opportunity.
      </>
    ),
    placement: "below" as const,
  },
  {
    title: "Strategy Build",
    description: (
      <>
        Custom campaign strategy,
        <br />
        influencer mix, creative
        <br />
        direction, platforms, KPIs,
        <br />
        and budget allocation.
      </>
    ),
    placement: "above" as const,
  },
  {
    title: "Creator Outreach",
    description: (
      <>
        Identify, vet, negotiate,
        <br />
        and onboard the perfect
        <br />
        influencers for your
        <br />
        campaign objectives.
      </>
    ),
    placement: "below" as const,
  },
  {
    title: "Execute & Publish",
    description: (
      <>
        Brief creators, approve
        <br />
        content, manage timelines,
        <br />
        and launch campaigns
        <br />
        across all platforms.
      </>
    ),
    placement: "above" as const,
  },
  {
    title: "Measure & Scale",
    description: (
      <>
        Track performance in real
        <br />
        time, report insights,
        <br />
        optimise, and scale what
        <br />
        delivers results.
      </>
    ),
    placement: "below" as const,
  },
];

function ProcessCardPointer({ direction }: { direction: "up" | "down" }) {
  if (direction === "down") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="249"
        height="13"
        viewBox="0 0 249 13"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M124.5 13L131.428 1H117.572L124.5 13Z"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="249"
      height="13"
      viewBox="0 0 249 13"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M124.5 0L131.428 12H117.572L124.5 0Z" fill="white" />
    </svg>
  );
}

function ProcessCard({
  title,
  description,
  placement,
}: {
  title: string;
  description: ReactNode;
  placement: "above" | "below";
}) {
  const cardBody = (
    <div className="flex h-[194px] w-[249px] flex-col items-center justify-center rounded-[5px] border border-white bg-[#A87C4F] px-5 text-center text-white">
      <h3 className="font-sans text-[18px] font-semibold leading-[26px]">
        {title}
      </h3>
      <p className="mt-3 font-open-sans text-[14px] font-normal leading-[22px]">
        {description}
      </p>
    </div>
  );

  if (placement === "above") {
    return (
      <div className="flex h-[207px] w-[249px] flex-col items-center justify-end">
        {cardBody}
        <ProcessCardPointer direction="down" />
      </div>
    );
  }

  return (
    <div className="flex h-[207px] w-[249px] flex-col items-center justify-start">
      <ProcessCardPointer direction="up" />
      {cardBody}
    </div>
  );
}

export default function HowWeWorkSection() {
  return (
    <section className="h-[811px] bg-[#A87C4F]">
      <div className="mx-auto flex h-full max-w-[1366px] flex-col px-10 py-14">
        <div className="flex flex-col items-center text-white">
          <h2 className="text-center font-sans text-[60px] font-medium leading-[54px] text-white">
            How We Work
          </h2>

          <p className="mt-4 text-center font-sans text-[24px] font-semibold leading-[34px] text-white">
            From Strategy to Viral : Our 5-Step Process
          </p>

          <p className="mt-4 h-[67px] w-[795px] text-center font-open-sans text-[16px] font-normal leading-[28px] text-white">
            Our battle-tested campaign framework ensures every influencer,
            creative, or digital marketing project delivers maximum impact from
            day one.
          </p>
        </div>

        <div className="mt-10 flex flex-1 flex-col justify-center">
          <div className="grid grid-cols-5 items-end gap-0">
            {processSteps.map((step) =>
              step.placement === "above" ? (
                <div key={step.title} className="flex justify-center">
                  <ProcessCard {...step} />
                </div>
              ) : (
                <div key={step.title} className="h-[207px]" />
              ),
            )}
          </div>

          <div className="relative my-3">
            <div className="absolute left-[124px] right-[124px] top-1/2 h-px -translate-y-1/2 bg-[#F5D5B8]" />
            <div className="grid grid-cols-5">
              {processSteps.map((step) => (
                <div key={step.title} className="flex justify-center">
                  <span className="relative z-10 h-3 w-3 rounded-full bg-[#FFD2A3]" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-5 items-start gap-0">
            {processSteps.map((step) =>
              step.placement === "below" ? (
                <div key={step.title} className="flex justify-center">
                  <ProcessCard {...step} />
                </div>
              ) : (
                <div key={step.title} className="h-[207px]" />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
