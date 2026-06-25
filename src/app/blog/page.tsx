import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { blogCards } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Editorial section scaffold for practical cleaning guides, move-out advice, and office-maintenance topics.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Editorial scaffold"
        title="A blog structure ready for useful local content when you are ready to publish it."
        description="This MVP includes a lean index page instead of an empty content farm. Add articles when you have genuine operational advice, photos, and local examples to share."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 xl:grid-cols-3">
          {blogCards.map((card) => (
            <article key={card.slug} className="panel rounded-[1.75rem] p-6">
              <span className="eyebrow">Planned article</span>
              <h2 className="mt-5 text-2xl font-bold text-navy">{card.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted">{card.excerpt}</p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
                {card.takeaways.map((takeaway) => (
                  <li key={takeaway}>• {takeaway}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
