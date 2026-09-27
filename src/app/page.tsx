import type { Metadata } from "next";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { UnderConstruction } from "@/components/under-construction";
import { isUnderConstruction } from "@/data/construction";
import { siteConfig } from "@/data/site";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  if (!isUnderConstruction()) return {};

  return {
    title: `${siteConfig.name} — Under construction`,
    description: `${siteConfig.name}'s site is under construction and will return in late October 2026.`,
    robots: { index: true, follow: true },
  };
}

export default function Home() {
  if (isUnderConstruction()) {
    return <UnderConstruction />;
  }

  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
