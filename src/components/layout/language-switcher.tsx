"use client";

import { Globe } from "lucide-react";
import { startTransition } from "react";
import { useRouter } from "next/navigation";
import { type Locale } from "@/lib/locale";
import { cx } from "@/lib/utils";

const languageOptions: Array<{ value: Locale; label: string }> = [
  { value: "en", label: "English" },
  { value: "bg", label: "Български" },
];

export function LanguageSwitcher({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const router = useRouter();

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
        "inline-flex items-center gap-2 rounded-full border border-[rgba(16,42,67,0.1)] bg-white/90 p-1",
        compact && "w-full justify-between rounded-2xl px-3 py-2",
      )}
      aria-label={locale === "bg" ? "Избор на език" : "Language switcher"}
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
                "rounded-full px-3 py-2 text-xs font-semibold transition sm:text-sm",
                active
                  ? "bg-navy text-white shadow-[0_10px_24px_rgba(16,42,67,0.16)]"
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
