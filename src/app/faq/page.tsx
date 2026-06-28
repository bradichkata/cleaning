import type { Metadata } from "next";
import { FaqList } from "@/components/blocks/faq-list";
import { PageIntro } from "@/components/ui/page-intro";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about estimates, access, add-ons, parking, and post-visit follow-up.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="Frequently asked"
        title="Answers to the questions most customers ask before they book."
        description="We cover the practical points first: what affects the final price, how access is handled, which add-ons are common, and what happens if something needs follow-up."
      />
      <section className="section-space pt-0">
        <div className="shell">
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
