import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Partnership Inquiries",
  description: "Partner with Brand Iron — agencies, referral partners, and integrations.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact", href: "/contact" }, { label: "Partnership Inquiries" }]}
        eyebrow="Contact"
        title="Partnership Inquiries"
        description="Agency partners, referral relationships, and integration partners — tell us what you have in mind."
      />

      <Section>
        <Container className="max-w-lg">
          <LeadForm
            formName="partnerships"
            submitLabel="Send Inquiry"
            fields={["name", "email", "company", "url", "message"]}
          />
        </Container>
      </Section>
    </>
  );
}
