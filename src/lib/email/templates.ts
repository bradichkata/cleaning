import { getServiceBySlug } from "@/data/services";
import { formatEstimateRange } from "@/lib/utils";
import type { ContactRequestRecord } from "@/types/contact";
import type { QuoteRequestRecord } from "@/types/quote";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatMessageHtml(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function renderRow(label: string, value: string) {
  return `<p><strong>${label}:</strong> ${value}</p>`;
}

export function buildQuoteNotification(record: QuoteRequestRecord) {
  const service = getServiceBySlug(record.serviceSlug);
  const subject = `New quote request: ${service?.name ?? record.serviceSlug} (${record.referenceCode})`;
  const estimateText =
    record.estimatedPriceMin !== null && record.estimatedPriceMax !== null
      ? formatEstimateRange(record.estimatedPriceMin, record.estimatedPriceMax)
      : "Scope review required";
  const extrasText = record.extras.length ? record.extras.join(", ") : "None";
  const messageText = record.message || "No additional notes";

  const text = [
    `Reference: ${record.referenceCode}`,
    `Service: ${service?.name ?? record.serviceSlug}`,
    `Name: ${record.name}`,
    `Email: ${record.email}`,
    `Phone: ${record.phone}`,
    `Property: ${record.propertyType}, ${record.size}, ${record.condition}`,
    `Location: ${record.addressLine}, ${record.city}, ${record.postcode}`,
    `Estimate: ${estimateText}`,
    `Extras: ${extrasText}`,
    `Preferred date: ${record.preferredDate || "Flexible"}`,
    `Time window: ${record.preferredTimeWindow}`,
    `Consent confirmed: ${record.consent ? "Yes" : "No"}`,
    `Message: ${messageText}`,
  ].join("\n");

  const html = [
    "<h2>New quote request</h2>",
    renderRow("Reference", escapeHtml(record.referenceCode)),
    renderRow("Service", escapeHtml(service?.name ?? record.serviceSlug)),
    renderRow("Name", escapeHtml(record.name)),
    renderRow("Email", escapeHtml(record.email)),
    renderRow("Phone", escapeHtml(record.phone)),
    renderRow(
      "Location",
      escapeHtml(`${record.addressLine}, ${record.city}, ${record.postcode}`),
    ),
    renderRow("Estimate range", escapeHtml(estimateText)),
    renderRow("Extras", escapeHtml(extrasText)),
    renderRow("Preferred date", escapeHtml(record.preferredDate || "Flexible")),
    renderRow("Time window", escapeHtml(record.preferredTimeWindow)),
    renderRow("Consent confirmed", record.consent ? "Yes" : "No"),
    renderRow("Notes", formatMessageHtml(messageText)),
  ].join("");

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
    `Consent confirmed: ${record.consent ? "Yes" : "No"}`,
    `Message: ${record.message}`,
  ].join("\n");

  const html = [
    "<h2>New contact request</h2>",
    renderRow("Reference", escapeHtml(record.referenceCode)),
    renderRow("Name", escapeHtml(record.name)),
    renderRow("Email", escapeHtml(record.email)),
    renderRow("Phone", escapeHtml(record.phone)),
    renderRow("Preferred contact", escapeHtml(record.preferredContactMethod)),
    renderRow("Service interest", escapeHtml(record.serviceInterest)),
    renderRow("Consent confirmed", record.consent ? "Yes" : "No"),
    renderRow("Message", formatMessageHtml(record.message)),
  ].join("");

  return { subject, text, html };
}
