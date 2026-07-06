import { Palette, Rocket, Sparkles, TrendingUp, type LucideIcon } from "lucide-react";

export type CaseStudyCategory = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
};

export const caseStudyCategories: CaseStudyCategory[] = [
  {
    slug: "brand-development",
    title: "Brand Development",
    icon: Palette,
    summary: "Brands built or rebuilt from the ground up with BrandStorm™ and Messaging Platform work.",
  },
  {
    slug: "gtm-success-stories",
    title: "GTM Success Stories",
    icon: Rocket,
    summary: "Go-to-market launches and growth engines across our Conservative, Moderate, and Aggressive tiers.",
  },
  {
    slug: "ai-visibility-wins",
    title: "AI Visibility Wins",
    icon: Sparkles,
    summary: "Brands that moved from invisible to cited across ChatGPT, Perplexity, Gemini, and AI Overviews.",
  },
  {
    slug: "revenue-growth-results",
    title: "Revenue Growth Results",
    icon: TrendingUp,
    summary: "Revenue Engineering and Outbound Growth work that turned pipeline into closed revenue.",
  },
];

export function getCaseStudyCategory(slug: string) {
  return caseStudyCategories.find((category) => category.slug === slug);
}
