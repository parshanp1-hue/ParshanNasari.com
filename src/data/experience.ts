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
    title: "Head of Atlas Capture · Lead, Finance & Operations",
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
      "Reduced cost per hour produced by 50%+ through vendor renegotiation, workforce controls, entity and EOR restructuring, and facilities consolidation.",
      "Own global payment infrastructure supporting batch payouts across 28+ countries.",
      "Partner with leadership on financing strategy, diligence, and facility structuring.",
    ],
  },
  {
    title: "Operations & Workforce",
    bullets: [
      "Functional ownership of a 650+ person workforce across 28+ countries; 8 direct reports at peak.",
      "Built the country-level org structure from zero — no inherited team or process.",
      "Own QA and workforce performance analytics, pace analysis, and output acceptance methodology.",
      "Manage global HRIS and contractor-of-record layer; own EOR relationships in markets without a local entity.",
      "Source, diligence, and manage 60+ capture and labeling partners across Asia, LATAM, and Eastern Europe — holding the commercial line on rates and converting pilots to production, including a 100,000-hour program expansion.",
    ],
  },
  {
    title: "Commercial Contracting",
    bullets: [
      "Own the contract lifecycle end-to-end — drafting, redlining, negotiation, execution, and amendments; ~80 active contract workstreams.",
      "Built the commercial contracting playbook from scratch for multi-jurisdiction vendor and partner agreements.",
      "Negotiate commercial terms across the markets I've operated in — Jakarta, Manila, Ho Chi Minh City, Dubai, Istanbul, and New York.",
    ],
  },
  {
    title: "Regulatory & Compliance",
    bullets: [
      "Own multi-country privacy and data-protection compliance across all operating jurisdictions.",
      "Direct compliance build-out for India's DPDP Act, PRC PIPL and cross-border transfer mechanisms, Vietnam's PDPL, the Philippines' DPA 10173, and Indonesia's PDP.",
      "Design and maintain participant consent and notice frameworks for capture operations.",
    ],
  },
  {
    title: "Corporate, Entity & Facilities",
    bullets: [
      "Structured and stood up local operating entities across Indonesia, Vietnam, the Philippines, and China.",
      "Manage registered agent, tax registration, and corporate filings.",
      "Negotiate commercial leases across Jakarta, Manila, and Ho Chi Minh City, plus ISP, data center, and logistics contracts.",
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
      "Serve as external spokesperson for Atlas Capture on operational and regulatory matters.",
    ],
  },
];
