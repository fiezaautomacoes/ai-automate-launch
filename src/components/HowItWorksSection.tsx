import { Section } from "@/components/Section";

const steps = [
  "Compra da VPS + domínio",
  "Instalação do Docker",
  "Instalação do Portainer",
  "Instalação do N8N",
  "Instalação da Evolution API",
  "Integração com WhatsApp",
  "Criação do primeiro agente de IA",
];

export function HowItWorksSection() {
  return (
    <Section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Como <span className="text-primary text-glow">funciona</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Estrutura do curso</p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 neon-border flex items-center justify-center shrink-0 relative z-10">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <div className="p-4 rounded-lg bg-card neon-border flex-1 hover:neon-glow transition-all duration-300">
                  <p className="font-medium text-foreground">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-primary font-semibold mt-10 text-lg">
          Tudo passo a passo, sem enrolação.
        </p>
      </div>
    </Section>
  );
}
