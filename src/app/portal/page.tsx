import type { Metadata } from "next";
import { LayoutDashboard } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = {
  title: "Client Portal",
  description: "The Brand Iron Client Portal — coming soon.",
};

const plannedFeatures = [
  "Dashboard with account summary & active services",
  "Strategy Roadmap with phase, timeline, and milestones",
  "Deliverables: reports, content, SEO & GTM assets",
  "Reporting: SEO, AI visibility, traffic, leads, and revenue attribution",
  "Support Center for requests and questions",
  "Billing: invoices, contracts, and renewals",
];

export default function PortalPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Client Portal" }]}
        eyebrow="Client Portal"
        title="A dedicated home for your Brand Iron engagement — coming soon."
        description="Current clients: your account manager will notify you when portal access is available. Here's what's planned."
      />

      <Section>
        <Container>
          <EmptyState
            icon={LayoutDashboard}
            title="Client Portal launching soon"
            description="We're building a dedicated dashboard for reporting, deliverables, and support. In the meantime, your account manager remains your direct line."
            ctaLabel="Contact Your Account Manager"
            ctaHref="/contact"
          />

          <div className="mx-auto mt-12 max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-wide text-iron-body">
              What&rsquo;s planned
            </h2>
            <ul className="mt-4 space-y-2.5">
              {plannedFeatures.map((feature) => (
                <li key={feature} className="text-sm text-iron-black">
                  &bull; {feature}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
