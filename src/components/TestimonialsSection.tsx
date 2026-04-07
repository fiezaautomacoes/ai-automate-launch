import { Section } from "@/components/Section";

const testimonials = [
  {
    text: "Eu não sabia nada de automação, hoje já estou vendendo serviços para empresas locais.",
    name: "Rafael Souza",
  },
  {
    text: "Em 3 dias eu já tinha meu primeiro agente rodando no WhatsApp.",
    name: "Mariana Alves",
  },
  {
    text: "Esse curso é direto ao ponto, sem enrolação.",
    name: "Lucas Martins",
  },
];

export function TestimonialsSection() {
  return (
    <Section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Prova <span className="text-primary text-glow">social</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-xl bg-card neon-border hover:neon-glow transition-all duration-300"
            >
              <div className="text-primary text-lg mb-3">★★★★★</div>
              <p className="text-foreground mb-4 italic">"{t.text}"</p>
              <p className="text-muted-foreground text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
