import { useState, useRef, useEffect } from "react";
import { HeroCanvas } from "./HeroCanvas";
import { t, type Lang } from "./i18n";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "pricing-table-id"?: string;
          "publishable-key"?: string;
        },
        HTMLElement
      >;
    }
  }
}

const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51T2rlD0FFCGtZclRMmXWnKcf57mMJ4rxju4BwZtevLyhGniDLTY6KPye48o9JiXgxYoc6PbGmsFq38e80g5x3C47002Szt5Qa8";
const STRIPE_PRICING_TABLE_ID = "prctbl_REPLACE_ME";

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: "it", flag: "\u{1F1EE}\u{1F1F9}", label: "Italiano" },
  { code: "en", flag: "\u{1F1EC}\u{1F1E7}", label: "English" },
  { code: "es", flag: "\u{1F1EA}\u{1F1F8}", label: "Espa\u00f1ol" },
];

interface Lesson { title: string; description: string }
interface Module { title: string; description: string; difficulty: string; color: string; lessons: Lesson[] }

function getModules(l: Lang): Module[] {
  const s = t[l];
  return [
    {
      title: s.webSecurity, description: s.webSecurityDesc, difficulty: s.beginner, color: "var(--accent-red)",
      lessons: [
        { title: s.ws01, description: s.ws01d }, { title: s.ws02, description: s.ws02d },
        { title: s.ws03, description: s.ws03d }, { title: s.ws04, description: s.ws04d },
        { title: s.ws05, description: s.ws05d }, { title: s.ws06, description: s.ws06d },
        { title: s.ws07, description: s.ws07d }, { title: s.ws08, description: s.ws08d },
        { title: s.ws09, description: s.ws09d }, { title: s.ws10, description: s.ws10d },
        { title: s.ws11, description: s.ws11d }, { title: s.ws12, description: s.ws12d },
        { title: s.ws13, description: s.ws13d }, { title: s.ws14, description: s.ws14d },
        { title: s.ws15, description: s.ws15d },
      ],
    },
    {
      title: s.networkSecurity, description: s.networkSecurityDesc, difficulty: s.beginner, color: "var(--accent-cyan)",
      lessons: [
        { title: s.ns01, description: s.ns01d }, { title: s.ns02, description: s.ns02d },
        { title: s.ns03, description: s.ns03d }, { title: s.ns04, description: s.ns04d },
        { title: s.ns05, description: s.ns05d }, { title: s.ns06, description: s.ns06d },
        { title: s.ns07, description: s.ns07d }, { title: s.ns08, description: s.ns08d },
        { title: s.ns09, description: s.ns09d }, { title: s.ns10, description: s.ns10d },
        { title: s.ns11, description: s.ns11d }, { title: s.ns12, description: s.ns12d },
      ],
    },
    {
      title: s.cryptography, description: s.cryptographyDesc, difficulty: s.intermediate, color: "var(--accent-purple)",
      lessons: [
        { title: s.cr01, description: s.cr01d }, { title: s.cr02, description: s.cr02d },
        { title: s.cr03, description: s.cr03d }, { title: s.cr04, description: s.cr04d },
        { title: s.cr05, description: s.cr05d }, { title: s.cr06, description: s.cr06d },
        { title: s.cr07, description: s.cr07d }, { title: s.cr08, description: s.cr08d },
        { title: s.cr09, description: s.cr09d }, { title: s.cr10, description: s.cr10d },
      ],
    },
    {
      title: s.reverseEngineering, description: s.reverseEngineeringDesc, difficulty: s.advanced, color: "var(--accent-orange)",
      lessons: [
        { title: s.re01, description: s.re01d }, { title: s.re02, description: s.re02d },
        { title: s.re03, description: s.re03d }, { title: s.re04, description: s.re04d },
        { title: s.re05, description: s.re05d }, { title: s.re06, description: s.re06d },
        { title: s.re07, description: s.re07d }, { title: s.re08, description: s.re08d },
      ],
    },
    {
      title: s.linuxPrivesc, description: s.linuxPrivescDesc, difficulty: s.advanced, color: "var(--accent-green)",
      lessons: [
        { title: s.lp01, description: s.lp01d }, { title: s.lp02, description: s.lp02d },
        { title: s.lp03, description: s.lp03d }, { title: s.lp04, description: s.lp04d },
        { title: s.lp05, description: s.lp05d }, { title: s.lp06, description: s.lp06d },
        { title: s.lp07, description: s.lp07d }, { title: s.lp08, description: s.lp08d },
        { title: s.lp09, description: s.lp09d }, { title: s.lp10, description: s.lp10d },
      ],
    },
  ];
}

