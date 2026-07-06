import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Section({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section className={clsx("py-16 md:py-24", className)} {...props} />
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "mb-3 text-sm font-bold uppercase tracking-[0.2em] text-iron-orange",
        className
      )}
    >
      {children}
    </p>
  );
}
