import { siteConfig } from "@/data/site";

export type CareerEntry = {
  company: string;
  title: string;
  dates: string;
  location: string;
  badge?: string;
  blurb?: string;
  /** Gold emphasis for the primary / featured role. */
  highlight?: boolean;
};

export const careerHistory: CareerEntry[] = [
  {
    company: "Mecka AI",
    title: "Lead, Finance & Operations",
    dates: "October 2025 – Present",
    location: siteConfig.location,
    badge: "Current",
    highlight: true,
  },
  {
    company: "Keybox.ae",
    title: "Executive Director",
    dates: "July 2025 – Present",
    location: "Dubai, United Arab Emirates",
  },
  {
    company: "Heat and Cool Inc.",
    title: "Owner & Chief Operating Officer",
    dates: "February 2019 – Present",
    location: "Toronto, Canada",
    badge: "Owner",
    blurb:
      "Owner-operator of an HVAC manufacturing business — end-to-end duct production, custom sheet metal fabrication, and residential house building.",
  },
  {
    company: "GlobalStarCoders",
    title: "Chief Operating Officer",
    dates: "January 2017 – May 2021",
    location: "New York, United States",
    badge: "Acquired 2021",
    blurb:
      "Ran the commercial engine of a New York software firm — owned financial planning and company-wide targets, led business development and key client relationships, and steered operations through to the company's sale in 2021.",
  },
];

export type ExperienceCategory = {
  title: string;
  bullets: string[];
};

export const experienceCategories: ExperienceCategory[] = [
  {
    title: "Finance & Unit Economics",
    bullets: [
      "Drove a double-digit percentage reduction in cost per hour produced through vendor renegotiation, workforce controls, entity and EOR restructuring, and facilities consolidation.",
      "Own global payment infrastructure supporting batch payouts across 25+ countries.",
      "Partner with leadership on financing strategy, diligence, and facility structuring.",
    ],
  },
  {
    title: "Operations & Workforce",
    bullets: [
      "Functional ownership of a workforce of several hundred across 25+ countries.",
      "Built the country-level org structure from zero — no inherited team or process.",
      "Own QA and workforce performance analytics, pace analysis, and output acceptance methodology.",
      "Manage global HRIS and contractor-of-record layer; own EOR relationships in markets without a local entity.",
      "Source, diligence, and manage dozens of capture and labeling partners across Asia, LATAM, and Eastern Europe — holding the commercial line on rates and converting pilots into six-figure-hour production programs.",
    ],
  },
  {
    title: "Commercial Contracting",
    bullets: [
      "Own the contract lifecycle end-to-end — drafting, redlining, negotiation, execution, and amendments — across a high-volume portfolio of active workstreams.",
      "Built the commercial contracting playbook from scratch for multi-jurisdiction vendor and partner agreements.",
      "Negotiate commercial terms across Southeast Asia, MENA, and North America.",
    ],
  },
  {
    title: "Regulatory & Compliance",
    bullets: [
      "Own multi-country privacy and data-protection compliance, directing build-outs for country-specific regimes across every operating market.",
      "Design and maintain participant consent and notice frameworks for capture operations.",
    ],
  },
  {
    title: "Corporate, Entity & Facilities",
    bullets: [
      "Structured and stood up local operating entities across Southeast Asia.",
      "Manage registered agent, tax registration, and corporate filings.",
      "Negotiate commercial leases, ISP, data center, and logistics contracts across operating markets.",
    ],
  },
  {
    title: "Sales & Compensation Design",
    bullets: [
      "Authored the sales playbooks from scratch — call scripts, qualification frameworks, and objection- and rejection-handling material used by the sales team.",
      "Designed the compensation and commission structures for sales roles across all operating countries.",
      "Laid out the payroll and compensation structure bases in every country, aligning local pay practices with a single global framework.",
    ],
  },
  {
    title: "Risk & Controls",
    bullets: [
      "Detected and remediated payroll fraud; built fraud-detection controls into payroll and QA analytics.",
      "Authored company security protocol — leadership communications policy, phishing advisory, and cybersecurity training.",
      "Serve as external spokesperson on operational and regulatory matters.",
    ],
  },
];