/* ── Components ── */

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px",
          padding: "6px 14px", display: "flex", alignItems: "center", gap: "8px",
          cursor: "pointer", color: "var(--text-primary)", fontSize: "0.9rem", fontFamily: "inherit",
        }}
      >
        <span style={{ fontSize: "1.15rem", lineHeight: 1 }}>{current.flag}</span>
        <span>{current.label}</span>
        <span style={{ fontSize: "0.6rem", color: "var(--text-secondary)", marginLeft: "2px" }}>{open ? "\u25B2" : "\u25BC"}</span>
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 4px)", right: 0, background: "var(--bg-card)",
          border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden", zIndex: 100,
          minWidth: "170px", boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}>
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              style={{
                display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px",
                width: "100%", background: l.code === lang ? "var(--bg-secondary)" : "transparent",
                border: "none", cursor: "pointer", color: "var(--text-primary)", fontSize: "0.9rem",
                fontFamily: "inherit", textAlign: "left",
              }}
              onMouseEnter={(e) => { if (l.code !== lang) e.currentTarget.style.background = "var(--bg-secondary)"; }}
              onMouseLeave={(e) => { if (l.code !== lang) e.currentTarget.style.background = "transparent"; }}
            >
              <span style={{ fontSize: "1.15rem", lineHeight: 1 }}>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function DifficultyBadge({ level, color }: { level: string; color: string }) {
  return (
    <span style={{
      display: "inline-block", padding: "2px 10px", borderRadius: "9999px",
      fontSize: "0.75rem", fontWeight: 600, border: `1px solid ${color}`, color,
    }}>
      {level}
    </span>
  );
}

