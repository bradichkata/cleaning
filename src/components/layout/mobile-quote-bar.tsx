import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import type { Locale } from "@/lib/locale";

export function MobileQuoteBar({ locale }: { locale: Locale }) {
  return (
    <div className="fixed inset-x-0 bottom-4 z-30 px-4 lg:hidden">
      <Link
        href="/get-a-quote"
        className={buttonClasses({
          tone: "primary",
          size: "lg",
          fullWidth: true,
          className:
            "mx-auto max-w-md shadow-[0_24px_60px_rgba(16,42,67,0.2)]",
        })}
      >
        {locale === "bg" ? "Поискай оферта" : "Get a Quote"}
      </Link>
    </div>
  );
}
