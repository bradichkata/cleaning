"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { buttonClasses } from "@/components/ui/button";
import { company } from "@/data/company";
import { getMainNavigation } from "@/data/navigation";
import type { Locale } from "@/lib/locale";
import { cx } from "@/lib/utils";

export function SiteHeader({
  locale,
  companyContent,
}: {
  locale: Locale;
  companyContent: {
    tagline: string;
  };
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const mainNavigation = getMainNavigation(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(16,42,67,0.06)] bg-[rgba(247,250,252,0.78)] backdrop-blur-xl">
      <div className="shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy text-white shadow-[0_20px_36px_rgba(16,42,67,0.2)]">
            NC
          </span>
          <div>
            <div className="font-display text-base font-bold text-navy">
              {company.brandName}
            </div>
            <div className="text-sm text-muted">{companyContent.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => {
            const active = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-white text-navy shadow-[0_10px_24px_rgba(16,42,67,0.08)]"
                    : "text-muted hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(16,42,67,0.1)] px-4 py-2 text-sm font-semibold text-navy"
          >
            <Phone className="h-4 w-4" />
            {company.phoneDisplay}
          </a>
          <Link href="/get-a-quote" className={buttonClasses({ tone: "primary" })}>
            {locale === "bg" ? "Поискай безплатна оферта" : "Get a Free Quote"}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={company.phoneHref}
            className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(16,42,67,0.12)] bg-white text-navy"
            aria-label={locale === "bg" ? "Обади се" : "Call the business"}
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label={
              menuOpen
                ? locale === "bg"
                  ? "Затвори менюто"
                  : "Close menu"
                : locale === "bg"
                  ? "Отвори менюто"
                  : "Open menu"
            }
            className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(16,42,67,0.12)] bg-white text-navy"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-[rgba(16,42,67,0.08)] bg-white lg:hidden">
          <div className="shell flex flex-col gap-2 py-4">
            <LanguageSwitcher locale={locale} compact />
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-navy transition hover:bg-[rgba(16,42,67,0.04)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-a-quote"
              className={buttonClasses({ tone: "primary", fullWidth: true })}
              onClick={() => setMenuOpen(false)}
            >
              {locale === "bg" ? "Поискай безплатна оферта" : "Get a Free Quote"}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
