import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";

export default function Home() {
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
