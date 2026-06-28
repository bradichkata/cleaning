import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, MessageSquareText, PhoneCall, Sparkles } from "lucide-react";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { ReviewSlotCard } from "@/components/blocks/review-slot-card";
import { ServiceCard } from "@/components/blocks/service-card";
import { HeroVisual } from "@/components/home/hero-visual";
import { buttonClasses } from "@/components/ui/button";
import { SchemaScript } from "@/components/ui/schema-script";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  company,
  getCompanyContent,
  getHomeStats,
  getProcessSteps,
  getTrustHighlights,
  getWhyChooseUs,
} from "@/data/company";
import { reviewSlots } from "@/data/reviews";
import { serviceAreas } from "@/data/service-areas";
import { services } from "@/data/services";
import { getCurrentLocale } from "@/lib/server-locale";

export default async function Home() {
  const locale = await getCurrentLocale();
  const companyContent = getCompanyContent(locale);
  const homeStats = getHomeStats(locale);
  const processSteps = getProcessSteps(locale);
  const trustHighlights = getTrustHighlights(locale);
  const whyChooseUs = getWhyChooseUs(locale);
  const featuredServices = services.filter((service) => service.featured).slice(0, 4);
  const featuredReasons = whyChooseUs.slice(0, 3);
  const featuredReviews = reviewSlots.slice(0, 3);

  return (
    <>
      <SchemaScript
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: company.brandName,
          description: companyContent.description,
          telephone: company.phoneDisplay,
          email: company.email,
          areaServed: company.serviceAreas,
          url: company.siteUrl,
        }}
      />

      <section className="section-space flex min-h-[calc(100svh-var(--header-height))] items-center pb-12 pt-6 sm:pb-16">
        <div className="shell grid gap-12 xl:grid-cols-[minmax(0,1.02fr)_minmax(24rem,41rem)] xl:items-center">
          <div>
            <span className="eyebrow">Dublin cleaning services</span>
            <h1 className="mt-6 max-w-5xl text-4xl leading-[0.98] font-bold text-navy sm:text-5xl lg:text-6xl xl:text-7xl">
              Reliable cleaning for busy homes, rentals, and small teams.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              Residential, rental, and office cleaning across Dublin with careful teams, clear arrival windows, and pricing that makes sense before the visit begins.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/get-a-quote" className={buttonClasses({ tone: "primary", size: "lg" })}>
                Get a Quote
              </Link>
              <Link href="/services" className={buttonClasses({ tone: "secondary", size: "lg" })}>
                Explore Services
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[1rem] border border-[rgba(21,45,62,0.12)] bg-[rgba(255,250,244,0.52)] px-4 py-3 text-sm font-medium text-navy shadow-[0_12px_30px_rgba(15,31,42,0.06)]"
                >
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {homeStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1rem] border border-[rgba(21,45,62,0.12)] bg-[rgba(255,250,244,0.48)] px-4 py-3 shadow-[0_12px_30px_rgba(15,31,42,0.06)]"
                >
                  <div className="text-xl font-bold text-navy">{stat.value}</div>
                  <div className="text-sm leading-6 text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <HeroVisual locale={locale} />

            <div className="surface-card rounded-[1.35rem] p-6 sm:p-8">
              <div className="flex items-center gap-3 text-sm font-semibold text-navy">
                <Sparkles className="h-4 w-4 text-turquoise" />
                Quick estimate
              </div>
              <h2 className="mt-5 text-3xl font-bold text-navy">Start with the essentials.</h2>
              <p className="mt-3 text-base leading-7 text-muted">
                Share the service type, property basics, and area. We will use that to frame the right scope before a coordinator confirms the final visit details.
              </p>

              <form action="/get-a-quote" className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="home-service">
                    Cleaning service
                  </label>
                  <select
                    id="home-service"
                    className="input-field"
                    name="serviceSlug"
                    defaultValue="regular-home-cleaning"
                  >
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="home-type">
                    Property type
                  </label>
                  <select id="home-type" className="input-field" name="propertyType" defaultValue="apartment">
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="office">Office suite</option>
                    <option value="rental">Rental / Airbnb</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="home-size">
                    Approximate size
                  </label>
                  <select id="home-size" className="input-field" name="size" defaultValue="medium">
                    <option value="compact">Compact</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="oversized">Oversized</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="home-postcode">
                    Area or postcode
                  </label>
                  <input
                    id="home-postcode"
                    className="input-field"
                    name="postcode"
                    placeholder="e.g. Dublin 4 or D04"
                  />
                </div>
                <button
                  type="submit"
                  className={buttonClasses({
                    tone: "primary",
                    fullWidth: true,
                    size: "lg",
                    className: "sm:col-span-2",
                  })}
                >
                  Start My Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell grid gap-8 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <SectionHeading
              eyebrow="Services"
              title="Choose the service path first, then go deeper only where you need to."
              description="The homepage now points customers into the right service quickly. Detailed scope, pricing logic, and local notes stay on the dedicated pages where they are easier to compare."
            />

            <div className="mt-10 grid gap-6 xl:grid-cols-2">
              {featuredServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
              <Link href="/services" className="inline-flex items-center gap-2 text-navy transition hover:gap-3">
                Explore all services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 text-navy transition hover:gap-3"
              >
                View service areas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="surface-card rounded-[1.35rem] p-6 sm:p-8">
            <span className="eyebrow">Why clients rebook</span>
            <h2 className="mt-5 text-3xl font-bold text-navy">A calmer structure from quote to handoff.</h2>
            <div className="mt-6 space-y-4">
              {featuredReasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-turquoise" />
                  <p className="text-base leading-7 text-muted">{reason}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell grid gap-8 xl:grid-cols-[minmax(0,1fr)_23rem]">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="A simple path that gets people to the right information fast."
              description="Customers do not have to learn the whole business from the homepage. Start with the service, send the essentials, then confirm the visit with a real coordinator."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="panel rounded-[1.25rem] p-6">
                  <div className="text-sm font-semibold text-turquoise">{`Step ${index + 1}`}</div>
                  <h3 className="mt-3 text-xl font-bold text-navy">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{step.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="surface-card rounded-[1.35rem] p-6 sm:p-8">
            <span className="eyebrow">Service areas</span>
            <h2 className="mt-5 text-3xl font-bold text-navy">
              Coverage stays focused so arrival windows stay believable.
            </h2>
            <div className="mt-6 space-y-4">
              {serviceAreas.map((area) => (
                <div
                  key={area.slug}
                  className="rounded-[1rem] border border-[rgba(21,45,62,0.12)] bg-[rgba(255,250,244,0.42)] p-4"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-turquoise" />
                    <div>
                      <h3 className="font-semibold text-navy">{area.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{area.responseTime}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/service-areas"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3"
            >
              See local coverage
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <SectionHeading
              eyebrow="Reviews"
              title="Proof stays visible, but the page does not drown in it."
              description="A few recent reviews stay on the homepage for trust. The full reviews page carries the wider evidence set."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {featuredReviews.map((review) => (
                <ReviewSlotCard key={review.id} review={review} />
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:gap-3"
              >
                Read all reviews
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="surface-card rounded-[1.35rem] p-6 sm:p-8">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-5 text-3xl font-bold text-navy">Need to talk through the job first?</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Use the contact page for callbacks and service-fit questions, or call directly when timing matters more than quoting detail.
            </p>

            <div className="mt-6 space-y-3 text-sm leading-7 text-muted">
              <p>
                <strong className="text-navy">Call:</strong>{" "}
                <a className="font-medium text-navy transition hover:text-turquoise" href={company.phoneHref}>
                  {company.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="text-navy">Email:</strong>{" "}
                <a
                  className="font-medium text-navy transition hover:text-turquoise"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
              </p>
              <p>
                <strong className="text-navy">Hours:</strong> {companyContent.openingHours[0]}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className={buttonClasses({ tone: "primary", fullWidth: true, className: "min-h-12" })}
              >
                <MessageSquareText className="h-4 w-4" />
                Contact Us
              </Link>
              <a
                href={company.phoneHref}
                className={buttonClasses({ tone: "secondary", fullWidth: true, className: "min-h-12" })}
              >
                <PhoneCall className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
