import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { CTABanner } from "@/components/ui/CTABanner";
import { caseStudyCategories } from "@/lib/case-studies-data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Brand development, GTM success stories, AI visibility wins, and revenue growth results from Brand Iron clients.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Case Studies" }]}
        eyebrow="Case Studies"
        title="Proof, by category."
        description="Browse results by the discipline you care most about right now — client work is being added here as engagements wrap and results are confirmed for publication."
      />

      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          {caseStudyCategories.map((category) => (
            <LinkCard
              key={category.slug}
              href={`/case-studies/${category.slug}`}
              title={category.title}
              description={category.summary}
            />
          ))}
        </Container>
      </Section>

      <CTABanner
        eyebrow="Want to be next?"
        title="Let's build a result worth publishing."
        description="Book a strategy call and let's talk about what a case study with your brand could look like."
        ctaLabel="Book a Strategy Call"
        ctaHref="/contact"
      />
    </>
  );
}
