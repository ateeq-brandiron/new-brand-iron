import { ButtonLink } from "./Button";
import { Container } from "./Container";

export function CTABanner({
  eyebrow = "Free Audit",
  title,
  description,
  ctaLabel = "Let's Go!",
  ctaHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref: string;
}) {
  return (
    <section className="bg-iron-offwhite py-20 md:py-24">
      <Container className="max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-iron-orange">
          {eyebrow}
        </p>
        <h2 className="balance text-4xl font-bold uppercase text-iron-black md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-iron-body">{description}</p>
        <ButtonLink href={ctaHref} variant="primary" className="mt-8">
          {ctaLabel}
        </ButtonLink>
      </Container>
    </section>
  );
}
