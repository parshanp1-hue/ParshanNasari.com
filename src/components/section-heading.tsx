import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  heading: string;
  /** Optional trailing phrase rendered in gilded serif italic */
  accent?: string;
  description?: string;
};

export function SectionHeading({ number, eyebrow, heading, accent, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <p className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent sm:text-xs sm:tracking-[0.28em]">
          <span aria-hidden="true" className="text-muted">
            {number} /
          </span>
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delayMs={60}>
        <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {heading}{" "}
          {accent && <span className="font-display-italic text-gilded">{accent}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delayMs={120}>
          <p className="mt-5 text-base leading-relaxed text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
