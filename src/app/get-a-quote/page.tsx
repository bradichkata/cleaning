import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { QuoteForm } from "@/components/forms/quote-form";
import { getCompanyContent } from "@/data/company";
import { getCurrentLocale } from "@/lib/server-locale";
import { buildMetadata } from "@/lib/seo";

type QuotePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function readQueryValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export const metadata: Metadata = buildMetadata({
  title: "Get a Quote",
  description:
    "Request a structured cleaning quote with estimate guidance, scope questions, access notes, and contact preferences.",
  path: "/get-a-quote",
});

export default async function GetAQuotePage({
  searchParams,
}: QuotePageProps) {
  const locale = await getCurrentLocale();
  const companyContent = getCompanyContent(locale);
  const query = await searchParams;
  const isBg = locale === "bg";

  const defaults = {
    serviceSlug: readQueryValue(query.serviceSlug),
    propertyType: readQueryValue(query.propertyType),
    size: readQueryValue(query.size),
    postcode: readQueryValue(query.postcode),
    city: readQueryValue(query.city),
  };

  return (
    <>
      <PageIntro
        eyebrow={isBg ? "Запитване за оферта" : "Quote request"}
        title={
          isBg
            ? "Кажете ни какво трябва да се почисти. Ще върнем ясен следващ практически ход."
            : "Tell us what needs cleaning. We will return a clear, reviewable next step."
        }
        description={
          isBg
            ? "Формата е създадена да събира полезен контекст за оферта, без да се преструва, че автоматично потвърждава график, време за пътуване или крайна цена."
            : "This form is built to capture useful quoting context without pretending to auto-confirm staff schedules, travel time, or final pricing."
        }
        aside={
          <>
            <div className="text-sm font-semibold text-turquoise">
              {isBg ? "Защо това работи" : "Why this works"}
            </div>
            <ul className="mt-4 space-y-3 text-base leading-7 text-muted">
              <li>
                •{" "}
                {isBg
                  ? "Ориентировъчният ценови диапазон се показва веднага за по-голяма увереност."
                  : "Estimate ranges are shown immediately for customer confidence."}
              </li>
              <li>
                •{" "}
                {isBg
                  ? "Обхватът, достъпът и контактните данни се събират в един структуриран запис."
                  : "Scope, access, and contact details are stored in one structured record."}
              </li>
              <li>
                •{" "}
                {isBg
                  ? "Крайното потвърждение на часа остава ръчно."
                  : "Final appointment confirmation still happens manually."}
              </li>
            </ul>
            <p className="mt-5 rounded-[1.25rem] bg-[rgba(16,42,67,0.04)] p-4 text-sm leading-7 text-muted">
              {companyContent.quotePromise}
            </p>
          </>
        }
      />
      <section className="section-space pt-0">
        <div className="shell">
          <QuoteForm
            sourcePage="get-a-quote"
            defaults={defaults}
            locale={locale}
            quotePromise={companyContent.quotePromise}
          />
        </div>
      </section>
    </>
  );
}
