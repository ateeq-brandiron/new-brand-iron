import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/ui/CTABanner";
import { pricingPackages } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description:
    "AI Visibility, GTM, Brand Development, Enterprise, Capital Raise Deck, and Website Development packages from Brand Iron.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Pricing" }]}
        eyebrow="Pricing & Packages"
        title="Scoped to your stage, not a one-size-fits-all rate card."
        description="Every engagement is scoped around your growth stage and goals. Explore what's typically included below, then request pricing for your specific situation."
      />

      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.slug}
              className="flex flex-col border-t-4 border-iron-black p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-iron-offwhite text-iron-orange">
                <pkg.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-iron-black">
                <Link href={`/pricing/${pkg.slug}`} className="hover:text-iron-orange">
                  {pkg.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-iron-body">{pkg.summary}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {pkg.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-sm text-iron-black">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-iron-orange" />
                    {line}
                  </li>
                ))}
              </ul>
              <Link
                href={`/pricing/${pkg.slug}`}
                className="mt-6 text-sm font-bold uppercase tracking-wide text-iron-orange hover:underline"
              >
                Request Pricing
              </Link>
            </div>
          ))}
        </Container>
      </Section>

      <CTABanner
        eyebrow="Not sure which package fits?"
        title="Tell us your goals — we'll recommend a starting point."
        description="Every engagement starts with a conversation, not a form you fill out blind."
        ctaLabel="Book a Strategy Call"
        ctaHref="/contact"
      />
    </>
  );
}
