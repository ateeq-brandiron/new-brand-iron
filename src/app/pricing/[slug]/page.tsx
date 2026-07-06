import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/ui/LeadForm";
import { pricingPackages, getPricingPackage } from "@/lib/pricing-data";

export function generateStaticParams() {
  return pricingPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPricingPackage(slug);
  if (!pkg) return {};
  return { title: pkg.title, description: pkg.summary };
}

export default async function PricingPackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPricingPackage(slug);
  if (!pkg) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Pricing", href: "/pricing" }, { label: pkg.title }]}
        eyebrow="Pricing & Packages"
        title={pkg.title}
        description={pkg.summary}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-iron-body">
              <span className="font-bold text-iron-black">Best for: </span>
              {pkg.bestFor}
            </p>
            <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-iron-body">
              Typically includes
            </h2>
            <ul className="mt-4 space-y-3">
              {pkg.includes.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-iron-black">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-iron-orange" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-iron-body">
              Pricing is scoped to your specific goals, timeline, and team —
              see the full{" "}
              <a href={pkg.relatedService.href} className="font-semibold text-iron-orange hover:underline">
                {pkg.relatedService.title}
              </a>{" "}
              service page for more detail.
            </p>
          </div>
          <div className="rounded-3xl border border-iron-line p-6">
            <h2 className="text-lg font-bold text-iron-black">
              Request pricing
            </h2>
            <p className="mt-1 text-sm text-iron-body">
              Tell us about your goals and we&rsquo;ll follow up with a scoped
              quote.
            </p>
            <div className="mt-5">
              <LeadForm
                formName={`pricing-${pkg.slug}`}
                submitLabel="Request Pricing"
                fields={["name", "email", "company", "message"]}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
