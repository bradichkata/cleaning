import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { QuoteForm } from "@/components/forms/quote-form";
import { getCompanyContent } from "@/data/company";
import { getCurrentLocale } from "@/lib/server-locale";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request an Inspection",
  description:
    "Request a preferred inspection or appointment window and let Harbor & Pine Cleaning confirm the practical details.",
  path: "/book",
});

export default async function BookPage() {
  const locale = await getCurrentLocale();
  const companyContent = getCompanyContent(locale);

  return (
    <>
      <PageIntro
        eyebrow="Visit request"
        title="Request an inspection or preferred appointment window."
        description="Tell us the timing that works best for you. We will review team availability, access notes, and property scope before confirming the visit."
      />
      <section className="section-space pt-0">
        <div className="shell">
          <QuoteForm sourcePage="book-page" locale={locale} quotePromise={companyContent.quotePromise} />
        </div>
      </section>
    </>
  );
}
