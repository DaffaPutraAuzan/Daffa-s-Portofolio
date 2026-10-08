"use client";

import { LOCALES, LOCALE_FULL_NAME, LOCALE_LABEL } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function LocaleSwitch() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="flex shrink-0 items-center gap-0.5 rounded-full bg-cream/15 p-0.5 text-[12px] font-extrabold"
      role="group"
      aria-label="Language / Bahasa"
    >
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            title={LOCALE_FULL_NAME[l]}
            className={`rounded-full px-2 py-1 leading-none transition-colors ${
              active ? "bg-amberbrand text-ink" : "text-cream/70 hover:text-cream"
            }`}
          >
            {LOCALE_LABEL[l]}
          </button>
        );
      })}
    </div>
  );
}