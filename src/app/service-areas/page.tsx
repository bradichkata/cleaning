import type { Metadata } from "next";
import { AreaCard } from "@/components/blocks/area-card";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { PageIntro } from "@/components/ui/page-intro";
import { serviceAreas } from "@/data/service-areas";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas",
  description:
    "Explore Harbor & Pine Cleaning coverage across central and south Dublin, including travel notes and response-time guidance.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageIntro
        eyebrow="Coverage"
        title="Focused coverage across the Dublin areas we can serve reliably."
        description="We keep the coverage map practical so arrival windows stay dependable and repeat bookings stay easy to plan."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceAreas.map((area) => (
            <AreaCard key={area.slug} area={area} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
