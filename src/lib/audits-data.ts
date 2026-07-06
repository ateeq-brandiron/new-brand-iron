import { BadgeDollarSign, Rocket, Sparkles, type LucideIcon } from "lucide-react";

export type AuditPage = {
  slug: string;
  title: string;
  icon: LucideIcon;
  eyebrow: string;
  headline: string;
  subheadline: string;
  whatYouGet: string[];
  whoItsFor: string;
  limitedAvailability?: string;
};

export const auditPages: AuditPage[] = [
  {
    slug: "ai-visibility-audit",
    title: "AI Visibility Audit",
    icon: Sparkles,
    eyebrow: "Free Audit",
    headline: "See how AI models talk about your brand — before your competitors do.",
    subheadline:
      "We'll run your brand and your category's core questions through ChatGPT, Perplexity, Gemini, and Google's AI Overviews, and show you exactly where you're visible, cited, or missing entirely.",
    whatYouGet: [
      "AI visibility scorecard across 4+ major platforms",
      "Competitor share-of-voice comparison",
      "Top 3 prioritized fixes to improve your visibility",
      "A 20-minute walkthrough with our AI Visibility team",
    ],
    whoItsFor:
      "Founders, marketing leaders, and investors who want a clear, honest read on where their brand stands in AI-driven search today.",
  },
  {
    slug: "capital-raise-deck-audit",
    title: "Capital Raise Deck Audit",
    icon: BadgeDollarSign,
    eyebrow: "Free Audit",
    headline: "Already have a pitch deck? Let us review it before investors do.",
    subheadline:
      "Our resident pitch deck experts will personally review your current deck — structure, narrative, financials, and design — and tell you exactly what needs to change before it lands in front of investors.",
    whatYouGet: [
      "Slide-by-slide review from our capital raise team",
      "Narrative and financial-credibility assessment",
      "Investor-readiness scorecard",
      "Prioritized list of fixes before your next pitch",
    ],
    whoItsFor:
      "Founders and developers actively raising or preparing to raise capital.",
    limitedAvailability: "Limited to the first 3 qualified companies per week.",
  },
  {
    slug: "gtm-audit-review",
    title: "GTM Audit Review",
    icon: Rocket,
    eyebrow: "Free Audit",
    headline: "A candid review of your go-to-market plan — and what to fix first.",
    subheadline:
      "We'll review your current channels, messaging, and funnel against your goals and tell you plainly what's working, what isn't, and where the highest-leverage fix actually is.",
    whatYouGet: [
      "Channel and funnel review against your goals",
      "Messaging and positioning gap analysis",
      "Prioritized roadmap of fixes",
      "A working session with our GTM strategy team",
    ],
    whoItsFor:
      "GTM, marketing, and sales leaders who suspect their current plan isn't hitting its ceiling but aren't sure why.",
  },
];

export function getAuditPage(slug: string) {
  return auditPages.find((audit) => audit.slug === slug);
}
