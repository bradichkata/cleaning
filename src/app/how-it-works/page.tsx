import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { getProcessSteps } from "@/data/company";
import { getCurrentLocale } from "@/lib/server-locale";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description:
    "See the full quote-to-appointment workflow for the cleaning-services MVP.",
  path: "/how-it-works",
});

export default async function HowItWorksPage() {
  const locale = await getCurrentLocale();
  const processSteps = getProcessSteps(locale);
  const isBg = locale === "bg";

  return (
    <>
      <PageIntro
        eyebrow={isBg ? "Ясен процес" : "Process clarity"}
        title={
          isBg
            ? "Процес за почистване, създаден да намали триенето и за клиента, и за бизнеса."
            : "A cleaning workflow designed to reduce friction for both the customer and the business."
        }
        description={
          isBg
            ? "Сайтът превръща неясните запитвания в структурирани заявки за оферта, а финалното потвърждение остава в ръцете на реален човек."
            : "The site turns vague enquiries into structured quote requests, then leaves the final confirmation step with a real person where it belongs."
        }
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="panel rounded-[1.75rem] p-6">
              <div className="text-sm font-semibold text-turquoise">
                {isBg ? `Стъпка ${index + 1}` : `Step ${index + 1}`}
              </div>
              <h2 className="mt-3 text-xl font-bold text-navy">{step.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
