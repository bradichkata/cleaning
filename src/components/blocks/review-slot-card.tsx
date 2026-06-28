import type { ReviewSlot } from "@/types/content";

export function ReviewSlotCard({ review }: { review: ReviewSlot }) {
  return (
    <article className="panel rounded-[1.75rem] p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <span className="eyebrow">Verified review slot</span>
        <span className="text-sm text-muted">{review.source}</span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-navy">{review.title}</h3>
      <p className="mt-3 text-base leading-7 text-muted">{review.prompt}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-sm text-navy">
        <span className="rounded-full bg-[rgba(16,42,67,0.05)] px-3 py-1">
          {review.service}
        </span>
        <span className="rounded-full bg-[rgba(16,42,67,0.05)] px-3 py-1">
          {review.location}
        </span>
      </div>
    </article>
  );
}
