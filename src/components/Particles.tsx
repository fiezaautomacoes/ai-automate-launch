import { useEffect, useState } from "react";

function Particle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <div
      className="particle absolute rounded-full bg-primary/30"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: `${Math.random() * 40}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${6 + Math.random() * 6}s`,
      }}
    />
  );
}

export function Particles() {
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      x: Math.random() * 100,
      size: 2 + Math.random() * 4,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}
    </div>
  );
}
