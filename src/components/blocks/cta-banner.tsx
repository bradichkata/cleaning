import Link from "next/link";
import { MessageSquareText, Phone } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { company } from "@/data/company";
import type { Locale } from "@/lib/locale";

export function CtaBanner({ locale = "en" }: { locale?: Locale }) {
  void locale;

  return (
    <section className="section-space pt-0">
      <div className="shell">
        <div className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,_#223748,_#2d4a5f)] px-6 py-10 text-white shadow-[0_28px_64px_rgba(29,55,72,0.24)] sm:px-10">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div>
              <span className="eyebrow border-white/20 bg-white/10 text-white">
                Request a quote
              </span>
              <h2 className="mt-5 max-w-2xl text-2xl leading-tight font-bold sm:text-3xl">
                Tell us what needs cleaning and we will help you plan the next step.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                Use the structured quote form when you want pricing context, or call directly when the timing is urgent.
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
                Request a Quote
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
                Call Now
              </a>
              <a
                href={company.whatsappHref}
                className="text-sm font-medium text-white/76 transition hover:text-white"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
