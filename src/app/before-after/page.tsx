import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { beforeAfterStories } from "@/data/before-after";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Before & After",
  description:
    "Case-study layout prepared for real cleaning photos and captions without using fake or generic stock proof.",
  path: "/before-after",
});

export default function BeforeAfterPage() {
  return (
    <>
      <PageIntro
        eyebrow="Case-study layout"
        title="A stronger way to show proof than generic stock images."
        description="These cards are structured for real projects and real notes. Replace the placeholders with licensed or owned before-and-after photography before launch."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {beforeAfterStories.map((story) => (
            <article key={story.title} className="panel overflow-hidden rounded-[1.75rem]">
              <div className="grid grid-cols-2">
                <div className="bg-[linear-gradient(135deg,_rgba(16,42,67,0.92),_rgba(16,42,67,0.72))] p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/68">
                    Before
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/78">{story.before}</p>
                </div>
                <div className="bg-[linear-gradient(135deg,_rgba(28,181,163,0.16),_rgba(255,255,255,0.98))] p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-turquoise">
                    After
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted">{story.after}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-turquoise">{story.category}</div>
                <h2 className="mt-3 text-xl font-bold text-navy">{story.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted">{story.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
