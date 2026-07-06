import { LucideIcon } from "lucide-react";
import { ButtonLink } from "./Button";

export function EmptyState({
  icon: Icon,
  title,
  description,
  ctaLabel = "Book a Strategy Call",
  ctaHref = "/contact",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-dashed border-iron-line bg-iron-mist/60 px-8 py-16 text-center">
      <Icon className="h-10 w-10 text-iron-orange" strokeWidth={1.5} />
      <h3 className="mt-4 text-xl font-bold text-iron-black">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-iron-body">{description}</p>
      <ButtonLink href={ctaHref} className="mt-6">
        {ctaLabel}
      </ButtonLink>
    </div>
  );
}
