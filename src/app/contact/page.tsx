import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { PageIntro } from "@/components/ui/page-intro";
import { company, getCompanyContent } from "@/data/company";
import { getCurrentLocale } from "@/lib/server-locale";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Harbor & Pine Cleaning for follow-up questions, commercial enquiries, or callback requests across Dublin.",
  path: "/contact",
});

export default function ContactPage() {
  const localePromise = getCurrentLocale();
  return <ContactPageContent localePromise={localePromise} />;
}

async function ContactPageContent({
  localePromise,
}: {
  localePromise: Promise<"en" | "bg">;
}) {
  const locale = await localePromise;
  const companyContent = getCompanyContent(locale);

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Get in touch when you want to talk through the job first."
        description="Use the quote form for pricing requests. Use this page when you want a callback, have a commercial question, or need help deciding which service fits."
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <ContactForm sourcePage="contact-page" locale={locale} />
          <aside className="surface-card rounded-[1.25rem] p-6">
            <h2 className="text-2xl font-bold text-navy">Contact details</h2>
            <div className="mt-5 space-y-3 text-base leading-7 text-muted">
              <p>
                <strong className="text-navy">Phone:</strong>{" "}
                <a className="font-medium text-navy transition hover:text-turquoise" href={company.phoneHref}>
                  {company.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="text-navy">Email:</strong>{" "}
                <a
                  className="font-medium text-navy transition hover:text-turquoise"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
              </p>
              <p>
                <strong className="text-navy">Address:</strong> {company.address}
              </p>
            </div>
            <h3 className="mt-8 text-xl font-bold text-navy">Opening hours</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
              {companyContent.openingHours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
