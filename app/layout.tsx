import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import CursorSpotlight from "@/components/layout/CursorSpotlight";
import ParticlesField from "@/components/layout/ParticlesField";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rolex | Beyond Time. Beyond Limits.",
  description:
    "Crafted for generations. Admired for eternity. Discover the Rolex collection — Submariner, Daytona, Datejust and GMT-Master II.",
  metadataBase: new URL("https://rolex-example.vercel.app"),
  openGraph: {
    title: "Rolex | Beyond Time. Beyond Limits.",
    description: "Crafted for generations. Admired for eternity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${montserrat.variable}`}>
      <body className="relative bg-obsidian font-sans text-bone antialiased">
        <SmoothScrollProvider>
          <CursorSpotlight />
          <ParticlesField />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
