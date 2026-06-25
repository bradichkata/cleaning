export const supportedLocales = ["en", "bg"] as const;
export type Locale = (typeof supportedLocales)[number];

export const localeCookieName = "site-language";

export function isLocale(value: string | undefined | null): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function pickLocale<T>(locale: Locale, values: Record<Locale, T>): T {
  return values[locale];
}
