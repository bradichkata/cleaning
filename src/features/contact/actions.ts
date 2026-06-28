"use server";

import { headers } from "next/headers";
import { buildContactNotification } from "@/lib/email/templates";
import { sendInternalNotification } from "@/lib/email/notifications";
import { createContactRecord, saveContactRecord } from "@/lib/leads/contact-store";
import { buildRequestFingerprint, consumeRateLimit } from "@/lib/security/rate-limit";
import { parseContactFormData } from "@/lib/validation/contact";
import type { FormActionState } from "@/types/forms";

export async function submitContactRequest(
  _previousState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const honeypot = String(formData.get("companyWebsite") ?? "").trim();

  if (honeypot) {
    return {
      status: "success",
      message: "Thanks. Your message has been received.",
    };
  }

  const parsed = parseContactFormData(formData);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please review the highlighted fields before sending your message.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const requestHeaders = await headers();
  const rateLimit = consumeRateLimit({
    key: buildRequestFingerprint(requestHeaders, "contact"),
    limit: 4,
    windowMs: 15 * 60 * 1000,
  });

  if (!rateLimit.allowed) {
    return {
      status: "error",
      message: `Please wait about ${rateLimit.retryAfterSeconds} seconds before sending another message.`,
    };
  }

  const record = createContactRecord(parsed.data);

  try {
    await saveContactRecord(record);

    const notification = buildContactNotification(record);
    await sendInternalNotification({
      ...notification,
      to: process.env.CONTACT_NOTIFICATION_EMAIL,
      tag: "contact",
    });

    return {
      status: "success",
      message: "Message received. A coordinator will follow up shortly.",
      referenceId: record.referenceCode,
    };
  } catch {
    return {
      status: "error",
      message:
        "We could not deliver your message right now. Please try again or use the phone number listed on the page.",
    };
  }
}
