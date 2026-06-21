import { NAV_LINKS } from "@/lib/data";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-gold/10 bg-obsidian">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-2xl tracking-widest3 text-gold">
              ROLEX
            </span>
            <p className="mt-5 max-w-sm font-serif text-base leading-relaxed text-bone-dim">
              A perpetual pursuit of precision since 1905. Every watch we
              create is built to be passed on, not replaced.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-gold-soft">
              Navigate
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-bone-dim transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-gold-soft">
              Follow
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-bone-dim transition-colors hover:text-gold-light"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 font-sans text-xs text-bone-faint sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Rolex. All rights reserved.</p>
          <p className="tracking-widest2 uppercase text-bone-faint/70">
            Beyond Time. Beyond Limits.
          </p>
        </div>
      </div>
    </footer>
  );
}
