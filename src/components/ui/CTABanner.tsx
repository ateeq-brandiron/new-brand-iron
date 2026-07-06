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
    <section className="bg-iron-black py-16 md:py-20">
      <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-iron-orange">
            {eyebrow}
          </p>
          <h2 className="balance text-3xl font-light text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-white/70">{description}</p>
        </div>
        <ButtonLink href={ctaHref} variant="primary" className="shrink-0">
          {ctaLabel}
        </ButtonLink>
      </Container>
    </section>
  );
}
