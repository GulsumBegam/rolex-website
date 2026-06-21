import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "emerald";
  as?: "div" | "article";
}

export default function GlassCard({
  children,
  className,
  variant = "default",
  as = "div",
}: GlassCardProps) {
  const Tag = as;
  return (
    <Tag
      className={clsx(
        "relative rounded-2xl shadow-glass",
        variant === "default" ? "glass" : "glass-emerald",
        className
      )}
    >
      {children}
    </Tag>
  );
}
