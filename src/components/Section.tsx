import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  const ref = useScrollReveal();
  return (
    <section id={id} ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </section>
  );
}
