import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { PageIntro } from "@/components/ui/page-intro";
import { company, getCompanyContent } from "@/data/company";
import { getCurrentLocale } from "@/lib/server-locale";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact page with callback request, service-interest form, and business details ready for replacement with the live brand.",
  path: "/contact",
});

export default function ContactPage() {
  const localePromise = getCurrentLocale();
  return (
    <ContactPageContent localePromise={localePromise} />
  );
}

async function ContactPageContent({
  localePromise,
}: {
  localePromise: Promise<"en" | "bg">;
}) {
  const locale = await localePromise;
  const companyContent = getCompanyContent(locale);
  const isBg = locale === "bg";

  return (
    <>
      <PageIntro
        eyebrow={isBg ? "Контакт" : "Contact"}
        title={
          isBg
            ? "Използвайте страницата за контакт, когато искате обратно обаждане преди пълна оферта."
            : "Use the contact page when you need a callback before a full quote."
        }
        description={
          isBg
            ? "Формата за оферта е най-добра за структурирани ценови запитвания. Тази страница е за последващи въпроси, търговски разговори или по-бързо ръчно насочване."
            : "The quote flow is best for structured pricing requests. This page is for follow-up questions, commercial conversations, or quicker manual routing."
        }
      />
      <section className="section-space pt-0">
        <div className="shell grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <ContactForm sourcePage="contact-page" locale={locale} />
          <aside className="surface-card rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-bold text-navy">
              {isBg ? "Данни за контакт" : "Contact details"}
            </h2>
            <div className="mt-5 space-y-3 text-base leading-7 text-muted">
              <p>
                <strong className="text-navy">{isBg ? "Телефон:" : "Phone:"}</strong>{" "}
                {company.phoneDisplay}
              </p>
              <p>
                <strong className="text-navy">{isBg ? "Имейл:" : "Email:"}</strong>{" "}
                {company.email}
              </p>
              <p>
                <strong className="text-navy">{isBg ? "Адрес:" : "Address:"}</strong>{" "}
                {company.address}
              </p>
            </div>
            <h3 className="mt-8 text-xl font-bold text-navy">
              {isBg ? "Работно време" : "Opening hours"}
            </h3>
            <ul className="mt-4 space-y-2 text-base leading-7 text-muted">
              {companyContent.openingHours.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
