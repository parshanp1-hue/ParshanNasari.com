import Image from "next/image";
import { Magnetic } from "@/components/magnetic";
import { siteConfig } from "@/data/site";

type LettersProps = {
  text: string;
  baseDelayMs: number;
  stepMs?: number;
};

/** Splits text into letters that rise in one by one. */
function Letters({ text, baseDelayMs, stepMs = 45 }: LettersProps) {
  return (
    <>
      {text.split("").map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="rise inline-block"
          style={{ "--rise-delay": `${baseDelayMs + index * stepMs}ms` } as React.CSSProperties}
        >
          {letter}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-start overflow-x-hidden border-b border-border/60 px-5 py-12 sm:px-8 sm:py-16 lg:items-center lg:py-16"
    >
      {/* backdrop: blueprint grid + drifting glow orbs */}
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="glow-orb absolute -top-32 left-1/4 h-[420px] w-[420px] bg-accent/[0.07]"
      />
      <div
        aria-hidden="true"
        className="glow-orb absolute top-1/3 -right-40 h-[520px] w-[520px] bg-accent-deep/[0.1]"
        style={{ animationDelay: "-7s" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* ---- copy ---- */}
        <div>
          <p
            className="rise font-mono text-[10px] uppercase tracking-[0.16em] text-accent sm:text-xs sm:tracking-[0.28em]"
            style={{ "--rise-delay": "100ms" } as React.CSSProperties}
          >
            Finance &amp; Operations Executive
          </p>

          <h1
            aria-label="Parshan Nasari"
            className="mt-5 text-[clamp(2.6rem,12vw,6.5rem)] leading-[0.95] font-semibold tracking-tight text-foreground sm:mt-6"
          >
            <span aria-hidden="true">
              <Letters text="Parshan" baseDelayMs={220} />
              <br />
              {/* Whole-word reveal: per-letter transforms/filters break background-clip:text */}
              <span
                className="rise font-display-italic text-gilded inline-block pr-2"
                style={{ "--rise-delay": "620ms" } as React.CSSProperties}
              >
                Nasari
              </span>
            </span>
          </h1>

          <div
            className="hairline-grow mt-6 h-px w-24 bg-gradient-to-r from-accent to-transparent sm:mt-8"
            style={{ "--rise-delay": "500ms" } as React.CSSProperties}
            aria-hidden="true"
          />

          <p
            className="rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:mt-8 sm:text-lg"
            style={{ "--rise-delay": "420ms" } as React.CSSProperties}
          >
            I run the money, the contracts, and the operations behind a{" "}
            <span className="text-foreground">workforce of hundreds across 25+ countries</span> — as
            Lead of Finance &amp; Operations at Mecka AI.
          </p>

          <div
            className="rise mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            style={{ "--rise-delay": "560ms" } as React.CSSProperties}
          >
            <Magnetic>
              <a
                href="#contact"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground sm:w-auto"
              >
                <span className="relative z-10">Get in touch</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#experience"
                className="inline-flex w-full items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent/60 hover:text-accent sm:w-auto"
              >
                View experience
              </a>
            </Magnetic>
          </div>

          <p
            className="rise mt-8 flex items-start gap-2.5 text-sm leading-snug text-muted sm:mt-10 sm:items-center"
            style={{ "--rise-delay": "700ms" } as React.CSSProperties}
          >
            <span className="status-dot mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent sm:mt-0" aria-hidden="true" />
            {siteConfig.role}
          </p>
        </div>

        {/* ---- portrait ---- */}
        <div className="relative mx-auto w-full max-w-[min(260px,100%)] sm:max-w-[360px] lg:max-w-[400px]">
          {/* offset gold frame — toned down on small screens to avoid horizontal overflow */}
          <div
            aria-hidden="true"
            className="absolute -inset-2 translate-y-2 rounded-2xl border border-accent/25 sm:-inset-3 sm:translate-x-4 sm:translate-y-4"
          />
          {/* corner ticks */}
          <div aria-hidden="true" className="absolute -top-2 -left-2 h-6 w-6 border-t border-l border-accent/70" />
          <div aria-hidden="true" className="absolute -bottom-2 -right-2 h-6 w-6 border-r border-b border-accent/70" />

          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/headshot.png"
              alt="Black-and-white portrait of Parshan Nasari"
              width={765}
              height={1024}
              priority
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 360px, 260px"
              className="portrait-in h-auto w-full"
            />
            {/* fade the portrait into the page at the bottom */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent"
            />
            {/* warm tint to marry the B&W photo with the palette */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-accent-deep/10 mix-blend-overlay"
            />
          </div>

          <div className="rise mt-4 text-center" style={{ "--rise-delay": "900ms" } as React.CSSProperties}>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground sm:tracking-[0.2em]">
              Based in {siteConfig.location}
            </p>
            <p className="mt-1.5 px-1 text-[11px] leading-relaxed text-muted sm:font-mono sm:text-[10px] sm:uppercase sm:tracking-[0.16em]">
              Operating across {siteConfig.operatingIn.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="rise absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent lg:block"
        style={{ "--rise-delay": "1100ms" } as React.CSSProperties}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 animate-bounce" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25 12 15.75 4.5 8.25" />
        </svg>
      </a>
    </section>
  );
}
