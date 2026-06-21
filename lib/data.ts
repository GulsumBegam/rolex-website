import { CraftPillar, NavLink, Testimonial, TimelineEntry, WatchModel, EditorialFeature } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "Legacy", href: "#legacy" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Contact", href: "#contact" },
];

export const WATCH_MODELS: WatchModel[] = [
  {
    id: "submariner",
    name: "Submariner",
    tagline: "The Reference of the Deep",
    description:
      "Born in 1953 to conquer the ocean floor, the Submariner remains the benchmark for divers' watches — waterproof to 300 metres and built without compromise.",
    image:
      "https://images.unsplash.com/photo-1730757679771-b53e798846cf?q=80&w=1400&auto=format&fit=crop",
    specs: [
      { label: "Case", value: "Oystersteel, 41mm" },
      { label: "Water Resistance", value: "300m / 1,000ft" },
      { label: "Movement", value: "Calibre 3235" },
    ],
  },
  {
    id: "daytona",
    name: "Cosmograph Daytona",
    tagline: "Built for Speed, Worn for Legacy",
    description:
      "Engineered alongside the world's fastest racetracks, the Daytona pairs a tachymetric scale with chronometric precision — a legend on every wrist that wears it.",
    image:
      "https://images.unsplash.com/photo-1606744188285-d0a49e58f538?q=80&w=1400&auto=format&fit=crop",
    specs: [
      { label: "Case", value: "18ct Yellow Gold, 40mm" },
      { label: "Function", value: "Chronograph" },
      { label: "Movement", value: "Calibre 4131" },
    ],
  },
  {
    id: "datejust",
    name: "Datejust",
    tagline: "The Original Icon",
    description:
      "The first self-winding waterproof chronometer to display the date in a window — quietly perfected since 1945, endlessly imitated, never equalled.",
    image:
      "https://images.unsplash.com/photo-1649357585015-179ed98f513d?q=80&w=1400&auto=format&fit=crop",
    specs: [
      { label: "Case", value: "Oystersteel & Gold, 36mm" },
      { label: "Bracelet", value: "Jubilee" },
      { label: "Movement", value: "Calibre 3235" },
    ],
  },
  {
    id: "gmt-master-ii",
    name: "GMT-Master II",
    tagline: "Two Time Zones, One Legend",
    description:
      "Developed with Pan Am for pilots crossing continents overnight, the GMT-Master II still tracks a second time zone with the bold, unmistakable Cerachrom bezel.",
    image:
      "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=1400&auto=format&fit=crop",
    specs: [
      { label: "Case", value: "Oystersteel, 40mm" },
      { label: "Bezel", value: "Cerachrom, bi-colour" },
      { label: "Movement", value: "Calibre 3285" },
    ],
  },
];

export const CRAFT_PILLARS: CraftPillar[] = [
  {
    id: "precision",
    title: "Swiss Precision",
    description:
      "Every movement is assembled, regulated and tested by hand to chronometer standards — accurate to -2/+2 seconds a day, certified by Rolex itself.",
    icon: "precision",
  },
  {
    id: "crystal",
    title: "Sapphire Crystal",
    description:
      "Virtually scratchproof and polished to optical clarity, the sapphire crystal is second in hardness only to diamond — a window built to outlast generations.",
    icon: "crystal",
  },
  {
    id: "steel",
    title: "Oystersteel",
    description:
      "Cast from a 904L alloy reserved for the aerospace and watchmaking elite, Oystersteel resists corrosion and holds its polish for a lifetime.",
    icon: "steel",
  },
  {
    id: "water",
    title: "Waterproof",
    description:
      "The Oyster case, perfected in 1926, remains the archetype of the waterproof wristwatch — hermetically sealed against dust, pressure and time.",
    icon: "water",
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: "1905",
    title: "A Vision is Founded",
    description:
      "Hans Wilsdorf establishes a watch company in London with a singular obsession: precision timekeeping for the wrist, not the pocket.",
  },
  {
    year: "1926",
    title: "The Oyster is Born",
    description:
      "The world's first waterproof and dustproof wristwatch case is patented — a hermetic seal that redefines what a watch can survive.",
  },
  {
    year: "1953",
    title: "Conquering Everest & the Deep",
    description:
      "Rolex watches reach the summit of Everest and the depths of the ocean, cementing a reputation built on real-world extremes.",
  },
  {
    year: "1971",
    title: "Calibre Innovation",
    description:
      "Decades of in-house movement development culminate in some of the most accurate self-winding mechanisms ever produced.",
  },
  {
    year: "2026",
    title: "Beyond Time, Beyond Limits",
    description:
      "More than a century later, the same obsession with precision and durability defines every watch that leaves Geneva.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "It isn't simply a watch. It is the one object that has been with me through every defining moment, and will outlive me to mark the moments of someone else.",
    name: "A. Whitfield",
    role: "Collector, since 1998",
  },
  {
    id: "t2",
    quote:
      "There is a quiet confidence to wearing something this precise. No noise, no excess — just a piece engineered to be exactly what it claims to be.",
    name: "M. Laurent",
    role: "Third-generation owner",
  },
  {
    id: "t3",
    quote:
      "I have owned watches that told time. This is the first that has ever told a story — mine, and the century of craft behind it.",
    name: "S. Okafor",
    role: "Submariner Owner",
  },
];

export const EDITORIAL_FEATURES: EditorialFeature[] = [
  {
    id: "e1",
    title: "Poise, Engineered",
    description:
      "Datejust on a Jubilee bracelet — a silhouette as exact in proportion as the movement ticking beneath it.",
    image:
      "https://images.unsplash.com/photo-1657159810148-f6a1f3d74f7e?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "e2",
    title: "Quiet Authority",
    description:
      "Pearlmaster's diamond-set bezel catches light the way precision catches time — without ever announcing itself.",
    image:
      "https://images.unsplash.com/photo-1600003014608-c2ccc1570a65?q=80&w=1400&auto=format&fit=crop",
  },
];
