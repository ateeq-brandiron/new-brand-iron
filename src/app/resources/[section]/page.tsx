import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { resourceSections, getResourceSection } from "@/lib/resources-data";

export function generateStaticParams() {
  return resourceSections.map((section) => ({ section: section.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section: slug } = await params;
  const section = getResourceSection(slug);
  if (!section) return {};
  return { title: section.title, description: section.summary };
}

export default async function ResourceSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section: slug } = await params;
  const section = getResourceSection(slug);
  if (!section) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources", href: "/resources" }, { label: section.title }]}
        eyebrow="Resources"
        title={section.title}
        description={section.summary}
      />

      <Section>
        <Container>
          {section.subsections.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {section.subsections.map((sub) => (
                <LinkCard
                  key={sub.slug}
                  href={`/resources/${section.slug}/${sub.slug}`}
                  title={sub.title}
                  description={sub.description}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={section.icon}
              title="New content coming soon"
              description="We're building out this library. Book a call in the meantime and we'll share relevant material directly."
            />
          )}
        </Container>
      </Section>
    </>
  );
}
