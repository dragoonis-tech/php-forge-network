import { useState, type FormEvent } from "react";

const SENIORITY = [
  "Junior",
  "Mid-Level",
  "Senior",
  "Lead",
  "Principal",
  "Architect",
  "Engineering Leadership",
];

const SPECIALISMS = [
  "Backend",
  "Full-Stack",
  "Symfony",
  "Laravel",
  "WordPress",
  "Drupal",
  "Architecture",
  "DevOps / Infrastructure",
  "Legacy Modernisation",
  "Technical Leadership",
];

const SITUATIONS = [
  "Actively searching",
  "Open to something interesting",
  "Happy where I am",
];

const chipActive = {
  color: "#fff",
  borderColor: "var(--blue)",
  background: "rgba(0,169,244,0.16)",
} as const;

export function JoinForm() {
  const [sent, setSent] = useState(false);
  const [seniority, setSeniority] = useState<string | null>(null);
  const [specialisms, setSpecialisms] = useState<string[]>([]);
  const [situation, setSituation] = useState<string | null>(null);
  const [cvName, setCvName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function toggleSpecialism(s: string) {
    setSpecialisms((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!seniority) return setError("Please select your current level.");
    if (specialisms.length === 0) return setError("Please select where you're strongest.");
    if (!situation) return setError("Please tell us where you are right now.");
    if (!cvName) return setError("Please upload your latest CV.");
    setError(null);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bh-panel p-8 text-center md:p-14">
        <p className="bh-eyebrow justify-center">Registered</p>
        <h3 className="bh-h3 text-[clamp(1.5rem,3vw,2.2rem)]">You're in the PHP Network.</h3>
        <p className="bh-lead mx-auto max-w-[46ch]">
          Paul will be in touch personally. No spam, no CV blasting.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bh-panel p-6 md:p-12">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bh-field">
          <label htmlFor="first">First name*</label>
          <input id="first" name="first" required autoComplete="given-name" />
        </div>
        <div className="bh-field">
          <label htmlFor="last">Last name*</label>
          <input id="last" name="last" required autoComplete="family-name" />
        </div>
        <div className="bh-field">
          <label htmlFor="email">Email*</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="bh-field">
          <label htmlFor="location">Location*</label>
          <input id="location" name="location" required placeholder="City / country" />
        </div>
        <div className="bh-field md:col-span-2">
          <label htmlFor="linkedin">LinkedIn profile*</label>
          <input id="linkedin" name="linkedin" required placeholder="linkedin.com/in/…" />
        </div>
        <div className="bh-field md:col-span-2">
          <label htmlFor="title">Current or latest job title*</label>
          <input id="title" name="title" required placeholder="Senior PHP Engineer" />
        </div>
      </div>

      <fieldset className="mt-9 border-0 p-0">
        <legend className="bh-label mb-4">What's your current level?*</legend>
        <div className="flex flex-wrap gap-3">
          {SENIORITY.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSeniority(s)}
              aria-pressed={seniority === s}
              className="bh-chip min-h-[46px] cursor-pointer"
              style={seniority === s ? chipActive : undefined}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-9 border-0 p-0">
        <legend className="bh-label mb-2">Where are you strongest?*</legend>
        <p className="mb-4 font-mono text-[13px] tracking-[0.06em] text-muted-ink uppercase">
          Select all that apply.
        </p>
        <div className="flex flex-wrap gap-3">
          {SPECIALISMS.map((s) => {
            const active = specialisms.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleSpecialism(s)}
                aria-pressed={active}
                className="bh-chip min-h-[46px] cursor-pointer"
                style={active ? chipActive : undefined}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-9 border-0 p-0">
        <legend className="bh-label mb-2">Where are you right now?*</legend>
        <p className="mb-4 font-mono text-[13px] tracking-[0.06em] text-muted-ink uppercase">
          No pressure. We'll only reach out when there's something worth talking about.
        </p>
        <div className="grid gap-3">
          {SITUATIONS.map((s) => {
            const active = situation === s;
            return (
              <label
                key={s}
                className="flex min-h-[56px] cursor-pointer items-center gap-4 border px-5 text-left text-[16px] transition-colors"
                style={{
                  borderColor: active ? "var(--blue)" : "var(--line)",
                  background: active ? "rgba(0,169,244,0.1)" : "rgba(3,6,12,0.5)",
                  color: active ? "var(--text)" : "var(--soft)",
                }}
              >
                <input
                  type="radio"
                  name="situation"
                  value={s}
                  checked={active}
                  onChange={() => setSituation(s)}
                  className="sr-only"
                />
                <span
                  className="inline-block h-[18px] w-[18px] shrink-0 rounded-full border transition-colors"
                  style={{
                    borderColor: active ? "var(--blue)" : "var(--line-hi)",
                    background: active ? "var(--blue)" : "transparent",
                    boxShadow: active ? "inset 0 0 0 3px var(--ink-2)" : "none",
                  }}
                  aria-hidden="true"
                />
                {s}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="bh-field mt-9">
        <label htmlFor="next">
          What are you interested in next? <span className="text-muted-ink">— optional</span>
        </label>
        <textarea
          id="next"
          name="next"
          rows={4}
          placeholder="Tell us what would make an opportunity worth talking about."
        />
      </div>

      <div className="bh-field mt-9">
        <label htmlFor="cv">Upload your latest CV*</label>
        <input
          id="cv"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          onChange={(e) => setCvName(e.target.files?.[0]?.name ?? null)}
        />
        <p className="mt-3 font-mono text-[13px] tracking-[0.06em] text-muted-ink uppercase">
          This gives us the starting point. We'll look beyond it to understand the experience behind it.
        </p>
      </div>

      {error && (
        <p className="mt-8 font-mono text-[13px] tracking-[0.06em] uppercase" style={{ color: "#ff6b6b" }}>
          {error}
        </p>
      )}

      <div className="mt-10">
        <button type="submit" className="bh-button w-full md:w-auto md:min-w-[280px]">
          <span>Join the PHP Network</span>
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
        </button>
        <p className="mt-5 font-mono text-[13px] tracking-[0.06em] text-muted-ink uppercase">
          We'll review your experience and get to know where you fit within the network.
        </p>
      </div>
    </form>
  );
}
