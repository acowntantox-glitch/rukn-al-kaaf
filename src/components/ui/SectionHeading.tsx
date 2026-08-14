type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left";
  const titleColor = tone === "light" ? "text-white" : "text-navy-900";
  const descColor = tone === "light" ? "text-slate-200" : "text-slate-600";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses} ${className}`}>
      {eyebrow ? (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            tone === "light" ? "text-slate-300" : "text-blue-700"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
