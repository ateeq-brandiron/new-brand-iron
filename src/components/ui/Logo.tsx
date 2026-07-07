import Image from "next/image";
import clsx from "clsx";

// Real Brand Iron lockup (circular "B" branding-iron mark + wordmark),
// exported as a white-on-transparent PNG. Pass invert on light backgrounds
// to flip it to dark ink.
export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span className={clsx("inline-flex h-9 w-[130px] items-center", className)}>
      <Image
        src="/images/Logo.png"
        alt="Brand Iron"
        width={270}
        height={56}
        priority
        className={clsx("h-full w-auto object-contain", invert && "invert")}
      />
    </span>
  );
}
