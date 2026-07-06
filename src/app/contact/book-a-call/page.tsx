import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description: "Book a strategy call with the Brand Iron team.",
};

export default function BookACallPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact", href: "/contact" }, { label: "Book a Strategy Call" }]}
        eyebrow="Contact"
        title="Book a Strategy Call"
        description="Tell us a little about your business and what you're trying to solve. We'll follow up within one business day to find a time."
      />

      <Section>
        <Container className="max-w-lg">
          <LeadForm
            formName="book-a-call"
            submitLabel="Request a Call"
            fields={["name", "email", "company", "phone", "message"]}
          />
        </Container>
      </Section>
    </>
  );
}
