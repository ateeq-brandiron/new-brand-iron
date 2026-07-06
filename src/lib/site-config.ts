export const siteConfig = {
  name: "Brand Iron",
  tagline: "Forging Brands. Driving Revenue.™",
  description:
    "Brand Iron is a full-service branding, GTM, AI visibility, and capital raise agency that forges strong brands and drives measurable revenue.",
  url: "https://brandiron.net",
  phone: "303-534-1901",
  phoneHref: "tel:+13035341901",
  email: "hello@brandiron.net",
  address: "2590 Welton St. Suite 200, Denver, CO 80205",
  social: {
    linkedin: "https://www.linkedin.com/company/brand-iron/",
    instagram: "https://www.instagram.com/branding.iron/",
    facebook: "https://www.facebook.com/brandiron",
    twitter: "https://twitter.com/branding_iron",
  },
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Values & Beliefs", href: "/about/values" },
      { label: "Causes We Support", href: "/about/causes" },
      { label: "Projects", href: "/about/projects" },
      { label: "Legacy", href: "/about/legacy" },
      { label: "Relief Projects", href: "/about/relief-projects" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Brand Strategy", href: "/services/brand-strategy" },
      { label: "AI Visibility & Discoverability", href: "/services/ai-visibility" },
      { label: "Go-To-Market Strategy", href: "/services/gtm-strategy" },
      { label: "Capital Raise Support", href: "/services/capital-raise-support" },
      { label: "Revenue Engineering", href: "/services/revenue-engineering" },
      { label: "Outbound Growth", href: "/services/outbound-growth" },
      { label: "Website Development", href: "/services/website-development" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "AI Startups", href: "/industries/ai-startups" },
      { label: "SaaS Companies", href: "/industries/saas-companies" },
      { label: "Technology Companies", href: "/industries/technology-companies" },
      { label: "Real Estate Developers", href: "/industries/real-estate-developers" },
      { label: "Investment Firms", href: "/industries/investment-firms" },
      { label: "Professional Services", href: "/industries/professional-services" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Videos", href: "/resources/videos" },
      { label: "Webinars", href: "/resources/webinars" },
      { label: "Podcast Appearances", href: "/resources/podcast-appearances" },
      { label: "Resource Library", href: "/resources/resource-library" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const leadMagnets = [
  {
    slug: "ai-visibility-audit",
    title: "AI Visibility Audit",
    short: "AI Visibility Audit",
    description:
      "See how your brand shows up (or doesn't) across ChatGPT, Perplexity, Gemini, and Google's AI Overviews.",
    href: "/ai-visibility-audit",
  },
  {
    slug: "capital-raise-deck-audit",
    title: "Capital Raise Deck Audit",
    short: "Pitch Deck Audit",
    description:
      "Get an expert, investor-eyes review of your pitch deck before it lands in front of the people writing checks.",
    href: "/capital-raise-deck-audit",
  },
  {
    slug: "gtm-audit-review",
    title: "GTM Audit Review",
    short: "GTM Audit",
    description:
      "A candid review of your go-to-market plan, channels, and funnel — with a clear list of what to fix first.",
    href: "/gtm-audit-review",
  },
];
