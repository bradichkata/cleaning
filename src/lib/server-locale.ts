import { cookies } from "next/headers";
import { isLocale, type Locale } from "@/lib/locale";

export async function getCurrentLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("site-language")?.value;

  if (isLocale(locale)) {
    return locale;
  }

  return "en";
}
