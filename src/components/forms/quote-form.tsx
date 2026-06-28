"use client";

import Link from "next/link";
import { useActionState, useDeferredValue, useState } from "react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { submitQuoteRequest } from "@/features/quotes/actions";
import { calculateQuoteEstimate } from "@/lib/pricing";
import { formatEstimateRange } from "@/lib/utils";
import type { Locale } from "@/lib/locale";
import { initialFormActionState } from "@/types/forms";
import { contactMethodOptions } from "@/types/contact";
import {
  accessOptions,
  occupiedStatusOptions,
  parkingOptions,
  propertySizeOptions,
  propertyTypeOptions,
  quoteExtraOptions,
  recurringOptions,
  soilConditionOptions,
  timeWindowOptions,
  type PropertySize,
  type PropertyType,
  type QuoteEstimateDraft,
} from "@/types/quote";

type QuoteFormProps = {
  sourcePage?: string;
  locale?: Locale;
  quotePromise?: string;
  defaults?: Partial<{
    serviceSlug: string;
    propertyType: string;
    size: string;
    postcode: string;
    city: string;
  }>;
};

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

function readOptionValue<T extends readonly { value: string }[]>(
  options: T,
  value: string | undefined,
  fallback: T[number]["value"],
) {
  if (value && options.some((option) => option.value === value)) {
    return value as T[number]["value"];
  }

  return fallback;
}

