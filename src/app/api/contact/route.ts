import { NextResponse } from "next/server";
import { sendInternalNotification } from "@/lib/email/notifications";
import { buildContactNotification } from "@/lib/email/templates";
import { createContactRecord, saveContactRecord } from "@/lib/leads/contact-store";
import { parseContactPayload } from "@/lib/validation/contact";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = parseContactPayload(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const record = createContactRecord(parsed.data);
    await saveContactRecord(record);

    const notification = buildContactNotification(record);
    await sendInternalNotification({
      ...notification,
      to: process.env.CONTACT_NOTIFICATION_EMAIL,
      tag: "contact",
    });

    return NextResponse.json({
      ok: true,
      referenceId: record.referenceCode,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Contact request could not be processed.",
      },
      { status: 500 },
    );
  }
}
