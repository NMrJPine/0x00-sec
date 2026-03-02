import { useState, useRef, useEffect, useCallback } from "react";
import { HeroCanvas } from "./HeroCanvas";
import { t, type Lang } from "./i18n";

const WHATSAPP_NUMBER = "393520236521";
const WEB3FORMS_KEY = "9e83a594-77b8-49ad-925e-ebc822a4da84";
const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

declare global {
  interface Window {
    hcaptcha?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
  }
}

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
        <span className="lang-label">{current.label}</span>
        <span style={{ fontSize: "0.6rem", color: "var(--text-secondary)" }}>{open ? "\u25B2" : "\u25BC"}</span>
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
              <span className="lang-label">{l.label}</span>
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

function Header({ lang, setLang, s, onContact }: { lang: Lang; setLang: (l: Lang) => void; s: typeof t.it; onContact?: () => void }) {
  return (
    <header style={{ borderBottom: "1px solid var(--border)", padding: "16px 0", position: "relative", zIndex: 10 }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.5rem", fontWeight: 700, color: "var(--accent-green)" }}>
          0x00<span style={{ color: "var(--text-secondary)" }}>_sec</span>
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <LangSwitcher lang={lang} setLang={setLang} />
          <button onClick={onContact} style={{
            background: "var(--accent-green)", color: "var(--bg-primary)", padding: "8px 20px",
            borderRadius: "6px", fontWeight: 600, fontSize: "0.9rem", border: "none", cursor: "pointer",
          }}>
            {s.ctaButton}
          </button>
        </div>
      </div>
    </header>
  );
}

/* ── Module detail view ── */

function ModuleDetail({ mod, s, lang, setLang, onBack, onContact }: {
  mod: Module; s: typeof t.it; lang: Lang; setLang: (l: Lang) => void; onBack: () => void; onContact: () => void;
}) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header lang={lang} setLang={setLang} s={s} onContact={onContact} />

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

/* ── hCaptcha hook ── */

function useHCaptcha() {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.hcaptcha || widgetId.current) return;
    widgetId.current = window.hcaptcha.render(containerRef.current, {
      sitekey: HCAPTCHA_SITE_KEY,
      callback: (t: string) => setToken(t),
      "expired-callback": () => setToken(null),
      "error-callback": () => setToken(null),
      theme: "dark",
      size: "normal",
    });
  }, []);

  useEffect(() => {
    const existing = document.querySelector('script[src*="js.hcaptcha.com"]');
    if (existing) {
      if (window.hcaptcha) renderWidget();
      else existing.addEventListener("load", renderWidget);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js?render=explicit";
    script.async = true;
    script.onload = renderWidget;
    document.head.appendChild(script);
    return () => {
      if (widgetId.current && window.hcaptcha) {
        window.hcaptcha.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [renderWidget]);

  const reset = useCallback(() => {
    setToken(null);
    if (widgetId.current && window.hcaptcha) window.hcaptcha.reset(widgetId.current);
  }, []);

  return { containerRef, token, reset };
}

/* ── Contact page ── */

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 14px", fontSize: "0.9rem", fontFamily: "inherit",
  color: "var(--text-primary)", background: "var(--bg-primary)", border: "1px solid var(--border)",
  borderRadius: "8px", outline: "none", transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "4px",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function ContactPageView({ s, lang, setLang, onBack }: {
  s: typeof t.it; lang: Lang; setLang: (l: Lang) => void; onBack: () => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "ratelimit">("idle");
  const { containerRef: hcaptchaRef, token: hcaptchaToken, reset: resetHCaptcha } = useHCaptcha();

  const validateEmail = (email: string) => (!email ? "" : EMAIL_RE.test(email) ? "" : s.contactEmailInvalid);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateEmail(form.email);
    if (err) { setEmailError(err); return; }
    if (!hcaptchaToken) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY, name: form.name, email: form.email,
          subject: form.subject, message: form.message, "h-captcha-response": hcaptchaToken,
        }),
      });
      if (res.status === 429) setStatus("ratelimit");
      else if (res.ok) {
        const data = await res.json();
        if (data.success) { setStatus("success"); setForm({ name: "", email: "", subject: "", message: "" }); resetHCaptcha(); }
        else setStatus("error");
      } else setStatus("error");
    } catch { setStatus("error"); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
        <HeroCanvas />
      </div>
      {/* Top bar */}
      <header style={{ borderBottom: "1px solid var(--border)", padding: "16px 0", position: "relative", zIndex: 10 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={onBack} style={{
            display: "inline-flex", alignItems: "center", gap: "8px", background: "none", border: "none",
            color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500, fontFamily: "inherit",
            padding: "6px 0", cursor: "pointer", transition: "color 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            <span style={{ fontSize: "1.1rem" }}>&#8592;</span> {s.back}
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <LangSwitcher lang={lang} setLang={setLang} />
            <button onClick={onBack} style={{
              background: "none", border: "none", padding: 0, cursor: "pointer", fontWeight: 700,
              fontSize: "1rem", fontFamily: "var(--font-mono)", color: "var(--accent-green)",
            }}>
              0x00<span style={{ color: "var(--text-secondary)" }}>_sec</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container" style={{ padding: "60px 24px 100px", maxWidth: "820px", flex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, marginBottom: "14px" }}>{s.ctaTitle}</h1>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
            {s.ctaSub}
          </p>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
          {/* LEFT: Form or Success */}
          {status === "success" ? (
            <div style={{
              background: "var(--bg-card)", borderRadius: "12px", padding: "48px 24px",
              border: "1px solid var(--border)", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", textAlign: "center", gap: "16px",
            }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%", background: "var(--accent-green)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{s.contactSuccess}</h3>
              <button onClick={() => setStatus("idle")} style={{
                marginTop: "8px", padding: "10px 28px", background: "none", border: "1px solid var(--border)",
                borderRadius: "8px", fontSize: "0.85rem", fontWeight: 600, fontFamily: "inherit",
                color: "var(--text-secondary)", cursor: "pointer", transition: "border-color 0.2s, color 0.2s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--text-primary)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
              >
                {s.contactSendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              background: "var(--bg-card)", borderRadius: "12px", padding: "24px",
              border: "1px solid var(--border)",
            }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "18px" }}>{s.contactFormTitle}</h3>

              <div style={{ marginBottom: "12px" }}>
                <label style={labelStyle}>{s.contactName} *</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange} style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-green)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")} />
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label style={labelStyle}>{s.contactEmailLabel} *</label>
                <input type="email" name="email" required value={form.email}
                  onChange={(e) => { handleChange(e); if (emailError) setEmailError(validateEmail(e.target.value)); }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = emailError ? "var(--accent-red)" : "var(--border)"; setEmailError(validateEmail(form.email)); }}
                  style={{ ...inputStyle, borderColor: emailError ? "var(--accent-red)" : undefined }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = emailError ? "var(--accent-red)" : "var(--accent-green)")} />
                {emailError && <p style={{ fontSize: "0.75rem", color: "var(--accent-red)", marginTop: "4px" }}>{emailError}</p>}
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label style={labelStyle}>{s.contactSubject} *</label>
                <input type="text" name="subject" required value={form.subject} onChange={handleChange} style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-green)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")} />
              </div>

              <div style={{ marginBottom: "18px" }}>
                <label style={labelStyle}>{s.contactMessage} *</label>
                <textarea name="message" required rows={4} value={form.message} onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-green)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")} />
              </div>

              <input type="text" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <div ref={hcaptchaRef} style={{ marginBottom: "18px" }} />

              <button type="submit" disabled={status === "sending" || !hcaptchaToken} style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "12px 20px", background: "var(--accent-green)", color: "var(--bg-primary)", border: "none",
                borderRadius: "8px", fontSize: "0.9rem", fontWeight: 700, fontFamily: "inherit",
                cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" || !hcaptchaToken ? 0.5 : 1, transition: "opacity 0.2s",
              }}
                onMouseEnter={(e) => { if (status !== "sending" && hcaptchaToken) e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = status === "sending" || !hcaptchaToken ? "0.5" : "1"; }}
              >
                {status === "sending" ? s.contactSending : s.contactSend}
              </button>

              {status === "error" && <p style={{ marginTop: "12px", fontSize: "0.85rem", color: "var(--accent-red)", fontWeight: 500, textAlign: "center" }}>{s.contactError}</p>}
              {status === "ratelimit" && <p style={{ marginTop: "12px", fontSize: "0.85rem", color: "var(--accent-orange)", fontWeight: 500, textAlign: "center" }}>{s.contactRatelimit}</p>}
            </form>
          )}

          {/* RIGHT: WhatsApp + Email */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>{s.contactDirectTitle}</h3>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: "14px", padding: "20px",
              background: "var(--bg-card)", borderRadius: "12px", border: "1px solid var(--border)",
              transition: "border-color 0.2s", textDecoration: "none", color: "inherit",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#25D366")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%", background: "#25D366",
                display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "3px" }}>{s.contactWhatsapp}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{s.contactWhatsappDesc}</div>
              </div>
            </a>

            <a href={`mailto:${s.contactEmail}`} style={{
              display: "flex", alignItems: "center", gap: "14px", padding: "20px",
              background: "var(--bg-card)", borderRadius: "12px", border: "1px solid var(--border)",
              transition: "border-color 0.2s", textDecoration: "none", color: "inherit",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%", background: "var(--accent-cyan)",
                display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "3px" }}>{s.contactEmailCta}</div>
                <div style={{ fontSize: "0.8rem", fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>{s.contactEmail}</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <footer style={{ padding: "24px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <div className="container">
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
            &copy; {new Date().getFullYear()} 0x00_sec &middot; Catania, Sicilia
          </span>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

export function App() {
  const [lang, setLang] = useState<Lang>("it");
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [page, setPage] = useState<"home" | "contact">("home");

  const s = t[lang];
  const modules = getModules(lang);

  if (page === "contact") {
    return (
      <ContactPageView s={s} lang={lang} setLang={setLang}
        onBack={() => { setPage("home"); window.scrollTo(0, 0); }}
      />
    );
  }

  if (selectedModule !== null) {
    return (
      <ModuleDetail
        mod={modules[selectedModule]} s={s} lang={lang} setLang={setLang}
        onBack={() => { setSelectedModule(null); window.scrollTo(0, 0); }}
        onContact={() => { setPage("contact"); window.scrollTo(0, 0); }}
      />
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header lang={lang} setLang={setLang} s={s} onContact={() => { setPage("contact"); window.scrollTo(0, 0); }} />

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

      {/* Contact CTA */}
      <section id="subscribe" style={{ padding: "64px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "16px" }}>{s.ctaTitle}</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto 32px", fontSize: "1.05rem" }}>
            {s.ctaSub}
          </p>
          <button
            onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}
            style={{
              display: "inline-block", background: "var(--accent-green)", color: "var(--bg-primary)",
              padding: "14px 36px", borderRadius: "8px", fontWeight: 700, fontSize: "1.1rem",
              border: "none", cursor: "pointer", transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {s.ctaButton}
          </button>
          <div style={{ marginTop: "16px", fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
            {s.contactEmail}
          </div>
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
