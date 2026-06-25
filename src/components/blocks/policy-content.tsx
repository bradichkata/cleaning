import { PageIntro } from "@/components/ui/page-intro";
import type { PolicySection } from "@/types/content";

type PolicyContentProps = {
  title: string;
  description: string;
  sections: PolicySection[];
};

export function PolicyContent({
  title,
  description,
  sections,
}: PolicyContentProps) {
  return (
    <>
      <PageIntro
        eyebrow="Policy page"
        title={title}
        description={description}
      />
      <section className="section-space pt-0">
        <div className="shell max-w-4xl space-y-6">
          {sections.map((section) => (
            <article key={section.title} className="panel rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-bold text-navy">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
