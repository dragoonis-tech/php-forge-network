import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JoinForm } from "@/components/join-form";
import paul from "@/assets/paul-founder.jpg";
import mark from "@/assets/bytehire-mark.png";

const TITLE = "PHP Network — ByteHire";
const DESCRIPTION =
  "Your PHP experience is more than your CV. Join the ByteHire PHP Network and be represented by people who understand PHP.";

export const Route = createFileRoute("/php")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PhpNetworkPage,
});

function Arrow() {
  return (
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
  );
}

function Cta({ className = "" }: { className?: string }) {
  return (
    <a href="#join" className={`bh-button ${className}`}>
      <span>Join the PHP Network</span>
      <Arrow />
    </a>
  );
}

const CV_KEYWORDS = ["PHP 8", "Laravel", "Symfony", "MySQL", "Docker", "REST", "Agile", "5+ years"];

const REAL_WORK = [
  "Cut a legacy monolith into services without downtime",
  "Took p95 from 900ms to 120ms under real traffic",
  "Owned the payment path when it mattered most",
  "Mentored a team through a major framework upgrade",
];

const STATES = [
  {
    id: "01",
    label: "Actively searching",
    line: "You want the right move, not a queue of irrelevant roles.",
  },
  {
    id: "02",
    label: "Open to something interesting",
    line: "You'll listen when it's genuinely worth listening to.",
  },
  {
    id: "03",
    label: "Happy where I am",
    line: "Stay in the network. We'll only reach out when it fits.",
  },
];

const CREDIBILITY = [
  "PHP & open-source contributor",
  "PHP-FIG member",
  "PSR author",
  "Public speaker",
  "PHP conference organiser",
  "20+ years in the PHP community",
];

