import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { CTABanner } from "@/components/ui/CTABanner";
import { industries } from "@/lib/industries-data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Brand Iron works with AI startups, SaaS companies, technology companies, real estate developers, investment firms, and professional services.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Industries" }]}
        eyebrow="Industries"
        title="Every industry is different. Our process isn't — but the playbook is."
        description="We tailor brand, GTM, and AI visibility work to how buying, funding, and competition actually work in your category."
      />

      <Section>
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <LinkCard
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              title={industry.title}
              description={industry.summary}
            />
          ))}
        </Container>
      </Section>

      <CTABanner
        eyebrow="Don't see your industry?"
        title="We still might be the right fit."
        description="Book a strategy call and we'll tell you honestly whether our approach maps to your market."
        ctaLabel="Book a Strategy Call"
        ctaHref="/contact"
      />
    </>
  );
}
