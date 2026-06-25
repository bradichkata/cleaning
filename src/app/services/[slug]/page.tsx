import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { FaqList } from "@/components/blocks/faq-list";
import { PageIntro } from "@/components/ui/page-intro";
import { QuoteForm } from "@/components/forms/quote-form";
import { beforeAfterStories } from "@/data/before-after";
import { faqs } from "@/data/faqs";
import { getServiceBySlug, services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: service.name,
    description: service.metadataDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relevantFaqs = faqs.filter((item) =>
    item.tags.some((tag) =>
      ["services", "quote", "prices", service.slug].includes(tag),
    ),
  );

  return (
    <>
      <PageIntro
        eyebrow={service.heroTag}
        title={service.name}
        description={service.summary}
        actions={[
          { label: "Request a Quote", href: "/get-a-quote", tone: "primary" },
          { label: "See Prices", href: "/prices", tone: "secondary" },
        ]}
        aside={
          <>
            <div className="text-sm font-semibold text-turquoise">{service.audience}</div>
            <h2 className="mt-4 text-2xl font-bold text-navy">{service.result}</h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
              <p>
                <strong className="text-navy">Pricing:</strong> {service.pricingLabel}
              </p>
              <p>
                <strong className="text-navy">Duration:</strong> {service.durationLabel}
              </p>
            </div>
          </>
        }
      />

      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-3">
          {service.benefits.map((benefit) => (
            <article key={benefit} className="panel rounded-[1.5rem] p-6">
              <p className="text-base leading-7 text-muted">{benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-3">
          <article className="panel rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">What is included</h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-muted">
              {service.included.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="panel rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">What is not included</h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-muted">
              {service.excluded.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="panel rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">Optional extras</h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-muted">
              {service.extras.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <div className="grid gap-6 xl:grid-cols-3">
            {service.checklist.map((section) => (
              <article key={section.title} className="panel rounded-[1.75rem] p-6">
                <h2 className="text-2xl font-bold text-navy">{section.title}</h2>
                <ul className="mt-5 space-y-3 text-base leading-7 text-muted">
                  {section.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <article className="panel rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">Preparation instructions</h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-muted">
              {service.preparation.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-bold text-navy">Service-area notes</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-muted">
              {service.serviceAreaNotes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="surface-card rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">Good fit for</h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-muted">
              {service.suitableFor.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <div className="grid gap-6 xl:grid-cols-3">
            {beforeAfterStories.slice(0, 3).map((story) => (
              <article key={story.title} className="panel rounded-[1.75rem] p-6">
                <div className="text-sm font-semibold text-turquoise">{story.category}</div>
                <h2 className="mt-3 text-xl font-bold text-navy">{story.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted">
                  {story.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <h2 className="text-3xl font-bold text-navy">Frequently asked</h2>
            <div className="mt-6">
              <FaqList items={relevantFaqs.length ? relevantFaqs : faqs.slice(0, 4)} />
            </div>
          </div>
          <div className="surface-card rounded-[1.75rem] p-6">
            <div className="text-sm font-semibold text-turquoise">Booking note</div>
            <p className="mt-4 text-base leading-7 text-muted">
              Quote requests are reviewed manually before anything is confirmed.
              That keeps access, timing, and condition from being guessed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <PageIntro
            eyebrow="Quote form"
            title={`Request a ${service.name.toLowerCase()} quote`}
            description="Use the structured form below to capture scope, access, and contact details in one pass."
          />
          <div className="mt-2">
            <QuoteForm
              sourcePage={`service-page-${service.slug}`}
              defaults={{ serviceSlug: service.slug }}
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
