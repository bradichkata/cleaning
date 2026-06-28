import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { getPricingPrinciples } from "@/data/company";
import { getCurrentLocale } from "@/lib/server-locale";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Prices",
  description:
    "See how pricing is structured across recurring cleans, deep cleans, commercial work, and specialist add-ons.",
  path: "/prices",
});

export default async function PricesPage() {
  const locale = await getCurrentLocale();
  const pricingPrinciples = getPricingPrinciples(locale);
  const isBg = locale === "bg";

  return (
    <>
      <PageIntro
        eyebrow={isBg ? "Преглед на цените" : "Pricing preview"}
        title={
          isBg
            ? "Прозрачна ценова логика без преструвка, че всеки имот струва еднакво."
            : "Transparent price logic without pretending every property costs the same."
        }
        description={
          isBg
            ? "Правилната първа версия за почистваща фирма е система с ориентировъчни оферти. Тя дава полезен бюджетен контекст, без да излага бизнеса на лоши предположения за обхвата."
            : "The right first version for a cleaning business is an estimate-led system. It gives customers helpful budget context while protecting the business from bad scope assumptions."
        }
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 md:grid-cols-[minmax(0,1fr)_21rem]">
          <div className="overflow-x-auto rounded-[1.75rem] border border-[rgba(16,42,67,0.08)] bg-white shadow-[0_28px_70px_rgba(16,42,67,0.08)]">
            <div className="min-w-[38rem]">
              <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-4 border-b border-[rgba(16,42,67,0.06)] px-6 py-4 text-sm font-semibold text-navy">
                <div>{isBg ? "Услуга" : "Service"}</div>
                <div>{isBg ? "Модел на ценообразуване" : "Pricing model"}</div>
                <div>{isBg ? "Подходящо за" : "Suitable for"}</div>
              </div>
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="grid grid-cols-[1.3fr_1fr_1fr] gap-4 px-6 py-4 text-sm text-muted odd:bg-[rgba(16,42,67,0.02)]"
                >
                  <div>
                    <div className="font-semibold text-navy">{service.name}</div>
                    <div className="mt-1">{service.durationLabel}</div>
                  </div>
                  <div>{service.pricingLabel}</div>
                  <div>{service.audience}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="surface-card rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">
              {isBg ? "Ценови принципи" : "Price principles"}
            </h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-muted">
              {pricingPrinciples.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Link
              href="/get-a-quote"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3"
            >
              {isBg ? "Изгради своя ориентир" : "Build your estimate"}
            </Link>
          </aside>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
