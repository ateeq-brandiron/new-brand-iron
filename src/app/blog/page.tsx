import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Brand strategy, AI visibility, GTM, and capital raise insights from the Brand Iron team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Blog" }]}
        eyebrow="Blog"
        title="Brand, GTM, and AI visibility — from the field, not the whiteboard."
      />

      <Section>
        <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col border-t-4 border-iron-black bg-white p-6 transition-colors hover:border-iron-orange"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-iron-orange">
                {post.category}
              </span>
              <h2 className="mt-2 text-lg font-bold text-iron-black group-hover:text-iron-orange">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-iron-body">
                {post.excerpt}
              </p>
              <span className="mt-4 text-xs font-semibold text-iron-body">
                {post.readTime}
              </span>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
