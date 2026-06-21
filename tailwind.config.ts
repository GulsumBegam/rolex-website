import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#050505",
          soft: "#0A0A0A",
          raised: "#101010",
          line: "#1C1C1A",
        },
        emerald: {
          DEFAULT: "#006039",
          deep: "#003B23",
          light: "#00854F",
          glow: "#0FA968",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F0D584",
          soft: "#E8C766",
          dim: "#8A7228",
        },
        bone: {
          DEFAULT: "#F5F4EF",
          dim: "#A8A79F",
          faint: "#6E6D66",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
        widest3: "0.5em",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at center, rgba(212,175,55,0.12) 0%, rgba(5,5,5,0) 70%)",
        "emerald-gold":
          "linear-gradient(135deg, #006039 0%, #050505 45%, #D4AF37 100%)",
      },
      boxShadow: {
        gold: "0 0 40px rgba(212,175,55,0.25)",
        emerald: "0 0 50px rgba(0,133,79,0.25)",
        glass: "0 8px 32px rgba(0,0,0,0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "scroll-line": "scroll-line 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
