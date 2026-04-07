import { Section } from "@/components/Section";

export function BeliefsSection() {
  return (
    <Section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
          Você <span className="text-primary text-glow">não precisa ser técnico</span> para entrar nesse mercado
        </h2>

        <div className="space-y-4 max-w-lg mx-auto mb-12">
          {[
            '"Preciso saber programar"',
            '"Isso é muito complexo"',
            '"Só grandes empresas usam IA"',
          ].map((belief) => (
            <div
              key={belief}
              className="flex items-center gap-4 p-4 rounded-lg bg-destructive/10 neon-border border-destructive/20 text-left"
            >
              <span className="text-destructive text-xl shrink-0">✕</span>
              <span className="text-muted-foreground">{belief}</span>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl bg-primary/10 neon-border max-w-md mx-auto">
          <p className="text-foreground font-bold text-lg md:text-xl">
            Você só precisa de um <span className="text-primary">método claro</span>.
          </p>
        </div>
      </div>
    </Section>
  );
}
