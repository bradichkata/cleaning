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
    "Request a structured cleaning quote with guided pricing, access notes, timing preferences, and contact details.",
  path: "/get-a-quote",
});

export default async function GetAQuotePage({ searchParams }: QuotePageProps) {
  const locale = await getCurrentLocale();
  const companyContent = getCompanyContent(locale);
  const query = await searchParams;

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
        eyebrow="Quote request"
        title="Tell us what needs cleaning and we will return a clear next step."
        description="This form gathers the property, access, and timing details needed to give you a realistic range before the visit is confirmed."
        aside={
          <>
            <div className="text-sm font-semibold text-turquoise">What to expect</div>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
              <li>Guided pricing in EUR while the request is still under review.</li>
              <li>One structured record for scope, access, and contact details.</li>
              <li>A real coordinator confirms the final visit window.</li>
            </ul>
            <p className="mt-5 rounded-[1rem] bg-[rgba(29,55,72,0.04)] p-4 text-sm leading-7 text-muted">
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
