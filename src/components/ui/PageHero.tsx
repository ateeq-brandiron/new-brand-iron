import { Container } from "./Container";
import { Breadcrumbs, Crumb } from "./Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <div className="border-b border-iron-line bg-iron-mist">
      <Container className="py-14 md:py-20">
        <Breadcrumbs crumbs={crumbs} />
        {eyebrow ? (
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-iron-orange">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="balance max-w-3xl text-4xl font-light text-iron-black md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg text-iron-body">
            {description}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
