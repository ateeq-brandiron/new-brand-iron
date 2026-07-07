import clsx from "clsx";

// Stands in for the real Brand Iron mark (a circular badge with a "B" cut
// into it, like a branding iron stamp) until the client supplies the
// original logo files.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={clsx("shrink-0", className)}
      aria-hidden
    >
      <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="3" />
      <path
        d="M18 13h9a6 6 0 0 1 2 11.6A6.5 6.5 0 0 1 27 37h-9V13z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M18 24.5h8" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={clsx("flex items-center gap-2.5", className)}>
      <LogoMark className={clsx("h-9 w-9", markClassName)} />
      <span className="font-sans text-xl font-black italic leading-none tracking-tight">
        BRAND IRON
      </span>
    </span>
  );
}
