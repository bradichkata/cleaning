"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { buttonClasses } from "@/components/ui/button";
import { company } from "@/data/company";
import { getMainNavigation, type HeaderNavigationItem } from "@/data/navigation";
import { supportedLocales, type Locale } from "@/lib/locale";
import { cx } from "@/lib/utils";

function isInternalHref(href: string) {
  return href.startsWith("/");
}

function isItemActive(pathname: string, item: HeaderNavigationItem) {
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
    return true;
  }

  return (
    item.children?.some((child) => {
      if (!isInternalHref(child.href)) {
        return false;
      }

      return pathname === child.href || pathname.startsWith(`${child.href}/`);
    }) ?? false
  );
}

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
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const mainNavigation = getMainNavigation(locale);
  const showLanguageSwitcher = supportedLocales.length > 1;

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setExpandedGroups({});
  };

  const toggleMobileGroup = (href: string) => {
    setExpandedGroups((current) => ({
      ...current,
      [href]: !current[href],
    }));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(21,45,62,0.14)] bg-[rgba(242,236,227,0.82)] shadow-[0_18px_48px_rgba(15,31,42,0.08)] backdrop-blur-xl">
      <div className="shell flex min-h-[var(--header-height)] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-[1rem] border border-[rgba(21,45,62,0.16)] bg-[rgba(255,250,244,0.72)] text-navy shadow-[0_14px_32px_rgba(15,31,42,0.1)]">
            {company.brandMark}
          </span>
          <div>
            <div className="font-display text-base font-bold text-navy">{company.brandName}</div>
            <div className="hidden text-sm text-muted sm:block">{companyContent.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {mainNavigation.map((item) => {
            const active = isItemActive(pathname, item);
            const linkClasses = cx(
              "inline-flex items-center gap-2 rounded-[1rem] px-4 py-2.5 text-sm font-semibold transition",
              active
                ? "border border-[rgba(21,45,62,0.12)] bg-[rgba(255,250,244,0.7)] text-navy shadow-[0_12px_28px_rgba(15,31,42,0.08)]"
                : "text-muted hover:bg-[rgba(255,250,244,0.5)] hover:text-navy",
            );

            if (!item.children?.length) {
              return (
                <Link key={item.href} href={item.href} className={linkClasses}>
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={linkClasses}
                  aria-haspopup="menu"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>

                <div className="pointer-events-none invisible absolute left-0 top-full mt-3 w-56 translate-y-2 rounded-[1.25rem] border border-[rgba(21,45,62,0.14)] bg-[rgba(255,250,244,0.92)] p-2 opacity-0 shadow-[0_24px_56px_rgba(15,31,42,0.12)] transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) =>
                    isInternalHref(child.href) ? (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex rounded-[1rem] px-4 py-3 text-sm font-medium text-navy transition hover:bg-[rgba(21,45,62,0.06)]"
                      >
                        {child.label}
                      </Link>
                    ) : (
                      <a
                        key={child.href}
                        href={child.href}
                        className="flex rounded-[1rem] px-4 py-3 text-sm font-medium text-navy transition hover:bg-[rgba(21,45,62,0.06)]"
                      >
                        {child.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {showLanguageSwitcher ? <LanguageSwitcher locale={locale} /> : null}
          <Link href="/get-a-quote" className={buttonClasses({ tone: "primary" })}>
            {locale === "bg" ? "Поискай оферта" : "Get a Free Quote"}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
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
            className="grid h-11 w-11 place-items-center rounded-[1rem] border border-[rgba(21,45,62,0.14)] bg-[rgba(255,250,244,0.72)] text-navy"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-[rgba(21,45,62,0.12)] bg-[rgba(250,247,241,0.96)] backdrop-blur-xl lg:hidden">
          <div className="shell flex flex-col gap-3 py-4">
            {showLanguageSwitcher ? <LanguageSwitcher locale={locale} compact /> : null}
            {mainNavigation.map((item) => {
              const active = isItemActive(pathname, item);

              if (!item.children?.length) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "rounded-[1rem] px-4 py-3 text-sm font-semibold transition",
                      active
                        ? "bg-[rgba(255,250,244,0.82)] text-navy shadow-[0_12px_28px_rgba(15,31,42,0.08)]"
                        : "text-navy hover:bg-[rgba(21,45,62,0.04)]",
                    )}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = expandedGroups[item.href] ?? false;

              return (
                <div
                  key={item.href}
                  className="overflow-hidden rounded-[1.15rem] border border-[rgba(21,45,62,0.12)] bg-[rgba(255,250,244,0.64)]"
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cx(
                        "flex-1 px-4 py-3 text-sm font-semibold transition",
                        active ? "text-navy" : "text-navy",
                      )}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="grid h-11 w-11 place-items-center text-navy"
                      aria-label={expanded ? "Collapse menu" : "Expand menu"}
                      onClick={() => toggleMobileGroup(item.href)}
                    >
                      <ChevronDown className={cx("h-4 w-4 transition", expanded && "rotate-180")} />
                    </button>
                  </div>

                  {expanded ? (
                    <div className="border-t border-[rgba(21,45,62,0.08)] px-2 pb-2">
                      {item.children.map((child) =>
                        isInternalHref(child.href) ? (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex rounded-[0.95rem] px-3 py-3 text-sm text-muted transition hover:bg-[rgba(21,45,62,0.04)] hover:text-navy"
                            onClick={closeMobileMenu}
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <a
                            key={child.href}
                            href={child.href}
                            className="flex rounded-[0.95rem] px-3 py-3 text-sm text-muted transition hover:bg-[rgba(21,45,62,0.04)] hover:text-navy"
                            onClick={closeMobileMenu}
                          >
                            {child.label}
                          </a>
                        ),
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <Link
              href="/get-a-quote"
              className={buttonClasses({ tone: "primary", fullWidth: true })}
              onClick={closeMobileMenu}
            >
              {locale === "bg" ? "Поискай оферта" : "Get a Free Quote"}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
