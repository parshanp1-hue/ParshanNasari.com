/**
 * Central site configuration. Update these values as real contact details,
 * a domain, and profile links become available — everything else in the
 * site reads from here.
 */
export const siteConfig = {
  name: "Parshan Nasari",
  role: "Head of Atlas Capture · Lead, Finance & Operations — Mecka AI",
  tagline:
    "Finance & operations executive building the infrastructure behind large, distributed workforces.",
  /** Home base — where you're from / based. */
  location: "Toronto, Canada",
  /** Markets where you actively run finance & operations. */
  operatingIn: [
    "Indonesia",
    "Vietnam",
    "Turkey",
    "Dubai",
    "United States",
    "Philippines",
  ],

  // TODO: replace with your purchased domain once available.
  url: "https://parshannasari.com",

  email: "parshan.nasari@hotmail.com",

  social: {
    linkedin: "https://ca.linkedin.com/in/parshan-nasari-a93188113",
  },

  seo: {
    title: "Parshan Nasari — Finance & Operations Executive",
    description:
      "Parshan Nasari leads Atlas Capture, Mecka AI's data-collection subsidiary — a 650+ person distributed workforce across 28+ countries. Finance, operations, and commercial contracting leadership.",
    keywords: [
      "Parshan Nasari",
      "Finance Executive",
      "Operations Executive",
      "Atlas Capture",
      "Mecka AI",
      "Commercial Contracting",
      "Workforce Operations",
    ],
  },
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;
