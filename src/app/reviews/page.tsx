import type { Metadata } from "next";
import { ReviewSlotCard } from "@/components/blocks/review-slot-card";
import { PageIntro } from "@/components/ui/page-intro";
import { getReviewProtocol } from "@/data/company";
import { getCurrentLocale } from "@/lib/server-locale";
import { reviewSlots } from "@/data/reviews";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Reviews",
  description:
    "Review-section structure ready for verified testimonials without fabricating social proof during the build phase.",
  path: "/reviews",
});

export default async function ReviewsPage() {
  const locale = await getCurrentLocale();
  const reviewProtocol = getReviewProtocol(locale);
  const isBg = locale === "bg";

  return (
    <>
      <PageIntro
        eyebrow={isBg ? "Структура за отзиви" : "Reviews architecture"}
        title={
          isBg
            ? "Секцията за отзиви е готова, но доказателството остава честно."
            : "The review layout is live, but the proof stays honest."
        }
        description={
          isBg
            ? "В този прототип не са добавени измислени препоръки. Вместо това страницата е готова за реални отзиви от Google, Facebook или CRM, когато ги предоставите."
            : "No fabricated testimonials were added to this prototype. Instead, the page is ready for verified Google, Facebook, or CRM-backed reviews once you provide them."
        }
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 xl:grid-cols-3">
          {reviewSlots.map((review) => (
            <ReviewSlotCard key={review.title} review={review} />
          ))}
        </div>
      </section>
      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-3">
          {reviewProtocol.map((item) => (
            <article key={item} className="panel rounded-[1.75rem] p-6">
              <p className="text-base leading-7 text-muted">{item}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
