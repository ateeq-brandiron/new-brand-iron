import {
  BadgeDollarSign,
  Building2,
  Compass,
  MonitorSmartphone,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type PricingPackage = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  bestFor: string;
  includes: string[];
  relatedService: { title: string; href: string };
};

export const pricingPackages: PricingPackage[] = [
  {
    slug: "ai-visibility-packages",
    title: "AI Visibility Packages",
    icon: Sparkles,
    summary: "From a one-time diagnostic to an always-on AI Market Dominance engine.",
    bestFor: "Brands that need to know — and improve — how AI models talk about them.",
    includes: [
      "Tier 0: AI Visibility Diagnostic",
      "Tier 1: SEO & AI Foundation",
      "Tier 2: AI Authority Growth System (Conservative / Moderate / Aggressive)",
      "Tier 3: AI Market Dominance Engine",
    ],
    relatedService: { title: "AI Visibility & Discoverability", href: "/services/ai-visibility" },
  },
  {
    slug: "gtm-packages",
    title: "GTM Packages",
    icon: Rocket,
    summary: "A go-to-market plan and engine sized to your growth stage.",
    bestFor: "Teams validating channels through teams scaling an aggressive revenue target.",
    includes: [
      "Tier 1 Conservative (Foundation)",
      "Tier 2 Moderate (Growth Engine)",
      "Tier 3 Aggressive (Revenue Accelerator)",
    ],
    relatedService: { title: "Go-To-Market Strategy", href: "/services/gtm-strategy" },
  },
  {
    slug: "brand-development-packages",
    title: "Brand Development Packages",
    icon: Compass,
    summary: "BrandStorm™, Messaging Platform, and full visual identity systems.",
    bestFor: "New ventures and companies rebranding ahead of a raise or relaunch.",
    includes: [
      "BrandStorm™ strategic planning session",
      "Messaging Platform",
      "Visual identity & brand system",
      "Brand guidelines",
    ],
    relatedService: { title: "Brand Strategy", href: "/services/brand-strategy" },
  },
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    icon: Building2,
    summary: "Custom, multi-discipline engagements for larger organizations.",
    bestFor: "Organizations needing brand, GTM, AI visibility, and revenue engineering coordinated as one program.",
    includes: [
      "Dedicated account and strategy team",
      "Custom scope across all Brand Iron services",
      "Executive reporting cadence",
    ],
    relatedService: { title: "All Services", href: "/services" },
  },
  {
    slug: "capital-raise-deck",
    title: "Capital Raise Deck",
    icon: BadgeDollarSign,
    summary: "Investor-ready pitch decks, investor database access, and outreach campaigns.",
    bestFor: "Founders and developers actively raising capital.",
    includes: [
      "Capital Raise Deck design & narrative",
      "Investor Database of 150k",
      "Investor Outreach Campaigns",
      "Investor GTM Support",
    ],
    relatedService: { title: "Capital Raise Support", href: "/services/capital-raise-support" },
  },
  {
    slug: "website-development",
    title: "Website Development",
    icon: MonitorSmartphone,
    summary: "Strategy-first websites, from a single landing page to a full rebuild.",
    bestFor: "Teams that need a site built to convert and to be read by both people and AI.",
    includes: [
      "Website Strategy",
      "Website Design & Development",
      "Landing Pages",
      "UX/UI Optimization & Maintenance",
    ],
    relatedService: { title: "Website Development", href: "/services/website-development" },
  },
];

export function getPricingPackage(slug: string) {
  return pricingPackages.find((pkg) => pkg.slug === slug);
}
