"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ensureGsap } from "@/lib/gsap";
import { WATCH_MODELS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function Collection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".collection-row");
      rows.forEach((row, i) => {
        const image = row.querySelector(".collection-image");
        const text = row.querySelector(".collection-text");
        const dir = i % 2 === 0 ? 1 : -1;

        gsap.fromTo(
          image,
          { opacity: 0, x: 60 * dir, scale: 1.05 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 78%",
            },
          }
        );
        gsap.fromTo(
          text,
          { opacity: 0, x: -40 * dir },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 78%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="collection"
      ref={sectionRef}
      className="relative bg-obsidian py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Timepieces" title="The Collection" />

        <div className="mt-24 flex flex-col gap-28 sm:gap-36">
          {WATCH_MODELS.map((model, i) => (
            <div
              key={model.id}
              className={`collection-row flex flex-col items-center gap-10 lg:gap-16 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="collection-image relative w-full max-w-md flex-1">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/10 via-transparent to-emerald/20 blur-2xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold/15">
                  <Image
                    src={model.image}
                    alt={`${model.name} — Rolex ${model.tagline}`}
                    fill
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
                </div>
              </div>

              <div className="collection-text flex-1">
                <GlassCard className="p-8 sm:p-10">
                  <span className="font-sans text-[11px] uppercase tracking-widest3 text-gold-soft">
                    {model.tagline}
                  </span>
                  <h3 className="mt-3 font-display text-3xl text-bone sm:text-4xl">
                    {model.name}
                  </h3>
                  <p className="mt-5 font-serif text-base leading-relaxed text-bone-dim sm:text-lg">
                    {model.description}
                  </p>
                  <div className="mt-7 hairline" />
                  <dl className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {model.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt className="font-sans text-[10px] uppercase tracking-widest2 text-bone-faint">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 font-serif text-sm text-bone">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
