"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

/** Card whose border/interior glows gold at the pointer's position. */
export function GlowCard({ children, className = "" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`glow-card ${className}`}>
      {children}
    </div>
  );
}
