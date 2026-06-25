import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { QuoteForm } from "@/components/forms/quote-form";
import { getServiceAreaBySlug, serviceAreas } from "@/data/service-areas";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

type ServiceAreaPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return {};
  }

  return buildMetadata({
    title: `${area.name} Cleaning Services`,
    description: area.summary,
    path: `/service-areas/${area.slug}`,
  });
}

export default async function ServiceAreaPage({
  params,
}: ServiceAreaPageProps) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <PageIntro
        eyebrow="Local page"
        title={`${area.name} cleaning services`}
        description={area.summary}
        aside={
          <>
            <div className="text-sm font-semibold text-turquoise">Coverage snapshot</div>
            <p className="mt-4 text-base leading-7 text-muted">
              <strong className="text-navy">Response time:</strong> {area.responseTime}
            </p>
            <p className="mt-3 text-base leading-7 text-muted">
              <strong className="text-navy">Travel fee:</strong> {area.travelFee}
            </p>
          </>
        }
      />

      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <article className="panel rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">Neighbourhood focus</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {area.neighborhoods.map((place) => (
                <span
                  key={place}
                  className="rounded-full bg-[rgba(16,42,67,0.05)] px-3 py-1 text-sm text-navy"
                >
                  {place}
                </span>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold text-navy">Local notes</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-muted">
              {area.localNotes.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-bold text-navy">Parking guidance</h3>
            <p className="mt-4 text-base leading-7 text-muted">
              {area.parkingGuidance}
            </p>
          </article>

          <article className="surface-card rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">Best fit services</h2>
            <div className="mt-5 space-y-3">
              {area.serviceSlugs.map((serviceSlug) => {
                const service = getServiceBySlug(serviceSlug);

                if (!service) {
                  return null;
                }

                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block rounded-2xl border border-[rgba(16,42,67,0.08)] bg-white px-4 py-3 text-sm font-medium text-navy transition hover:border-[rgba(28,181,163,0.3)]"
                  >
                    {service.name}
                  </Link>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <QuoteForm
            sourcePage={`service-area-${area.slug}`}
            defaults={{ city: area.name }}
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
