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

function ProcessCardPointer({
  direction,
  className,
}: {
  direction: "up" | "down";
  className?: string;
}) {
  if (direction === "down") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="249"
        height="13"
        viewBox="0 0 249 13"
        fill="none"
        aria-hidden="true"
        className={`shrink-0 ${className ?? ""}`}
      >
        <path d="M124.5 13L131.428 1H117.572L124.5 13Z" fill="white" />
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
      className={`shrink-0 ${className ?? ""}`}
    >
      <path d="M124.5 0L131.428 12H117.572L124.5 0Z" fill="white" />
    </svg>
  );
}

function ProcessCardBody({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-[5px] border border-white bg-[#A87C4F] px-4 py-5 text-center text-white md:px-5 lg:h-[194px] lg:w-[249px] lg:py-0">
      <h3 className="font-sans text-[16px] font-semibold leading-[24px] md:text-[17px] lg:text-[18px] lg:leading-[26px]">
        {title}
      </h3>
      <p className="mt-2 font-open-sans text-[13px] font-normal leading-[20px] md:mt-2.5 md:text-[13px] lg:mt-3 lg:text-[14px] lg:leading-[22px]">
        {description}
      </p>
    </div>
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
  const cardBody = <ProcessCardBody title={title} description={description} />;

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

function MobileProcessStep({
  title,
  description,
  stepNumber,
}: {
  title: string;
  description: ReactNode;
  stepNumber: number;
}) {
  return (
    <li className="w-full md:max-w-[560px] md:self-center">
      <div className="flex w-full flex-col items-center justify-center rounded-[5px] border border-white bg-[#A87C4F] px-4 py-5 text-center text-white md:px-5 md:py-6">
        <span className="mb-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFD2A3] font-sans text-[14px] font-semibold text-[#5c3d2e]">
          {stepNumber}
        </span>
        <h3 className="font-sans text-[16px] font-semibold leading-[24px] md:text-[17px]">
          {title}
        </h3>
        <p className="mt-2 font-open-sans text-[13px] font-normal leading-[20px] md:text-[14px] md:leading-[22px]">
          {description}
        </p>
      </div>
    </li>
  );
}

export default function HowWeWorkSection() {
  return (
    <section
      id="how-we-work"
      className="scroll-mt-24 bg-[#A87C4F] pt-5 pb-10 md:py-12 lg:h-[811px] lg:py-0"
    >
      <div className="mx-auto flex h-full max-w-[1366px] flex-col px-4 md:px-8 lg:px-10 lg:py-14">
        <div className="flex flex-col items-center text-white">
          <h2 className="text-center font-sans text-[32px] font-medium leading-[40px] text-white md:text-[44px] md:leading-[52px] lg:text-[60px] lg:leading-[54px]">
            How We Work
          </h2>

          <p className="mt-3 text-center font-sans text-[18px] font-semibold leading-[26px] text-white md:mt-4 md:text-[20px] md:leading-[30px] lg:text-[24px] lg:leading-[34px]">
            From Strategy to Viral : Our 5-Step Process
          </p>

          <p className="mt-3 w-full max-w-[795px] text-center font-open-sans text-[15px] font-normal leading-[26px] text-white md:mt-4 md:text-[16px] md:leading-[28px] lg:h-[67px]">
            Our battle-tested campaign framework ensures every influencer,
            creative, or digital marketing project delivers maximum impact from
            day one.
          </p>
        </div>

        <ol className="mx-auto mt-8 flex w-full max-w-[640px] flex-col gap-5 md:gap-6 lg:hidden">
          {processSteps.map((step, index) => (
            <MobileProcessStep
              key={step.title}
              title={step.title}
              description={step.description}
              stepNumber={index + 1}
            />
          ))}
        </ol>

        <div className="mt-10 hidden flex-1 flex-col justify-center lg:flex">
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
