import { Section } from "@/components/Section";

export function AudienceSection() {
  return (
    <Section className="py-20 md:py-32 grid-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Para quem é */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Para quem <span className="text-primary text-glow">é</span>
            </h2>
            <ul className="space-y-4">
              {[
                "Iniciantes que querem entrar em IA",
                "Pessoas que querem renda com automação",
                "Prestadores de serviço",
                "Empresários que querem automatizar",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 neon-border">
                  <span className="text-primary text-lg">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem NÃO é */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Para quem <span className="text-destructive">não é</span>
            </h2>
            <ul className="space-y-4">
              {[
                "Quem quer só teoria",
                "Quem não quer executar",
                "Quem busca resultado sem esforço",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                  <span className="text-destructive text-lg">✕</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
