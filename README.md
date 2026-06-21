# Rolex — Beyond Time. Beyond Limits.

A cinematic, Apple-keynote-grade marketing site for Rolex, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, GSAP, Framer Motion, and Lenis smooth scrolling.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

> **Note on fonts:** the project uses `next/font/google` (Cinzel, Cormorant Garamond, Montserrat), which self-hosts the fonts at build time. This requires internet access during `npm run build` / `npm run dev` the first time (to fetch font files), after which they're cached locally — no runtime requests to Google.

## Design system

| Token | Value | Use |
|---|---|---|
| `obsidian` | `#050505` | Primary background |
| `emerald` | `#006039` | Secondary accent, glass tints |
| `gold` | `#D4AF37` | Primary accent — CTAs, dividers, text gradients |
| `bone` | `#F5F4EF` | Primary text on dark |
| Display font | Cinzel | Wordmark, large numerals |
| Serif font | Cormorant Garamond | Headlines, quotes, italics |
| Sans font | Montserrat | Nav, labels, body, uppercase tracking |

All tokens live in `tailwind.config.ts`.

## Architecture

```
app/
  layout.tsx          → fonts, metadata, global providers
  page.tsx             → assembles all sections
  globals.css           → glass/spotlight/hairline utilities, base styles
components/
  layout/
    Navbar.tsx           → sticky glass nav, GSAP fade-in, mobile menu
    Footer.tsx            → social links, sitemap
    SmoothScrollProvider.tsx → Lenis + GSAP ticker/ScrollTrigger sync
    CursorSpotlight.tsx    → fixed radial gradient that follows the pointer
    ParticlesField.tsx      → ambient gold/emerald dust on canvas
  sections/
    Hero.tsx              → full-screen video hero, GSAP load timeline + parallax
    Collection.tsx          → Submariner / Daytona / Datejust / GMT-Master II
    Craftsmanship.tsx        → Swiss Precision / Sapphire Crystal / Oystersteel / Waterproof
    Legacy.tsx                → scroll-drawn timeline since 1905
    LuxuryWoman.tsx             → editorial split layout
    Testimonials.tsx             → floating glass cards
  ui/
    GlassCard.tsx, MagneticButton.tsx, SectionHeading.tsx
lib/
  data.ts    → all copy/content in one place
  gsap.ts     → registers ScrollTrigger once, client-safe
types/
  index.ts    → shared TypeScript interfaces
public/
  videos/rolex-hero.mp4  → hero background video
  images/hero-poster.jpg  → poster frame shown before video loads
```

## Notes on the build

- All scroll-triggered animation uses **GSAP + ScrollTrigger**, wired to **Lenis** via `gsap.ticker` so inertia scroll and animation timing stay perfectly in sync.
- The mouse spotlight is a single fixed `<div>` whose CSS custom properties (`--spotlight-x/y`) are updated via `requestAnimationFrame`, so it costs effectively nothing.
- The particle field is a single `<canvas>` (not DOM nodes) for performance, and respects `prefers-reduced-motion`.
- Watch and editorial imagery currently uses Unsplash placeholders (`lib/data.ts`) — swap these `image` URLs for licensed Rolex photography before shipping publicly, for both legal and brand-accuracy reasons.
- `npm run build` was verified to compile cleanly (typecheck + static generation pass) in this environment.
