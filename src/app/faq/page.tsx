import type { Metadata } from "next";
import { FaqList } from "@/components/blocks/faq-list";
import { PageIntro } from "@/components/ui/page-intro";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about estimates, service scope, parking, access, and follow-up handling.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="Frequently asked"
        title="Clear answers to the questions that most often block conversion."
        description="The FAQ is designed to handle the practical objections first: final price certainty, access, windows, add-ons, and how missed items are reviewed."
      />
      <section className="section-space pt-0">
        <div className="shell">
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
