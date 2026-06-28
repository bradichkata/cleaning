import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { getCommercialCapabilities } from "@/data/company";
import { getCurrentLocale } from "@/lib/server-locale";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Cleaning",
  description:
    "Commercial cleaning landing page for office suites, shared spaces, and low-disruption routine service enquiries.",
  path: "/commercial-cleaning",
});

export default async function CommercialCleaningPage() {
  const locale = await getCurrentLocale();
  const commercialCapabilities = getCommercialCapabilities(locale);
  const isBg = locale === "bg";

  return (
    <>
      <PageIntro
        eyebrow={isBg ? "Фокус върху бизнеса" : "Commercial focus"}
        title={
          isBg
            ? "Рутинно търговско почистване без сайтът да се превръща в корпоративно чудовище."
            : "Routine commercial cleaning without turning the site into an enterprise monster."
        }
        description={
          isBg
            ? "Страницата е създадена да привлича запитвания за офиси, студия и споделени пространства, като същевременно целият продукт остава в една Next.js кодова база."
            : "This page is designed to capture office, studio, and shared-space leads while still keeping the whole product as a modular monolith in one Next.js codebase."
        }
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 md:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="grid gap-5 md:grid-cols-2">
            {commercialCapabilities.map((item) => (
              <article key={item} className="panel rounded-[1.5rem] p-6">
                <p className="text-base leading-7 text-muted">{item}</p>
              </article>
            ))}
          </div>
          <aside className="surface-card rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">
              {isBg ? "Най-подходяща следваща страница" : "Best next page"}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              {isBg
                ? "Подробната страница за почистване на офиси съдържа пълния обхват, ориентировъчна оценка и процеса за оферта."
                : "The detailed office-cleaning page carries the full scope, estimate, and quote-request workflow."}
            </p>
            <Link
              href="/services/office-cleaning"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3"
            >
              {isBg ? "Виж почистване на офиси" : "View office cleaning"}
            </Link>
          </aside>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
