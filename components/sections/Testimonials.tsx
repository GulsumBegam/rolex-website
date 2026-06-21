"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-obsidian py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="In Their Words" title="Worn, Not Just Owned" />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <GlassCard
              key={t.id}
              className={`testimonial-card p-8 ${
                i === 1 ? "md:animate-float md:[animation-delay:1.2s]" : "md:animate-float"
              }`}
            >
              <span className="font-display text-5xl leading-none text-gold/40">
                &ldquo;
              </span>
              <p className="-mt-4 font-serif text-lg italic leading-relaxed text-bone">
                {t.quote}
              </p>
              <div className="mt-6 hairline" />
              <div className="mt-5">
                <p className="font-sans text-sm uppercase tracking-widest2 text-bone">
                  {t.name}
                </p>
                <p className="mt-1 font-sans text-xs text-bone-faint">
                  {t.role}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
