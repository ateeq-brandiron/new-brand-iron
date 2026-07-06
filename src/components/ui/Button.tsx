import Link from "next/link";
import clsx from "clsx";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

// Brand Iron's own buttons are sharp-cornered outlines that invert on
// hover, not filled pills — "LET'S GO!" on brandiron.net is a black-bordered
// rectangle. Orange fill is reserved for high-emphasis moments only.
const styles = {
  primary:
    "border-2 border-iron-black text-iron-black hover:bg-iron-black hover:text-white focus-visible:outline-iron-black",
  inverse:
    "border-2 border-white text-white hover:bg-white hover:text-iron-black focus-visible:outline-white",
  solid:
    "border-2 border-iron-orange bg-iron-orange text-white hover:bg-iron-orange-dark hover:border-iron-orange-dark focus-visible:outline-iron-orange",
  link: "text-iron-black underline decoration-2 underline-offset-4 hover:text-iron-orange",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold uppercase tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50";

type Variant = keyof typeof styles;

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: { href: string; variant?: Variant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isLink = variant === "link";
  return (
    <Link
      href={href}
      className={clsx(!isLink && base, styles[variant], className)}
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
  const isLink = variant === "link";
  return (
    <button className={clsx(!isLink && base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}
