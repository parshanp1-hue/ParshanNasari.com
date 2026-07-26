import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
      <span aria-hidden="true" className="ghost-numeral">
        03
      </span>
      <div
        aria-hidden="true"
        className="glow-orb absolute -bottom-40 right-1/4 h-[460px] w-[460px] bg-accent/[0.06]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-20">
          <div className="contents lg:block">
            <div className="order-1">
              <SectionHeading
                number="03"
                eyebrow="Contact"
                heading="Let's"
                accent="talk."
                description="Open to conversations about finance & operations leadership roles, advisory work, or partnerships."
              />
            </div>

            <Reveal delayMs={140} className="order-3 mt-2 lg:mt-12">
              <ul className="space-y-6">
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
                <li>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:tracking-[0.25em]">
                    Location
                  </p>
                  <p className="mt-1.5 flex items-center gap-2.5 text-base text-foreground sm:text-lg">
                    <span className="status-dot h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    Based in {siteConfig.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Hands-on across {siteConfig.operatingIn.join(", ").replace(/, ([^,]*)$/, " & $1")}
                  </p>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delayMs={80} className="order-2 lg:pt-1">
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-7 lg:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
