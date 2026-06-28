import { NextResponse } from "next/server";
import { sendInternalNotification } from "@/lib/email/notifications";
import { buildContactNotification } from "@/lib/email/templates";
import { createContactRecord, saveContactRecord } from "@/lib/leads/contact-store";
import { buildRequestFingerprint, consumeRateLimit } from "@/lib/security/rate-limit";
import { parseContactPayload } from "@/lib/validation/contact";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (
      typeof payload === "object" &&
      payload !== null &&
      typeof (payload as { companyWebsite?: unknown }).companyWebsite === "string" &&
      (payload as { companyWebsite: string }).companyWebsite.trim()
    ) {
      return NextResponse.json({ ok: true, message: "Request received." });
    }

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

    const rateLimit = consumeRateLimit({
      key: buildRequestFingerprint(request.headers, "contact"),
      limit: 4,
      windowMs: 15 * 60 * 1000,
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          ok: false,
          message: `Please wait about ${rateLimit.retryAfterSeconds} seconds before sending another message.`,
        },
        { status: 429 },
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
