"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ensureGsap } from "@/lib/gsap";
import { EDITORIAL_FEATURES } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function LuxuryWoman() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".editorial-block",
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.to(".editorial-image", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-obsidian-soft bg-obsidian py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
          <div className="editorial-block lg:col-span-5 lg:pr-6">
            <span className="font-sans text-[11px] uppercase tracking-widest3 text-gold-soft">
              The Lady's Edit
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-bone sm:text-5xl">
              Precision wears
              <span className="text-gradient-gold"> elegance.</span>
            </h2>
            <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-bone-dim">
              From the Oyster Perpetual to the diamond-set Pearlmaster, every
              line is drawn with the same exactitude as a chronometer
              movement — proof that precision and grace were never opposites.
            </p>
            <div className="mt-9">
              <MagneticButton href="#collection" variant="outline">
                Discover the Edit
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {EDITORIAL_FEATURES.map((feature, i) => (
                <div
                  key={feature.id}
                  className={`editorial-block relative overflow-hidden rounded-3xl border border-gold/15 ${
                    i === 0 ? "sm:translate-y-10" : ""
                  }`}
                >
                  <div className="editorial-image relative aspect-[3/4] w-full">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 640px) 90vw, 320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent" />
                  <div className="glass absolute inset-x-3 bottom-3 rounded-2xl p-5">
                    <h3 className="font-serif text-lg italic text-bone">
                      {feature.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-bone-dim">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
