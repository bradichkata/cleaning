import { Star } from "lucide-react";
import type { ReviewSlot } from "@/types/content";

export function ReviewSlotCard({ review }: { review: ReviewSlot }) {
  return (
    <article className="panel rounded-[1.25rem] p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.08em] text-muted uppercase">
            <span className="rounded-full bg-[rgba(29,55,72,0.06)] px-3 py-1 text-navy">
              {review.source}
            </span>
            <span>{review.dateLabel}</span>
          </div>
          <h3 className="mt-4 text-xl font-bold text-navy">{review.author}</h3>
        </div>
        <div
          className="flex items-center gap-1 text-gold"
          aria-label={`${review.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4"
              fill={index < review.rating ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>
      <p className="mt-4 text-base leading-7 text-navy">
        &ldquo;{review.quote}&rdquo;
      </p>
      <p className="mt-4 text-sm leading-6 text-muted">{review.outcome}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-sm text-navy">
        <span className="rounded-full bg-[rgba(29,55,72,0.05)] px-3 py-1">
          {review.service}
        </span>
        <span className="rounded-full bg-[rgba(29,55,72,0.05)] px-3 py-1">
          {review.location}
        </span>
      </div>
    </article>
  );
}
