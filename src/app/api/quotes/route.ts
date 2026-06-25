import { NextResponse } from "next/server";
import { sendInternalNotification } from "@/lib/email/notifications";
import { buildQuoteNotification } from "@/lib/email/templates";
import { createQuoteRecord, saveQuoteRecord } from "@/lib/leads/quote-store";
import { calculateQuoteEstimate } from "@/lib/pricing";
import { parseQuotePayload } from "@/lib/validation/quote";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
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
