"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";
import { CRAFT_PILLARS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { CraftPillar } from "@/types";

function CraftIcon({ icon }: { icon: CraftPillar["icon"] }) {
  const common = {
    width: 34,
    height: 34,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "precision":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
          <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21" />
        </svg>
      );
    case "crystal":
      return (
        <svg {...common}>
          <path d="M4 8l8-5 8 5-8 13-8-13z" />
          <path d="M4 8h16M9 8l3 13 3-13M9 8L4 8M15 8l5 0" />
        </svg>
      );
    case "steel":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 9h16M9 4v16" />
        </svg>
      );
    case "water":
      return (
        <svg {...common}>
          <path d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z" />
        </svg>
      );
  }
}

export default function Craftsmanship() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".craft-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="craftsmanship"
      ref={sectionRef}
      className="relative bg-obsidian-soft bg-obsidian py-28 sm:py-36"
    >
      <div className="absolute inset-0 bg-emerald-gold opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="The Making" title="Craftsmanship" />

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CRAFT_PILLARS.map((pillar) => (
            <GlassCard
              key={pillar.id}
              className="craft-card group p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-gold"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold-light transition-colors duration-300 group-hover:text-gold">
                <CraftIcon icon={pillar.icon} />
              </div>
              <h3 className="mt-6 font-display text-xl text-bone">
                {pillar.title}
              </h3>
              <p className="mt-4 font-serif text-sm leading-relaxed text-bone-dim">
                {pillar.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
