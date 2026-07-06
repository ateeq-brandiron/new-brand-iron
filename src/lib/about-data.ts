import {
  Compass,
  Globe2,
  HandHeart,
  HeartHandshake,
  LifeBuoy,
} from "lucide-react";

export type AboutPage = {
  slug: string;
  title: string;
  navLabel: string;
  icon: typeof Compass;
  summary: string;
  body: string[];
  highlights: { title: string; body: string }[];
};

export const aboutPages: AboutPage[] = [
  {
    slug: "values",
    title: "Our Values & Beliefs",
    navLabel: "Values & Beliefs",
    icon: Compass,
    summary:
      "The principles that shape how we forge brands, run our business, and show up for our clients.",
    body: [
      "Brand Iron was built on the belief that good branding is more than a logo — it's the discipline of getting a business's story, numbers, and strategy to point in the same direction. Every engagement, from a first BrandStorm™ session to a Tier 3 AI Market Dominance build, is held to the same standard: work that's honest about where a client stands today and rigorous about how we get them further.",
      "We measure ourselves the way we ask clients to measure their own marketing — against outcomes, not activity. That means we'd rather tell a client a plan isn't working than keep billing for it, and we build our own AI visibility, GTM, and revenue engineering playbooks in public, on our own site, before we ever sell them.",
    ],
    highlights: [
      {
        title: "Outcomes over optics",
        body: "We track the same KPIs we ask our clients to track — pipeline, funded capital, ranked visibility — not vanity metrics.",
      },
      {
        title: "Candor first",
        body: "Every audit we run (AI Visibility, GTM, Capital Raise Deck) is built to tell you the truth, even when it's not flattering.",
      },
      {
        title: "Craft over templates",
        body: "BrandStorm™, Messaging Platform, and Success Map™ exist because off-the-shelf branding rarely survives contact with a real market.",
      },
    ],
  },
  {
    slug: "causes",
    title: "Causes We Support",
    navLabel: "Causes We Support",
    icon: HeartHandshake,
    summary:
      "Brand Iron dedicates time, pro-bono strategy work, and philanthropic support to causes our team believes in.",
    body: [
      "Beyond client work, our team commits a portion of its time and resources to organizations working on economic opportunity, entrepreneurship access, and community resilience. We believe the same branding and go-to-market discipline we bring to venture-backed startups and capital raises can meaningfully help mission-driven organizations grow their impact.",
    ],
    highlights: [
      {
        title: "Pro-bono brand strategy",
        body: "Select nonprofits and founders receive discounted or pro-bono BrandStorm™ and Messaging Platform sessions each year.",
      },
      {
        title: "Community partnerships",
        body: "We partner with local Denver organizations supporting small business and entrepreneurship access.",
      },
      {
        title: "Team-driven giving",
        body: "Our team nominates and votes on the causes we support annually, keeping it grounded in what our people care about.",
      },
    ],
  },
  {
    slug: "projects",
    title: "Projects",
    navLabel: "Projects",
    icon: Globe2,
    summary:
      "A look at the city, regional, and global initiatives Brand Iron has contributed strategy and creative to.",
    body: [
      "Some of our most meaningful work happens outside a standard client engagement — city initiatives, economic development projects, and cross-border ventures where a strong brand and a credible go-to-market plan carry outsized weight. This is where we house that portfolio as it grows.",
    ],
    highlights: [
      {
        title: "City & regional initiatives",
        body: "Brand and messaging support for local economic development and civic projects.",
      },
      {
        title: "Global ventures",
        body: "GTM and capital raise support for founders and organizations operating across borders.",
      },
    ],
  },
  {
    slug: "legacy",
    title: "Legacy",
    navLabel: "Legacy",
    icon: HandHeart,
    summary:
      "The story of how Brand Iron was forged, and the milestones that have shaped the agency since.",
    body: [
      "Brand Iron started with a simple frustration: most branding agencies stop at the logo and most growth agencies never touch the brand. We built Brand Iron to close that gap — one team, one strategic thread, from BrandStorm™ through capital raise through the marketing engine that keeps compounding after the raise closes.",
      "Since then, that thread has run through 200+ companies branded or rebranded, 500+ pitch decks built, and more than $5 billion raised by our clients — and it's the same thread now running through our AI Visibility & Discoverability practice as the way people find and vet brands keeps changing.",
    ],
    highlights: [
      { title: "$5B+", body: "Raised by clients using Brand Iron capital raise decks and strategy." },
      { title: "200+", body: "Companies branded or rebranded from the ground up." },
      { title: "500+", body: "Pitch decks designed, written, and refined for fundraising." },
    ],
  },
  {
    slug: "relief-projects",
    title: "Relief Projects",
    navLabel: "Relief Projects",
    icon: LifeBuoy,
    summary:
      "Rapid-response brand, messaging, and marketing support Brand Iron has provided in moments of crisis or need.",
    body: [
      "When communities or organizations we care about are hit by disaster or crisis, Brand Iron mobilizes the same creative and strategy team we put behind funded startups — messaging, campaign creative, and outreach support — to help relief efforts reach the people who need them faster.",
    ],
    highlights: [
      {
        title: "Rapid messaging support",
        body: "Fast-turnaround messaging and campaign creative for relief organizations during active crises.",
      },
      {
        title: "Outreach amplification",
        body: "Using our outbound and social channels to extend the reach of relief campaigns we support.",
      },
    ],
  },
];

export function getAboutPage(slug: string) {
  return aboutPages.find((page) => page.slug === slug);
}
