interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="font-sans text-[11px] uppercase tracking-widest3 text-gold-soft/90">
        {eyebrow}
      </span>
      <h2
        className={`font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] ${
          light ? "text-bone" : "text-gradient-gold"
        }`}
      >
        {title}
      </h2>
      <div className={`hairline w-24 ${align === "center" ? "" : "ml-0"}`} />
    </div>
  );
}
