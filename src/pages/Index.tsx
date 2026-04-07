import { Particles } from "@/components/Particles";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { BeliefsSection } from "@/components/BeliefsSection";
import { WhatYouBuildSection } from "@/components/WhatYouBuildSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ResultsSection } from "@/components/ResultsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AudienceSection } from "@/components/AudienceSection";
import { FAQSection } from "@/components/FAQSection";
import { OfferSection } from "@/components/OfferSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Particles />
      <div className="relative z-10">
        <HeroSection />
        <StorySection />
        <BeliefsSection />
        <WhatYouBuildSection />
        <HowItWorksSection />
        <ResultsSection />
        <TestimonialsSection />
        <AudienceSection />
        <FAQSection />
        <OfferSection />
        <FinalCTASection />

        {/* Footer */}
        <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
          <p>© {new Date().getFullYear()} Gabriel Valério. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
