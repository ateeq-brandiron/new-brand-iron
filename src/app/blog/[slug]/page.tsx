import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/ui/CTABanner";
import { blogPosts, getBlogPost } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
        eyebrow={`${post.category} · ${post.readTime}`}
        title={post.title}
      />

      <Section>
        <Container className="max-w-3xl space-y-5">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-iron-body">
              {paragraph}
            </p>
          ))}
        </Container>
      </Section>

      <CTABanner
        eyebrow="Keep going"
        title="Want this applied to your brand specifically?"
        description="Book a strategy call and we'll dig into your situation directly."
        ctaLabel="Book a Strategy Call"
        ctaHref="/contact"
      />
    </>
  );
}
