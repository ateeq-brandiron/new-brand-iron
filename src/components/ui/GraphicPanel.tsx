import { LucideIcon } from "lucide-react";
import clsx from "clsx";

/**
 * Stand-in for real photography/brand imagery. Renders a branded gradient
 * panel with an icon + label so sections read as finished, intentional
 * design rather than a broken asset — swap for real photos/renders later.
 */
export function GraphicPanel({
  icon: Icon,
  label,
  className,
  tone = "orange",
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
  tone?: "orange" | "black";
}) {
  const tones = {
    orange: "bg-gradient-to-br from-iron-orange to-iron-orange-dark",
    black: "bg-gradient-to-br from-iron-black to-neutral-800",
  };
  return (
    <div
      className={clsx(
        "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden",
        tones[tone],
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, white 0, white 1px, transparent 1px, transparent 18px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-white">
        <Icon className="h-14 w-14" strokeWidth={1.25} />
        <span className="text-sm font-bold uppercase tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}
