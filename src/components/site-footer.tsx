import logo from "@/assets/bytehire-logo.png";
import mark from "@/assets/bytehire-mark.png";

const LINKS = [
  { label: "Home", href: "https://bytehire.io" },
  { label: "For Employers", href: "https://bytehire.io/employers" },
  { label: "For Candidates", href: "https://bytehire.io/candidates" },
  { label: "Live Jobs", href: "https://bytehire.io/open-roles" },
  { label: "About", href: "https://bytehire.io/about" },
  { label: "PHP Network", href: "/php" },
  { label: "Privacy Policy", href: "https://bytehire.io/privacy-policy" },
];

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden border-t pt-[84px] pb-[30px]"
      style={{ borderColor: "var(--line)", background: "rgba(3,5,10,0.7)" }}
    >
      <div className="bh-container relative">
        <div className="relative grid gap-[36px] pb-[56px] md:grid-cols-[1.2fr_.7fr_1.1fr] md:gap-[60px]">
          <div>
            <a href="https://bytehire.io" aria-label="ByteHire home">
              <img src={logo} alt="ByteHire" width={145} height={52} className="h-[40px] w-auto" />
            </a>
            <p className="mt-5 mb-2 text-[17px] text-text">Technical talent. Precisely hired.</p>
            <p className="max-w-[42ch] text-[16px] text-muted-ink">
              The Technical Validation Layer. Built by engineers to find the top 1% technical talent
              for your budget you can't afford to mishire.
            </p>
          </div>

          <div>
            <p className="bh-label mb-[18px]">Navigate</p>
            <nav className="grid gap-3" aria-label="Footer">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[16px] text-soft transition-colors hover:text-blue-soft"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="bh-label mb-[18px]">Get in touch</p>
            <a
              href="mailto:paul@bytehire.io"
              className="font-mono text-[16px] text-blue-soft hover:text-blue-bright"
            >
              paul@bytehire.io
            </a>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/company/byte-hire"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ByteHire on LinkedIn"
                className="flex h-11 w-11 items-center justify-center border text-soft transition-colors hover:text-text"
                style={{ borderColor: "var(--line)" }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21h-4z"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/ByteHire"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ByteHire on X"
                className="flex h-11 w-11 items-center justify-center border text-soft transition-colors hover:text-text"
                style={{ borderColor: "var(--line)" }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M17.53 3h3.06l-6.69 7.64L21.75 21h-5.4l-4.23-5.53L7.28 21H4.22l7.15-8.17L3.5 3h5.54l3.82 5.05zm-1.07 16.2h1.7L7.63 4.72H5.81z"
                  />
                </svg>
              </a>
            </div>
            <p className="mt-6 max-w-[46ch] text-[14px] leading-relaxed text-muted-ink">
              ByteHire uses practitioner-led evaluation, a proprietary platform and structured
              evidence to support better technical hiring decisions. Clients retain the final
              decision.
            </p>
          </div>
        </div>

        <div
          className="flex flex-wrap gap-x-8 gap-y-2 border-t pt-6 font-mono text-[13px] tracking-[0.06em] text-muted-ink uppercase"
          style={{ borderColor: "var(--line)" }}
        >
          <span>© 2026 ByteHire Ltd.</span>
          <span>The Technical Validation Layer.</span>
        </div>

        <img
          src={mark}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 -bottom-10 w-40 opacity-[0.05]"
        />
      </div>
    </footer>
  );
}
