import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  resourceSections,
  getResourceSubsection,
} from "@/lib/resources-data";

export function generateStaticParams() {
  return resourceSections.flatMap((section) =>
    section.subsections.map((sub) => ({ section: section.slug, subsection: sub.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; subsection: string }>;
}): Promise<Metadata> {
  const { section, subsection } = await params;
  const result = getResourceSubsection(section, subsection);
  if (!result) return {};
  return { title: result.subsection.title, description: result.subsection.description };
}

export default async function ResourceSubsectionPage({
  params,
}: {
  params: Promise<{ section: string; subsection: string }>;
}) {
  const { section: sectionSlug, subsection: subsectionSlug } = await params;
  const result = getResourceSubsection(sectionSlug, subsectionSlug);
  if (!result) notFound();
  const { section, subsection } = result;

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Resources", href: "/resources" },
          { label: section.title, href: `/resources/${section.slug}` },
          { label: subsection.title },
        ]}
        eyebrow={section.title}
        title={subsection.title}
        description={subsection.description}
      />

      <Section>
        <Container>
          <EmptyState
            icon={section.icon}
            title="New content coming soon"
            description="We're building out this library. Book a call in the meantime and we'll share relevant material directly."
          />
        </Container>
      </Section>
    </>
  );
}
