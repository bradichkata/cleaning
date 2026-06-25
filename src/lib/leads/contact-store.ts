import { randomUUID } from "node:crypto";
import { getSupabaseAdminClient } from "@/lib/database/supabase";
import { appendCollectionItem } from "@/lib/storage/local-store";
import { buildReferenceCode } from "@/lib/utils";
import type { ContactRequestRecord } from "@/types/contact";
import type { contactRequestSchema } from "@/lib/validation/contact";
import type { z } from "zod";

type ContactRequestInput = z.infer<typeof contactRequestSchema>;

export function createContactRecord(
  input: ContactRequestInput,
): ContactRequestRecord {
  const id = randomUUID();

  return {
    id,
    referenceCode: buildReferenceCode("C", id),
    createdAt: new Date().toISOString(),
    name: input.name,
    email: input.email,
    phone: input.phone,
    serviceInterest: input.serviceInterest,
    preferredContactMethod: input.preferredContactMethod,
    message: input.message,
    status: "new",
    sourcePage: input.sourcePage,
  };
}

export async function saveContactRecord(record: ContactRequestRecord) {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    const { error } = await supabase.from("contact_requests").insert({
      id: record.id,
      reference_code: record.referenceCode,
      created_at: record.createdAt,
      name: record.name,
      email: record.email,
      phone: record.phone,
      service_interest: record.serviceInterest,
      preferred_contact_method: record.preferredContactMethod,
      status: record.status,
      payload: record,
    });

    if (error) {
      throw error;
    }

    return { provider: "supabase" as const };
  }

  await appendCollectionItem("contacts.json", record);
  return { provider: "local-file" as const };
}
