interface CTAButtonProps {
  text?: string;
  href?: string;
  secondary?: boolean;
  className?: string;
}

export function CTAButton({ text = "COMEÇAR AGORA", href = "#oferta", secondary = false, className = "" }: CTAButtonProps) {
  if (secondary) {
    return (
      <a
        href={href}
        className={`inline-flex items-center px-8 py-4 rounded-lg border border-primary/40 text-primary font-semibold text-lg hover:bg-primary/10 hover:border-primary/60 hover:scale-105 transition-all duration-300 ${className}`}
      >
        {text}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`inline-flex items-center px-10 py-5 rounded-lg bg-primary text-primary-foreground font-bold text-xl btn-glow hover:brightness-110 hover:scale-105 transition-all duration-300 ${className}`}
    >
      {text}
    </a>
  );
}

export function CTABanner({ className = "" }: { className?: string }) {
  return (
    <div className={`py-12 md:py-16 text-center ${className}`}>
      <CTAButton />
      <p className="mt-4 text-sm text-muted-foreground">Acesso imediato + prática desde o primeiro dia</p>
    </div>
  );
}
