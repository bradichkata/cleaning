import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { company, getWhyChooseUs } from "@/data/company";
import { getCurrentLocale } from "@/lib/server-locale";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "See the operating principles, trust positioning, and delivery standards behind the cleaning-services MVP.",
  path: "/about",
});

export default async function AboutPage() {
  const locale = await getCurrentLocale();
  const whyChooseUs = getWhyChooseUs(locale);
  const isBg = locale === "bg";

  return (
    <>
      <PageIntro
        eyebrow={isBg ? "За компанията" : "About the company"}
        title={
          isBg
            ? "Създадено да излъчва надеждност, внимание, точност и прозрачност."
            : "Built to feel reliable, careful, punctual, and transparent."
        }
        description={
          isBg
            ? "Тонът на сайта следва бизнес модела: ясен процес, реалистично ценообразуване, ниско смущение и обхват, който може да бъде защитен след изпълнение."
            : "The site tone follows the business model: clear process, realistic pricing, low-disruption service, and scope that can be defended after the job."
        }
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <article className="panel rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">
              {isBg ? "Принципи на работа" : "Operating principles"}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-muted">
              {whyChooseUs.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
          <article className="surface-card rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">
              {isBg ? "Бележка за пускане" : "Launch note"}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              {isBg
                ? "Текущата версия използва демо фирмени данни, докато бъдат предоставени реалното име на компанията, регистрация, снимки на екипа и правните текстове."
                : "The current build uses demo business details until the real company name, registration, team photography, and legal wording are supplied."}
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted">
              <div>{company.legalName}</div>
              <div>{company.registration}</div>
              <div>{company.address}</div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
