import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { LeadForm } from "@/components/ui/LeadForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Brand Iron — book a strategy call, send a message, or inquire about a partnership.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="Contact"
        title="Let's talk about where your brand needs to go."
        description="Send us a message below, or jump straight to booking a call or a partnership inquiry."
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-iron-black">
              Send a message
            </h2>
            <div className="mt-5 max-w-lg">
              <LeadForm
                formName="contact"
                submitLabel="Send Message"
                fields={["name", "email", "company", "phone", "message"]}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-iron-body">
                Reach us directly
              </h2>
              <div className="mt-4 space-y-3 text-sm text-iron-black">
                <a href={siteConfig.phoneHref} className="flex items-center gap-2.5 hover:text-iron-orange">
                  <Phone className="h-4 w-4 text-iron-orange" />
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-iron-orange">
                  <Mail className="h-4 w-4 text-iron-orange" />
                  {siteConfig.email}
                </a>
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-iron-orange" />
                  {siteConfig.address}
                </p>
              </div>
            </div>

            <LinkCard
              href="/contact/book-a-call"
              title="Book a Strategy Call"
              description="Grab a time directly on our calendar."
            />
            <LinkCard
              href="/contact/partnerships"
              title="Partnership Inquiries"
              description="Agencies, referral partners, and integrations."
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
