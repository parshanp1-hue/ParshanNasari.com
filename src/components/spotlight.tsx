"use client";

import { useEffect, useRef } from "react";

/** Faint gold glow that follows the cursor. Skipped entirely on touch devices. */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;

    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const node = ref.current;
        if (!node) return;
        node.style.background = `radial-gradient(560px circle at ${event.clientX}px ${event.clientY}px, rgba(201, 161, 90, 0.055), transparent 70%)`;
        node.style.opacity = "1";
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[80] opacity-0 transition-opacity duration-500"
    />
  );
}
