import { Section } from "@/components/Section";

export function FinalCTASection() {
  return (
    <Section className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Se você não entrar agora…
        </h2>
        <p className="text-xl md:text-2xl text-primary text-glow font-semibold mb-10">
          alguém vai aprender isso antes de você.
        </p>

        <a
          href="#oferta"
          className="inline-flex items-center px-10 py-5 rounded-lg bg-primary text-primary-foreground font-bold text-xl btn-glow hover:brightness-110 transition-all duration-300"
        >
          COMEÇAR AGORA
        </a>
      </div>
    </Section>
  );
}
