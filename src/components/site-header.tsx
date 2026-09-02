import { useEffect, useState } from "react";
import logo from "@/assets/bytehire-logo.png";

const NAV = [
  { label: "Home", href: "https://bytehire.io" },
  { label: "For Employers", href: "https://bytehire.io/employers" },
  { label: "For Candidates", href: "https://bytehire.io/candidates" },
  { label: "Live Jobs", href: "https://bytehire.io/open-roles" },
  { label: "About", href: "https://bytehire.io/about" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-100 border-b transition-all duration-300"
      style={{
        padding: scrolled ? "12px 0" : "18px 0",
        background: scrolled ? "rgba(4,6,12,0.82)" : "transparent",
        borderColor: scrolled ? "var(--line)" : "transparent",
        backdropFilter: scrolled ? "blur(18px) saturate(1.3)" : undefined,
      }}
    >
      <div className="bh-container flex items-center gap-8">
        <a href="https://bytehire.io" aria-label="ByteHire home" className="shrink-0">
          <img src={logo} alt="ByteHire" width={145} height={52} className="h-[38px] w-auto" />
        </a>

        <nav className="ml-auto hidden items-center gap-[30px] lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="bh-nav-link font-mono text-[14px] font-medium tracking-[0.06em] text-soft uppercase transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
          <span
            aria-current="page"
            className="font-mono text-[14px] font-medium tracking-[0.06em] text-text uppercase"
          >
            <span className="mr-[7px] text-blue">/</span>ByteHire PHP Network
          </span>
        </nav>

        <a
          href="#join"
          className="bh-button bh-button-small ml-auto hidden lg:ml-0 lg:inline-flex"
        >
          <span>Join the ByteHire PHP Network</span>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M3 10h13M11 5l5 5-5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="ml-auto flex h-11 w-11 flex-col items-center justify-center gap-[6px] border border-[var(--line-hi)] lg:hidden"
        >
          <span className="block h-px w-5 bg-text" />
          <span className="block h-px w-5 bg-text" />
        </button>
      </div>

      {open && (
        <div className="bh-container lg:hidden">
          <nav
            className="mt-3 grid border p-4"
            style={{ borderColor: "var(--line-hi)", background: "rgba(6,9,17,0.98)" }}
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b border-[var(--line)] p-4 font-mono text-[16px] tracking-[0.06em] text-soft uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="bh-button mt-4 w-full"
            >
              <span>Join the ByteHire PHP Network</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
