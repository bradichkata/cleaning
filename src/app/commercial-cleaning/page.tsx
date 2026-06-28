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
    "Commercial cleaning for office suites, studios, and shared spaces with low-disruption scheduling across Dublin.",
  path: "/commercial-cleaning",
});

export default async function CommercialCleaningPage() {
  const locale = await getCurrentLocale();
  const commercialCapabilities = getCommercialCapabilities(locale);

  return (
    <>
      <PageIntro
        eyebrow="Commercial"
        title="Routine cleaning for offices, studios, and shared workspaces."
        description="We focus on dependable presentation, low-disruption scheduling, and practical reporting for small teams that need the space ready for staff and clients."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 md:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="grid gap-5 md:grid-cols-2">
            {commercialCapabilities.map((item) => (
              <article key={item} className="panel rounded-[1.25rem] p-6">
                <p className="text-base leading-7 text-muted">{item}</p>
              </article>
            ))}
          </div>
          <aside className="surface-card rounded-[1.25rem] p-6">
            <h2 className="text-2xl font-bold text-navy">Office cleaning details</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              The dedicated office-cleaning service page covers visit rhythm, add-ons, and how commercial quotes are reviewed before a schedule is agreed.
            </p>
            <Link
              href="/services/office-cleaning"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3"
            >
              View office cleaning
            </Link>
          </aside>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
