import {
  Award,
  DollarSign,
  FileText,
  Flame,
  LayoutGrid,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  Presentation,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { GraphicPanel } from "@/components/ui/GraphicPanel";

const stats = [
  { value: "$5", suffix: " Billion", label: "Raised" },
  { value: "200+", suffix: " Companies", label: "Branded/Rebranded" },
  { value: "500+", suffix: " Pitch Decks", label: "Created" },
];

const process = [
  {
    title: "Define",
    body: "what makes your business, idea, or investment opportunity unique, what your goals are, and how you measure success. Our BrandStorm™ strategic planning session goes beyond the investment opportunity to lay the foundation for all future marketing efforts.",
  },
  {
    title: "Discover",
    body: "your unique brand—we explore your key differentiators, value points, and your value proposition, then craft your unique brand story that sells and produces results. Plus, we align you with the right tech to get it all done, from CRM to marketing automation and how we track your success.",
  },
  {
    title: "Develop",
    body: "your messaging and marketing to engage your partners and general business community with our Messaging Platform, logo design, pitch deck, website strategy, and Go To Market plan. We ensure you have everything you need to successfully reach your target market.",
  },
  {
    title: "Deploy",
    body: "your unique plan with our Go To Market Strategy, outbound investor campaigns, social media, digital campaigns (paid and organic), capital raise decks and lead generation activities, brand & website development.",
  },
  {
    title: "Determine",
    body: "the next steps toward your profitable outcome handled entirely by our Business Development team or in tandem with your account manager, digital manager, creative or content team. We utilize tech tools to measure how you are doing in achieving your stated goals and objectives, and how your marketing is producing results to maximize your investment.",
  },
];

const quickServices = [
  { title: "Branding", href: "/services/brand-strategy", icon: Palette },
  {
    title: "Pitch Decks",
    href: "/services/capital-raise-support/capital-raise-deck",
    icon: Presentation,
  },
  {
    title: "Website Development",
    href: "/services/website-development",
    icon: MonitorSmartphone,
  },
  { title: "GTM Strategy", href: "/services/gtm-strategy", icon: TrendingUp },
  { title: "All Services", href: "/services", icon: LayoutGrid },
];

const expertiseGrid = [
  { title: "Define & Develop Your Brand", icon: Target },
  { title: "Build & Deploy Your Marketing Strategy", icon: Rocket },
  { title: "Create Your Pitch Deck", icon: Presentation },
  { title: "Craft Your Message", icon: MessageSquare },
  { title: "Design Your Website", icon: MonitorSmartphone },
  { title: "Secure Your Funding", icon: DollarSign },
  { title: "Maximize Your Results", icon: Award },
];

const forgeColumns = [
  {
    title: "Rebuild",
    subtitle: "Your Brand",
    body: "We forge strong and credible brands while giving you the tools needed to raise capital and market your new venture.",
    items: [
      {
        name: "BrandStorm™",
        body: "Good branding is more than just a memorable logo. This interactive session is designed to extract the essence of your business—from your story to your numbers—as materials for forging your brand.",
      },
      {
        name: "Messaging Platform",
        body: "Taken from ideas revealed in the BrandStorm, this personalized messaging and positioning platform clarifies your unique brand story, value, and market position, ensuring a unified voice and message for your pitch deck and marketing efforts.",
      },
    ],
  },
  {
    title: "Redefine",
    subtitle: "Your Marketing Strategies",
    body: "We customize, launch, and manage your effective marketing strategy.",
    items: [
      {
        name: "Go To Market Plan",
        body: "This actionable document is built from your Messaging Platform to create effective marketing strategies that achieve your goals and objectives to land the sales you need and gain a competitive advantage.",
      },
      {
        name: "Success Map™",
        body: "We establish KPIs to track performance leading to ROI.",
      },
      {
        name: "Brand Go",
        body: "We customize a budget-friendly marketing strategy that aligns both brand and market position.",
      },
      {
        name: "Marketing Automation Software (MAS) Implementation",
        body: "We identify key technology platforms, onboard your brand, then manage ongoing content creation to develop your brand recognition with your target market.",
      },
    ],
  },
];

const gritCards = [
  {
    title: "BrandStorm™",
    body: "Our proven process quickly discovers your current brand and market position",
  },
  {
    title: "Messaging Platform",
    body: "Design a brand identity and tell your story to effectively engage your niche market and audience",
  },
  {
    title: "Success Map™",
    body: "Tactical marketing assessment of goals and objectives to uncover the essential KPIs that lead to profitability and build the value of your brand",
  },
  {
    title: "Go To Market Strategy",
    body: "A marketing and sales process that drives results for each phase of your business",
  },
  {
    title: "Brand Go / MAS",
    body: "Implement our customized GTM strategy with marketing and lead-generation tactics to drive revenue and position your brand for long-term success, and track the Success Map™ KPIs for long-term ROI",
  },
];

const raiseSteps = [
  {
    title: "Customize Pitch Deck",
    body: "We work with you to ensure all design aligns with your brand, all financials are investor-ready, and all content speaks to your unique value proposition.",
  },
  {
    title: "Raise Capital",
    body: "We help you create the offer, get you ready for investment pitches, help you get in front of your target personas, and help you execute your raise.",
  },
  {
    title: "Build GTM Plan",
    body: "We develop a full build-out for your capital spend, bringing transparency to investors and preparing you for capital deployment.",
  },
  {
    title: "Deploy Capital",
    body: "We help you track spending, to ensure you have the best data-driven decisions that get your projects moving on-time and on-budget.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="overflow-hidden pb-12 pt-16 md:pt-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-iron-orange">
              In the Wild West of marketing,
            </h3>
            <h1 className="balance mt-2 text-5xl font-light leading-[1.05] text-iron-black md:text-6xl">
              Make your mark on the world
            </h1>
            <p className="mt-6 max-w-lg text-lg text-iron-body">
              Where brands, entrepreneurs, and businesses—from start-ups to
              large firms—achieve their desired outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Book a Strategy Call</ButtonLink>
              <ButtonLink href="/case-studies" variant="outline">
                See Our Work
              </ButtonLink>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-iron-line pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-black text-iron-black md:text-4xl">
                    {stat.value}
                    <span className="text-iron-orange">{stat.suffix}</span>
                  </dd>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-iron-body">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-iron-orange to-iron-orange-dark">
              <Flame className="h-1/3 w-1/3 text-white" strokeWidth={1} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Define / Discover / Develop / Deploy / Determine */}
      <Section className="bg-iron-mist py-14 md:py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-5">
            {process.map((step, i) => (
              <div key={step.title} className="relative">
                <span className="text-sm font-black text-iron-orange">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-bold text-iron-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-iron-body">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quick service icons */}
      <Section className="py-14 md:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {quickServices.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-iron-line p-6 text-center transition-colors hover:border-iron-orange"
              >
                <service.icon
                  className="h-10 w-10 text-iron-orange"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-bold text-iron-black group-hover:text-iron-orange">
                  {service.title}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Brand Iron gets you there / competition */}
      <Section className="bg-iron-black py-20 text-white">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Brand Iron gets you there.</Eyebrow>
            <h2 className="balance text-3xl font-light md:text-4xl">
              With our experts on your team, YOU&rsquo;RE the competition.
            </h2>
            <p className="mt-5 text-white/70">
              Branding requires the right elements for success. Our proven
              brand-building, messaging methodology, and marketing
              implementation ensures your business achieves your goals and
              objectives, positioning you and your business ahead of the
              competition. And we do it all at a fraction of the cost of a
              full-time marketing team.
            </p>
          </div>

          <h3 className="mt-14 text-sm font-bold uppercase tracking-[0.2em] text-iron-orange">
            Use Brand Iron&rsquo;s expertise to:
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
            {expertiseGrid.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 p-6"
              >
                <item.icon className="h-8 w-8 text-iron-orange" strokeWidth={1.5} />
                <span className="text-sm font-bold">{item.title}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Forge your next phase */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="balance text-3xl font-light text-iron-black md:text-4xl">
              Forge your next phase of success with Brand Iron
            </h2>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {forgeColumns.map((col) => (
              <div
                key={col.title}
                className="rounded-3xl border border-iron-line p-8 md:p-10"
              >
                <h3 className="text-2xl font-bold text-iron-orange">
                  {col.title}
                </h3>
                <p className="text-lg font-semibold text-iron-black">
                  {col.subtitle}
                </p>
                <p className="mt-3 text-iron-body">{col.body}</p>
                <ul className="mt-6 space-y-4">
                  {col.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-bold text-iron-black">{item.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-iron-body">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* If Grit & Gumption */}
      <Section className="bg-iron-mist">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Brand Iron</Eyebrow>
            <h2 className="balance text-3xl font-light text-iron-black md:text-4xl">
              If Grit &amp; Gumption Were a Branding Agency
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {gritCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold text-iron-black">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-iron-body">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capital raise */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="balance text-3xl font-light text-iron-black md:text-4xl">
                We&rsquo;ve helped our clients raise over $5 Billion
              </h2>
              <p className="mt-2 text-iron-body">
                — and we&rsquo;re confident we can help you raise capital,
                too.
              </p>
              <h3 className="mt-8 text-xl font-bold text-iron-orange">
                Secure Investor Funding
              </h3>
              <p className="mt-3 text-iron-body">
                We capture investors&rsquo; attention so you can get the
                funding your brand deserves with our proprietary Capital
                Pitch Decks that have successfully secured over $5 billion for
                our clients.
              </p>
              <ButtonLink href="/capital-raise-deck-audit" className="mt-6">
                Let&rsquo;s promote your business next.
              </ButtonLink>
            </div>
            <GraphicPanel icon={FileText} label="Capital Raise Deck" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {raiseSteps.map((step, i) => (
              <div key={step.title}>
                <span className="text-sm font-black text-iron-orange">
                  0{i + 1}
                </span>
                <h4 className="mt-2 font-bold text-iron-black">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-iron-body">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Kicking Ass */}
      <Section className="bg-iron-orange">
        <Container className="text-center">
          <p className="text-lg font-semibold text-white/80">
            We&rsquo;re In Your Back Pocket,
          </p>
          <h2 className="balance mx-auto mt-2 max-w-3xl text-3xl font-light text-white md:text-4xl">
            But We&rsquo;re Kicking Typical Branding Agency Ass
          </h2>
          <ButtonLink
            href="/about"
            variant="secondary"
            className="mt-8 bg-white text-iron-black hover:bg-white/90"
          >
            Get To Know Us
          </ButtonLink>
        </Container>
      </Section>

      {/* Free Pitch Deck Audit */}
      <Section className="bg-iron-black">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Free Pitch Deck Audit</Eyebrow>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">
              * Limited to First 3 Qualified Companies per Week *
            </p>
            <h2 className="balance mt-3 text-3xl font-light text-white md:text-4xl">
              Already have a pitch deck? Let us review it for you!
            </h2>
            <p className="mt-4 text-white/70">
              If you qualify, our resident pitch deck team expert will
              personally review your current pitch deck! Click below for an
              account manager to determine if you qualify as one of our 3
              reviews per week.
            </p>
            <ButtonLink href="/capital-raise-deck-audit" className="mt-6">
              Let&rsquo;s Go!
            </ButtonLink>
          </div>
          <GraphicPanel icon={Presentation} label="Pitch Deck Review" tone="black" />
        </Container>
      </Section>
    </>
  );
}
