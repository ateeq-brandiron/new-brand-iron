import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/ui/CTABanner";
import { aboutPages, getAboutPage } from "@/lib/about-data";

export function generateStaticParams() {
  return aboutPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getAboutPage(slug);
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default async function AboutSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getAboutPage(slug);
  if (!page) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: "About", href: "/about" }, { label: page.title }]}
        eyebrow="About Brand Iron"
        title={page.title}
        description={page.summary}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {page.body.map((paragraph, i) => (
              <p key={i} className="text-iron-body">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-6">
            {page.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="border-t-4 border-iron-black p-6"
              >
                <p className="font-bold text-iron-orange">
                  {highlight.title}
                </p>
                <p className="mt-2 text-sm text-iron-body">
                  {highlight.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        eyebrow="About Brand Iron"
        title="Curious how we'd work with you?"
        description="Tell us where your brand stands today and where you need to go."
        ctaLabel="Book a Strategy Call"
        ctaHref="/contact"
      />
    </>
  );
}
