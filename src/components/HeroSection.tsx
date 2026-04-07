import heroImage from "@/assets/hero-image-v2.jpg";
import { CTAButton } from "@/components/CTAButton";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Homem focado usando tecnologia de IA"
          width={1024}
          height={1024}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        {/* Green glow behind subject */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary neon-border mb-6 animate-fade-in">
            Automação & Inteligência Artificial
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Enquanto você assiste…{" "}
            <span className="text-primary text-glow">
              alguém já está faturando com automação.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl">
            Aprenda a criar agentes de inteligência artificial que atendem, vendem e operam no automático — mesmo que você esteja começando do zero.
          </p>

          <p className="text-foreground/80 mb-8 text-base md:text-lg">
            Você não precisa ser programador.<br />
            <strong className="text-foreground">Você precisa entender o processo.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <CTAButton />
            <CTAButton text="VER COMO FUNCIONA" href="#como-funciona" secondary />
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Acesso imediato + prática desde o primeiro dia
          </p>
        </div>
      </div>
    </section>
  );
}
