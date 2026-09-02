import { careerHistory, experienceCategories } from "@/data/experience";
import { GlowCard } from "@/components/glow-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden border-b border-border/60 px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
      <span aria-hidden="true" className="ghost-numeral">
        02
      </span>
      <div
        aria-hidden="true"
        className="glow-orb absolute top-40 -left-52 h-[480px] w-[480px] bg-accent-deep/[0.08]"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          number="02"
          eyebrow="Experience"
          heading="What I bring"
          accent="to the table."
          description="The functions I can own, grouped by domain — finance, operations, contracting, and the on-the-ground build."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2">
          {experienceCategories.map((category, index) => (
            <Reveal key={category.title} delayMs={(index % 2) * 70}>
              <GlowCard className="card-lift group h-full rounded-2xl border border-border bg-card p-5 sm:p-7">
                <article aria-labelledby={`category-${index}`}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 id={`category-${index}`} className="min-w-0 text-base font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="shrink-0 font-mono text-xs text-muted/60 transition-colors duration-300 group-hover:text-accent"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="mt-4 h-px w-full bg-gradient-to-r from-accent/40 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <ul className="mt-5 space-y-3.5">
                    {category.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        {/* ---- career history timeline ---- */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent sm:tracking-[0.28em]">
              Career history
            </p>
          </Reveal>

          <ol className="mt-8 space-y-0 border-l border-border pl-6 sm:mt-10 sm:pl-10">
            {careerHistory.map((entry, index) => (
              <Reveal key={entry.company} as="li" delayMs={index * 90} className="relative pb-10 last:pb-0 sm:pb-12">
                {/* timeline dot */}
                <span
                  aria-hidden="true"
                  className={`absolute top-1.5 -left-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-accent sm:-left-10 ${
                    entry.highlight ? "bg-accent" : "bg-background"
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3
                    className={`text-lg ${
                      entry.highlight ? "font-bold text-gilded" : "font-semibold text-foreground"
                    }`}
                  >
                    {entry.company}
                  </h3>
                  {entry.badge && (
                    <span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                      {entry.badge}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-1 text-sm ${
                    entry.highlight ? "font-semibold text-gilded" : "text-muted"
                  }`}
                >
                  {entry.title} · {entry.location}
                </p>
                <p
                  className={`mt-1 font-mono text-xs uppercase tracking-[0.15em] ${
                    entry.highlight ? "font-bold text-accent" : "text-muted/70"
                  }`}
                >
                  {entry.dates}
                </p>
                {entry.blurb && (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{entry.blurb}</p>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
