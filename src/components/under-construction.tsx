import { siteConfig } from "@/data/site";
import { UNDER_CONSTRUCTION_UNTIL } from "@/data/construction";

function formatReturnDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Toronto",
  }).format(date);
}

export function UnderConstruction() {
  const returnsOn = formatReturnDate(UNDER_CONSTRUCTION_UNTIL);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-5 py-16 sm:px-8">
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

      <div className="relative mx-auto w-full max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent sm:text-xs sm:tracking-[0.28em]">
          Under construction
        </p>

        <h1 className="mt-6 text-[clamp(2.6rem,12vw,6.5rem)] leading-[0.95] font-semibold tracking-tight text-foreground">
          {siteConfig.name.split(" ")[0]}
          <br />
          <span className="font-display-italic text-gilded">{siteConfig.name.split(" ").slice(1).join(" ")}</span>
        </h1>

        <div
          className="mt-8 h-px w-24 bg-gradient-to-r from-accent to-transparent"
          aria-hidden="true"
        />

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          The site is being rebuilt. It will be back on{" "}
          <span className="text-foreground">{returnsOn}</span>.
        </p>

        <ul className="mt-12 space-y-5">
          <li>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:tracking-[0.25em]">
              Email
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1.5 inline-block max-w-full break-all text-base text-foreground underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent sm:text-lg"
            >
              {siteConfig.email}
            </a>
          </li>
          <li>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:tracking-[0.25em]">
              LinkedIn
            </p>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-block max-w-full break-words text-base text-foreground underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent sm:text-lg"
            >
              linkedin.com/in/parshan-nasari
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
