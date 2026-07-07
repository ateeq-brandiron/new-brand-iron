import { LucideIcon } from "lucide-react";
import clsx from "clsx";

export function IconBadge({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-14 w-14",
    md: "h-20 w-20",
    lg: "h-28 w-28",
  };
  const iconSizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };
  return (
    <div
      className={clsx(
        "flex shrink-0 items-center justify-center rounded-full bg-iron-orange text-white",
        sizes[size],
        className
      )}
    >
      <Icon className={iconSizes[size]} strokeWidth={1.5} />
    </div>
  );
}
