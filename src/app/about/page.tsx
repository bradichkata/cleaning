import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { company, getCompanyContent, getWhyChooseUs } from "@/data/company";
import { getCurrentLocale } from "@/lib/server-locale";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Harbor & Pine Cleaning, our service standards, and how we handle quoting, access, and repeat visits across Dublin.",
  path: "/about",
});

export default async function AboutPage() {
  const locale = await getCurrentLocale();
  const whyChooseUs = getWhyChooseUs(locale);
  const companyContent = getCompanyContent(locale);

  return (
    <>
      <PageIntro
        eyebrow="About Harbor & Pine"
        title="Careful cleaning, reliable communication, and practical service planning."
        description="Harbor & Pine Cleaning is positioned around the details that make repeat service easier: realistic quoting, tidy handoffs, and teams that arrive prepared for the property in front of them."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 md:grid-cols-[minmax(0,1fr)_24rem]">
          <article className="panel rounded-[1.25rem] p-6">
            <h2 className="text-2xl font-bold text-navy">How we work</h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-muted">
              {whyChooseUs.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
          <article className="surface-card rounded-[1.25rem] p-6">
            <h2 className="text-2xl font-bold text-navy">Company details</h2>
            <p className="mt-4 text-base leading-7 text-muted">{companyContent.description}</p>
            <div className="mt-6 space-y-2 text-sm leading-6 text-muted">
              <div>{company.legalName}</div>
              <div>{company.registration}</div>
              <div>{company.address}</div>
              <a className="block text-navy hover:underline" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              <a className="block text-navy hover:underline" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
