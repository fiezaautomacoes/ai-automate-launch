import { Section } from "@/components/Section";

const results = [
  "Atendimento automático",
  "Captação de leads",
  "Agendamento automatizado",
  "Estrutura pronta para vender",
];

export function ResultsSection() {
  return (
    <Section className="py-20 md:py-32 grid-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
          No final, você terá isso{" "}
          <span className="text-primary text-glow">funcionando:</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {results.map((r) => (
            <div
              key={r}
              className="p-6 rounded-xl bg-card neon-border hover:neon-glow transition-all duration-300 flex items-center gap-3"
            >
              <span className="text-primary text-2xl">✓</span>
              <span className="font-medium text-foreground">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
