import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import type { Locale } from "@/lib/locale";

export function MobileQuoteBar({ locale }: { locale: Locale }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[rgba(21,45,62,0.12)] bg-[linear-gradient(180deg,rgba(243,238,229,0),rgba(243,238,229,0.94)_42%,rgba(236,230,220,0.98)_100%)] px-4 pb-[calc(env(safe-area-inset-bottom)+0.9rem)] pt-3 backdrop-blur-xl lg:hidden">
      <Link
        href="/get-a-quote"
        className={buttonClasses({
          tone: "primary",
          size: "lg",
          fullWidth: true,
          className: "mx-auto max-w-md shadow-[0_18px_40px_rgba(29,55,72,0.16)]",
        })}
      >
        {locale === "bg" ? "ÐŸÐ¾Ð¸ÑÐºÐ°Ð¹ Ð¾Ñ„ÐµÑ€Ñ‚Ð°" : "Get a Quote"}
      </Link>
    </div>
  );
}