export function QuoteForm({
  sourcePage = "get-a-quote",
  locale = "en",
  quotePromise,
  defaults,
}: QuoteFormProps) {
  const [state, formAction, pending] = useActionState(
    submitQuoteRequest,
    initialFormActionState,
  );
  const [draft, setDraft] = useState<QuoteEstimateDraft>({
    serviceSlug:
      defaults?.serviceSlug && services.some((service) => service.slug === defaults.serviceSlug)
        ? defaults.serviceSlug
        : services[0].slug,
    propertyType: readOptionValue(
      propertyTypeOptions,
      defaults?.propertyType,
      propertyTypeOptions[0].value,
    ),
    size: readOptionValue(
      propertySizeOptions,
      defaults?.size,
      propertySizeOptions[1].value,
    ),
    condition: soilConditionOptions[0].value,
    recurring: recurringOptions[0].value,
    extras: [],
  });
  const deferredDraft = useDeferredValue(draft);
  const estimate = calculateQuoteEstimate({
    serviceSlug: deferredDraft.serviceSlug,
    propertyType: deferredDraft.propertyType,
    size: deferredDraft.size,
    condition: deferredDraft.condition,
    recurring: deferredDraft.recurring,
    extras: deferredDraft.extras,
  });

  return (
    <form action={formAction} className="grid gap-6">
      <input type="hidden" name="sourcePage" value={sourcePage} />
      <input type="hidden" name="locale" value={locale} />
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="quote-company-website">Leave this field empty</label>
        <input
          id="quote-company-website"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_19rem]">
        <div className="panel rounded-[1.25rem] p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="serviceSlug">
                Service
              </label>
              <select
                id="serviceSlug"
                className="input-field"
                name="serviceSlug"
                defaultValue={draft.serviceSlug}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    serviceSlug: event.target.value,
                  }))
                }
              >
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name}
                  </option>
                ))}
              </select>
              <FieldError error={state.fieldErrors?.serviceSlug} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="propertyType">
                Property type
              </label>
              <select
                id="propertyType"
                className="input-field"
                name="propertyType"
                defaultValue={draft.propertyType}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    propertyType: event.target.value as PropertyType,
                  }))
                }
              >
                {propertyTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <FieldError error={state.fieldErrors?.propertyType} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="size">
                Approximate size
              </label>
              <select
                id="size"
                className="input-field"
                name="size"
                defaultValue={draft.size}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    size: event.target.value as PropertySize,
                  }))
                }
              >
                {propertySizeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <FieldError error={state.fieldErrors?.size} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="condition">
                Property condition
              </label>
              <select
                id="condition"
                className="input-field"
                name="condition"
                defaultValue={draft.condition}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    condition: event.target.value as QuoteEstimateDraft["condition"],
                  }))
                }
              >
                {soilConditionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <FieldError error={state.fieldErrors?.condition} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="bedrooms">
                Bedrooms
              </label>
              <input id="bedrooms" className="input-field" name="bedrooms" placeholder="e.g. 2" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="bathrooms">
                Bathrooms
              </label>
              <input
                id="bathrooms"
                className="input-field"
                name="bathrooms"
                placeholder="e.g. 1.5"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="occupiedStatus">
                Occupancy
              </label>
              <select
                id="occupiedStatus"
                className="input-field"
                name="occupiedStatus"
                defaultValue={occupiedStatusOptions[0].value}
              >
                {occupiedStatusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="floors">
                Number of floors
              </label>
              <input id="floors" className="input-field" name="floors" placeholder="e.g. 1 or 2" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="addressLine">
                Address or street
              </label>
              <input id="addressLine" className="input-field" name="addressLine" />
              <FieldError error={state.fieldErrors?.addressLine} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="city">
                City
              </label>
              <input id="city" className="input-field" name="city" defaultValue={defaults?.city} />
              <FieldError error={state.fieldErrors?.city} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="postcode">
                Postcode
              </label>
              <input
                id="postcode"
                className="input-field"
                name="postcode"
                defaultValue={defaults?.postcode}
              />
              <FieldError error={state.fieldErrors?.postcode} />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-navy"
                htmlFor="parkingAvailability"
              >
                Parking
              </label>
              <select
                id="parkingAvailability"
                className="input-field"
                name="parkingAvailability"
                defaultValue={parkingOptions[0].value}
              >
                {parkingOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="floorAccess">
                Floor access
              </label>
              <select
                id="floorAccess"
                className="input-field"
                name="floorAccess"
                defaultValue={accessOptions[0].value}
              >
                {accessOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="preferredDate">
                Preferred date
              </label>
              <input id="preferredDate" className="input-field" name="preferredDate" type="date" />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-navy"
                htmlFor="preferredTimeWindow"
              >
                Preferred time window
              </label>
              <select
                id="preferredTimeWindow"
                className="input-field"
                name="preferredTimeWindow"
                defaultValue={timeWindowOptions[3].value}
              >
                {timeWindowOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="recurring">
                Visit frequency
              </label>
              <select
                id="recurring"
                className="input-field"
                name="recurring"
                defaultValue={draft.recurring}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    recurring: event.target.value as QuoteEstimateDraft["recurring"],
                  }))
                }
              >
                {recurringOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <aside className="surface-card rounded-[1.25rem] p-6">
          <span className="eyebrow">Estimate guide</span>
          <h2 className="mt-5 text-2xl font-bold text-navy">
            {estimate ? formatEstimateRange(estimate.min, estimate.max) : "Scope review required"}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">{quotePromise}</p>
          <div className="mt-6 rounded-[1rem] bg-[rgba(29,55,72,0.04)] p-4 text-sm leading-7 text-muted">
            Extras, access friction, parking limits, unusual materials, and heavier soil can all
            shift the final quote.
          </div>
        </aside>
      </div>

      <div className="panel rounded-[1.25rem] p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <span className="mb-3 block text-sm font-semibold text-navy">Optional extras</span>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {quoteExtraOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 rounded-[1rem] border border-[rgba(29,55,72,0.1)] bg-white px-4 py-3 text-sm text-navy"
                >
                  <input
                    type="checkbox"
                    name="extras"
                    value={option.value}
                    onChange={(event) =>
                      setDraft((current) => ({
                        ...current,
                        extras: event.target.checked
                          ? [...current.extras, option.value]
                          : current.extras.filter((item) => item !== option.value),
                      }))
                    }
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="quote-name">
              Name
            </label>
            <input id="quote-name" className="input-field" name="name" />
            <FieldError error={state.fieldErrors?.name} />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="quote-phone">
              Phone
            </label>
            <input id="quote-phone" className="input-field" name="phone" />
            <FieldError error={state.fieldErrors?.phone} />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="quote-email">
              Email
            </label>
            <input id="quote-email" className="input-field" name="email" type="email" />
            <FieldError error={state.fieldErrors?.email} />
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-navy"
              htmlFor="preferredContactMethod"
            >
              Preferred contact method
            </label>
            <select
              id="preferredContactMethod"
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
            <label className="mb-2 block text-sm font-semibold text-navy" htmlFor="message">
              Additional information
            </label>
            <textarea
              id="message"
              className="input-field textarea-field"
              name="message"
              placeholder="Tell us about access, pets, parking, fragile surfaces, or any concerns about the property."
            />
          </div>
          <div className="md:col-span-2">
            <label className="flex items-start gap-3 rounded-[1rem] border border-[rgba(29,55,72,0.1)] bg-white px-4 py-4 text-sm leading-6 text-muted">
              <input className="mt-1" type="checkbox" name="consent" />
              I agree to be contacted about this request and understand this form creates a quote enquiry, not an automatically confirmed appointment.
            </label>
            <FieldError error={state.fieldErrors?.consent} />
            <p className="mt-3 fine-print">
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
          <input type="hidden" name="utmSource" value="" />
          <input type="hidden" name="utmMedium" value="" />
          <input type="hidden" name="utmCampaign" value="" />
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

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="fine-print">
              The estimate helps frame scope quickly. Final timing and pricing are confirmed after a human review of access, condition, and any special requirements.
            </p>
            <p className="fine-print">
              Read our{" "}
              <Link href="/privacy" className="text-navy underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-navy underline underline-offset-2">
                Terms
              </Link>{" "}
              before sending a request.
            </p>
          </div>
          <Button type="submit" disabled={pending}>
            {pending ? "Sending request..." : "Request Quote"}
          </Button>
        </div>
      </div>
    </form>
  );
}
