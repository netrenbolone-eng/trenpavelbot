import HeroSection from "@/components/sections/HeroSection";
import BotOfferSection from "@/components/sections/BotOfferSection";
import PricingSection from "@/components/sections/PricingSection";
import {
  AboutSection,
  FAQSection,
  FinalBotCTASection,
  ProductDetailsSection,
  TariffsSection,
} from "@/components/sections/AdditionalSections";
import Footer from "@/components/Footer";
import MobileBotCTA from "@/components/ui/MobileBotCTA";

export default function Page() {
  return (
    <>
      <main className="scroll-smooth motion-reduce:scroll-auto paged:h-screen paged:snap-y paged:snap-mandatory paged:overflow-y-auto paged:overscroll-contain">
        <HeroSection />
        <BotOfferSection />
        <ProductDetailsSection />
        <AboutSection />
        <FAQSection />
        <PricingSection />
        <TariffsSection />
        <FinalBotCTASection />
      </main>
      <Footer />
      <MobileBotCTA />
    </>
  );
}
