import { siteConfig } from "@/data/site";

export const roleHeader = {
  company: "Mecka AI",
  titles: ["Head of Atlas Capture", "Lead, Finance & Operations"],
  dates: "October 2025 – Present",
  location: siteConfig.location,
  operatingIn: siteConfig.operatingIn,
};

export type CareerEntry = {
  company: string;
  title: string;
  dates: string;
  location: string;
  badge?: string;
  blurb?: string;
};

export const careerHistory: CareerEntry[] = [
  {
    company: "Keybox.ae",
    title: "Executive Director",
    dates: "July 2025 – Present",
    location: "Dubai, United Arab Emirates",
    badge: "Current",
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
      "Reduced cost per hour produced by 50%+, materially expanding EBITDA, through vendor rate renegotiation, payroll fraud remediation, entity and EOR restructuring, and facilities consolidation.",
      "Own global payment infrastructure — batch payouts via Wise and crypto rails across 28+ countries.",
      "Led reconciliation of $3.37M in uncategorized disbursements across two hot wallets.",
      "Reviewed a $50M senior secured receivables revolver LOI — facility terms and counter-positions.",
    ],
  },
  {
    title: "Operations & Workforce",
    bullets: [
      "Functional ownership of a 650+ person workforce across 28+ countries; 8 direct reports at peak.",
      "Built the country-level org structure from zero — no inherited team or process.",
      "Own QA and workforce performance analytics, pace analysis, and output acceptance methodology.",
      "Manage Deel as HRIS and contractor-of-record layer; own EOR relationships in markets without a local entity.",
      "Source, diligence, and manage 60+ capture and labeling partners across Asia, LATAM, and Eastern Europe — holding the commercial line on rates, owning onboarding end-to-end, and converting pilots to production including a 100,000-hour program expansion.",
    ],
  },
  {
    title: "Commercial Contracting",
    bullets: [
      "Own the contract lifecycle end-to-end — drafting, redlining, negotiation, execution, amendments. Sole signatory for Atlas Capture; ~80 active contract workstreams.",
      "Built the contracting playbook from scratch — governing law, arbitration seat, IP assignment, data and model-weight licensing, no auto-renewal.",
      "Negotiate against counterparty in-house counsel across 10+ jurisdictions; instruct outside counsel including Latham & Watkins and Fangda Partners.",
    ],
  },
  {
    title: "Regulatory & Compliance",
    bullets: [
      "Own the multi-country DPIA program across all operating jurisdictions.",
      "Direct compliance build-out for India's DPDP Act, PRC PIPL and cross-border transfer mechanisms, Vietnam's PDPL, the Philippines' DPA 10173, and Indonesia's PDP.",
      "Own participant consent architecture — recorder consent, site-owner releases, notice scripts, app privacy terms.",
    ],
  },
  {
    title: "Corporate, Entity & Facilities",
    bullets: [
      "Structured and stood up local operating entities across Indonesia, Vietnam, the Philippines, and China (WFOE).",
      "Remediated parent-level operating agreement structure and ownership chain.",
      "Manage registered agent, tax registration, and corporate filings.",
      "Negotiate commercial leases across Jakarta, Manila, and Ho Chi Minh City, plus ISP, data center, and logistics contracts.",
    ],
  },
  {
    title: "Risk & Controls",
    bullets: [
      "Detected and remediated a payroll fraud scheme — one inbox enrolled as ~49 separate workers — and built fraud-detection controls into payroll and QA analytics.",
      "Authored the company security protocol — leadership comms policy, all-staff phishing advisory, cybersecurity training program.",
      "Sole external spokesperson for Atlas Capture; manage labour-board proceedings and procedural filings.",
    ],
  },
];
