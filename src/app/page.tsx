import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { AreaCard } from "@/components/blocks/area-card";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { FaqList } from "@/components/blocks/faq-list";
import { ReviewSlotCard } from "@/components/blocks/review-slot-card";
import { ServiceCard } from "@/components/blocks/service-card";
import { buttonClasses } from "@/components/ui/button";
import { SchemaScript } from "@/components/ui/schema-script";
import { SectionHeading } from "@/components/ui/section-heading";
import { beforeAfterStories } from "@/data/before-after";
import {
  company,
  getCompanyContent,
  getHomeStats,
  getProcessSteps,
  getTrustHighlights,
  getWhyChooseUs,
} from "@/data/company";
import { faqs } from "@/data/faqs";
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
  const isBg = locale === "bg";
  const featuredServices = services.filter((service) => service.featured);
  const faqPreview = faqs.slice(0, 4);

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

      <section className="section-space pb-10 pt-10 sm:pt-16">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1.12fr)_25rem] lg:items-center">
          <div>
            <span className="eyebrow">{isBg ? "MVP за запитвания" : "Lead-generation MVP"}</span>
            <h1 className="mt-6 max-w-5xl text-5xl leading-[0.96] font-bold text-navy sm:text-6xl xl:text-7xl">
              {isBg
                ? "Професионално почистване без излишен стрес."
                : "Professional cleaning without the stress."}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {isBg
                ? "Надеждно почистване за домове и офиси с обучени професионалисти, прозрачни цени и гъвкави посещения. Изградено около реалистични оценки, а не неясни обещания."
                : "Reliable home and office cleaning with trained professionals, transparent pricing, and flexible appointments. Built around realistic estimates, not vague promises."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className={buttonClasses({ tone: "primary", size: "lg" })}
              >
                {isBg ? "Поискай безплатна оферта" : "Get a Free Quote"}
              </Link>
              <Link
                href="/services"
                className={buttonClasses({ tone: "secondary", size: "lg" })}
              >
                {isBg ? "Виж услугите" : "View Services"}
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[rgba(16,42,67,0.08)] bg-white/80 px-4 py-3 text-sm font-medium text-navy"
                >
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {homeStats.map((stat) => (
                <div key={stat.label} className="panel rounded-[1.5rem] p-5">
                  <div className="text-3xl font-bold text-navy">{stat.value}</div>
                  <div className="mt-2 text-sm leading-6 text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="surface-card rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center gap-3 text-sm font-semibold text-navy">
              <Sparkles className="h-4 w-4 text-turquoise" />
              {isBg ? "Бърз ориентир" : "Quick estimate panel"}
            </div>
            <h2 className="mt-5 text-3xl font-bold text-navy">
              {isBg ? "Започнете с четири лесни детайла." : "Start with four simple details."}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">
              {isBg
                ? "Това ви изпраща към пълната форма с вече попълнени основи. Без стена от петнадесет полета още в началото."
                : "This sends you into the full quote flow with the basics already in place. No fifteen-field wall up front."}
            </p>

            <form action="/get-a-quote" className="mt-6 grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="home-service">
                  {isBg ? "Услуга" : "Cleaning service"}
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
                  {isBg ? "Тип имот" : "Property type"}
                </label>
                <select
                  id="home-type"
                  className="input-field"
                  name="propertyType"
                  defaultValue="apartment"
                >
                  <option value="apartment">{isBg ? "Апартамент" : "Apartment"}</option>
                  <option value="house">{isBg ? "Къща" : "House"}</option>
                  <option value="office">{isBg ? "Офис" : "Office suite"}</option>
                  <option value="rental">{isBg ? "Наем / Airbnb" : "Rental / Airbnb"}</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="home-size">
                  {isBg ? "Приблизителен размер" : "Approximate size"}
                </label>
                <select
                  id="home-size"
                  className="input-field"
                  name="size"
                  defaultValue="medium"
                >
                  <option value="compact">{isBg ? "Компактен" : "Compact"}</option>
                  <option value="medium">{isBg ? "Среден" : "Medium"}</option>
                  <option value="large">{isBg ? "Голям" : "Large"}</option>
                  <option value="oversized">{isBg ? "Много голям" : "Oversized"}</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="home-postcode">
                  {isBg ? "Пощенски код или град" : "Postcode or city"}
                </label>
                <input
                  id="home-postcode"
                  className="input-field"
                  name="postcode"
                  placeholder={isBg ? "напр. 1000 или София" : "e.g. 1000 or Sofia"}
                />
              </div>
              <button
                type="submit"
                className={buttonClasses({ tone: "primary", fullWidth: true, size: "lg" })}
              >
                {isBg ? "Изчисли ориентир" : "Calculate Estimate"}
              </button>
            </form>
          </aside>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <SectionHeading
            eyebrow={isBg ? "Основни услуги" : "Core services"}
            title={
              isBg
                ? "Ясно разграничени линии услуги вместо една обща и неясна оферта."
                : "Distinct service lines instead of one vague catch-all offer."
            }
            description={
              isBg
                ? "Всеки основен тип почистване има своя структура, ценова логика и отделна страница, за да може посетителят да разбере дали услугата му пасва."
                : "Each major cleaning type has its own structure, pricing logic, and service page so visitors can understand fit before they contact you."
            }
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3"
            >
              {isBg ? "Разгледай всички услуги" : "Explore all services"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-[24rem_minmax(0,1fr)]">
          <div className="surface-card rounded-[1.75rem] p-6">
            <span className="eyebrow">{isBg ? "Защо нас" : "Why choose us"}</span>
            <h2 className="mt-5 text-3xl font-bold text-navy">
              {isBg
                ? "Доверието идва от яснота, не от украса."
                : "Trust comes from clarity, not decoration."}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              {isBg
                ? "Сайтът е създаден така, че обхватът, процесът и следващите стъпки да са ясни още от първия екран."
                : "The site is designed to make scope, process, and next steps feel obvious from the first screen."}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {whyChooseUs.map((reason) => (
              <article key={reason} className="panel rounded-[1.5rem] p-6">
                <ShieldCheck className="h-6 w-6 text-turquoise" />
                <p className="mt-4 text-base leading-7 text-muted">{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <SectionHeading
            eyebrow={isBg ? "Как работи" : "How it works"}
            title={
              isBg
                ? "Практичен процес за хора, които са готови сега, и за хора, които първо искат увереност."
                : "A practical conversion flow for people who are ready now and people who need reassurance first."
            }
            description={
              isBg
                ? "Пътят е прост: изберете услуга, получете реалистична оценка, потвърдете часа ръчно и проверете резултата по ясен обхват."
                : "The path is simple: choose the service, get a realistic estimate, confirm the appointment manually, and inspect the result against a defined scope."
            }
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="panel rounded-[1.75rem] p-6">
                <div className="text-sm font-semibold text-turquoise">
                  {isBg ? `Стъпка ${index + 1}` : `Step ${index + 1}`}
                </div>
                <h3 className="mt-3 text-xl font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <SectionHeading
            eyebrow={isBg ? "Преди и след" : "Before & after"}
            title={
              isBg
                ? "Най-силното доказателство за конверсия трябва да идва от реални обекти."
                : "The strongest conversion proof should come from real jobs."
            }
            description={
              isBg
                ? "Тази версия държи структурата честна: оформлението е готово за реални снимки и казуси, без фалшиво stock съдържание."
                : "This build keeps the structure honest: the layout is ready for real project photography and case-study notes without faking stock-image proof."
            }
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {beforeAfterStories.map((story) => (
              <article key={story.title} className="panel overflow-hidden rounded-[1.75rem]">
                <div className="grid grid-cols-2">
                  <div className="bg-[linear-gradient(135deg,_rgba(16,42,67,0.9),_rgba(16,42,67,0.7))] p-6 text-white">
                    <div className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                      {isBg ? "Преди" : "Before"}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/78">{story.before}</p>
                  </div>
                  <div className="bg-[linear-gradient(135deg,_rgba(28,181,163,0.16),_rgba(255,255,255,0.98))] p-6 text-navy">
                    <div className="text-sm font-semibold uppercase tracking-[0.12em] text-turquoise">
                      {isBg ? "След" : "After"}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted">{story.after}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-turquoise">{story.category}</div>
                  <h3 className="mt-3 text-xl font-bold text-navy">{story.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{story.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <SectionHeading
            eyebrow={isBg ? "Преглед на цени" : "Pricing preview"}
            title={
              isBg
                ? "Достатъчно ценови детайл за увереност, без фалшива точност."
                : "Enough pricing detail to build confidence, without false precision."
            }
            description={
              isBg
                ? "Сайтът трябва ясно да обяснява ценовата логика и да оставя окончателното потвърждение за човешки преглед."
                : "A conversion-first cleaning site should explain pricing logic clearly and push final confirmation into a human review where scope actually gets checked."
            }
          />
          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-[rgba(16,42,67,0.08)] bg-white shadow-[0_28px_70px_rgba(16,42,67,0.08)]">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-4 border-b border-[rgba(16,42,67,0.06)] px-6 py-4 text-sm font-semibold text-navy">
              <div>{isBg ? "Услуга" : "Service"}</div>
              <div>{isBg ? "Ценообразуване" : "Pricing model"}</div>
              <div>{isBg ? "Типична продължителност" : "Typical duration"}</div>
            </div>
            {services.slice(0, 5).map((service) => (
              <div
                key={service.slug}
                className="grid grid-cols-[1.4fr_1fr_1fr] gap-4 px-6 py-4 text-sm text-muted odd:bg-[rgba(16,42,67,0.02)]"
              >
                <div>
                  <div className="font-semibold text-navy">{service.name}</div>
                  <div className="mt-1">{service.audience}</div>
                </div>
                <div>{service.pricingLabel}</div>
                <div>{service.durationLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <SectionHeading
            eyebrow={isBg ? "Отзиви" : "Reviews"}
            title={
              isBg
                ? "Секцията за отзиви е готова за пускане, но остава честна."
                : "The review section is launch-ready, but still honest."
            }
            description={
              isBg
                ? "Тъй като все още няма реални отзиви, сайтът държи структурата готова, без да измисля имена, дати или платформи."
                : "Because real reviews were not provided yet, the site keeps the testimonial layout ready without inventing names, dates, or platform proof."
            }
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {reviewSlots.map((review) => (
              <ReviewSlotCard key={review.title} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <SectionHeading
            eyebrow={isBg ? "Райони" : "Service areas"}
            title={
              isBg
                ? "Страниците за покритие са структурирани за локално търсене, без масово генерирано празно съдържание."
                : "Coverage pages are structured for local search, without mass-generated thin content."
            }
            description={
              isBg
                ? "Всяка страница за район е готова за реални локални бележки, подробности за достъп и акцент върху услуги."
                : "Each area page is ready for real local notes, access details, and service emphasis. Fewer credible pages will outperform hundreds of empty city swaps."
            }
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <SectionHeading
              eyebrow={isBg ? "Често задавани" : "Frequently asked"}
              title={
                isBg
                  ? "Честите притеснения са адресирани, преди някой да вдигне телефона."
                  : "Common concerns answered before someone has to pick up the phone."
              }
              description={
                isBg
                  ? "Силното FAQ съдържание намалява несигурността около оценките, достъпа и границите на обхвата."
                  : "Strong FAQ content reduces uncertainty around estimates, access, and scope boundaries."
              }
            />
            <div className="mt-8">
              <FaqList items={faqPreview} />
            </div>
          </div>
          <aside className="surface-card rounded-[1.75rem] p-6">
            <div className="flex items-center gap-3 text-sm font-semibold text-navy">
              <Clock3 className="h-4 w-4 text-turquoise" />
              {isBg ? "Какво следва" : "What happens next"}
            </div>
            <ol className="mt-5 space-y-4 text-base leading-7 text-muted">
              <li>
                1.{" "}
                {isBg
                  ? "Бизнесът получава структурирано запитване вместо неясно съобщение."
                  : "The business receives a structured lead instead of a vague message."}
              </li>
              <li>
                2.{" "}
                {isBg
                  ? "Ориентировъчният диапазон се проверява спрямо достъпа, състоянието и екстрите."
                  : "The estimate range is checked against access, condition, and extras."}
              </li>
              <li>
                3.{" "}
                {isBg
                  ? "Реален човек потвърждава крайната оферта и часовия прозорец."
                  : "A real person confirms the final quote and appointment window."}
              </li>
            </ol>
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3"
            >
              {isBg ? "Виж всички ЧЗВ" : "Read all FAQs"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
