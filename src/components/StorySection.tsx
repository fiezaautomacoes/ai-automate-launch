import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import storytellingImage from "@/assets/storytelling-image.jpg";

export function StorySection() {
  return (
    <Section className="py-20 md:py-32 grid-bg relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
              "Eu não comecei sabendo{" "}
              <span className="text-primary text-glow">programação.</span>"
            </h2>

            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>Eu comecei como você.</p>
              <p>Tentando entender como ganhar dinheiro online, testando ferramentas, perdido entre tutoriais.</p>
              <p>Até que eu entendi uma coisa:</p>
              <p className="text-foreground font-semibold text-lg md:text-xl">
                O mercado não paga quem sabe ferramenta.<br />
                O mercado paga quem <span className="text-primary">resolve problema</span>.
              </p>
              <p>Foi aí que eu comecei a usar automação e IA para criar sistemas que trabalham sozinhos.</p>

              <div className="pt-6">
                <p className="text-foreground font-medium mb-3">Hoje:</p>
                <ul className="space-y-2">
                  {[
                    "Empresas vendem no automático",
                    "Leads são atendidos instantaneamente",
                    "Processos funcionam sem depender de ninguém",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-foreground font-bold text-xl pt-4">
                E agora você pode fazer o mesmo.
              </p>
            </div>

            <div className="mt-10">
              <CTAButton />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-[60px]" />
            <img
              src={storytellingImage}
              alt="Pessoa trabalhando com IA e telas futuristas"
              loading="lazy"
              width={768}
              height={1024}
              className="relative rounded-2xl neon-border w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
