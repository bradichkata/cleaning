import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { getPricingPrinciples } from "@/data/company";
import { pricingConfig } from "@/data/pricing";
import { services } from "@/data/services";
import { getCurrentLocale } from "@/lib/server-locale";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Prices",
  description:
    "See Harbor & Pine Cleaning guide prices in EUR across recurring cleans, deep cleans, move-out jobs, and office work.",
  path: "/prices",
});

export default async function PricesPage() {
  const locale = await getCurrentLocale();
  const pricingPrinciples = getPricingPrinciples(locale);

  return (
    <>
      <PageIntro
        eyebrow="Guide prices in EUR"
        title="Helpful pricing context without pretending every property costs the same."
        description="The rates below are guided ranges and pricing models. Final confirmation depends on condition, access, parking, timing, and any extras added to the scope."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 md:grid-cols-[minmax(0,1fr)_21rem]">
          <div className="overflow-x-auto rounded-[1.25rem] border border-[rgba(29,55,72,0.08)] bg-white shadow-[0_20px_48px_rgba(29,55,72,0.08)]">
            <div className="min-w-[38rem]">
              <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-4 border-b border-[rgba(29,55,72,0.06)] px-6 py-4 text-sm font-semibold text-navy">
                <div>Service</div>
                <div>Pricing model</div>
                <div>Suitable for</div>
              </div>
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="grid grid-cols-[1.3fr_1fr_1fr] gap-4 px-6 py-4 text-sm text-muted odd:bg-[rgba(29,55,72,0.02)]"
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

          <aside className="surface-card rounded-[1.25rem] p-6">
            <h2 className="text-2xl font-bold text-navy">Pricing notes</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
              {pricingPrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-[1rem] bg-[rgba(29,55,72,0.04)] p-4 text-sm leading-7 text-muted">
              <p>{pricingConfig.residentialSupplyNote}</p>
              <p className="mt-3">{pricingConfig.parkingPassThroughNote}</p>
              <p className="mt-3">{pricingConfig.weekendNote}</p>
            </div>
            <Link
              href="/get-a-quote"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3"
            >
              Build your estimate
            </Link>
          </aside>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
