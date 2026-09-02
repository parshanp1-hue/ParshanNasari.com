/**
 * Central site configuration. Update these values as real contact details,
 * a domain, and profile links become available — everything else in the
 * site reads from here.
 */
export const siteConfig = {
  name: "Parshan Nasari",
  role: "Lead, Finance & Operations — Mecka AI",
  tagline:
    "I can build the finance and operations infrastructure behind large, distributed workforces.",
  /** Home base — where you're from / based. */
  location: "Toronto, Canada",
  /** Regions where you actively run finance & operations. */
  operatingIn: ["Southeast Asia", "MENA", "North America"],

  // TODO: replace with your purchased domain once available.
  url: "https://parshannasari.com",

  email: "parshan.nasari@hotmail.com",

  social: {
    linkedin: "https://ca.linkedin.com/in/parshan-nasari-a93188113",
  },

  seo: {
    title: "Parshan Nasari — Finance & Operations Executive",
    description:
      "Parshan Nasari can build finance and operations for distributed workforces — unit economics, commercial contracting, and on-the-ground market launches across 25+ countries.",
    keywords: [
      "Parshan Nasari",
      "Finance Executive",
      "Operations Executive",
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
