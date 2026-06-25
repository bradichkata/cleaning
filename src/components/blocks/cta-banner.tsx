import Link from "next/link";
import { MessageSquareText, Phone } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { company } from "@/data/company";
import type { Locale } from "@/lib/locale";

export function CtaBanner({ locale = "en" }: { locale?: Locale }) {
  const isBg = locale === "bg";

  return (
    <section className="section-space pt-0">
      <div className="shell">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,_#102A43,_#163C5B)] px-6 py-10 text-white shadow-[0_32px_80px_rgba(16,42,67,0.28)] sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <span className="eyebrow border-white/20 bg-white/10 text-white">
                {isBg ? "Финален CTA" : "Final conversion"}
              </span>
              <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-bold sm:text-4xl">
                {isBg
                  ? "Кажете ни какво трябва да се почисти. Ще отговорим с ясна оферта и следваща практична стъпка."
                  : "Tell us what needs cleaning. We will respond with a clear quote and the next practical step."}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">
                {isBg
                  ? "Използвайте структурираната форма за оферта, когато ви трябва ценови ориентир, или се обадете директно при спешен срок."
                  : "Use the structured quote form when you want pricing context, or call directly when timing is urgent."}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/get-a-quote"
                className={buttonClasses({
                  tone: "secondary",
                  size: "lg",
                  className: "border-white/16 bg-white text-navy hover:bg-white/92",
                })}
              >
                <MessageSquareText className="h-4 w-4" />
                {isBg ? "Поискай оферта" : "Request a Quote"}
              </Link>
              <a
                href={company.phoneHref}
                className={buttonClasses({
                  tone: "ghost",
                  size: "lg",
                  className: "border border-white/18 text-white hover:bg-white/10",
                })}
              >
                <Phone className="h-4 w-4" />
                {isBg ? "Обади се сега" : "Call Now"}
              </a>
              <a
                href={company.whatsappHref}
                className="text-sm font-medium text-white/76 transition hover:text-white"
              >
                {isBg ? "Пиши в WhatsApp" : "Message on WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
