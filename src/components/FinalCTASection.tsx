import { Section } from "@/components/Section";
import aiBrain from "@/assets/ai-brain.jpg";

export function FinalCTASection() {
  return (
    <Section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={aiBrain} alt="" loading="lazy" width={1344} height={768} className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Se você não entrar agora…
        </h2>
        <p className="text-xl md:text-2xl text-primary text-glow font-semibold mb-10">
          alguém vai aprender isso antes de você.
        </p>

        <a
          href="#oferta"
          className="inline-flex items-center px-12 py-6 rounded-lg bg-primary text-primary-foreground font-bold text-2xl btn-glow hover:brightness-110 hover:scale-105 transition-all duration-300"
        >
          COMEÇAR AGORA
        </a>
      </div>
    </Section>
  );
}
