import { Section } from "@/components/Section";

export function OfferSection() {
  return (
    <Section id="oferta" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Acesso <span className="text-primary text-glow">imediato</span> por apenas
        </h2>

        <div className="mt-8 rounded-2xl bg-card neon-border p-8 md:p-12 neon-glow-strong relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <div className="mb-6">
            <span className="text-muted-foreground text-lg line-through">R$ 297,00</span>
            <div className="text-5xl md:text-7xl font-bold text-primary text-glow mt-2">
              R$ 97<span className="text-3xl md:text-4xl">,00</span>
            </div>
            <p className="text-muted-foreground mt-2">ou 12x de <span className="text-foreground font-semibold">R$ 9,70</span></p>
          </div>

          <ul className="space-y-4 mb-8 text-left max-w-sm mx-auto">
            {[
              { icon: "✅", text: "Curso completo" },
              { icon: "🔄", text: "Atualizações vitalícias" },
              { icon: "🏗️", text: "Estrutura pronta para usar" },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-foreground text-lg">{item.text}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex items-center px-10 py-5 rounded-lg bg-primary text-primary-foreground font-bold text-xl btn-glow hover:brightness-110 hover:scale-105 transition-all duration-300 w-full justify-center sm:w-auto"
          >
            QUERO COMEÇAR AGORA
          </a>

          <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-medium">Garantia incondicional de 7 dias</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
