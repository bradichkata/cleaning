import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui/page-intro";
import { beforeAfterStories } from "@/data/before-after";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Before & After",
  description:
    "See recent-style kitchen, move-out, and office reset case studies from Harbor & Pine Cleaning.",
  path: "/before-after",
});

export default function BeforeAfterPage() {
  return (
    <>
      <PageIntro
        eyebrow="Cleaning results"
        title="A closer look at the kind of resets clients ask us to handle."
        description="These case notes show the condition we walked into, the scope we handled, and the result the client needed at handoff."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {beforeAfterStories.map((story) => (
            <article key={story.title} className="panel overflow-hidden rounded-[1.25rem]">
              <div className="relative aspect-[4/3]">
                <Image src={story.image} alt={story.alt} fill className="object-cover" sizes="(max-width: 1280px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-turquoise">{story.category}</div>
                <h2 className="mt-3 text-xl font-bold text-navy">{story.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted">{story.outcome}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1rem] bg-[rgba(29,55,72,0.04)] p-4">
                    <div className="text-xs font-semibold tracking-[0.08em] text-muted uppercase">Before</div>
                    <p className="mt-2 text-sm leading-6 text-muted">{story.before}</p>
                  </div>
                  <div className="rounded-[1rem] bg-[rgba(47,140,119,0.08)] p-4">
                    <div className="text-xs font-semibold tracking-[0.08em] text-turquoise uppercase">After</div>
                    <p className="mt-2 text-sm leading-6 text-muted">{story.after}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-sm text-navy">
                  <span className="rounded-full bg-[rgba(29,55,72,0.05)] px-3 py-1">{story.scope}</span>
                  <span className="rounded-full bg-[rgba(29,55,72,0.05)] px-3 py-1">{story.turnaround}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
