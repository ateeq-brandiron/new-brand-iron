import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { aboutPages } from "@/lib/about-data";
import { servicePillars } from "@/lib/services-data";
import { industries } from "@/lib/industries-data";
import { caseStudyCategories } from "@/lib/case-studies-data";
import { blogPosts } from "@/lib/blog-data";
import { resourceSections } from "@/lib/resources-data";
import { pricingPackages } from "@/lib/pricing-data";
import { auditPages } from "@/lib/audits-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/case-studies",
    "/blog",
    "/resources",
    "/pricing",
    "/contact",
    "/contact/book-a-call",
    "/contact/partnerships",
    "/portal",
  ];

  const routes = [
    ...staticRoutes,
    ...aboutPages.map((p) => `/about/${p.slug}`),
    ...servicePillars.map((p) => `/services/${p.slug}`),
    ...servicePillars.flatMap((p) =>
      p.items.map((item) => `/services/${p.slug}/${item.slug}`)
    ),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...caseStudyCategories.map((c) => `/case-studies/${c.slug}`),
    ...blogPosts.map((b) => `/blog/${b.slug}`),
    ...resourceSections.map((r) => `/resources/${r.slug}`),
    ...resourceSections.flatMap((r) =>
      r.subsections.map((s) => `/resources/${r.slug}/${s.slug}`)
    ),
    ...pricingPackages.map((p) => `/pricing/${p.slug}`),
    ...auditPages.map((a) => `/${a.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
