"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 }
      )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 60, letterSpacing: "0.05em" },
          { opacity: 1, y: 0, letterSpacing: "0.18em", duration: 1.4 },
          "-=0.4"
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.4"
        );

      // Parallax: video scales slowly, content fades out as user scrolls past hero
      gsap.to(videoRef.current, {
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to([titleRef.current, subRef.current, ctaRef.current], {
        opacity: 0,
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "70% top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/rolex-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark cinematic overlay for legibility */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/55 to-obsidian"
      />
      <div className="absolute inset-0 bg-radial-fade" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p
          ref={taglineRef}
          className="mb-6 font-sans text-[11px] uppercase tracking-widest3 text-gold-soft"
        >
          A Crown for Every Generation
        </p>

        <h1
          ref={titleRef}
          className="font-display text-[15vw] leading-[0.95] tracking-widest2 text-bone sm:text-7xl md:text-8xl lg:text-9xl"
        >
          ROLEX
        </h1>

        <p
          ref={subRef}
          className="mt-6 max-w-2xl font-serif text-xl italic text-bone/90 sm:text-2xl md:text-3xl"
        >
          Beyond Time. <span className="text-gold-light">Beyond Limits.</span>
        </p>

        <p className="mt-4 max-w-md font-sans text-xs uppercase tracking-widest2 text-bone-dim">
          Crafted for generations. Admired for eternity.
        </p>

        <div ref={ctaRef} className="mt-10">
          <MagneticButton href="#collection">Explore Collection</MagneticButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-sans text-[10px] uppercase tracking-widest2 text-bone-dim">
          Scroll
        </span>
        <div className="h-12 w-px overflow-hidden bg-bone/15">
          <div className="h-full w-full origin-top animate-scroll-line bg-gold" />
        </div>
      </div>
    </section>
  );
}
