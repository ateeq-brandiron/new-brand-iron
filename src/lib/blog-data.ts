export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-ai-visibility-is-the-new-seo",
    title: "Why AI Visibility Is the New SEO",
    excerpt:
      "Buyers are asking ChatGPT and Perplexity before they ever open Google. Here's what that means for how brands need to structure their content and authority.",
    category: "AI Visibility",
    readTime: "6 min read",
    body: [
      "For two decades, being findable meant ranking on page one of Google. That's no longer the whole game. A growing share of research — for products, vendors, and even investment opportunities — now starts with a direct question to an AI model.",
      "The mechanics are different. AI engines don't just rank pages, they synthesize an answer from sources they trust, and they cite (or don't cite) brands based on structured, well-sourced, clearly-attributed content. A brand can rank #1 on Google and still be entirely absent from an AI Overview or a ChatGPT answer about its own category.",
      "That's the gap our AI Visibility & Discoverability practice exists to close — starting with a diagnostic that shows you exactly where you stand today, not a generic SEO audit repackaged with AI branding.",
    ],
  },
  {
    slug: "what-actually-belongs-in-a-pitch-deck",
    title: "What Actually Belongs in a Pitch Deck (and What Doesn't)",
    excerpt:
      "After reviewing hundreds of pitch decks, the ones that get funded almost never look like the ones founders are proudest of. Here's the pattern.",
    category: "Capital Raise",
    readTime: "8 min read",
    body: [
      "The instinct in most first-draft decks is to explain everything — the full market opportunity, every feature, every possible use case. Investors don't need everything. They need to quickly answer three questions: is this a real problem, can this team solve it, and is the math believable.",
      "The decks that convert do less, better: a sharp problem statement, a credible and differentiated solution, a go-to-market plan that shows the team understands distribution (not just product), and financials that are defensible under questioning rather than aspirational.",
      "This is exactly why we build capital raise decks directly from a Messaging Platform, not a template — the story has to survive an investor's first hard question, not just look good on slide one.",
    ],
  },
  {
    slug: "the-five-d-framework-for-brand-launches",
    title: "The Five-D Framework We Use for Every Brand Launch",
    excerpt:
      "Define, Discover, Develop, Deploy, Determine — the process behind every BrandStorm™ engagement, and why the order matters.",
    category: "Brand Strategy",
    readTime: "5 min read",
    body: [
      "Most branding goes sideways when teams jump to design before they've agreed on what the business is actually claiming to be. Our process is deliberately sequential: Define what makes the business unique and how success is measured, Discover the brand story and differentiators, Develop the messaging and visual identity, Deploy it across channels, and Determine the next steps based on real performance data.",
      "Skipping straight to 'Develop' — logo, deck, website — without the Define and Discover work underneath it is the single most common reason rebrands don't move the numbers they were supposed to move.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
