import { Section } from "@/components/Section";

export function OfferSection() {
  return (
    <Section id="oferta" className="py-20 md:py-32 grid-bg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Acesso <span className="text-primary text-glow">imediato</span>
        </h2>

        <div className="rounded-2xl bg-card neon-border p-8 md:p-12 neon-glow">
          <ul className="space-y-4 mb-8 text-left max-w-sm mx-auto">
            {["Curso completo", "Atualizações", "Estrutura pronta"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-primary text-xl">✓</span>
                <span className="text-foreground text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex items-center px-10 py-5 rounded-lg bg-primary text-primary-foreground font-bold text-xl btn-glow hover:brightness-110 transition-all duration-300 w-full justify-center sm:w-auto"
          >
            QUERO COMEÇAR AGORA
          </a>

          <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Garantia de 7 dias
          </div>
        </div>
      </div>
    </Section>
  );
}
