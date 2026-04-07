import { Section } from "@/components/Section";
import robotWhatsapp from "@/assets/robot-whatsapp.jpg";
import dashboardIa from "@/assets/dashboard-ia.jpg";
import agenteIa from "@/assets/agente-ia.jpg";
import workflowN8n from "@/assets/workflow-n8n.jpg";

const cards = [
  { title: "Agente de WhatsApp automático", image: robotWhatsapp },
  { title: "Sistema de agendamento inteligente", image: dashboardIa },
  { title: "Follow-up automático", image: agenteIa },
  { title: "Mini sistema interno", image: workflowN8n },
];

export function WhatYouBuildSection() {
  return (
    <Section className="py-20 md:py-32 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          O que você vai <span className="text-primary text-glow">criar</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Você não vai assistir. <strong className="text-foreground">Você vai construir.</strong>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-xl overflow-hidden neon-border bg-card hover:neon-glow transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
