import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";

const steps = [
  { label: "Compra da VPS + domínio", icon: "🌐" },
  { label: "Instalação do Docker", icon: "🐳" },
  { label: "Instalação do Portainer", icon: "📦" },
  { label: "Instalação do N8N", icon: "⚡" },
  { label: "Instalação da Evolution API", icon: "🔗" },
  { label: "Integração com WhatsApp", icon: "💬" },
  { label: "Criação do primeiro agente de IA", icon: "🤖" },
];

export function HowItWorksSection() {
  return (
    <Section id="como-funciona" className="py-20 md:py-32 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Como <span className="text-primary text-glow">funciona</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Estrutura do curso</p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 rounded-full bg-primary/20 neon-border flex items-center justify-center shrink-0 relative z-10 group-hover:neon-glow transition-all duration-300">
                  <span className="text-xl">{step.icon}</span>
                </div>
                <div className="p-4 rounded-lg bg-card neon-border flex-1 group-hover:neon-glow group-hover:scale-[1.01] transition-all duration-300">
                  <p className="font-medium text-foreground">
                    <span className="text-primary font-bold mr-2">{i + 1}.</span>
                    {step.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-primary font-semibold mt-10 text-lg">
          Tudo passo a passo, sem enrolação.
        </p>

        <div className="mt-10 text-center">
          <CTAButton />
        </div>
      </div>
    </Section>
  );
}
