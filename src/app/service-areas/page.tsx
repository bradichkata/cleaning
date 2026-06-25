import type { Metadata } from "next";
import { AreaCard } from "@/components/blocks/area-card";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { serviceAreas } from "@/data/service-areas";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas",
  description:
    "Explore the current coverage structure, response-time notes, and travel-fee guidance for each area page in the MVP.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageIntro
        eyebrow="Coverage"
        title="Service-area pages built for real local detail, not bulk-generated filler."
        description="Each area page is ready for genuine coverage notes, timing expectations, and service emphasis. That gives you stronger local SEO without bloating the site with empty duplicates."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <AreaCard key={area.slug} area={area} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
