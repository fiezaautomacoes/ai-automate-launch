import { Section } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso saber programar?", a: "Não." },
  { q: "Vou conseguir mesmo sendo iniciante?", a: "Sim, o curso é prático." },
  { q: "Em quanto tempo vejo resultado?", a: "Primeiro agente já no primeiro dia." },
  { q: "Vou ter suporte?", a: "Sim." },
  { q: "Preciso pagar ferramentas?", a: "Sim, VPS (baixo custo)." },
  { q: "Posso vender isso depois?", a: "Sim, esse é um dos objetivos." },
];

export function FAQSection() {
  return (
    <Section className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Perguntas <span className="text-primary text-glow">frequentes</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl bg-card neon-border px-6 border-b-0"
            >
              <AccordionTrigger className="text-foreground hover:no-underline text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
