"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";
import { TIMELINE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function Legacy() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".legacy-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="legacy"
      ref={sectionRef}
      className="relative bg-obsidian py-28 sm:py-36"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading eyebrow="Since 1905" title="A Legacy Beyond Time" />

        <div className="relative mt-24">
          {/* Center line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-bone/10 lg:block">
            <div
              ref={lineRef}
              className="h-full w-full bg-gradient-to-b from-gold via-gold-soft to-emerald-light"
            />
          </div>
          {/* Mobile line */}
          <div className="absolute left-4 top-0 h-full w-px bg-bone/10 lg:hidden" />

          <div className="flex flex-col gap-14 lg:gap-20">
            {TIMELINE.map((entry, i) => (
              <div
                key={entry.year}
                className={`relative flex items-start gap-6 pl-12 lg:pl-0 ${
                  i % 2 === 0
                    ? "lg:flex-row lg:text-right"
                    : "lg:flex-row-reverse lg:text-left"
                }`}
              >
                <span className="absolute left-[10px] top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-gold lg:left-1/2" />

                <div
                  className={`legacy-card w-full lg:w-1/2 ${
                    i % 2 === 0 ? "lg:pr-14" : "lg:pl-14"
                  }`}
                >
                  <GlassCard className="p-7">
                    <span className="font-display text-3xl text-gold-light">
                      {entry.year}
                    </span>
                    <h3 className="mt-2 font-serif text-xl italic text-bone">
                      {entry.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-bone-dim">
                      {entry.description}
                    </p>
                  </GlassCard>
                </div>
                <div className="hidden w-1/2 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
