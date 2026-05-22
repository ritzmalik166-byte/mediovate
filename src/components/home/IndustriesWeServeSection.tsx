const industries = [
  "Fashion & Lifestyle",
  "Beauty & Personal Care",
  "Food & Beverage",
  "Health & Wellness",
  "Technology & SaaS",
  "Finance & FinTech",
  "E-Commerce & D2C Brands",
  "Travel & Hospitality",
  "Education & EdTech",
  "Real Estate",

  "Automotive | Gaming & Entertainment",
  "FMCG & Consumer Goods",
  "Startups & New Launches",
];

export default function IndustriesWeServeSection() {
  return (
    <section className="border-y border-[#FFE4C8] bg-white py-10 md:py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1366px] flex-col items-center px-4 md:px-8 lg:px-10">
        <h2 className="text-center font-sans text-[32px] font-medium leading-[40px] text-black md:text-[44px] md:leading-[52px] lg:text-[60px] lg:leading-[72px]">
          Industries We Serve
        </h2>

        <p className="mt-3 w-full max-w-[801px] text-center font-sans text-[18px] font-semibold leading-[26px] text-black md:mt-4 md:text-[20px] md:leading-[30px] lg:text-[24px] lg:leading-[34px]">
          Influencer &amp; Digital Marketing Expertise Across Every Industry
        </p>

        <p className="mt-3 w-full max-w-[795px] text-center font-open-sans text-[15px] font-normal leading-[26px] text-black md:mt-4 md:text-[16px] md:leading-[28px] lg:h-[67px]">
          We understand that every industry has its own audience behaviour,
          compliance needs, and content culture and our campaigns reflect that
          nuance.
        </p>

        <ul className="mt-8 grid w-full max-w-[360px] grid-cols-2 gap-2.5 md:mt-10 md:max-w-[640px] md:grid-cols-3 md:gap-3 lg:mt-10 lg:flex lg:max-w-[1100px] lg:flex-wrap lg:items-center lg:justify-center">
          {industries.map((industry, index) => {
            const isLastOdd =
              index === industries.length - 1 && industries.length % 2 === 1;

            return (
            <li
              key={industry}
              className={`min-w-0 lg:w-auto ${
                isLastOdd
                  ? "max-md:col-span-2 max-md:flex max-md:justify-center md:col-span-1 md:flex md:justify-center"
                  : ""
              }`}
            >
              <button
                type="button"
                className={`min-w-0 w-full cursor-pointer rounded-full border border-[#E0E0E0] bg-white px-3 py-2.5 text-center font-open-sans text-[12px] font-normal leading-[16px] text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A87C4F] hover:bg-[#A87C4F] hover:text-white hover:shadow-[0_8px_20px_rgba(168,124,79,0.25)] md:px-4 md:py-3 md:text-[13px] md:leading-[18px] lg:w-auto lg:px-6 lg:text-[14px] lg:leading-[20px] ${
                  isLastOdd ? "max-md:max-w-[calc(50%-5px)] md:max-w-none" : ""
                }`}
              >
                {industry}
              </button>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
