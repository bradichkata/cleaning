import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceArea } from "@/types/content";

export function AreaCard({ area }: { area: ServiceArea }) {
  return (
    <article className="panel rounded-[1.25rem] p-6">
      <span className="eyebrow">Dublin area</span>
      <h3 className="mt-5 text-2xl font-bold text-navy">{area.name}</h3>
      <p className="mt-3 text-base leading-7 text-muted">{area.summary}</p>
      <div className="mt-5 space-y-2 text-sm text-muted">
        <p>
          <strong className="text-navy">Response time:</strong> {area.responseTime}
        </p>
        <p>
          <strong className="text-navy">Travel fee:</strong> {area.travelFee}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {area.neighborhoods.slice(0, 3).map((place) => (
          <span
            key={place}
            className="rounded-full bg-[rgba(29,55,72,0.05)] px-3 py-1 text-sm text-navy"
          >
            {place}
          </span>
        ))}
      </div>
      <Link
        href={`/service-areas/${area.slug}`}
        className="mt-6 inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3"
      >
        View local details
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
