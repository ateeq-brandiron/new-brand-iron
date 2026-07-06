import Link from "next/link";
import clsx from "clsx";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const styles = {
  primary:
    "bg-iron-orange text-white hover:bg-iron-orange-dark focus-visible:outline-iron-orange",
  secondary:
    "bg-iron-black text-white hover:bg-black/80 focus-visible:outline-iron-black",
  outline:
    "border-2 border-iron-black text-iron-black hover:bg-iron-black hover:text-white focus-visible:outline-iron-black",
  ghost:
    "text-iron-black hover:text-iron-orange underline underline-offset-4",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50";

type Variant = keyof typeof styles;

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: { href: string; variant?: Variant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className={clsx(base, styles[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: { variant?: Variant } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}
