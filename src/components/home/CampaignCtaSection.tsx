function ConsultationArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="9"
      viewBox="0 0 33 9"
      fill="none"
      aria-hidden="true"
      className={className}
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

export default function CampaignCtaSection() {
  return (
    <section
      id="campaign-cta"
      className="scroll-mt-24 bg-white pt-5 pb-10 md:py-12 lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1366px] flex-col items-center px-4 md:px-8 lg:px-10">
        <h2 className="w-full max-w-[924px] text-center font-sans text-[24px] font-semibold leading-[32px] text-black md:text-[30px] md:leading-[40px] lg:text-[36px] lg:leading-[50px]">
          Ready to Build Your Influencer Campaign?
        </h2>

        <p className="mt-4 w-full max-w-[842px] text-center font-poppins text-[15px] font-normal leading-[26px] text-black md:text-[16px] md:leading-[28px]">
          Get a free consultation from Mediovate&apos;s influencer marketing
          experts. We&apos;ll identify the right creators, platforms, and
          strategy to grow your brand fast.
        </p>

        <div className="mt-6 flex w-full max-w-[360px] flex-col items-stretch gap-3 max-md:max-w-[360px] md:mt-7 md:max-w-none md:flex-row md:items-center md:justify-center md:gap-3 lg:mt-8 lg:gap-4">
          <button
            type="button"
            className="group flex h-[48px] w-full max-md:w-full cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-transparent bg-[#A87C4F] px-4 text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F] md:h-[44px] md:w-auto md:shrink-0 md:px-5 lg:h-[54px] lg:w-[310px] lg:px-4"
          >
            <span className="text-center font-sans text-[15px] font-semibold leading-[20px] md:text-[14px] lg:text-[16px]">
              Book a Free Consultation
            </span>
            <ConsultationArrowIcon className="shrink-0 transition-colors duration-300" />
          </button>

          <button
            type="button"
            className="group flex h-[48px] w-full max-md:w-full cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-[#A87C4F] bg-white px-4 text-[#A87C4F] transition-colors duration-300 hover:bg-[#A87C4F] hover:text-white md:h-[44px] md:w-auto md:shrink-0 md:px-5 lg:h-[54px] lg:w-[188px] lg:px-4"
          >
            <span className="text-center font-sans text-[15px] font-semibold leading-[20px] md:text-[14px] lg:text-[16px]">
              Call Us Now
            </span>
            <ConsultationArrowIcon className="shrink-0 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
