"use client";

import { useRef, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "gold" | "outline";
  onClick?: () => void;
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  variant = "gold",
  onClick,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  const classes = clsx(
    "group relative inline-flex items-center justify-center gap-3 px-9 py-4 text-xs font-sans uppercase tracking-widest2 transition-transform duration-300 ease-out rounded-full overflow-hidden",
    variant === "gold"
      ? "bg-gradient-to-r from-gold-soft via-gold to-gold-dim text-obsidian shadow-gold"
      : "border border-gold/50 text-bone hover:border-gold",
    className
  );

  const content = (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative z-10 flex items-center gap-3"
    >
      {children}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={classes}
      type="button"
    >
      {content}
    </button>
  );
}
