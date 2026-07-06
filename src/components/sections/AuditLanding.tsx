import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { LeadForm } from "@/components/ui/LeadForm";
import type { AuditPage } from "@/lib/audits-data";

export function AuditLanding({ audit }: { audit: AuditPage }) {
  return (
    <>
      <Section className="bg-iron-black py-20 text-white md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <audit.icon className="h-8 w-8 text-iron-orange" strokeWidth={1.5} />
              <Eyebrow className="mb-0">{audit.eyebrow}</Eyebrow>
            </div>
            {audit.limitedAvailability ? (
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/50">
                * {audit.limitedAvailability} *
              </p>
            ) : null}
            <h1 className="balance mt-3 text-4xl font-light md:text-5xl">
              {audit.headline}
            </h1>
            <p className="mt-5 text-white/70">{audit.subheadline}</p>
            <p className="mt-6 text-sm text-white/50">{audit.whoItsFor}</p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-iron-black">
            <h2 className="text-lg font-bold">Get your free {audit.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {audit.whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-iron-orange" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <LeadForm
                formName={audit.slug}
                submitLabel="Let's Go!"
                fields={["name", "email", "company", "url"]}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
