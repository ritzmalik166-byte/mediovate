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
    <section className="border-y border-[#FFE4C8] bg-white py-16">
      <div className="mx-auto flex max-w-[1366px] flex-col items-center px-10">
        <h2 className="text-center font-sans text-[60px] font-medium leading-[72px] text-black">
          Industries We Serve
        </h2>

        <p className="mt-4 w-[801px] text-center font-sans text-[24px] font-semibold leading-[34px] text-black">
          Influencer &amp; Digital Marketing Expertise Across Every Industry
        </p>

        <p className="mt-4 h-[67px] w-[795px] text-center font-open-sans text-[16px] font-normal leading-[28px] text-black">
          We understand that every industry has its own audience behaviour,
          compliance needs, and content culture and our campaigns reflect that
          nuance.
        </p>

        <div className="mt-10 flex max-w-[1100px] flex-wrap items-center justify-center gap-3">
          {industries.map((industry) => (
            <button
              key={industry}
              type="button"
              className="cursor-pointer rounded-full border border-[#E0E0E0] bg-white px-6 py-3 text-center font-open-sans text-[14px] font-normal leading-[20px] text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A87C4F] hover:bg-[#A87C4F] hover:text-white hover:shadow-[0_8px_20px_rgba(168,124,79,0.25)]"
            >
              {industry}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
