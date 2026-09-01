import { useState, type FormEvent } from "react";

const SITUATIONS = [
  "Actively looking",
  "Open to opportunities",
  "Not looking, but keep me in the network",
];

const STACKS = ["Symfony", "Laravel", "Other"];

export function JoinForm() {
  const [sent, setSent] = useState(false);
  const [stack, setStack] = useState("Symfony");
  const [situation, setSituation] = useState(SITUATIONS[1]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
          <label htmlFor="first">First name</label>
          <input id="first" name="first" required autoComplete="given-name" />
        </div>
        <div className="bh-field">
          <label htmlFor="last">Last name</label>
          <input id="last" name="last" required autoComplete="family-name" />
        </div>
        <div className="bh-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="bh-field">
          <label htmlFor="location">Location</label>
          <input id="location" name="location" placeholder="City / country" />
        </div>
        <div className="bh-field">
          <label htmlFor="linkedin">LinkedIn profile</label>
          <input id="linkedin" name="linkedin" placeholder="linkedin.com/in/…" />
        </div>
        <div className="bh-field">
          <label htmlFor="role">Current role</label>
          <input id="role" name="role" placeholder="Senior PHP Engineer" />
        </div>
      </div>

      <fieldset className="mt-9 border-0 p-0">
        <legend className="bh-label mb-4">Primary PHP experience</legend>
        <div className="flex flex-wrap gap-3">
          {STACKS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStack(s)}
              aria-pressed={stack === s}
              className="bh-chip min-h-[46px] cursor-pointer"
              style={
                stack === s
                  ? {
                      color: "#fff",
                      borderColor: "var(--blue)",
                      background: "rgba(0,169,244,0.16)",
                    }
                  : undefined
              }
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-9 border-0 p-0">
        <legend className="bh-label mb-4">Current situation</legend>
        <div className="grid gap-3">
          {SITUATIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSituation(s)}
              aria-pressed={situation === s}
              className="flex min-h-[56px] cursor-pointer items-center gap-4 border px-5 text-left text-[16px] transition-colors"
              style={{
                borderColor: situation === s ? "var(--blue)" : "var(--line)",
                background: situation === s ? "rgba(0,169,244,0.1)" : "rgba(3,6,12,0.5)",
                color: situation === s ? "var(--text)" : "var(--soft)",
              }}
            >
              <span
                className="inline-block h-[9px] w-[9px] shrink-0"
                style={{
                  background: situation === s ? "var(--blue)" : "transparent",
                  outline: "1px solid var(--line-hi)",
                }}
              />
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="bh-field mt-9">
        <label htmlFor="cv">
          CV upload <span className="text-muted-ink">— optional</span>
        </label>
        <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" />
        <p className="mt-3 font-mono text-[13px] tracking-[0.06em] text-muted-ink uppercase">
          Optional by design. Your experience is more than your CV.
        </p>
      </div>

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
      </div>
    </form>
  );
}
