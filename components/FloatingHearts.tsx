"use client";

import { useMemo } from "react";

const SYMBOLS = ["♥", "♡", "✦", "❀"];

type Particle = {
  id: number;
  symbol: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftR: number;
  opacity: number;
  color: string;
};

/**
 * A quiet drift of hearts and small ornaments rising in the background.
 * This is the site's one continuous motion moment — deliberately sparse
 * so it reads as atmosphere, not decoration on every element.
 */
export default function FloatingHearts({ count = 18 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    const colors = ["var(--gold)", "var(--blush)", "var(--gold-soft)"];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: SYMBOLS[i % SYMBOLS.length],
      left: Math.random() * 100,
      size: 12 + Math.random() * 22,
      duration: 16 + Math.random() * 18,
      delay: -(Math.random() * 30),
      driftX: (Math.random() - 0.5) * 120,
      driftR: (Math.random() - 0.5) * 60,
      opacity: 0.15 + Math.random() * 0.35,
      color: colors[i % colors.length],
    }));
  }, [count]);

  return (
    <div className="floating-layer" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-symbol"
          style={
            {
              left: `${p.left}%`,
              fontSize: `${p.size}px`,
              color: p.color,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift-x": `${p.driftX}px`,
              "--drift-r": `${p.driftR}deg`,
              "--sym-opacity": p.opacity,
            } as React.CSSProperties
          }
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
