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
      "Drive unit-cost down through vendor renegotiation, workforce controls, entity and EOR structuring, and facilities consolidation.",
      "Build global payment infrastructure for batch payouts across 25+ countries.",
      "Partner with leadership on financing strategy, diligence, and facility structuring.",
    ],
  },
  {
    title: "Operations & Workforce",
    bullets: [
      "Own a distributed workforce of hundreds across 25+ countries.",
      "Build the country-level org from zero — no inherited team or process required.",
      "Own QA and workforce performance analytics, pace analysis, and output acceptance methodology.",
      "Put in place HRIS and contractor-of-record layers, including EOR in markets without a local entity.",
      "Source, diligence, and manage dozens of capture and labeling partners — holding the commercial line on rates and converting pilots into six-figure-hour production.",
    ],
  },
  {
    title: "Commercial Contracting",
    bullets: [
      "Own the contract lifecycle end-to-end — drafting, redlining, negotiation, execution, and amendments — across a high-volume portfolio.",
      "Build the commercial contracting playbook for multi-jurisdiction vendor and partner agreements.",
      "Negotiate commercial terms across Southeast Asia, MENA, and North America.",
    ],
  },
  {
    title: "Regulatory & Compliance",
    bullets: [
      "Own multi-country privacy and data-protection compliance, directing build-outs for country-specific regimes.",
      "Design participant consent and notice frameworks for capture operations.",
    ],
  },
  {
    title: "Corporate, Entity & Facilities",
    bullets: [
      "Structure and stand up local operating entities across Southeast Asia.",
      "Manage registered agent, tax registration, and corporate filings.",
      "Negotiate commercial leases, ISP, data center, and logistics contracts across operating markets.",
    ],
  },
  {
    title: "Sales & Compensation Design",
    bullets: [
      "Author sales playbooks from scratch — call scripts, qualification frameworks, and objection- and rejection-handling material.",
      "Design compensation and commission structures for sales roles across operating countries.",
      "Lay out payroll and compensation bases in each country, aligning local pay practices with a single global framework.",
    ],
  },
  {
    title: "Risk & Controls",
    bullets: [
      "Detect and remediate payroll fraud, and build fraud-detection controls into payroll and QA analytics.",
      "Author company security protocol — leadership communications policy, phishing advisory, and cybersecurity training.",
      "Serve as external spokesperson on operational and regulatory matters.",
    ],
  },
];
