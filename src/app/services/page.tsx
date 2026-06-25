import type { Metadata } from "next";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { ServiceCard } from "@/components/blocks/service-card";
import { PageIntro } from "@/components/ui/page-intro";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Browse service-specific cleaning pages with clear scope, pricing approach, duration expectations, and next-step guidance.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services overview"
        title="Every major cleaning offer gets its own page, scope, and pricing logic."
        description="That keeps the site professional for real customers, clearer for advertising campaigns, and stronger for search intent than a single generic services page."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 xl:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
