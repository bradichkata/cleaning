import type { Metadata } from "next";
import { ReviewSlotCard } from "@/components/blocks/review-slot-card";
import { PageIntro } from "@/components/ui/page-intro";
import { getReviewProtocol } from "@/data/company";
import { reviewSlots } from "@/data/reviews";
import { getCurrentLocale } from "@/lib/server-locale";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Reviews",
  description:
    "Read recent customer feedback for Harbor & Pine Cleaning across home cleans, move-out jobs, and office visits.",
  path: "/reviews",
});

export default async function ReviewsPage() {
  const locale = await getCurrentLocale();
  const reviewProtocol = getReviewProtocol(locale);

  return (
    <>
      <PageIntro
        eyebrow="Customer feedback"
        title="What recent clients say after the work is done."
        description="The strongest reviews usually mention the same things: arrival windows that hold, clear communication, and a finish that still looks right at the final check."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {reviewSlots.map((review) => (
            <ReviewSlotCard key={review.id} review={review} />
          ))}
        </div>
      </section>
      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-3">
          {reviewProtocol.map((item) => (
            <article key={item} className="panel rounded-[1.25rem] p-6">
              <p className="text-base leading-7 text-muted">{item}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
