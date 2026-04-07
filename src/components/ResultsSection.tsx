import { Section } from "@/components/Section";

const results = [
  { label: "Atendimento automático", icon: "🤖" },
  { label: "Captação de leads", icon: "🎯" },
  { label: "Agendamento automatizado", icon: "📅" },
  { label: "Estrutura pronta para vender", icon: "💰" },
];

export function ResultsSection() {
  return (
    <Section className="py-20 md:py-32 grid-bg relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
          No final, você terá isso{" "}
          <span className="text-primary text-glow">funcionando:</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {results.map((r) => (
            <div
              key={r.label}
              className="p-6 rounded-xl bg-card neon-border hover:neon-glow hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 shadow-lg shadow-primary/5"
            >
              <span className="text-2xl">{r.icon}</span>
              <span className="font-medium text-foreground">{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
