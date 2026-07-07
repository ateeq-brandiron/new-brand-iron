import { LucideIcon } from "lucide-react";

export function CircleTextBadge({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  const pathId = `circle-text-${label.replace(/[^a-z0-9]/gi, "").toLowerCase()}`;

  return (
    <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-iron-orange text-white">
      <Icon className="h-10 w-10" strokeWidth={1.5} />
      <svg viewBox="0 0 144 144" className="absolute inset-0 h-full w-full">
        <path id={pathId} d="M 22,72 A 50,50 0 1 1 122,72" fill="none" />
        <text className="fill-white text-[13px] font-bold uppercase tracking-wide">
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            {label}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
