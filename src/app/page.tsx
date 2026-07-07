import Image from "next/image";
import {
  CheckCircle2,
  FileText,
  Lightbulb,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  Presentation,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { CircleTextBadge } from "@/components/ui/CircleTextBadge";
import { HeroBackground } from "@/components/sections/HeroBackground";

const tickerServices = [
  "Automation",
  "Branding",
  "Capital Raise Deck",
  "GTM Strategy",
  "Investor Outreach Campaign",
  "Website Development",
];

const stats = [
  { icon: "/images/Stack-Icon.png", value: "$5", suffix: " Billion", label: "Raised" },
  { icon: "/images/Building-Icon.png", value: "200+", suffix: " Companies", label: "Branded/Rebranded" },
  { icon: "/images/Chart-Icon.png", value: "500+", suffix: " Pitch Decks", label: "Created" },
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
  { title: "All Services", href: "/services", icon: Rocket },
];

const expertiseItems = [
  { bold: "Define", rest: "And Develop Your Brand", icon: Target },
  { bold: "Craft", rest: "Your Message", icon: MessageSquare },
  { bold: "Build", rest: "And Deploy Your Marketing Strategy", icon: Rocket },
  { bold: "Design", rest: "Your Website", icon: MonitorSmartphone },
  { bold: "Create", rest: "Your Pitch Deck", icon: FileText },
  { bold: "Secure", rest: "Your Funding", icon: ShieldCheck },
];

const forgeColumns = [
  {
    title: "Rebuild",
    subtitle: "Your Brand",
    image: "/images/Rebuild.jpg",
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
    image: "/images/Redefine.jpg",
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

function RailItem({
  title,
  rest,
  icon: Icon,
  align,
}: {
  title: string;
  rest: string;
  icon: typeof Target;
  align: "left" | "right";
}) {
  const content = (
    <div
      className={`flex flex-col items-center gap-3 md:flex-row ${
        align === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <IconBadge icon={Icon} size="sm" />
      <p
        className={`text-center text-lg font-bold text-iron-black md:text-lg ${
          align === "right" ? "md:text-left" : "md:text-right"
        }`}
      >
        {title} <span className="font-normal">{rest}</span>
      </p>
    </div>
  );

  return (
    <div className="md:grid md:grid-cols-2 md:gap-12">
      <div className="flex justify-center md:justify-end">
        {align === "left" ? content : null}
      </div>
      <div className="flex justify-center md:justify-start">
        {align === "right" ? content : null}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Full-bleed photo-style hero */}
      <div className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden">
        <HeroBackground />
        <div className="absolute inset-0 bg-black/25" />
        <Container className="relative z-10 text-center">
          <h1 className="balance text-shadow-heavy inline-flex flex-wrap items-center justify-center gap-x-3 text-5xl text-white md:text-7xl">
            Outlaws
            <Image
              src="/images/of.svg"
              alt="of"
              width={42}
              height={52}
              className="h-[0.6em] w-auto"
            />
            Ordinary
          </h1>
          <p className="text-shadow-heavy mt-4 text-lg font-bold uppercase tracking-widest text-white md:text-xl">
            Forging Unique Brands in Unique Ways
          </p>
        </Container>
        <div className="relative z-10 mt-16 border-t border-white/20 bg-black/30 py-5">
          <Container className="flex flex-wrap justify-center gap-x-10 gap-y-2">
            {tickerServices.map((service) => (
              <span
                key={service}
                className="text-shadow-heavy text-sm font-bold uppercase tracking-wide text-white"
              >
                {service}
              </span>
            ))}
          </Container>
        </div>
      </div>

      {/* Make your mark */}
      <div className="py-16 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <Image
              src="/images/BI-Logo-Mask-1-e1723263913795.png"
              alt="Brand Iron"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase text-iron-black">
              In the Wild West of marketing,
            </h3>
            <h2 className="balance mt-2 text-4xl text-iron-black md:text-5xl">
              Make your mark on the world
            </h2>
            <p className="mt-5 max-w-lg text-iron-body">
              Where brands, entrepreneurs, and businesses—from start-ups to
              large firms—achieve their desired outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Book a Strategy Call</ButtonLink>
              <ButtonLink href="/case-studies" variant="link">
                See Our Work
              </ButtonLink>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-iron-line pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <Image src={stat.icon} alt="" width={56} height={56} className="h-14 w-14 shrink-0" />
                  <div>
                    <p className="text-lg font-black leading-none text-iron-black">
                      {stat.value}
                      <span className="text-iron-orange">{stat.suffix}</span>
                    </p>
                    <p className="mt-1 text-xs font-semibold text-iron-body">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Process: zigzag rows */}
      <div className="bg-iron-offwhite py-16 md:py-24">
        <Container className="space-y-16 md:space-y-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-10">
              {processRow1.map((step) => (
                <div key={step.title}>
                  <h3 className="text-3xl text-iron-black">{step.title}</h3>
                  <p className="mt-3 text-iron-body">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/BIRepresentationImage1Scale.jpeg"
                alt="Brand Iron performance dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl md:order-1">
              <Image
                src="/images/Redefine.jpg"
                alt="Brand Iron strategy session"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 space-y-10 md:order-2">
              {processRow2.map((step) => (
                <div key={step.title}>
                  <h3 className="text-3xl text-iron-black">{step.title}</h3>
                  <p className="mt-3 text-iron-body">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl">
            <h3 className="text-3xl text-iron-black">Determine</h3>
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
      <div className="py-14">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {quickServices.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group flex flex-col items-center gap-3 text-center"
              >
                <IconBadge icon={service.icon} size="sm" className="transition-transform group-hover:scale-105" />
                <span className="text-sm font-bold uppercase tracking-wide text-iron-orange">
                  {service.title}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Brand Iron gets you there */}
      <div className="py-16 md:py-20">
        <Container>
          <h2 className="balance text-center text-4xl text-iron-black md:text-6xl">
            Brand Iron gets you there.
          </h2>
        </Container>
      </div>

      {/* You're the competition — photo-split with overlapping card */}
      <div className="relative h-[26rem]">
        <Image
          src="/images/You-are-the-competition-bg-png.png"
          alt=""
          fill
          className="object-cover"
        />
        <Container className="absolute inset-0 flex items-center justify-center">
          <div className="relative max-w-xl border border-iron-line bg-white p-8 shadow-xl md:p-10">
            <span className="absolute -top-3 -right-3 h-6 w-6 border-r-2 border-t-2 border-iron-orange" />
            <span className="absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2 border-iron-orange" />
            <p className="font-semibold text-iron-black">
              With our experts on your team,
            </p>
            <h3 className="mt-1 text-3xl text-iron-black md:text-4xl">
              You&rsquo;re the competition.
            </h3>
            <p className="mt-4 text-iron-body">
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

      {/* Idea + Brand Iron = Success equation */}
      <div className="relative overflow-hidden py-16 md:py-24">
        <Image
          src="/images/Mountains-bg.svg"
          alt=""
          fill
          className="object-cover object-top opacity-[0.06]"
        />
        <Container className="relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <CircleTextBadge icon={Lightbulb} label="YOUR IDEA" />
            <span className="text-3xl font-bold text-iron-orange">+</span>
            <CircleTextBadge icon={Target} label="BRAND IRON" />
            <span className="text-3xl font-bold text-iron-orange">&gt;</span>
            <CircleTextBadge icon={CheckCircle2} label="SUCCESS!" />
          </div>

          <h2 className="balance mt-16 text-center text-3xl text-iron-black md:text-5xl">
            Use Brand Iron&rsquo;s expertise to:
          </h2>

          <div className="relative mt-16 space-y-12">
            <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-iron-orange/40 md:block" />
            {expertiseItems.map((item, i) => (
              <RailItem
                key={item.bold}
                title={item.bold}
                rest={item.rest}
                icon={item.icon}
                align={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3">
            <IconBadge icon={TrendingUp} size="lg" />
            <p className="text-lg font-bold text-iron-black">
              Maximize <span className="font-normal">Your Results</span>
            </p>
          </div>
        </Container>
      </div>

      {/* Forge your next phase */}
      <div className="bg-iron-tan py-20 md:py-28">
        <Container>
          <h2 className="balance mx-auto max-w-4xl text-center text-4xl text-iron-black md:text-6xl">
            Forge your next phase of success with Brand Iron
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {forgeColumns.map((col) => (
              <div
                key={col.title}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg md:p-10"
              >
                <Image
                  src={col.image}
                  alt=""
                  fill
                  className="object-cover opacity-[0.07]"
                />
                <div className="relative z-10">
                <h3 className="text-4xl text-iron-black">{col.title}</h3>
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
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* If Grit & Gumption — photo banner */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden">
        <Image
          src="/images/Grit-and-Gumption-Banner.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <Container className="relative z-10 text-center">
          <h2 className="text-shadow-heavy text-4xl text-white md:text-5xl">
            Brand Iron
          </h2>
          <p className="text-shadow-heavy mt-2 text-lg font-bold uppercase tracking-wide text-white md:text-2xl">
            If Grit &amp; Gumption Were a Branding Agency
          </p>
        </Container>
      </div>

      {/* Grit cards + capital raise statement */}
      <div className="relative overflow-hidden bg-iron-tan pb-20 pt-16 md:pb-28">
        <Image
          src="/images/Dark-Mountains.png"
          alt=""
          fill
          className="object-cover object-bottom opacity-10"
        />
        <Container className="relative z-10">
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
            {gritCards.map((card) => (
              <div key={card.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-bold uppercase text-iron-black">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-iron-body">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="balance mx-auto max-w-4xl text-4xl text-white text-shadow-heavy md:text-6xl">
              We&rsquo;ve helped our clients raise over $5 Billion
            </h2>
            <p className="text-shadow-heavy mt-4 text-lg font-bold uppercase text-white">
              — and we&rsquo;re confident we can help you raise capital, too.
            </p>
          </div>
        </Container>
      </div>

      {/* Secure Investor Funding */}
      <div className="py-20 md:py-28">
        <Container className="text-center">
          <h2 className="text-4xl text-iron-black md:text-6xl">
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

      {/* Kicking Ass — photo banner */}
      <div className="relative flex h-80 items-center justify-center overflow-hidden">
        <Image
          src="/images/shutterstock_2152267487-1.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <Container className="relative z-10 text-center">
          <p className="text-shadow-heavy text-lg font-bold uppercase text-white/90">
            We&rsquo;re In Your Back Pocket,
          </p>
          <h2 className="balance text-shadow-heavy mx-auto mt-2 max-w-4xl text-4xl text-white md:text-6xl">
            But We&rsquo;re Kicking Typical Branding Agency Ass
          </h2>
        </Container>
      </div>

      {/* Free Pitch Deck Audit */}
      <div className="bg-iron-offwhite py-20 md:py-28">
        <Container>
          <h2 className="balance text-center text-5xl text-iron-black md:text-7xl">
            Free Pitch Deck Audit
          </h2>
          <p className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-iron-black">
            * Limited to First 3 Qualified Companies per Week *
          </p>

          <h3 className="mt-14 text-center text-2xl text-iron-black md:text-3xl">
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

          {/* Get Your Exclusive Content */}
          <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl px-8 py-16 text-center">
            <Image
              src="/images/shutterstock_2489980613-scaled.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <h2 className="relative z-10 balance text-shadow-heavy text-3xl text-white md:text-4xl">
              Get Your Exclusive Content
            </h2>
            <p className="relative z-10 text-shadow-heavy mt-3 text-white/90">
              Click below to access and download the content you requested.
            </p>
            <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/resources/resource-library" variant="solid" className="rounded-full">
                Capital Raise Strategy
              </ButtonLink>
              <ButtonLink href="/resources/resource-library" variant="solid" className="rounded-full">
                Branding Steps to Success
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
