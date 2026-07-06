import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { CTABanner } from "@/components/ui/CTABanner";
import { aboutPages } from "@/lib/about-data";

export const metadata: Metadata = {
  title: "About Brand Iron",
  description:
    "Brand Iron forges strong brands and drives revenue for startups, funded companies, and growth-stage businesses. Learn our values, causes, and legacy.",
};

const stats = [
  { value: "$5B+", label: "Raised by clients" },
  { value: "200+", label: "Brands built or rebuilt" },
  { value: "500+", label: "Pitch decks delivered" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About" }]}
        eyebrow="About Brand Iron"
        title="We forge brands. We drive revenue. We don't do one without the other."
        description="Brand Iron is a full-service branding, go-to-market, AI visibility, and capital raise agency. We exist because most agencies stop at the logo — we stay through the raise, the launch, and the growth curve after it."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-iron-black">
                Forging Brands. Driving Revenue.™
              </h2>
              <p className="mt-4 text-iron-body">
                We started Brand Iron to close the gap between branding
                agencies that stop at the logo and growth agencies that never
                touch the brand. One team carries your story from BrandStorm™
                through your capital raise, your go-to-market launch, and the
                marketing engine that keeps compounding after the raise
                closes.
              </p>
              <p className="mt-4 text-iron-body">
                Today that same thread runs through our newest practice, AI
                Visibility &amp; Discoverability — because how investors,
                customers, and partners find and vet a brand is changing
                faster than most companies&rsquo; marketing strategies are.
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-3xl font-black text-iron-orange">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-sm font-semibold text-iron-body">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Section className="bg-iron-mist">
        <Container>
          <h2 className="text-2xl font-bold text-iron-black">
            More about how we operate
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aboutPages.map((page) => (
              <LinkCard
                key={page.slug}
                href={`/about/${page.slug}`}
                title={page.title}
                description={page.summary}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        eyebrow="Let's Talk"
        title="Want to know if we're the right fit?"
        description="Book a strategy call and we'll tell you straight — no obligation."
        ctaLabel="Book a Strategy Call"
        ctaHref="/contact"
      />
    </>
  );
}
