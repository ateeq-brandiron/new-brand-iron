import {
  BadgeDollarSign,
  Compass,
  LineChart,
  Megaphone,
  MonitorSmartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type PlanOption = {
  name: string;
  tagline: string;
  body: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  deliverables: string[];
  planOptions?: PlanOption[];
};

export type ServicePillar = {
  slug: string;
  title: string;
  navLabel: string;
  icon: LucideIcon;
  summary: string;
  description: string[];
  items: ServiceItem[];
};

export const servicePillars: ServicePillar[] = [
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    navLabel: "Brand Strategy",
    icon: Compass,
    summary:
      "The research, positioning, and messaging foundation every other service builds on.",
    description: [
      "Every Brand Iron engagement starts here. Before a pitch deck, a website, or a single outbound email goes out, we need to know exactly who you're for, who you're up against, and what you're actually saying. Brand Strategy is where that gets defined, tested, and documented so every team downstream — creative, GTM, outbound — is working from the same source of truth.",
    ],
    items: [
      {
        slug: "market-research",
        title: "Market Research",
        summary: "Grounding your brand and GTM decisions in real market data, not assumptions.",
        body: [
          "We size your market, map buyer segments, and pressure-test the assumptions behind your business model before you spend a dollar on marketing or a raise. This is the fact base every later decision — positioning, pricing, channel selection — gets checked against.",
        ],
        deliverables: [
          "TAM/SAM/SOM sizing",
          "Buyer persona and segment definitions",
          "Voice-of-customer interview synthesis",
          "Market trends and timing analysis",
        ],
      },
      {
        slug: "competitor-analysis",
        title: "Competitor Analysis",
        summary: "Know exactly where you win, where you don't, and where the white space is.",
        body: [
          "We map your direct and indirect competitors across positioning, pricing, channels, and messaging — including how they show up in AI search and LLM answers — so your differentiation claims hold up under scrutiny from customers, investors, and now, AI models.",
        ],
        deliverables: [
          "Competitive landscape map",
          "Positioning gap analysis",
          "Pricing and packaging benchmarks",
          "AI/search visibility comparison",
        ],
      },
      {
        slug: "brand-positioning",
        title: "Brand Positioning",
        summary: "A defensible, differentiated market position your whole team can rally behind.",
        body: [
          "Positioning is the single sentence your business has to be right about. We stress-test category choice, competitive frame, and unique value until we land on a position that's true, ownable, and provable — then document it so sales, marketing, and leadership never drift from it.",
        ],
        deliverables: [
          "Positioning statement and category definition",
          "Value proposition framework",
          "Proof-point inventory",
          "Internal alignment workshop",
        ],
      },
      {
        slug: "messaging-framework",
        title: "Messaging Framework",
        summary: "One message, adapted consistently across every audience and channel.",
        body: [
          "Built directly from your BrandStorm™ and positioning work, the Messaging Framework gives every team a shared library of headlines, value pillars, proof points, and objection handling — so your pitch deck, website, and outbound emails all sound like the same company.",
        ],
        deliverables: [
          "Core message architecture",
          "Audience-specific message variants",
          "Objection-handling library",
          "Tone and voice guidelines",
        ],
      },
      {
        slug: "brand-development",
        title: "Brand Development",
        summary: "Visual identity and brand systems built to hold up across every touchpoint.",
        body: [
          "Logo, color, type, and brand system — designed to work as hard on a pitch deck slide as it does on a landing page or a LinkedIn ad. We build brand systems, not just style guides, so your identity scales as you add channels and teams.",
        ],
        deliverables: [
          "Logo and visual identity system",
          "Brand guidelines",
          "Templated brand assets",
          "Naming support (as needed)",
        ],
      },
    ],
  },
  {
    slug: "ai-visibility",
    title: "AI Visibility & Discoverability",
    navLabel: "AI Visibility & Discoverability",
    icon: Sparkles,
    summary:
      "Make sure ChatGPT, Perplexity, Gemini, and Google's AI Overviews recommend you — not just your competitors.",
    description: [
      "Search behavior has shifted from typing keywords into Google to asking AI models direct questions. If your brand, your category expertise, and your proof points aren't structured for AI to find and cite, you're invisible in a growing share of the moments that matter. This practice diagnoses, builds, and compounds your visibility across AI-driven discovery — in four tiers, so you can start where your business actually is today.",
    ],
    items: [
      {
        slug: "overview",
        title: "Overview",
        summary: "How Brand Iron approaches AI visibility, end to end.",
        body: [
          "AI Visibility & Discoverability is built as a ladder: diagnose where you stand, fix the technical and content foundation, build topical authority, then defend and extend market dominance. Every tier compounds on the one before it — you don't need to buy the top of the ladder to get real value from the bottom.",
        ],
        deliverables: [
          "AI visibility scoring methodology",
          "Cross-platform coverage: ChatGPT, Perplexity, Gemini, Google AI Overviews",
          "Clear tier-by-tier roadmap",
        ],
      },
      {
        slug: "tier-0-diagnostic",
        title: "Tier 0: AI Visibility Diagnostic",
        summary: "Find out exactly how (or if) AI models talk about you today.",
        body: [
          "Before you invest in fixing anything, you need a baseline. We run your brand, your competitors, and your category's core questions through the major AI engines and score what comes back — accuracy, sentiment, share of voice, and where you're simply absent.",
        ],
        deliverables: [
          "AI visibility scorecard across 4+ platforms",
          "Category question coverage audit",
          "Competitor share-of-voice comparison",
          "Prioritized findings summary",
        ],
      },
      {
        slug: "tier-1-seo-foundation",
        title: "Tier 1: SEO & AI Foundation",
        summary: "Fix the technical and content foundation both Google and AI models need to trust you.",
        body: [
          "AI models still lean heavily on well-structured, crawlable, and clearly-sourced content. Tier 1 closes the technical SEO gaps, structures your content and schema markup for machine readability, and builds the core content assets AI engines pull from when answering questions about your category.",
        ],
        deliverables: [
          "Technical SEO audit and fixes",
          "Schema/structured data implementation",
          "Core topic and FAQ content build-out",
          "Citation and knowledge-panel groundwork",
        ],
      },
      {
        slug: "tier-2-ai-authority-growth",
        title: "Tier 2: AI Authority Growth System",
        summary: "An ongoing system to build topical authority AI engines cite as a source.",
        body: [
          "Tier 2 is where visibility becomes a system rather than a project — a recurring content, PR, and structured-data engine built to earn citations across AI answer engines. Choose the pace that matches your growth stage and budget.",
        ],
        deliverables: [
          "Recurring authority content calendar",
          "Digital PR and citation building",
          "Structured data expansion",
          "Monthly AI visibility reporting",
        ],
        planOptions: [
          {
            name: "Conservative",
            tagline: "Steady authority building",
            body: "A lighter monthly cadence of content and citation work for teams validating the channel before scaling spend.",
          },
          {
            name: "Moderate",
            tagline: "Balanced growth engine",
            body: "Our most common package — consistent content, PR, and structured data velocity built to move rankings and citations within a quarter.",
          },
          {
            name: "Aggressive",
            tagline: "Maximum velocity",
            body: "High-frequency content, PR, and technical work for brands that need to out-pace competitors' AI visibility fast, e.g. ahead of a raise or launch.",
          },
        ],
      },
      {
        slug: "tier-3-ai-market-dominance",
        title: "Tier 3: AI Market Dominance Engine",
        summary: "Defend and extend category leadership across every AI discovery surface.",
        body: [
          "For brands that already lead their category, Tier 3 is about staying there — continuous monitoring, rapid response to model updates, proprietary data and research assets that AI engines can't help but cite, and defense against competitors trying to close the gap.",
        ],
        deliverables: [
          "Continuous AI monitoring and alerting",
          "Proprietary research/data asset development",
          "Competitive defense playbook",
          "Executive visibility reporting",
        ],
      },
    ],
  },
  {
    slug: "gtm-strategy",
    title: "Go-To-Market Strategy",
    navLabel: "Go-To-Market Strategy",
    icon: LineChart,
    summary: "A tiered go-to-market plan and engine, sized to your growth stage.",
    description: [
      "Your Messaging Platform tells people what to say. Go-To-Market Strategy tells your team who to say it to, through which channels, in what sequence, and how you'll know it's working. We build the plan and, at higher tiers, the engine that runs it.",
    ],
    items: [
      {
        slug: "overview",
        title: "Overview",
        summary: "How our GTM tiers work together.",
        body: [
          "GTM Strategy is built in three tiers so you can match investment to growth stage — foundation for teams validating their first channels, a growth engine for teams scaling what's working, and a revenue accelerator for teams under pressure to hit an aggressive number.",
        ],
        deliverables: [
          "Channel prioritization framework",
          "GTM plan documentation",
          "Success Map™ KPI tracking",
        ],
      },
      {
        slug: "tier-1-foundation",
        title: "Tier 1 Conservative (Foundation)",
        summary: "Validate your core channels and messaging before scaling spend.",
        body: [
          "For early-stage teams who need a documented, testable go-to-market plan — the right channels, the right sequencing, and the KPIs that tell you what's actually working before you commit meaningful budget.",
        ],
        deliverables: [
          "GTM plan and channel roadmap",
          "Success Map™ KPI framework",
          "Initial campaign build",
        ],
      },
      {
        slug: "tier-2-growth-engine",
        title: "Tier 2 Moderate (Growth Engine)",
        summary: "Scale the channels that are working with a managed, multi-channel engine.",
        body: [
          "Once you know what's working, Tier 2 builds the operational engine around it — content, outbound, paid, and marketing automation working in concert, with monthly reporting against your Success Map™ KPIs.",
        ],
        deliverables: [
          "Multi-channel campaign management",
          "Marketing automation build-out",
          "Monthly performance reporting",
        ],
      },
      {
        slug: "tier-3-revenue-accelerator",
        title: "Tier 3 Aggressive (Revenue Accelerator)",
        summary: "Full-funnel, high-velocity GTM execution for aggressive revenue targets.",
        body: [
          "Tier 3 pairs our GTM strategy with Revenue Engineering and Outbound Growth to run a full-funnel, high-velocity system — built for teams under real pressure to hit a number, whether that's ahead of a raise, a board meeting, or a growth milestone.",
        ],
        deliverables: [
          "Full-funnel campaign orchestration",
          "Dedicated outbound and SDR support",
          "Weekly pipeline and revenue attribution reporting",
        ],
      },
    ],
  },
  {
    slug: "capital-raise-support",
    title: "Capital Raise Support",
    navLabel: "Capital Raise Support",
    icon: BadgeDollarSign,
    summary: "The decks, database, and outreach that have helped clients raise over $5 billion.",
    description: [
      "We've built and supported capital raises since day one — not as a side offering, but as one of the disciplines Brand Iron was built around. From the deck itself to the investors it lands in front of, this is where brand, story, and financials meet the people writing checks.",
    ],
    items: [
      {
        slug: "capital-raise-deck",
        title: "Capital Raise Deck",
        summary: "Investor-ready decks built on your Messaging Platform, not a generic template.",
        body: [
          "Every deck we build is grounded in your Messaging Platform and Brand Positioning work, so the story, the numbers, and the design all reinforce the same narrative. We work directly with your team to make sure financials are investor-ready and every slide earns its place.",
        ],
        deliverables: [
          "Full pitch deck design and copy",
          "Financial narrative alignment",
          "Investor Q&A prep support",
        ],
      },
      {
        slug: "investor-database",
        title: "Investor Database of 150k",
        summary: "Direct access to a curated database of 150,000+ investors.",
        body: [
          "We maintain and continuously refine a database of over 150,000 investors, segmented by stage, sector, and check size, so outreach goes to people who actually invest in businesses like yours — not a generic list.",
        ],
        deliverables: [
          "Targeted investor list build",
          "Segmentation by stage, sector, check size",
          "CRM-ready investor data",
        ],
      },
      {
        slug: "investor-outreach-campaigns",
        title: "Investor Outreach Campaigns",
        summary: "Structured outbound campaigns that get your deck in front of the right investors.",
        body: [
          "We run structured, sequenced outreach campaigns to targeted investors on your behalf — tracking opens, responses, and meetings booked so you always know where your raise stands.",
        ],
        deliverables: [
          "Outreach sequence design and copy",
          "Campaign execution and tracking",
          "Meeting booking and pipeline reporting",
        ],
      },
      {
        slug: "investor-gtm-support",
        title: "Investor GTM Support",
        summary: "Positioning your go-to-market story for the investors evaluating it.",
        body: [
          "Investors aren't just buying your product story — they're buying your go-to-market plan. We help translate your GTM Strategy into the language and proof points investors expect to see in diligence.",
        ],
        deliverables: [
          "GTM narrative for investor materials",
          "Diligence-ready GTM documentation",
          "Data room support",
        ],
      },
    ],
  },
  {
    slug: "revenue-engineering",
    title: "Revenue Engineering",
    navLabel: "Revenue Engineering",
    icon: LineChart,
    summary: "The systems and operations layer that turns marketing activity into tracked revenue.",
    description: [
      "Great campaigns still fail without the operational plumbing to route, nurture, and report on the leads they generate. Revenue Engineering is the systems layer — automation, CRM, funnel, and attribution — that makes sure nothing falls through the cracks and every dollar of spend can be traced to a result.",
    ],
    items: [
      {
        slug: "marketing-automation",
        title: "Marketing Automation",
        summary: "Automated nurture and lifecycle marketing built on the right platform for your team.",
        body: [
          "We select, implement, and manage marketing automation platforms so leads get nurtured consistently — without your team manually managing every email and follow-up sequence.",
        ],
        deliverables: [
          "Platform selection and implementation",
          "Lifecycle nurture sequences",
          "Lead scoring setup",
        ],
      },
      {
        slug: "crm-optimization",
        title: "CRM Optimization",
        summary: "A CRM your sales and marketing teams actually trust and use.",
        body: [
          "We clean up, configure, and connect your CRM to marketing and sales workflows so pipeline data is accurate, deduplicated, and actually usable for forecasting and reporting.",
        ],
        deliverables: [
          "CRM audit and cleanup",
          "Pipeline and stage configuration",
          "Marketing/sales workflow integration",
        ],
      },
      {
        slug: "revenue-operations",
        title: "Revenue Operations",
        summary: "Aligning marketing, sales, and customer success around one revenue process.",
        body: [
          "We design the handoffs, SLAs, and shared definitions (what's a lead, an MQL, an SQL) that keep marketing, sales, and customer success working from the same playbook instead of three different spreadsheets.",
        ],
        deliverables: [
          "RevOps process documentation",
          "Lead handoff and SLA design",
          "Cross-team reporting alignment",
        ],
      },
      {
        slug: "funnel-optimization",
        title: "Funnel Optimization",
        summary: "Find and fix the leaks between a click and a closed deal.",
        body: [
          "We audit every stage of your funnel — from first touch to closed revenue — to find where prospects are dropping off, and prioritize the fixes that move the most revenue for the least effort.",
        ],
        deliverables: [
          "Full-funnel conversion audit",
          "Prioritized optimization roadmap",
          "A/B testing plan",
        ],
      },
      {
        slug: "reporting-attribution",
        title: "Reporting & Attribution",
        summary: "Know exactly which channels and campaigns are driving revenue.",
        body: [
          "We build attribution and reporting dashboards that connect marketing activity all the way to closed revenue, so budget decisions are based on what's actually working.",
        ],
        deliverables: [
          "Multi-touch attribution setup",
          "Executive revenue dashboards",
          "Monthly performance reviews",
        ],
      },
    ],
  },
  {
    slug: "outbound-growth",
    title: "Outbound Growth",
    navLabel: "Outbound Growth",
    icon: Megaphone,
    summary: "Human-led outbound programs that book meetings, not just send messages.",
    description: [
      "Outbound is still one of the fastest ways to generate pipeline when it's targeted, sequenced, and followed up on properly. We run outbound as a program — targeting, messaging, and appointment setting — not a one-off blast.",
    ],
    items: [
      {
        slug: "linkedin-outreach",
        title: "LinkedIn Outreach",
        summary: "Targeted, personalized LinkedIn campaigns to your exact buyer profile.",
        body: [
          "We identify and engage your ideal buyers directly on LinkedIn with sequenced, personalized outreach built from your Messaging Framework — not generic connection-request spam.",
        ],
        deliverables: [
          "ICP-targeted prospect lists",
          "Sequenced outreach messaging",
          "Response handling and booking",
        ],
      },
      {
        slug: "email-outreach",
        title: "Email Outreach",
        summary: "Deliverability-safe, personalized cold email campaigns at scale.",
        body: [
          "We build and run cold email programs with proper domain and deliverability setup, personalized sequences, and continuous testing to keep reply rates healthy as volume scales.",
        ],
        deliverables: [
          "Domain and deliverability setup",
          "Sequence copywriting and testing",
          "Reply and booking management",
        ],
      },
      {
        slug: "sdr-programs",
        title: "SDR Programs",
        summary: "Dedicated outbound talent running your pipeline generation full-time.",
        body: [
          "For teams that need dedicated capacity, we staff and manage SDR programs focused entirely on outbound pipeline generation, reporting into your existing sales process.",
        ],
        deliverables: [
          "SDR staffing and management",
          "Outbound playbook and scripts",
          "Pipeline handoff process",
        ],
      },
      {
        slug: "appointment-setting",
        title: "Appointment Setting",
        summary: "Qualified meetings booked directly onto your team's calendar.",
        body: [
          "We handle qualification and scheduling so your closers only spend time on meetings that are actually worth taking.",
        ],
        deliverables: [
          "Qualification framework",
          "Calendar booking integration",
          "No-show follow-up process",
        ],
      },
      {
        slug: "sales-enablement",
        title: "Sales Enablement",
        summary: "Equip your sales team with the messaging and materials that close.",
        body: [
          "We arm your sales team with battle cards, objection handling, and pitch materials pulled directly from your Messaging Framework, so every conversation reinforces the same story.",
        ],
        deliverables: [
          "Sales battle cards",
          "Objection-handling playbook",
          "Pitch and proposal templates",
        ],
      },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    navLabel: "Website Development",
    icon: MonitorSmartphone,
    summary: "Strategy-first websites built to convert and, increasingly, to be read by AI.",
    description: [
      "Your website is where every other service converges — brand, messaging, GTM, and now AI visibility all have to work through it. We build sites strategically, not just visually: fast, structured, and built to convert both human visitors and the AI models increasingly summarizing them.",
    ],
    items: [
      {
        slug: "website-strategy",
        title: "Website Strategy",
        summary: "The sitemap, content strategy, and conversion plan before a single page is designed.",
        body: [
          "Before design starts, we define the sitemap, content priorities, and conversion paths so the site is built to do a job — generate leads, support a raise, rank — not just look good.",
        ],
        deliverables: [
          "Sitemap and information architecture",
          "Content and conversion strategy",
          "Technical requirements brief",
        ],
      },
      {
        slug: "website-design-development",
        title: "Website Design & Development",
        summary: "Custom design and development built on modern, fast, SEO-ready foundations.",
        body: [
          "We design and build sites on modern frameworks built for speed, structured data, and easy content management — the same foundation this Brand Iron site is built on.",
        ],
        deliverables: [
          "Custom UI design",
          "Front-end development",
          "CMS setup and training",
        ],
      },
      {
        slug: "landing-pages",
        title: "Landing Pages",
        summary: "High-converting landing pages for campaigns, audits, and lead magnets.",
        body: [
          "We build dedicated landing pages for campaigns, paid traffic, and lead-gen offers — like our own AI Visibility Audit and Capital Raise Deck Audit — optimized specifically for conversion.",
        ],
        deliverables: [
          "Campaign landing page design/build",
          "Form and CRM integration",
          "Conversion tracking setup",
        ],
      },
      {
        slug: "ux-ui-optimization",
        title: "UX/UI Optimization",
        summary: "Ongoing testing and refinement to improve usability and conversion.",
        body: [
          "We continuously test and refine navigation, layout, and calls to action on existing sites to remove friction and lift conversion rates over time.",
        ],
        deliverables: [
          "UX audit and heuristic review",
          "A/B testing roadmap",
          "Iterative design updates",
        ],
      },
      {
        slug: "website-maintenance",
        title: "Website Maintenance",
        summary: "Ongoing updates, performance monitoring, and technical support.",
        body: [
          "We keep your site fast, secure, and up to date — performance monitoring, dependency updates, and content changes — so it never becomes the thing slowing your marketing down.",
        ],
        deliverables: [
          "Ongoing technical maintenance",
          "Performance and uptime monitoring",
          "Content update support",
        ],
      },
    ],
  },
];

export function getPillar(slug: string) {
  return servicePillars.find((pillar) => pillar.slug === slug);
}

export function getServiceItem(pillarSlug: string, itemSlug: string) {
  const pillar = getPillar(pillarSlug);
  const item = pillar?.items.find((i) => i.slug === itemSlug);
  return pillar && item ? { pillar, item } : null;
}
