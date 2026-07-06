import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { CTABanner } from "@/components/ui/CTABanner";
import { industries, getIndustry } from "@/lib/industries-data";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return { title: industry.title, description: industry.summary };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Industries", href: "/industries" }, { label: industry.title }]}
        eyebrow="Industries"
        title={industry.title}
        description={industry.summary}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {industry.body.map((paragraph, i) => (
              <p key={i} className="text-iron-body">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-iron-body">
              Where we focus
            </h2>
            <ul className="mt-4 space-y-3">
              {industry.focusAreas.map((area) => (
                <li key={area} className="flex items-start gap-2.5 text-sm text-iron-black">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-iron-orange" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-iron-offwhite pt-0">
        <Container>
          <h2 className="text-2xl font-bold text-iron-black">
            Related services
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {industry.relatedServices.map((service) => (
              <LinkCard key={service.href} href={service.href} title={service.title} />
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        eyebrow={industry.title}
        title="Let's talk about your market"
        description="Book a strategy call and we'll map our approach to how your industry actually buys."
        ctaLabel="Book a Strategy Call"
        ctaHref="/contact"
      />
    </>
  );
}
