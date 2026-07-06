import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/ui/CTABanner";
import { servicePillars, getServiceItem } from "@/lib/services-data";

export function generateStaticParams() {
  return servicePillars.flatMap((pillar) =>
    pillar.items.map((item) => ({ pillar: pillar.slug, item: item.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pillar: string; item: string }>;
}): Promise<Metadata> {
  const { pillar, item } = await params;
  const result = getServiceItem(pillar, item);
  if (!result) return {};
  return { title: result.item.title, description: result.item.summary };
}

export default async function ServiceItemPage({
  params,
}: {
  params: Promise<{ pillar: string; item: string }>;
}) {
  const { pillar: pillarSlug, item: itemSlug } = await params;
  const result = getServiceItem(pillarSlug, itemSlug);
  if (!result) notFound();
  const { pillar, item } = result;

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Services", href: "/services" },
          { label: pillar.title, href: `/services/${pillar.slug}` },
          { label: item.title },
        ]}
        eyebrow={pillar.title}
        title={item.title}
        description={item.summary}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {item.body.map((paragraph, i) => (
              <p key={i} className="text-iron-body">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-iron-body">
              What you get
            </h2>
            <ul className="mt-4 space-y-3">
              {item.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-2.5 text-sm text-iron-black">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-iron-orange" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {item.planOptions ? (
        <Section className="bg-iron-offwhite pt-0">
          <Container>
            <h2 className="text-2xl font-bold text-iron-black">
              Choose your pace
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {item.planOptions.map((plan) => (
                <div
                  key={plan.name}
                  className="border-t-4 border-iron-black bg-white p-6"
                >
                  <p className="text-sm font-bold uppercase tracking-wide text-iron-orange">
                    {plan.name}
                  </p>
                  <p className="mt-1 font-semibold text-iron-black">
                    {plan.tagline}
                  </p>
                  <p className="mt-3 text-sm text-iron-body">{plan.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CTABanner
        eyebrow={pillar.title}
        title={`Talk to us about ${item.title}`}
        description="Book a strategy call and we'll tell you honestly whether this is the right starting point."
        ctaLabel="Book a Strategy Call"
        ctaHref="/contact"
      />
    </>
  );
}
