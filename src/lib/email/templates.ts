import { getServiceBySlug } from "@/data/services";
import type { ContactRequestRecord } from "@/types/contact";
import type { QuoteRequestRecord } from "@/types/quote";

export function buildQuoteNotification(record: QuoteRequestRecord) {
  const service = getServiceBySlug(record.serviceSlug);
  const subject = `New quote request: ${service?.name ?? record.serviceSlug} (${record.referenceCode})`;

  const text = [
    `Reference: ${record.referenceCode}`,
    `Service: ${service?.name ?? record.serviceSlug}`,
    `Name: ${record.name}`,
    `Email: ${record.email}`,
    `Phone: ${record.phone}`,
    `Property: ${record.propertyType}, ${record.size}, ${record.condition}`,
    `Location: ${record.addressLine}, ${record.city}, ${record.postcode}`,
    `Estimate: ${record.estimatedPriceMin ?? "n/a"} - ${record.estimatedPriceMax ?? "n/a"}`,
    `Extras: ${record.extras.join(", ") || "None"}`,
    `Preferred date: ${record.preferredDate || "Flexible"}`,
    `Time window: ${record.preferredTimeWindow}`,
    `Message: ${record.message || "No additional notes"}`,
  ].join("\n");

  const html = `
    <h2>New quote request</h2>
    <p><strong>Reference:</strong> ${record.referenceCode}</p>
    <p><strong>Service:</strong> ${service?.name ?? record.serviceSlug}</p>
    <p><strong>Name:</strong> ${record.name}</p>
    <p><strong>Email:</strong> ${record.email}</p>
    <p><strong>Phone:</strong> ${record.phone}</p>
    <p><strong>Location:</strong> ${record.addressLine}, ${record.city}, ${record.postcode}</p>
    <p><strong>Estimate range:</strong> ${record.estimatedPriceMin ?? "n/a"} - ${record.estimatedPriceMax ?? "n/a"}</p>
    <p><strong>Extras:</strong> ${record.extras.join(", ") || "None"}</p>
    <p><strong>Notes:</strong> ${record.message || "No additional notes"}</p>
  `;

  return { subject, text, html };
}

export function buildContactNotification(record: ContactRequestRecord) {
  const subject = `New contact request (${record.referenceCode})`;

  const text = [
    `Reference: ${record.referenceCode}`,
    `Name: ${record.name}`,
    `Email: ${record.email}`,
    `Phone: ${record.phone}`,
    `Preferred contact: ${record.preferredContactMethod}`,
    `Service interest: ${record.serviceInterest}`,
    `Message: ${record.message}`,
  ].join("\n");

  const html = `
    <h2>New contact request</h2>
    <p><strong>Reference:</strong> ${record.referenceCode}</p>
    <p><strong>Name:</strong> ${record.name}</p>
    <p><strong>Email:</strong> ${record.email}</p>
    <p><strong>Phone:</strong> ${record.phone}</p>
    <p><strong>Preferred contact:</strong> ${record.preferredContactMethod}</p>
    <p><strong>Service interest:</strong> ${record.serviceInterest}</p>
    <p><strong>Message:</strong> ${record.message}</p>
  `;

  return { subject, text, html };
}
