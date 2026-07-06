import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export function LinkCard({
  href,
  title,
  description,
  className,
}: {
  href: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group flex flex-col justify-between border-t-4 border-iron-black bg-white p-6 transition-colors hover:border-iron-orange",
        className
      )}
    >
      <div>
        <h3 className="text-lg font-bold uppercase text-iron-black">{title}</h3>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-iron-body">
            {description}
          </p>
        ) : null}
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-iron-orange">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
