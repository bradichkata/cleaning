import { NextResponse } from "next/server";
import { sendInternalNotification } from "@/lib/email/notifications";
import { buildQuoteNotification } from "@/lib/email/templates";
import { createQuoteRecord, saveQuoteRecord } from "@/lib/leads/quote-store";
import { calculateQuoteEstimate } from "@/lib/pricing";
import { buildRequestFingerprint, consumeRateLimit } from "@/lib/security/rate-limit";
import { parseQuotePayload } from "@/lib/validation/quote";

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

    const parsed = parseQuotePayload(payload);

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
      key: buildRequestFingerprint(request.headers, "quote"),
      limit: 5,
      windowMs: 15 * 60 * 1000,
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          ok: false,
          message: `Please wait about ${rateLimit.retryAfterSeconds} seconds before sending another quote request.`,
        },
        { status: 429 },
      );
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
    await saveQuoteRecord(record);

    const notification = buildQuoteNotification(record);
    await sendInternalNotification({
      ...notification,
      to: process.env.QUOTE_NOTIFICATION_EMAIL,
      tag: "quote",
    });

    return NextResponse.json({
      ok: true,
      referenceId: record.referenceCode,
      estimate,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Quote request could not be processed.",
      },
      { status: 500 },
    );
  }
}
