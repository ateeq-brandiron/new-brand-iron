import {
  Bot,
  Building2,
  Cpu,
  Landmark,
  ScrollText,
  Server,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  body: string[];
  focusAreas: string[];
  relatedServices: { title: string; href: string }[];
};

export const industries: Industry[] = [
  {
    slug: "ai-startups",
    title: "AI Startups",
    icon: Bot,
    summary:
      "Positioning and go-to-market for AI companies competing in the most crowded, fastest-moving category in tech.",
    body: [
      "Every AI startup claims to be the smartest player in the room — which means differentiation, credibility, and being findable inside the AI tools your buyers already use matter more than in almost any other category. We help AI companies get their positioning sharp, their capital raise materials investor-ready, and their brand visible in the AI answer engines evaluating them alongside competitors.",
    ],
    focusAreas: [
      "Category positioning in a crowded, fast-moving market",
      "Investor-ready capital raise decks and data rooms",
      "AI Visibility across ChatGPT, Perplexity, and Gemini",
      "Technical credibility without losing the business narrative",
    ],
    relatedServices: [
      { title: "AI Visibility & Discoverability", href: "/services/ai-visibility" },
      { title: "Capital Raise Support", href: "/services/capital-raise-support" },
      { title: "Brand Strategy", href: "/services/brand-strategy" },
    ],
  },
  {
    slug: "saas-companies",
    title: "SaaS Companies",
    icon: Server,
    summary:
      "Full-funnel GTM and revenue engineering for subscription software businesses scaling past their first channels.",
    body: [
      "SaaS growth lives or dies on funnel efficiency — CAC, activation, and expansion revenue. We bring GTM strategy, revenue engineering, and outbound growth together so SaaS teams have both the story and the systems to scale predictably.",
    ],
    focusAreas: [
      "Product-led vs. sales-led GTM strategy",
      "Marketing automation and lifecycle nurture",
      "Outbound and SDR programs for enterprise expansion",
      "Attribution across trial, activation, and expansion",
    ],
    relatedServices: [
      { title: "Go-To-Market Strategy", href: "/services/gtm-strategy" },
      { title: "Revenue Engineering", href: "/services/revenue-engineering" },
      { title: "Outbound Growth", href: "/services/outbound-growth" },
    ],
  },
  {
    slug: "technology-companies",
    title: "Technology Companies",
    icon: Cpu,
    summary:
      "Brand and marketing infrastructure for technology companies selling complex products to sophisticated buyers.",
    body: [
      "Technology companies often out-engineer their own marketing — strong product, unclear story. We translate technical depth into messaging and a website that a non-technical buyer or investor can actually evaluate, without dumbing down what makes the product genuinely differentiated.",
    ],
    focusAreas: [
      "Translating technical differentiation into buyer-facing messaging",
      "Website development built for technical credibility and conversion",
      "Competitor and market positioning analysis",
      "AI visibility for technical buying committees researching vendors",
    ],
    relatedServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy" },
      { title: "Website Development", href: "/services/website-development" },
      { title: "AI Visibility & Discoverability", href: "/services/ai-visibility" },
    ],
  },
  {
    slug: "real-estate-developers",
    title: "Real Estate Developers",
    icon: Building2,
    summary:
      "Brand, capital raise, and marketing support for developers raising project capital and marketing to buyers or tenants.",
    body: [
      "Real estate development straddles two audiences at once — the capital markets funding the project and the buyers or tenants filling it. We build the brand and materials that work for both, from the capital raise deck to the project marketing site.",
    ],
    focusAreas: [
      "Project and portfolio branding",
      "Capital raise decks for LPs and institutional investors",
      "Project marketing websites and landing pages",
      "Local and regional GTM for lease-up or sales campaigns",
    ],
    relatedServices: [
      { title: "Capital Raise Support", href: "/services/capital-raise-support" },
      { title: "Website Development", href: "/services/website-development" },
      { title: "Go-To-Market Strategy", href: "/services/gtm-strategy" },
    ],
  },
  {
    slug: "investment-firms",
    title: "Investment Firms",
    icon: Landmark,
    summary:
      "Brand and positioning for investment firms, funds, and the consumer/D2C brands in their portfolios.",
    body: [
      "We work with investment firms directly on fund and firm branding, and with the consumer and D2C brands in their portfolios — from emerging names to established players — on positioning, GTM, and AI visibility as category dynamics shift.",
    ],
    focusAreas: [
      "Fund and firm brand positioning",
      "Portfolio company brand and GTM support",
      "Consumer/D2C brand strategy and marketing",
      "Investor communications and LP materials",
    ],
    relatedServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy" },
      { title: "Capital Raise Support", href: "/services/capital-raise-support" },
      { title: "Go-To-Market Strategy", href: "/services/gtm-strategy" },
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    icon: ScrollText,
    summary:
      "Credibility-driven branding and demand generation for firms that sell expertise, not products.",
    body: [
      "Professional services firms sell trust before they sell anything else. We build positioning, content, and outbound systems that establish credibility and generate qualified pipeline — without resorting to the generic, interchangeable messaging most firms in this category default to.",
    ],
    focusAreas: [
      "Expertise-driven positioning and messaging",
      "Thought-leadership content and AI visibility",
      "Referral and outbound pipeline generation",
      "Website development built to convert high-consideration buyers",
    ],
    relatedServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy" },
      { title: "AI Visibility & Discoverability", href: "/services/ai-visibility" },
      { title: "Outbound Growth", href: "/services/outbound-growth" },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
