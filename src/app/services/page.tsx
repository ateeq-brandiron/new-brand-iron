import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/ui/CTABanner";
import { servicePillars } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand Strategy, AI Visibility & Discoverability, Go-To-Market Strategy, Capital Raise Support, Revenue Engineering, Outbound Growth, and Website Development.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow="Services"
        title="One team, every discipline your brand and revenue engine need."
        description="From first BrandStorm™ to a funded raise to ranking in AI answer engines — pick a starting point below, or let us build the whole stack."
      />

      <Section>
        <Container className="space-y-6">
          {servicePillars.map((pillar) => (
            <div
              key={pillar.slug}
              className="grid gap-6 rounded-3xl border border-iron-line p-8 md:grid-cols-[auto_1fr_auto] md:items-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-iron-mist text-iron-orange">
                <pillar.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-iron-black">
                  <Link href={`/services/${pillar.slug}`} className="hover:text-iron-orange">
                    {pillar.title}
                  </Link>
                </h2>
                <p className="mt-1 text-sm text-iron-body">{pillar.summary}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {pillar.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/${pillar.slug}/${item.slug}`}
                      className="text-xs font-semibold text-iron-body underline decoration-iron-line underline-offset-4 hover:text-iron-orange hover:decoration-iron-orange"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href={`/services/${pillar.slug}`}
                className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold uppercase tracking-wide text-iron-orange"
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </Container>
      </Section>

      <CTABanner
        eyebrow="Not sure where to start?"
        title="Get a free AI Visibility Audit"
        description="See exactly how your brand shows up across ChatGPT, Perplexity, Gemini, and Google AI Overviews today."
        ctaLabel="Get My Audit"
        ctaHref="/ai-visibility-audit"
      />
    </>
  );
}
