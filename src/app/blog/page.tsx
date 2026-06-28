import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { blogCards } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Read practical cleaning advice, move-out planning notes, and office upkeep guidance from Harbor & Pine Cleaning.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="From the team"
        title="Practical advice for keeping homes, rentals, and workplaces under control."
        description="Short guides for preparing for a deep clean, timing a move-out handoff, and choosing the right upkeep rhythm for a working space."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 xl:grid-cols-3">
          {blogCards.map((card) => (
            <article key={card.slug} className="panel rounded-[1.25rem] p-6">
              <span className="eyebrow">Guide</span>
              <h2 className="mt-5 text-2xl font-bold text-navy">{card.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted">{card.excerpt}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                {card.takeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
