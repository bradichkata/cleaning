"use server";

import { buildContactNotification } from "@/lib/email/templates";
import { sendInternalNotification } from "@/lib/email/notifications";
import { createContactRecord, saveContactRecord } from "@/lib/leads/contact-store";
import { parseContactFormData } from "@/lib/validation/contact";
import type { FormActionState } from "@/types/forms";

export async function submitContactRequest(
  _previousState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const parsed = parseContactFormData(formData);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please review the highlighted fields before sending your message.",
      fieldErrors: parsed.error.flatten().fieldErrors,
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
      message:
        "Message received. Your enquiry is ready for follow-up from the business side.",
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
