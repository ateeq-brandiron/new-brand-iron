import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { resourceSections } from "@/lib/resources-data";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Videos, webinars, podcast appearances, and the Brand Iron resource library.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources" }]}
        eyebrow="Resources"
        title="Learn how we think, not just what we sell."
        description="Videos, webinars, podcast appearances, and a growing library of presentations and workshop recordings."
      />

      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          {resourceSections.map((section) => (
            <LinkCard
              key={section.slug}
              href={`/resources/${section.slug}`}
              title={section.title}
              description={section.summary}
            />
          ))}
        </Container>
      </Section>
    </>
  );
}