function PhpNetworkPage() {
  return (
    <div className="min-h-screen bg-ink">
      <SiteHeader />

      <main id="main">
        {/* 1. Hero */}
        <section className="bh-section bh-grid-bg relative overflow-hidden pt-[160px] md:pt-[200px]">
          <div
            className="pointer-events-none absolute top-[-30%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,169,244,0.20) 0%, rgba(0,169,244,0.05) 40%, transparent 70%)",
            }}
          />
          <div className="bh-container relative text-center">
            <p className="bh-eyebrow justify-center">For PHP professionals</p>
            <h1 className="bh-h1 mx-auto max-w-[16ch]">
              Your PHP experience is <span className="text-blue">more than your CV.</span>
            </h1>
            <p className="bh-lead mx-auto mt-8 max-w-[62ch] text-text">
              ByteHire looks beyond technologies and keywords to understand what you have actually
              built, solved and delivered.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Cta className="w-full sm:w-auto" />
              <a href="#beyond" className="bh-button bh-button-secondary w-full sm:w-auto">
                <span>See what we look for</span>
              </a>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-2 md:gap-3">
              {["Developers", "Engineers", "Architects", "Technical leaders"].map((t) => (
                <span key={t} className="bh-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 2. We look beyond the CV */}
        <section id="beyond" className="bh-section border-t" style={{ borderColor: "var(--line)" }}>
          <div className="bh-container">
            <div className="max-w-[900px]">
              <p className="bh-eyebrow">01 / Signal</p>
              <h2 className="bh-h2">We look beyond the CV.</h2>
              <p className="bh-lead max-w-[52ch]">
                It's what you've built, solved and delivered.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <div className="bh-panel p-7 md:p-10">
                <p className="bh-label mb-6">What a CV shows</p>
                <div className="flex flex-wrap gap-2">
                  {CV_KEYWORDS.map((k) => (
                    <span
                      key={k}
                      className="border px-3 py-2 font-mono text-[14px] tracking-[0.05em] text-muted-ink line-through"
                      style={{ borderColor: "var(--line)" }}
                    >
                      {k}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-[16px] text-muted-ink">
                  Keywords prove familiarity, not capability.
                </p>
              </div>

              <div
                className="bh-panel p-7 md:p-10"
                style={{ borderColor: "var(--line-hi)" }}
              >
                <p className="bh-label mb-6 text-blue-bright">What we actually look at</p>
                <ul className="grid gap-4">
                  {REAL_WORK.map((r) => (
                    <li key={r} className="flex gap-4 text-[17px] text-text">
                      <span className="mt-[11px] h-[6px] w-[6px] shrink-0 bg-blue" />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 font-mono text-[14px] tracking-[0.08em] text-blue-soft uppercase">
                  Built · Solved · Delivered
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Know where you stand */}
        <section
          className="bh-section border-t"
          style={{ borderColor: "var(--line)", background: "var(--ink-2)" }}
        >
          <div className="bh-container">
            <div className="max-w-[900px]">
              <p className="bh-eyebrow">02 / Classification</p>
              <h2 className="bh-h2">Know where you stand.</h2>
              <p className="bh-lead max-w-[52ch]">
                We don't put every PHP developer into the same bucket.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-[.38fr_.62fr]">
              <div className="bh-panel flex flex-col justify-center p-7 md:p-10">
                <p className="bh-label mb-6">Typical classification</p>
                <div className="inline-flex">
                  <span
                    className="border px-5 py-3 font-mono text-[18px] tracking-[0.05em] text-muted-ink line-through"
                    style={{ borderColor: "var(--line)" }}
                  >
                    PHP Developer
                  </span>
                </div>
                <p className="mt-8 text-[16px] text-muted-ink">
                  One label for every level, every specialism, every career stage.
                </p>
              </div>

              <div
                className="bh-panel p-7 md:p-10"
                style={{ borderColor: "var(--line-hi)" }}
              >
                <p className="bh-label mb-8 text-blue-bright">How ByteHire sees you</p>

                <div className="space-y-9">
                  <div>
                    <p className="mb-4 font-mono text-[13px] tracking-[0.12em] text-soft uppercase">
                      Seniority
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {["Mid-level", "Senior", "Lead", "Principal", "Architect"].map((level, i) => (
                        <span
                          key={level}
                          className="bh-chip"
                          style={
                            i === 1
                              ? {
                                  borderColor: "var(--blue)",
                                  color: "var(--blue-bright)",
                                  background: "rgba(0, 169, 244, 0.10)",
                                }
                              : undefined
                          }
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 font-mono text-[13px] tracking-[0.12em] text-soft uppercase">
                      Specialism
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Backend",
                        "Symfony",
                        "Laravel",
                        "Architecture",
                        "Platform",
                        "DevOps",
                        "Modernisation",
                        "Technical Leadership",
                      ].map((spec, i) => (
                        <span
                          key={spec}
                          className="bh-chip"
                          style={
                            i === 3
                              ? {
                                  borderColor: "var(--blue)",
                                  color: "var(--blue-bright)",
                                  background: "rgba(0, 169, 244, 0.10)",
                                }
                              : undefined
                          }
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-10 font-mono text-[14px] tracking-[0.08em] text-blue-soft uppercase">
                  Not just what you know. Where you're strongest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. People who understand PHP */}
        <section
          className="bh-section border-t"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="bh-container grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="bh-eyebrow">03 / Representation</p>
              <h2 className="bh-h2">Be represented by people who understand PHP.</h2>
              <p className="bh-lead max-w-[50ch]">
                Not generic recruiters. Practitioners who have shipped PHP in production.
              </p>
              <div className="mt-10">
                <Cta />
              </div>
            </div>

            <div className="bh-panel relative overflow-hidden p-10 text-center md:p-16">
              <img
                src={mark}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -bottom-8 w-44 opacity-[0.06]"
              />
              <p className="relative text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.03em]">
                We speak <span className="text-blue">your language.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 5. You don't need to be looking */}
        <section className="bh-section border-t" style={{ borderColor: "var(--line)" }}>
          <div className="bh-container">
            <div className="max-w-[820px]">
              <p className="bh-eyebrow">03 / No pressure</p>
              <h2 className="bh-h2">You don't need to be looking.</h2>
              <p className="bh-lead max-w-[52ch]">
                Wherever you are right now, the network works for you.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {STATES.map((s) => (
                <a
                  key={s.id}
                  href="#join"
                  className="bh-panel group block p-7 transition-colors md:p-9"
                >
                  <p className="bh-label mb-8 flex items-center justify-between text-blue-bright">
                    <span>{s.id}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </p>
                  <h3 className="bh-h3">{s.label}</h3>
                  <p className="text-[16px] text-soft">{s.line}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PHP community / Paul Dragoonis */}
        <section
          className="bh-section border-t"
          style={{ borderColor: "var(--line)", background: "var(--ink-2)" }}
        >
          <div className="bh-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div className="bh-notch relative overflow-hidden border" style={{ borderColor: "var(--line)" }}>
              <img
                src={paul}
                alt="Paul Dragoonis speaking at SymfonyCon Amsterdam"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p className="bh-eyebrow">04 / PHP community</p>
              <h2 className="bh-h2">Built inside the PHP community.</h2>
              <p className="bh-lead max-w-[52ch]">
                ByteHire is led by Paul Dragoonis — part of the PHP community for over two decades.
              </p>

              <ul className="mt-10 grid gap-px sm:grid-cols-2" style={{ background: "var(--line)" }}>
                {CREDIBILITY.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 px-5 py-5 font-mono text-[14px] tracking-[0.05em] text-soft uppercase"
                    style={{ background: "var(--surface)" }}
                  >
                    <span className="h-[6px] w-[6px] shrink-0 bg-blue" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Final CTA */}
        <section
          className="bh-section bh-grid-bg relative overflow-hidden border-t"
          style={{ borderColor: "var(--line)" }}
        >
          <div
            className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,169,244,0.18) 0%, transparent 65%)",
            }}
          />
          <div className="bh-container relative text-center">
            <p className="bh-eyebrow justify-center">05 / Join</p>
            <h2 className="bh-h2 mx-auto max-w-[14ch] text-[clamp(2.2rem,5vw,4.4rem)]">
              Be part of the network.
            </h2>
            <p className="bh-lead mx-auto max-w-[46ch] text-text">
              Developers. Engineers. Architects. Technical leaders.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#join" className="bh-button w-full sm:w-auto sm:min-w-[320px]">
                <span>Join the ByteHire PHP Network</span>
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* Join form */}
        <section id="join" className="bh-section border-t pt-[80px]" style={{ borderColor: "var(--line)" }}>
          <div className="bh-container">
            <div className="mx-auto mb-12 max-w-[720px] text-center">
              <p className="bh-eyebrow justify-center">Registration</p>
              <h2 className="bh-h2 text-[clamp(1.9rem,3.6vw,3rem)]">Join the PHP Network</h2>
              <p className="bh-lead">Two minutes. No CV required.</p>
            </div>
            <div className="mx-auto max-w-[880px]">
              <JoinForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
