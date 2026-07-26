"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Display value, e.g. "650+", "$3.37M", "~80", "50%+" */
  value: string;
  durationMs?: number;
};

const NUMBER_PATTERN = /^([^\d]*)([\d.,]+)(.*)$/;

/**
 * Animates the numeric part of a stat string from 0 to its final value
 * when it scrolls into view. Prefix/suffix (currency signs, %, +, M/K)
 * are rendered as-is.
 */
export function CountUp({ value, durationMs = 1400 }: CountUpProps) {
  const match = value.match(NUMBER_PATTERN);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(match ? "0" : value);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !match) return;

    const [, , rawNumber] = match;
    const target = parseFloat(rawNumber.replace(/,/g, ""));
    const decimals = rawNumber.includes(".") ? rawNumber.split(".")[1].length : 0;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => setDisplay(rawNumber);

    if (typeof IntersectionObserver === "undefined" || prefersReducedMotion) {
      finish();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || started.current) return;
        started.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = target * eased;
          setDisplay(
            progress >= 1
              ? rawNumber
              : current.toLocaleString("en-US", {
                  minimumFractionDigits: decimals,
                  maximumFractionDigits: decimals,
                })
          );
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!match) return <span>{value}</span>;

  const [, prefix, , suffix] = match;

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
