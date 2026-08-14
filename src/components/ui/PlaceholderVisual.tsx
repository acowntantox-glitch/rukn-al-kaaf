import { Icon } from "@/components/icons";
import type { IconName } from "@/data/types";

type Tone = "navy" | "blue" | "light";

const toneClasses: Record<Tone, string> = {
  navy: "bg-gradient-to-br from-navy-900 to-navy-800 text-white/80",
  blue: "bg-gradient-to-br from-blue-700 to-navy-900 text-white/80",
  light: "bg-gradient-to-br from-slate-50 to-blue-100 text-navy-900/70",
};

type PlaceholderVisualProps = {
  icon: IconName;
  tone?: Tone;
  className?: string;
};

export function PlaceholderVisual({ icon, tone = "navy", className = "" }: PlaceholderVisualProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${toneClasses[tone]} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-15"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <path d="M0 140 100 60 200 140" fill="none" stroke="currentColor" strokeWidth="10" />
        <path d="M0 170 100 90 200 170" fill="none" stroke="currentColor" strokeWidth="10" />
      </svg>
      <Icon name={icon} className="relative h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.2} />
    </div>
  );
}
