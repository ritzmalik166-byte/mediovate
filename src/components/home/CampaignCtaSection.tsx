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
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-[1366px] flex-col items-center px-10">
        <h2 className="w-[924px] text-center font-sans text-[36px] font-semibold leading-[50px] text-black">
          Ready to Build Your Influencer Campaign?
        </h2>

        <p className="mt-4 w-[842px] text-center font-poppins text-[16px] font-normal leading-[28px] text-black">
          Get a free consultation from Mediovate&apos;s influencer marketing
          experts. We&apos;ll identify the right creators, platforms, and
          strategy to grow your brand fast.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            className="group flex h-[54px] w-[310px] cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-transparent bg-[#A87C4F] text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F]"
          >
            <span className="text-center font-sans text-[16px] font-semibold leading-[20px]">
              Book a Free Consultation
            </span>
            <ConsultationArrowIcon className="transition-colors duration-300" />
          </button>

          <button
            type="button"
            className="group flex h-[54px] w-[188px] cursor-pointer items-center justify-center gap-2 rounded-[50px] border border-[#A87C4F] bg-white text-[#A87C4F] transition-colors duration-300 hover:bg-[#A87C4F] hover:text-white"
          >
            <span className="text-center font-sans text-[16px] font-semibold leading-[20px]">
              Call Us Now
            </span>
            <ConsultationArrowIcon className="transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
