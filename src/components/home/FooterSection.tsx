"use client";

import MediovateLogo from "./MediovateLogo";
import { companyLinks } from "@/data/companyLinks";
import { footerServiceLinks } from "@/data/footerServiceLinks";
import { influencerServiceLinks } from "@/data/influencerServiceLinks";
import { scrollToCompanySection } from "@/lib/companyNavigation";
import { scrollToInfluencerService } from "@/lib/influencerNavigation";
import { scrollToFooterService } from "@/lib/serviceNavigation";

const columnHeadingClassName =
  "font-open-sans text-[16px] font-bold uppercase leading-[28px] text-[#050102] max-md:text-center md:text-left";

const listItemClassName =
  "font-open-sans text-[15px] font-normal leading-[35px] text-[#050102] max-md:text-center max-md:leading-[28px] md:text-left md:leading-[32px] xl:leading-[35px]";

const footerAnchorClassName =
  "cursor-pointer transition-colors duration-200 hover:text-[#A87C4F] focus-visible:text-[#A87C4F] focus-visible:outline-none";

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
    <div className={`max-md:flex max-md:flex-col max-md:items-center md:block ${className ?? ""}`}>
      <h3 className={columnHeadingClassName}>{title}</h3>
      <div className="mt-4 max-md:w-full md:mt-3">{children}</div>
    </div>
  );
}

function FooterAnchorLinkList({
  items,
  className,
  onLinkClick,
}: {
  items: ReadonlyArray<{ label: string; hash: string }>;
  className?: string;
  onLinkClick: (hash: string) => void;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.hash} className={listItemClassName}>
          <a
            href={`#${item.hash}`}
            onClick={(event) => {
              event.preventDefault();
              onLinkClick(item.hash);
            }}
            className={footerAnchorClassName}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function scrollToTop() {
  if (window.__lenis) {
    window.__lenis.scrollTo(0);
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function FooterSection() {
  return (
    <footer className="bg-[#FFF5EB]">
      <div className="section-container pt-5 md:pt-12 lg:pt-12 xl:pt-16">
        <div className="flex flex-col gap-10 md:gap-10 lg:gap-12 xl:grid xl:grid-cols-[221px_minmax(0,1fr)_164px] xl:items-start xl:gap-x-10 xl:gap-y-12 xl:text-left">
          <div className="flex w-full items-center justify-between max-md:mx-auto max-md:max-w-[400px] md:max-w-none xl:col-start-1 xl:row-start-1 xl:justify-start">
            <MediovateLogo className="block" />
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-[48px] w-[48px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-transparent bg-[#A87C4F] text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F] xl:hidden"
            >
              <BackToTopIcon />
            </button>
          </div>

          <div className="flex justify-center max-md:text-center md:justify-start md:text-left xl:col-start-2 xl:row-start-1 xl:justify-start">
            <p className="w-full max-w-[340px] font-open-sans text-[18px] font-normal leading-[28px] text-[#050102] md:max-w-none md:text-[19px] md:leading-[32px] lg:text-[20px] lg:leading-[34px] xl:h-[103px] xl:w-[770px] xl:text-[24px] xl:leading-[39px]">
              Mediovate is the best influencer marketing agency in India,
              delivering ROI-driven influencer campaigns, creative branding, and
              full-service digital marketing solutions that grow brands at scale.
            </p>
          </div>

          <div className="hidden justify-center xl:col-start-3 xl:row-start-1 xl:flex">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-transparent bg-[#A87C4F] text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F]"
            >
              <BackToTopIcon />
            </button>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 max-md:mx-auto max-md:max-w-[400px] max-md:text-center sm:grid-cols-2 md:mx-0 md:max-w-none md:gap-x-8 md:gap-y-10 md:text-left lg:grid-cols-4 lg:gap-x-6 lg:gap-y-8 xl:contents">
            <div className="w-full xl:col-start-1 xl:row-start-2">
              <FooterColumn title="Get in Touch">
                <div className="font-open-sans text-[15px] font-normal leading-[32px] text-[#050102] max-md:text-center md:text-left md:text-[16px] md:leading-[36px] lg:leading-[34px] xl:leading-[38px]">
                  <p>info@mediovate.in</p>
                  <p>+91 8920024793</p>
                </div>
              </FooterColumn>
            </div>

            <div className="contents sm:col-span-2 lg:col-span-3 xl:col-start-2 xl:row-start-2 xl:flex xl:items-start xl:gap-x-12">
              <FooterColumn title="Influencer Marketing">
                <FooterAnchorLinkList
                  items={influencerServiceLinks}
                  onLinkClick={scrollToInfluencerService}
                  className="w-full xl:h-[246px] xl:w-[225px]"
                />
              </FooterColumn>

              <FooterColumn title="Services">
                <FooterAnchorLinkList
                  items={footerServiceLinks}
                  onLinkClick={scrollToFooterService}
                  className="w-full xl:h-[246px] xl:w-[225px]"
                />
              </FooterColumn>

              <FooterColumn title="Company">
                <FooterAnchorLinkList
                  items={companyLinks}
                  onLinkClick={scrollToCompanySection}
                  className="w-full xl:h-[138px] xl:w-[168px]"
                />
              </FooterColumn>
            </div>
          </div>

          <div className="flex w-full justify-center md:justify-start lg:justify-start xl:col-start-3 xl:row-start-2 xl:justify-start">
            <button
              type="button"
              className="group flex h-[130px] w-[130px] cursor-pointer flex-col items-center justify-center rounded-full border border-[#F3BB82] bg-transparent px-3 text-black transition-colors duration-300 hover:border-[#A87C4F] hover:bg-[#A87C4F] hover:text-white md:h-[140px] md:w-[140px] xl:h-[164px] xl:w-[164px] xl:px-4"
            >
              <ConsultationCircleArrowIcon />
              <span className="mt-2 w-[110px] text-center font-sans text-[12px] font-semibold uppercase leading-[16px] md:w-[120px] md:text-[13px] md:leading-[18px] xl:w-[153px] xl:text-[15px] xl:leading-[20px]">
                Get A Free Consultation
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-[#CDCDCD] py-5 md:mt-12 md:py-6 lg:mt-12 xl:mt-16">
          <p className="text-center font-open-sans text-[13px] font-normal leading-[22px] text-[#050102] md:text-left md:text-[14px] md:leading-[27px]">
            © 2026 Mediovate Digital Marketing Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
