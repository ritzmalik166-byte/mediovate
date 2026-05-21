import {
  CampaignCtaSection,
  FlagshipServiceSection,
  FooterSection,
  HeroSection,
  HowWeWorkSection,
  IndustriesWeServeSection,
  DigitalMarketingServicesSection,
  InfluencerMarketingServicesSection,
  Navbar,
  OtherServicesSection,
  PlatformReachSection,
  WhoWeAreSection,
  WhyChooseMediovateSection,
} from "@/components/home";
import LenisProvider from "@/components/providers/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <Navbar />
      <div className="mx-auto w-full overflow-x-hidden">
        <HeroSection />
        <WhoWeAreSection />
        <FlagshipServiceSection />
        <PlatformReachSection />
        <InfluencerMarketingServicesSection />
        <OtherServicesSection />
        <DigitalMarketingServicesSection />
        <WhyChooseMediovateSection />
        <HowWeWorkSection />
        <IndustriesWeServeSection />
        <CampaignCtaSection />
        <FooterSection />
      </div>
    </LenisProvider>
  );
}
