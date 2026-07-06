import {
  FileText,
  LayoutGrid,
  MonitorSmartphone,
  Palette,
  Presentation,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GraphicPanel } from "@/components/ui/GraphicPanel";

const stats = [
  { value: "$5", suffix: " Billion", label: "Raised" },
  { value: "200+", suffix: " Companies", label: "Branded/Rebranded" },
  { value: "500+", suffix: " Pitch Decks", label: "Created" },
];

const processRow1 = [
  {
    title: "Define",
    body: "what makes your business, idea, or investment opportunity unique, what your goals are, and how you measure success. Our BrandStorm™ strategic planning session goes beyond the investment opportunity to lay the foundation for all future marketing efforts.",
  },
  {
    title: "Discover",
    body: "your unique brand—we explore your key differentiators, value points, and your value proposition, then craft your unique brand story that sells and produces results. Plus, we align you with the right tech to get it all done, from CRM to marketing automation and how we track your success.",
  },
];

const processRow2 = [
  {
    title: "Develop",
    body: "your messaging and marketing to engage your partners and general business community with our Messaging Platform, logo design, pitch deck, website strategy, and Go To Market plan. We ensure you have everything you need to successfully reach your target market.",
  },
  {
    title: "Deploy",
    body: "your unique plan with our Go To Market Strategy, outbound investor campaigns, social media, digital campaigns (paid and organic), capital raise decks and lead generation activities, brand & website development.",
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

const expertiseItems = [
  { bold: "Define", rest: "And Develop Your Brand" },
  { bold: "Craft", rest: "Your Message" },
  { bold: "Build", rest: "And Deploy Your Marketing Strategy" },
  { bold: "Design", rest: "Your Website" },
  { bold: "Create", rest: "Your Pitch Deck" },
  { bold: "Secure", rest: "Your Funding" },
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
    bg: "bg-iron-panel-dark",
    text: "text-white",
    sub: "text-white/70",
  },
  {
    title: "Raise Capital",
    body: "We help you create the offer, get you ready for investment pitches, help you get in front of your target personas, and help you execute your raise.",
    bg: "bg-iron-panel-mid",
    text: "text-white",
    sub: "text-white/70",
  },
  {
    title: "Build GTM Plan",
    body: "We develop a full build-out for your capital spend, bringing transparency to investors and preparing you for capital deployment.",
    bg: "bg-iron-panel-light",
    text: "text-iron-black",
    sub: "text-iron-black/70",
  },
  {
    title: "Deploy Capital",
    body: "We help you track spending, to ensure you have the best data-driven decisions that get your projects moving on-time and on-budget.",
    bg: "bg-iron-panel-pale",
    text: "text-iron-black",
    sub: "text-iron-black/70",
  },
];

function WatermarkHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="balance text-center text-4xl font-bold uppercase leading-tight text-iron-black/10 md:text-6xl">
      {children}
    </h2>
  );
}

