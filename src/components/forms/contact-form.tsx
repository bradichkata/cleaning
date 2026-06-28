"use client";

import Link from "next/link";
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
  const [state, formAction, pending] = useActionState(
    submitContactRequest,
    initialFormActionState,
  );

  return (
    <form action={formAction} className="panel rounded-[1.25rem] p-6 sm:p-8">
      <input type="hidden" name="sourcePage" value={sourcePage} />
      <input type="hidden" name="locale" value={locale} />
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-company-website">Leave this field empty</label>
        <input
          id="contact-company-website"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="contact-name">
            Name
          </label>
          <input id="contact-name" className="input-field" name="name" />
          <FieldError error={state.fieldErrors?.name} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="contact-email">
            Email
          </label>
          <input id="contact-email" className="input-field" name="email" type="email" />
          <FieldError error={state.fieldErrors?.email} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="contact-phone">
            Phone
          </label>
          <input id="contact-phone" className="input-field" name="phone" />
          <FieldError error={state.fieldErrors?.phone} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="contact-service">
            Service interest
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
          <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="contact-method">
            Preferred contact method
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
          <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            className="input-field textarea-field"
            name="message"
            placeholder="Tell us about the property, timing, and what you need cleaned."
          />
          <FieldError error={state.fieldErrors?.message} />
        </div>
        <div className="md:col-span-2">
          <label className="flex items-start gap-3 rounded-[1rem] border border-[rgba(29,55,72,0.1)] bg-white px-4 py-4 text-sm leading-6 text-muted">
            <input className="mt-1" type="checkbox" name="consent" />
            I agree to be contacted about this request and understand my details will be used to respond and arrange the next step.
          </label>
          <FieldError error={state.fieldErrors?.consent} />
        </div>
      </div>

      {state.message ? (
        <div
          className={`mt-5 rounded-[1rem] px-4 py-3 text-sm ${
            state.status === "success"
              ? "bg-[rgba(54,162,105,0.12)] text-[#19613f]"
              : "bg-[rgba(180,35,24,0.08)] text-[#8a2019]"
          }`}
        >
          {state.message}
          {state.referenceId ? ` Reference: ${state.referenceId}.` : ""}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="fine-print">
            Use the quote form for structured pricing. Use this contact form when you need a callback, clarification, or a commercial discussion first.
          </p>
          <p className="fine-print">
            By sending this form you agree to our{" "}
            <Link href="/privacy" className="text-navy underline underline-offset-2">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/cookies" className="text-navy underline underline-offset-2">
              Cookies Policy
            </Link>
            .
          </p>
        </div>
        <Button type="submit" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
