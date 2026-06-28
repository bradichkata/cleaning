import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { getProcessSteps } from "@/data/company";
import { getCurrentLocale } from "@/lib/server-locale";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description:
    "See how Harbor & Pine Cleaning handles quote requests, appointment confirmation, and on-site handoff.",
  path: "/how-it-works",
});

export default async function HowItWorksPage() {
  const locale = await getCurrentLocale();
  const processSteps = getProcessSteps(locale);

  return (
    <>
      <PageIntro
        eyebrow="Process"
        title="From first message to finished handoff."
        description="The process is simple on purpose: gather the right details early, quote realistically, confirm the visit manually, and finish against a clear checklist."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="panel rounded-[1.25rem] p-6">
              <div className="text-sm font-semibold text-turquoise">{`Step ${index + 1}`}</div>
              <h2 className="mt-3 text-xl font-bold text-navy">{step.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