function Header({ lang, setLang, s }: { lang: Lang; setLang: (l: Lang) => void; s: typeof t.it }) {
  return (
    <header style={{ borderBottom: "1px solid var(--border)", padding: "16px 0", position: "relative", zIndex: 10 }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.5rem", fontWeight: 700, color: "var(--accent-green)" }}>
          0x00<span style={{ color: "var(--text-secondary)" }}>_sec</span>
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <LangSwitcher lang={lang} setLang={setLang} />
          <a href="#subscribe" style={{
            background: "var(--accent-green)", color: "var(--bg-primary)", padding: "8px 20px",
            borderRadius: "6px", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
          }}>
            {s.enrollNow}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── Module detail view ── */

function ModuleDetail({ mod, s, lang, setLang, onBack }: {
  mod: Module; s: typeof t.it; lang: Lang; setLang: (l: Lang) => void; onBack: () => void;
}) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header lang={lang} setLang={setLang} s={s} />

      <section style={{ padding: "48px 0 0" }}>
        <div className="container">
          <button onClick={onBack} style={{
            background: "none", border: "none", color: "var(--text-secondary)", fontSize: "0.9rem",
            cursor: "pointer", padding: "0", marginBottom: "24px", display: "flex", alignItems: "center",
            gap: "6px", fontFamily: "inherit",
          }}>
            <span style={{ fontSize: "1.1rem" }}>&#8592;</span> {s.backToModules}
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px", flexWrap: "wrap" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: 800 }}>{mod.title}</h1>
            <DifficultyBadge level={mod.difficulty} color={mod.color} />
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "8px", maxWidth: "640px" }}>
            {mod.description}
          </p>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
            {mod.lessons.length} {s.lessons}
          </span>
        </div>
      </section>

      <section style={{ padding: "40px 0 80px", flex: 1 }}>
        <div className="container">
          {mod.lessons.map((lesson, i) => (
            <div key={i} style={{
              padding: "24px 0", display: "flex", gap: "20px", alignItems: "flex-start",
              borderBottom: i < mod.lessons.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: mod.color,
                fontWeight: 700, minWidth: "32px", paddingTop: "2px",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "6px", color: "var(--text-primary)" }}>
                  {lesson.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {lesson.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <div className="container">
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
            &copy; {new Date().getFullYear()} 0x00_sec &middot; Catania, Sicilia
          </span>
        </div>
      </footer>
    </div>
  );
}

/* ── Main landing page ── */

export function App() {
  const [lang, setLang] = useState<Lang>("it");
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const s = t[lang];
  const modules = getModules(lang);

  if (selectedModule !== null) {
    return (
      <ModuleDetail
        mod={modules[selectedModule]} s={s} lang={lang} setLang={setLang}
        onBack={() => { setSelectedModule(null); window.scrollTo(0, 0); }}
      />
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header lang={lang} setLang={setLang} s={s} />

      {/* Hero */}
      <section style={{ padding: "100px 0 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <HeroCanvas />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "24px" }}>
            {s.heroTitle1}<br />
            <span style={{ color: "var(--accent-green)" }}>{s.heroTitle2}</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 16px" }}>
            {s.heroSub}
          </p>
          <p style={{ fontSize: "1rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", marginBottom: "40px" }}>
            Catania, Sicilia
          </p>
          <a href="#subscribe" style={{
            display: "inline-block", background: "var(--accent-green)", color: "var(--bg-primary)",
            padding: "14px 36px", borderRadius: "8px", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none",
          }}>
            {s.startLearning}
          </a>
        </div>
      </section>

      {/* Next Lesson */}
      <section style={{ padding: "0 0 20px" }}>
        <div className="container">
          <div
            onClick={() => { setSelectedModule(0); window.scrollTo(0, 0); }}
            style={{
              background: "var(--bg-card)", border: "1px solid var(--accent-red)", borderRadius: "12px",
              padding: "20px 28px", display: "flex", alignItems: "center", gap: "20px",
              cursor: "pointer", transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-secondary)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-card)")}
          >
            <div style={{
              width: "48px", height: "48px", borderRadius: "10px", background: "rgba(239, 68, 68, 0.15)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-red)", fontWeight: 700, fontSize: "1rem" }}>XSS</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent-red)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>
                {s.nextLesson}
              </div>
              <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "2px" }}>{s.xssTitle}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{s.xssSub}</div>
            </div>
            <span style={{ color: "var(--accent-red)", fontSize: "1.4rem", flexShrink: 0 }}>&#8594;</span>
          </div>
        </div>
      </section>

      {/* Modules grid */}
      <section style={{ padding: "20px 0 80px", flex: 1 }}>
        <div className="container">
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "12px", textAlign: "center" }}>
            {s.modulesTitle}
          </h2>
          <p style={{ color: "var(--text-secondary)", textAlign: "center", marginBottom: "48px", fontSize: "1.05rem" }}>
            {s.modulesSub}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {modules.map((mod, i) => (
              <div
                key={mod.title}
                onClick={() => { setSelectedModule(i); window.scrollTo(0, 0); }}
                style={{
                  background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px",
                  padding: "28px", display: "flex", flexDirection: "column", gap: "12px",
                  transition: "border-color 0.2s", cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = mod.color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>{mod.title}</h3>
                  <DifficultyBadge level={mod.difficulty} color={mod.color} />
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", flex: 1 }}>{mod.description}</p>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {mod.lessons.length} {s.lessons}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stripe */}
      <section id="subscribe" style={{ padding: "64px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "16px" }}>{s.ctaTitle}</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto", fontSize: "1.05rem" }}>
              {s.ctaSub}
            </p>
          </div>
          <div style={{
            borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)",
            minHeight: "300px", background: "var(--bg-card)",
          }}>
            <stripe-pricing-table pricing-table-id={STRIPE_PRICING_TABLE_ID} publishable-key={STRIPE_PUBLISHABLE_KEY} />
          </div>
          <p style={{ marginTop: "20px", fontSize: "0.85rem", color: "var(--text-secondary)", textAlign: "center" }}>
            {s.stripeNote}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "24px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <div className="container">
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
            &copy; {new Date().getFullYear()} 0x00_sec &middot; Catania, Sicilia
          </span>
        </div>
      </footer>
    </div>
  );
}
