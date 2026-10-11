"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

type Fields = { name: string; email: string; subject: string; message: string };

type Status = "idle" | "sending" | "sent" | "error";

const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

export default function HireModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLocale();
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<"error" | "rate_limited" | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  // Reset form setiap kali modal dibuka.
  useEffect(() => {
    if (open) {
      setValues(EMPTY);
      setErrors({});
      setStatus("idle");
      setServerError(null);
      firstFieldRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  // Tutup dengan tombol Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const next: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) next.name = "•";
    if (!values.email.trim()) next.email = "•";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "•";
    if (values.subject.trim().length < 3) next.subject = "•";
    if (values.message.trim().length < 10) next.message = "•";

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    setStatus("sending");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          // Honeypot anti-spam: selalu kosong untuk manusia.
          company: honeypotRef.current?.value ?? "",
        }),
      });

      if (res.status === 429) {
        setStatus("error");
        setServerError("rate_limited");
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setServerError("error");
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("error");
      setServerError("error");
    }
  };

  const inputClass = (key: keyof Fields) =>
    `w-full rounded-xl border-2 bg-white px-3 py-2.5 text-[15px] text-ink outline-none transition placeholder:text-ink/40 focus:border-tealdeep ${
      errors[key] ? "border-red-500" : "border-ink/15"
    }`;

  const labelClass = "mb-1.5 block text-xs font-extrabold uppercase tracking-wider text-ink/60";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/70 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hire-modal-title"
        className="my-auto w-full max-w-lg rounded-3xl bg-cream p-6 shadow-card sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold tracking-[0.25em] text-tealdeep">CONTACT</p>
            <h2 id="hire-modal-title" className="font-display text-[26px] font-bold leading-tight mt-1">
              {t.hire.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.hire.cancel}
            className="shrink-0 rounded-full border-2 border-ink/15 px-3 py-1.5 text-lg leading-none font-bold hover:bg-ink hover:text-cream"
          >
            ×
          </button>
        </div>

        {status === "sent" ? (
          <div className="mt-5 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tealdeep text-2xl text-cream">
              ✓
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold">{t.hire.sentTitle}</h3>
            <p className="mt-2 text-sm text-ink/70">{t.hire.sentBody}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-ink px-6 py-3 font-bold text-cream hover:bg-tealdeep"
            >
              {t.hire.close}
            </button>
          </div>
        ) : (
          <>
            <p className="mt-3 text-sm text-ink/70">{t.hire.subtitle}</p>

            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
              {/* Honeypot anti-spam: disembunyikan dari manusia, hanya bot yang mengisinya. */}
              <input
                ref={honeypotRef}
                type="text"
                name="company"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="hire-name" className={labelClass}>{t.hire.name}</label>
                  <input
                    id="hire-name"
                    ref={firstFieldRef}
                    type="text"
                    value={values.name}
                    onChange={set("name")}
                    className={inputClass("name")}
                    placeholder="John Doe"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="hire-email" className={labelClass}>{t.hire.email}</label>
                  <input
                    id="hire-email"
                    type="email"
                    value={values.email}
                    onChange={set("email")}
                    className={inputClass("email")}
                    placeholder="john@company.com"
                    maxLength={254}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="hire-subject" className={labelClass}>{t.hire.subject}</label>
                <input
                  id="hire-subject"
                  type="text"
                  value={values.subject}
                  onChange={set("subject")}
                  className={inputClass("subject")}
                  placeholder="Internship opportunity — Control System"
                  maxLength={150}
                />
              </div>

              <div>
                <label htmlFor="hire-message" className={labelClass}>{t.hire.message}</label>
                <textarea
                  id="hire-message"
                  rows={5}
                  value={values.message}
                  onChange={set("message")}
                  className={`${inputClass("message")} resize-y`}
                  placeholder="Tell me about the role or project…"
                  maxLength={5000}
                />
              </div>

              {status === "error" && (
                <p role="alert" className="rounded-xl bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-700">
                  {serverError === "rate_limited" ? t.hire.rateLimited : t.hire.errorBody}
                </p>
              )}

              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border-2 border-ink px-5 py-3 font-bold text-center hover:bg-ink hover:text-cream"
                >
                  {t.hire.cancel}
                </button>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-ink px-5 py-3 font-bold text-cream hover:bg-tealdeep disabled:opacity-60"
                >
                  {status === "sending" ? t.hire.sending : `✉️ ${t.hire.submit}`}
                </button>
              </div>

              <p className="text-[11px] text-ink/50 text-center sm:text-left">{t.hire.note}</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
