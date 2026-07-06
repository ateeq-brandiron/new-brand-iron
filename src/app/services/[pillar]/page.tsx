import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { CTABanner } from "@/components/ui/CTABanner";
import { servicePillars, getPillar } from "@/lib/services-data";

export function generateStaticParams() {
  return servicePillars.map((pillar) => ({ pillar: pillar.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pillar: string }>;
}): Promise<Metadata> {
  const { pillar: slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) return {};
  return { title: pillar.title, description: pillar.summary };
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ pillar: string }>;
}) {
  const { pillar: slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: pillar.title }]}
        eyebrow="Services"
        title={pillar.title}
        description={pillar.summary}
      />

      <Section>
        <Container className="max-w-3xl space-y-4">
          {pillar.description.map((paragraph, i) => (
            <p key={i} className="text-iron-body">
              {paragraph}
            </p>
          ))}
        </Container>
      </Section>

      <Section className="bg-iron-mist pt-0">
        <Container>
          <h2 className="text-2xl font-bold text-iron-black">
            What&rsquo;s included
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillar.items.map((item) => (
              <LinkCard
                key={item.slug}
                href={`/services/${pillar.slug}/${item.slug}`}
                title={item.title}
                description={item.summary}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        eyebrow={pillar.title}
        title={`Ready to talk through ${pillar.title}?`}
        description="Book a strategy call and we'll map out exactly where to start."
        ctaLabel="Book a Strategy Call"
        ctaHref="/contact"
      />
    </>
  );
}
