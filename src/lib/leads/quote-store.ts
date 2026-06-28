import { randomUUID } from "node:crypto";
import { getSupabaseAdminClient } from "@/lib/database/supabase";
import { appendCollectionItem } from "@/lib/storage/local-store";
import { buildReferenceCode } from "@/lib/utils";
import type { EstimateSummary } from "@/types/forms";
import type { QuoteRequestRecord } from "@/types/quote";
import type { quoteRequestSchema } from "@/lib/validation/quote";
import type { z } from "zod";

type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;

export function createQuoteRecord(
  input: QuoteRequestInput,
  estimate: EstimateSummary | null,
): QuoteRequestRecord {
  const id = randomUUID();

  return {
    id,
    referenceCode: buildReferenceCode("Q", id),
    createdAt: new Date().toISOString(),
    serviceSlug: input.serviceSlug,
    propertyType: input.propertyType,
    size: input.size,
    bedrooms: input.bedrooms,
    bathrooms: input.bathrooms,
    condition: input.condition,
    occupiedStatus: input.occupiedStatus,
    floors: input.floors,
    addressLine: input.addressLine,
    city: input.city,
    postcode: input.postcode,
    parkingAvailability: input.parkingAvailability,
    floorAccess: input.floorAccess,
    preferredDate: input.preferredDate,
    preferredTimeWindow: input.preferredTimeWindow,
    recurring: input.recurring,
    extras: input.extras,
    name: input.name,
    phone: input.phone,
    email: input.email,
    preferredContactMethod: input.preferredContactMethod,
    message: input.message,
    consent: input.consent,
    estimatedPriceMin: estimate?.min ?? null,
    estimatedPriceMax: estimate?.max ?? null,
    status: "new",
    sourcePage: input.sourcePage,
    utmSource: input.utmSource,
    utmMedium: input.utmMedium,
    utmCampaign: input.utmCampaign,
  };
}

export async function saveQuoteRecord(record: QuoteRequestRecord) {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    const { error } = await supabase.from("quote_requests").insert({
      id: record.id,
      reference_code: record.referenceCode,
      created_at: record.createdAt,
      name: record.name,
      email: record.email,
      phone: record.phone,
      service_slug: record.serviceSlug,
      property_type: record.propertyType,
      size: record.size,
      condition: record.condition,
      postcode: record.postcode,
      city: record.city,
      estimated_price_min: record.estimatedPriceMin,
      estimated_price_max: record.estimatedPriceMax,
      status: record.status,
      payload: record,
    });

    if (error) {
      throw error;
    }

    return { provider: "supabase" as const };
  }

  await appendCollectionItem("quotes.json", record);
  return { provider: "local-file" as const };
}
