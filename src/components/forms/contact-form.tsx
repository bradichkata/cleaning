"use client";

import { useActionState } from "react";
import { submitContactRequest } from "@/features/contact/actions";
import { initialFormActionState } from "@/types/forms";
import { Button } from "@/components/ui/button";
import { contactMethodOptions } from "@/types/contact";
import { services } from "@/data/services";
import type { Locale } from "@/lib/locale";

function FieldError({
  error,
}: {
  error: string[] | undefined;
}) {
  if (!error?.length) {
    return null;
  }

  return <p className="mt-2 text-sm text-[#b42318]">{error[0]}</p>;
}

export function ContactForm({
  sourcePage = "contact-page",
  locale = "en",
}: {
  sourcePage?: string;
  locale?: Locale;
}) {
  const isBg = locale === "bg";
  const [state, formAction, pending] = useActionState(
    submitContactRequest,
    initialFormActionState,
  );

  return (
    <form action={formAction} className="panel rounded-[1.75rem] p-6 sm:p-8">
      <input type="hidden" name="sourcePage" value={sourcePage} />
      <input type="hidden" name="locale" value={locale} />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="contact-name">
            {isBg ? "Име" : "Name"}
          </label>
          <input id="contact-name" className="input-field" name="name" />
          <FieldError error={state.fieldErrors?.name} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="contact-email">
            {isBg ? "Имейл" : "Email"}
          </label>
          <input id="contact-email" className="input-field" name="email" type="email" />
          <FieldError error={state.fieldErrors?.email} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="contact-phone">
            {isBg ? "Телефон" : "Phone"}
          </label>
          <input id="contact-phone" className="input-field" name="phone" />
          <FieldError error={state.fieldErrors?.phone} />
        </div>
        <div>
          <label
            className="mb-2 block text-sm font-semibold text-navy"
            htmlFor="contact-service"
          >
            {isBg ? "Интерес към услуга" : "Service interest"}
          </label>
          <select id="contact-service" className="input-field" name="serviceInterest">
            <option value="">Select service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          <FieldError error={state.fieldErrors?.serviceInterest} />
        </div>
        <div className="md:col-span-2">
          <label
            className="mb-2 block text-sm font-semibold text-navy"
            htmlFor="contact-method"
          >
            {isBg ? "Предпочитан начин за контакт" : "Preferred contact method"}
          </label>
          <select
            id="contact-method"
            className="input-field"
            name="preferredContactMethod"
            defaultValue="phone"
          >
            {contactMethodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label
            className="mb-2 block text-sm font-semibold text-navy"
            htmlFor="contact-message"
          >
            {isBg ? "Съобщение" : "Message"}
          </label>
          <textarea
            id="contact-message"
            className="input-field textarea-field"
            name="message"
            placeholder={
              isBg
                ? "Опишете имота, желаното време и какво трябва да бъде почистено."
                : "Tell us about the property, timing, and what you need cleaned."
            }
          />
          <FieldError error={state.fieldErrors?.message} />
        </div>
      </div>

      {state.message ? (
        <div
          className={`mt-5 rounded-2xl px-4 py-3 text-sm ${
            state.status === "success"
              ? "bg-[rgba(54,162,105,0.12)] text-[#19613f]"
              : "bg-[rgba(180,35,24,0.08)] text-[#8a2019]"
          }`}
        >
          {state.message}
          {state.referenceId ? ` Reference: ${state.referenceId}.` : ""}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="fine-print max-w-xl">
          {isBg
            ? "Използвайте формата за оферта за структурирано ценообразуване. Тази форма е подходяща, когато искате обратно обаждане, уточнение или първоначален търговски разговор."
            : "Use the quote form for structured pricing. Use this contact form when you need a callback, clarification, or commercial discussion first."}
        </p>
        <Button type="submit" disabled={pending}>
          {pending
            ? isBg
              ? "Изпращане..."
              : "Sending..."
            : isBg
              ? "Изпрати"
              : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
