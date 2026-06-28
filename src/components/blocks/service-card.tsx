import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="panel rounded-[1.25rem] p-6 transition duration-200">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <span className="eyebrow">{service.heroTag}</span>
        <div className="text-sm text-muted sm:text-right">
          <div>{service.pricingLabel}</div>
          <div>{service.durationLabel}</div>
        </div>
      </div>
      <h3 className="mt-5 text-2xl font-bold text-navy">{service.name}</h3>
      <p className="mt-3 text-base leading-7 text-muted">{service.result}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.suitableFor.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[rgba(29,55,72,0.05)] px-3 py-1 text-sm text-navy"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 font-semibold text-navy transition hover:gap-3"
      >
        View details
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
