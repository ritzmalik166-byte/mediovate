"use client";

import Image from "next/image";

const influencerMarketingLinks = [
  "Influencer Identification",
  "Micro & Macro Campaigns",
  "Campaign Management",
  "ROI & Analytics",
  "Brand Partnerships",
  "UGC & Regional",
];

const servicesLinks = [
  "Brand Identity Design",
  "Social Media Creatives",
  "SEO Services",
  "PPC & Google Ads",
  "Content Marketing",
  "Web Development",
];

const companyLinks = ["About Mediovate", "Our Process", "Industries"];

const columnHeadingClassName =
  "font-open-sans text-[16px] font-bold uppercase leading-[28px] text-[#050102]";

const listItemClassName =
  "font-open-sans text-[15px] font-normal leading-[35px] text-[#050102]";

function BackToTopIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="11"
      viewBox="0 0 33 9"
      fill="none"
      aria-hidden="true"
      className="-rotate-90"
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

function ConsultationCircleArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      aria-hidden="true"
      className={`-rotate-[1.446deg] transition-colors duration-300 ${className ?? ""}`}
    >
      <line
        x1="3.1511"
        y1="26.3201"
        x2="20.9989"
        y2="8.81426"
        stroke="currentColor"
      />
      <path
        d="M26.7101 3.21246L23.5493 11.7716L18.0915 6.20721L26.7101 3.21246Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className={columnHeadingClassName}>{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function FooterLinkList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className={listItemClassName}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function FooterSection() {
  return (
    <footer className="bg-[#FFF5EB]">
      <div className="mx-auto max-w-[1366px]  pt-16">
        <div className="flex flex-col gap-16">
          <div className="flex items-start gap-10">
            <div className="w-[221px] shrink-0">
              <Image
                src="/assets/Home/mediovate_logo.png"
                alt="Mediovate"
                width={221}
                height={26}
                className="block  object-contain object-left"
              />
            </div>

            <div className="flex flex-1 justify-center">
              <p className="h-[103px] w-[770px] text-left font-open-sans text-[24px] font-normal leading-[39px] text-[#050102]">
                Mediovate is the best influencer marketing agency in India,
                delivering ROI-driven influencer campaigns, creative branding, and
                full-service digital marketing solutions that grow brands at scale.
              </p>
            </div>

            <div className="flex w-[164px] shrink-0 justify-center">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-transparent bg-[#A87C4F] text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F]"
              >
                <BackToTopIcon />
              </button>
            </div>
          </div>

          <div className="flex items-start gap-10">
            <div className="w-[221px] shrink-0">
              <FooterColumn title="Get in Touch">
                <div className="font-open-sans text-[16px] font-normal leading-[38px] text-[#050102]">
                  <p>hello@mediovateagency.com</p>
                  <p>+91 12345 67890</p>
                </div>
              </FooterColumn>
            </div>

            <div className="flex flex-1 justify-center">
              <div className="flex w-[770px] items-start gap-x-12">
                <FooterColumn title="Influencer Marketing">
                  <FooterLinkList
                    items={influencerMarketingLinks}
                    className="h-[246px] w-[225px]"
                  />
                </FooterColumn>

                <FooterColumn title="Services">
                  <FooterLinkList
                    items={servicesLinks}
                    className="h-[246px] w-[225px]"
                  />
                </FooterColumn>

                <FooterColumn title="Company">
                  <FooterLinkList
                    items={companyLinks}
                    className="h-[138px] w-[168px]"
                  />
                </FooterColumn>
              </div>
            </div>

            <div className="flex w-[164px] shrink-0 justify-center">
              <button
                type="button"
                className="group flex h-[164px] w-[164px] cursor-pointer flex-col items-center justify-center rounded-full border border-[#F3BB82] bg-transparent px-4 text-black transition-colors duration-300 hover:border-[#A87C4F] hover:bg-[#A87C4F] hover:text-white"
              >
                <ConsultationCircleArrowIcon />
                <span className="mt-2 w-[153px] text-center font-sans text-[15px] font-semibold uppercase leading-[20px]">
                  Get A Free Consultation
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[#CDCDCD] py-6">
          <p className="font-open-sans text-[14px] font-normal leading-[27px] text-[#050102]">
            © 2026 Mediovate Digital Marketing Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
