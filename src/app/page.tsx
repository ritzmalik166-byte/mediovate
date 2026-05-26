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
import CallUsModalProvider from "@/components/providers/CallUsModalProvider";
import ConsultationModalProvider from "@/components/providers/ConsultationModalProvider";

export default function Home() {
  return (
    <LenisProvider>
      <ConsultationModalProvider>
        <CallUsModalProvider>
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
        </CallUsModalProvider>
      </ConsultationModalProvider>
    </LenisProvider>
  );
}
