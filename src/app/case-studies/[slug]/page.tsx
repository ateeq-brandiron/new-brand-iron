import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { caseStudyCategories, getCaseStudyCategory } from "@/lib/case-studies-data";

export function generateStaticParams() {
  return caseStudyCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCaseStudyCategory(slug);
  if (!category) return {};
  return { title: category.title, description: category.summary };
}

export default async function CaseStudyCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCaseStudyCategory(slug);
  if (!category) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Case Studies", href: "/case-studies" }, { label: category.title }]}
        eyebrow="Case Studies"
        title={category.title}
        description={category.summary}
      />

      <Section>
        <Container>
          <EmptyState
            icon={category.icon}
            title="Case studies in this category are coming soon"
            description="We're finalizing results and client approvals for publication. In the meantime, book a call and we'll walk you through relevant work directly."
            ctaLabel="Book a Strategy Call"
            ctaHref="/contact"
          />
        </Container>
      </Section>
    </>
  );
}
