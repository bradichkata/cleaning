"use client";

import { Globe } from "lucide-react";
import { startTransition } from "react";
import { useRouter } from "next/navigation";
import { supportedLocales, type Locale } from "@/lib/locale";
import { cx } from "@/lib/utils";

const languageLabels: Record<Locale, string> = {
  en: "English",
  bg: "Bulgarian",
};

export function LanguageSwitcher({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const router = useRouter();
  const languageOptions = supportedLocales.map((value) => ({
    value,
    label: languageLabels[value],
  }));

  if (languageOptions.length < 2) {
    return null;
  }

  async function handleLanguageChange(nextLocale: Locale) {
    await fetch("/api/locale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ locale: nextLocale }),
    });

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <div
      className={cx(
        "inline-flex items-center gap-2 rounded-xl border border-[rgba(29,55,72,0.1)] bg-white/92 p-1",
        compact && "w-full justify-between rounded-[1rem] px-3 py-2",
      )}
      aria-label="Language switcher"
    >
      {!compact ? <Globe className="ml-2 h-4 w-4 text-navy" /> : null}
      <div className="flex items-center gap-1">
        {languageOptions.map((option) => {
          const active = option.value === locale;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => void handleLanguageChange(option.value)}
              className={cx(
                "rounded-[0.8rem] px-3 py-2 text-xs font-semibold transition sm:text-sm",
                active
                  ? "bg-navy text-white shadow-[0_10px_24px_rgba(29,55,72,0.14)]"
                  : "text-muted hover:text-navy",
              )}
              aria-pressed={active}
            >
              {compact ? option.label : option.value.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