function ExpertiseItem({
  bold,
  rest,
  align,
}: {
  bold: string;
  rest: string;
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "md:text-right" : ""}>
      <p className="text-xl font-bold text-iron-black md:text-2xl">
        {bold} <span className="font-normal">{rest}</span>
      </p>
      <div
        className={`mt-2 flex items-stretch gap-2 ${
          align === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <span className="text-2xl font-bold leading-none text-iron-orange">
          {align === "right" ? "]" : "["}
        </span>
        <div className="flex-1 space-y-1">
          <div className="h-0.5 w-full bg-iron-orange" />
          <div className="h-0.5 w-full bg-iron-orange" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Watermark tagline */}
      <div className="overflow-hidden pt-16">
        <Container>
          <p className="balance text-center text-4xl font-bold uppercase leading-none text-iron-black/10 md:text-7xl">
            Outlaws of Ordinary
          </p>
          <p className="mt-2 text-center text-sm font-bold uppercase tracking-[0.3em] text-iron-black/20">
            Forging Unique Brands in Unique Ways
          </p>
        </Container>
      </div>

      {/* Hero */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="ml-auto max-w-2xl">
            <h3 className="text-lg font-bold uppercase text-iron-black">
              In the Wild West of marketing,
            </h3>
            <h1 className="balance mt-2 text-5xl font-bold uppercase leading-[1.05] text-iron-black md:text-6xl">
              Make your mark on the world
            </h1>
            <p className="mt-6 max-w-lg text-lg text-iron-body">
              Where brands, entrepreneurs, and businesses—from start-ups to
              large firms—achieve their desired outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Book a Strategy Call</ButtonLink>
              <ButtonLink href="/case-studies" variant="link">
                See Our Work
              </ButtonLink>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-iron-line pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-iron-black md:text-3xl">
                    {stat.value}
                    <span className="text-iron-orange">{stat.suffix}</span>
                  </dd>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-iron-body">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </div>

      {/* Process: zigzag rows */}
      <div className="py-16 md:py-24">
        <Container className="space-y-16 md:space-y-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-10">
              {processRow1.map((step) => (
                <div key={step.title}>
                  <h3 className="text-3xl font-bold uppercase text-iron-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-iron-body">{step.body}</p>
                </div>
              ))}
            </div>
            <GraphicPanel icon={Target} label="Brand Discovery" />
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <GraphicPanel icon={Rocket} label="Go-To-Market Deployment" />
            </div>
            <div className="order-1 space-y-10 md:order-2">
              {processRow2.map((step) => (
                <div key={step.title}>
                  <h3 className="text-3xl font-bold uppercase text-iron-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-iron-body">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold uppercase text-iron-black">
              Determine
            </h3>
            <p className="mt-3 text-iron-body">
              the next steps toward your profitable outcome handled entirely
              by our Business Development team or in tandem with your account
              manager, digital manager, creative or content team. We utilize
              tech tools to measure how you are doing in achieving your
              stated goals and objectives, and how your marketing is
              producing results to maximize your investment.
            </p>
          </div>
        </Container>
      </div>

      {/* Quick service links */}
      <div className="border-y border-iron-line py-14">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {quickServices.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group flex flex-col items-center gap-3 text-center"
              >
                <service.icon
                  className="h-9 w-9 text-iron-black group-hover:text-iron-orange"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-bold uppercase tracking-wide text-iron-orange">
                  {service.title}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Brand Iron gets you there / competition */}
      <div className="py-20 md:py-28">
        <Container>
          <h2 className="balance mx-auto max-w-4xl text-center text-4xl font-bold uppercase leading-tight text-iron-black md:text-6xl">
            Brand Iron gets you there.
          </h2>

          <div className="mt-16 max-w-2xl">
            <p className="text-lg font-semibold text-iron-black">
              With our experts on your team,
            </p>
            <h3 className="mt-1 text-3xl font-bold uppercase text-iron-black md:text-4xl">
              You&rsquo;re the competition.
            </h3>
            <p className="mt-5 text-iron-body">
              Branding requires the right elements for success. Our proven
              brand-building, messaging methodology, and marketing
              implementation ensures your business achieves your goals and
              objectives, positioning you and your business ahead of the
              competition. And we do it all at a fraction of the cost of a
              full-time marketing team.
            </p>
          </div>
        </Container>
      </div>

      {/* Use Brand Iron's expertise to */}
      <div className="py-16 md:py-24">
        <Container>
          <h2 className="balance mx-auto max-w-3xl text-center text-4xl font-bold uppercase leading-tight text-iron-black md:text-6xl">
            Use Brand Iron&rsquo;s expertise to:
          </h2>

          <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-2">
            {expertiseItems.map((item, i) => (
              <div key={item.bold} className={i % 2 === 1 ? "md:mt-16" : ""}>
                <ExpertiseItem
                  bold={item.bold}
                  rest={item.rest}
                  align={i % 2 === 1 ? "right" : "left"}
                />
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-2xl font-bold text-iron-black">
            Maximize <span className="font-normal">Your Results</span>
          </p>
        </Container>
      </div>

      {/* Forge your next phase */}
      <div className="bg-iron-tan py-20 md:py-28">
        <Container>
          <h2 className="balance mx-auto max-w-4xl text-center text-4xl font-bold uppercase leading-tight text-iron-black md:text-6xl">
            Forge your next phase of success with Brand Iron
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {forgeColumns.map((col) => (
              <div key={col.title} className="bg-white p-8 md:p-10">
                <h3 className="text-4xl font-bold uppercase text-iron-black">
                  {col.title}
                </h3>
                <p className="mt-1 text-lg font-semibold text-iron-body">
                  {col.subtitle}
                </p>
                <p className="mt-4 text-iron-body">{col.body}</p>
                <ul className="mt-6 space-y-4">
                  {col.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-bold uppercase text-iron-black">
                        {item.name}
                      </p>
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
      </div>

      {/* If Grit & Gumption watermark divider + grit cards */}
      <div className="bg-iron-tan pb-20 pt-4 md:pb-28">
        <Container>
          <WatermarkHeading>
            If Grit &amp; Gumption Were a Branding Agency
          </WatermarkHeading>
          <div className="mt-16 grid gap-10 md:grid-cols-3 lg:grid-cols-5">
            {gritCards.map((card) => (
              <div key={card.title}>
                <h3 className="font-bold uppercase text-iron-black">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-iron-body">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Capital raise statement (still tan) */}
      <div className="bg-iron-tan pb-20 pt-4 md:pb-28">
        <Container className="text-center">
          <h2 className="balance mx-auto max-w-4xl text-4xl font-bold uppercase leading-tight text-iron-black md:text-6xl">
            We&rsquo;ve helped our clients raise over $5 Billion
          </h2>
          <p className="mt-4 text-lg font-bold uppercase text-iron-black/70">
            — and we&rsquo;re confident we can help you raise capital, too.
          </p>
        </Container>
      </div>

      {/* Secure Investor Funding */}
      <div className="py-20 md:py-28">
        <Container className="text-center">
          <h2 className="text-4xl font-bold uppercase text-iron-black md:text-6xl">
            Secure Investor Funding
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-iron-body">
            We capture investors&rsquo; attention so you can get the funding
            your brand deserves with our proprietary Capital Pitch Decks that
            have successfully secured over $5 billion for our clients.
          </p>
          <ButtonLink href="/capital-raise-deck-audit" variant="link" className="mt-8 inline-block text-lg">
            Let&rsquo;s promote your business next.
          </ButtonLink>
        </Container>
      </div>

      {/* 4-step fading panels */}
      <div className="grid md:grid-cols-4">
        {raiseSteps.map((step) => (
          <div key={step.title} className={`${step.bg} px-8 py-14 md:py-20`}>
            <h4 className={`text-xl font-bold uppercase ${step.text}`}>
              {step.title}
            </h4>
            <p className={`mt-3 text-sm leading-relaxed ${step.sub}`}>
              {step.body}
            </p>
          </div>
        ))}
      </div>

      {/* Kicking Ass */}
      <div className="bg-iron-gray-mid py-24 md:py-32">
        <Container className="text-center">
          <p className="text-lg font-bold uppercase text-white/90">
            We&rsquo;re In Your Back Pocket,
          </p>
          <h2 className="balance mx-auto mt-2 max-w-4xl text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
            But We&rsquo;re Kicking Typical Branding Agency Ass
          </h2>
        </Container>
      </div>

      {/* Free Pitch Deck Audit */}
      <div className="bg-iron-offwhite py-20 md:py-28">
        <Container>
          <h2 className="balance text-center text-5xl font-bold uppercase leading-tight text-iron-black md:text-7xl">
            Free Pitch Deck Audit
          </h2>
          <p className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-iron-black">
            * Limited to First 3 Qualified Companies per Week *
          </p>

          <h3 className="mt-14 text-center text-2xl font-bold uppercase text-iron-black md:text-3xl">
            Already have a pitch deck? Let us review it for you!
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-center text-iron-body">
            If you qualify, our resident pitch deck team expert will
            personally review your current pitch deck! Click below for an
            account manager to determine if you qualify as one of our 3
            reviews per week.
          </p>

          <div className="mt-8 flex justify-center">
            <ButtonLink href="/capital-raise-deck-audit">
              Let&rsquo;s Go!
            </ButtonLink>
          </div>
        </Container>
      </div>

      {/* Closing gradient CTA banner */}
      <div className="bg-gradient-to-r from-iron-panel-mid to-iron-orange py-16">
        <Container className="text-center">
          <h2 className="balance text-4xl font-bold uppercase text-white md:text-5xl">
            <FileText className="mx-auto mb-4 h-10 w-10" strokeWidth={1.5} />
            Get Your Exclusive Content
          </h2>
          <p className="mt-3 text-white/80">
            Click below to access and download the content you requested.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/resources/resource-library" variant="solid">
              Capital Raise Strategy
            </ButtonLink>
            <ButtonLink href="/resources/resource-library" variant="solid">
              Branding Steps to Success
            </ButtonLink>
          </div>
        </Container>
      </div>
    </>
  );
}
