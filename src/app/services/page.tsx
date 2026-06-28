import type { Metadata } from "next";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { ServiceCard } from "@/components/blocks/service-card";
import { PageIntro } from "@/components/ui/page-intro";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Browse Harbor & Pine Cleaning services for recurring home cleans, deep cleans, move-out jobs, offices, and specialist add-ons.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Cleaning services for homes, rentals, and small workplaces."
        description="Each service page explains the scope, timing, and add-ons that matter most for that type of visit."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
