import { aboutCopy, stats } from "@/data/about";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-border/60 px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
      <span aria-hidden="true" className="ghost-numeral">
        01
      </span>
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          number="01"
          eyebrow="About"
          heading="I can build the backbone of a"
          accent="global workforce."
        />

        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div className="space-y-6">
            {aboutCopy.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delayMs={index * 80}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={160}>
            <blockquote className="relative rounded-2xl border border-accent/20 bg-card p-6 sm:p-8">
              <span aria-hidden="true" className="font-display-italic text-gilded absolute -top-5 left-5 text-6xl sm:-top-6 sm:left-6 sm:text-7xl">
                &ldquo;
              </span>
              <p className="font-quote text-lg leading-relaxed text-foreground sm:text-2xl">
                No inherited team required. I can build the process from zero — and run it lean.
              </p>
            </blockquote>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-16 sm:grid-cols-3 lg:mt-20">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              as="li"
              delayMs={index * 60}
              className="bg-card p-4 sm:p-6 lg:p-8"
            >
              <p className="text-2xl font-semibold tracking-tight text-gilded sm:text-3xl lg:text-4xl">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-2 text-xs leading-snug text-muted sm:mt-3 sm:text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
