import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { QuoteForm } from "@/components/forms/quote-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request an Inspection",
  description:
    "Ask for a manual inspection or appointment review without turning the site into a risky instant-booking system.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <PageIntro
        eyebrow="Manual appointment flow"
        title="Request an inspection or preferred appointment window."
        description="This page keeps booking honest: you can request a slot, but the business still reviews staffing, travel time, scope, and access before confirming."
      />
      <section className="section-space pt-0">
        <div className="shell">
          <QuoteForm sourcePage="book-page" />
        </div>
      </section>
    </>
  );
}
