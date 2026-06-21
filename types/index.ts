export interface NavLink {
  label: string;
  href: string;
}

export interface WatchModel {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface CraftPillar {
  id: string;
  title: string;
  description: string;
  icon: "precision" | "crystal" | "steel" | "water";
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface EditorialFeature {
  id: string;
  title: string;
  description: string;
  image: string;
}
