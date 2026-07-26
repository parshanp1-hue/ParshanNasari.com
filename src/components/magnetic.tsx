"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type MagneticProps = {
  children: ReactNode;
  /** Max pull distance in px */
  strength?: number;
};

/** Wrapper that makes its child subtly pull toward the cursor. */
export function Magnetic({ children, strength = 8 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLSpanElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const relX = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    node.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
  }

  function handleMouseLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate(0, 0)";
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-300 ease-out will-change-transform"
    >
      {children}
    </span>
  );
}
