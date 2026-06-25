"use server";

import { buildQuoteNotification } from "@/lib/email/templates";
import { sendInternalNotification } from "@/lib/email/notifications";
import { createQuoteRecord, saveQuoteRecord } from "@/lib/leads/quote-store";
import { calculateQuoteEstimate } from "@/lib/pricing";
import { parseQuoteFormData } from "@/lib/validation/quote";
import type { FormActionState } from "@/types/forms";

export async function submitQuoteRequest(
  _previousState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const parsed = parseQuoteFormData(formData);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const estimate = calculateQuoteEstimate({
    serviceSlug: parsed.data.serviceSlug,
    propertyType: parsed.data.propertyType,
    size: parsed.data.size,
    condition: parsed.data.condition,
    recurring: parsed.data.recurring,
    extras: parsed.data.extras,
  });

  const record = createQuoteRecord(parsed.data, estimate);

  try {
    await saveQuoteRecord(record);

    const notification = buildQuoteNotification(record);
    await sendInternalNotification({
      ...notification,
      to: process.env.QUOTE_NOTIFICATION_EMAIL,
      tag: "quote",
    });

    return {
      status: "success",
      message:
        "Your quote request has been logged. A team member can now review the scope and confirm the next step.",
      referenceId: record.referenceCode,
      estimate,
    };
  } catch {
    return {
      status: "error",
      message:
        "We could not save your request right now. Please try again or contact us directly.",
    };
  }
}
