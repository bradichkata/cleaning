import { z } from "zod";
import { contactMethodOptions } from "@/types/contact";
import {
  accessOptions,
  occupiedStatusOptions,
  parkingOptions,
  propertySizeOptions,
  propertyTypeOptions,
  quoteExtraOptions,
  recurringOptions,
  soilConditionOptions,
  timeWindowOptions,
} from "@/types/quote";

const propertyTypeValues = propertyTypeOptions.map((option) => option.value) as [
  "apartment",
  "house",
  "office",
  "rental",
];
const propertySizeValues = propertySizeOptions.map((option) => option.value) as [
  "compact",
  "medium",
  "large",
  "oversized",
];
const soilConditionValues = soilConditionOptions.map(
  (option) => option.value,
) as ["standard", "heavy"];
const occupiedStatusValues = occupiedStatusOptions.map(
  (option) => option.value,
) as ["occupied", "empty"];
const parkingValues = parkingOptions.map((option) => option.value) as [
  "easy",
  "limited",
  "street-only",
];
const accessValues = accessOptions.map((option) => option.value) as [
  "ground",
  "stairs",
  "lift",
];
const timeWindowValues = timeWindowOptions.map((option) => option.value) as [
  "morning",
  "midday",
  "afternoon",
  "flexible",
];
const recurringValues = recurringOptions.map((option) => option.value) as [
  "one-time",
  "weekly",
  "bi-weekly",
  "monthly",
];
const extraValues = quoteExtraOptions.map((option) => option.value) as [
  "oven",
  "fridge",
  "inside-cabinets",
  "interior-windows",
  "carpets",
  "upholstery",
  "balcony",
];
const contactMethodValues = contactMethodOptions.map((option) => option.value) as [
  "phone",
  "email",
  "whatsapp",
];

export const quoteRequestSchema = z.object({
  serviceSlug: z.string().trim().min(1, "Select a service"),
  propertyType: z.enum(propertyTypeValues),
  size: z.enum(propertySizeValues),
  bedrooms: z.string().trim().default(""),
  bathrooms: z.string().trim().default(""),
  condition: z.enum(soilConditionValues),
  occupiedStatus: z.enum(occupiedStatusValues),
  floors: z.string().trim().default(""),
  addressLine: z.string().trim().min(4, "Address or street is required"),
  city: z.string().trim().min(2, "City is required"),
  postcode: z.string().trim().min(3, "Postcode is required"),
  parkingAvailability: z.enum(parkingValues),
  floorAccess: z.enum(accessValues),
  preferredDate: z.string().trim().default(""),
  preferredTimeWindow: z.enum(timeWindowValues),
  recurring: z.enum(recurringValues),
  extras: z.array(z.enum(extraValues)).default([]),
  name: z.string().trim().min(2, "Name is required"),
  phone: z.string().trim().min(7, "Phone number is required"),
  email: z.string().trim().email("Enter a valid email address"),
  preferredContactMethod: z.enum(contactMethodValues),
  message: z.string().trim().max(1500).default(""),
  consent: z
    .boolean()
    .refine((value) => value, {
      message: "Please confirm you agree to be contacted about this request",
    }),
  sourcePage: z.string().trim().default("get-a-quote"),
  utmSource: z.string().trim().default(""),
  utmMedium: z.string().trim().default(""),
  utmCampaign: z.string().trim().default(""),
});

export function parseQuoteFormData(formData: FormData) {
  return quoteRequestSchema.safeParse({
    serviceSlug: formData.get("serviceSlug"),
    propertyType: formData.get("propertyType"),
    size: formData.get("size"),
    bedrooms: formData.get("bedrooms") || "",
    bathrooms: formData.get("bathrooms") || "",
    condition: formData.get("condition"),
    occupiedStatus: formData.get("occupiedStatus"),
    floors: formData.get("floors") || "",
    addressLine: formData.get("addressLine"),
    city: formData.get("city"),
    postcode: formData.get("postcode"),
    parkingAvailability: formData.get("parkingAvailability"),
    floorAccess: formData.get("floorAccess"),
    preferredDate: formData.get("preferredDate") || "",
    preferredTimeWindow: formData.get("preferredTimeWindow"),
    recurring: formData.get("recurring"),
    extras: formData.getAll("extras"),
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    preferredContactMethod: formData.get("preferredContactMethod"),
    message: formData.get("message") || "",
    consent: formData.get("consent") === "on",
    sourcePage: formData.get("sourcePage") || "get-a-quote",
    utmSource: formData.get("utmSource") || "",
    utmMedium: formData.get("utmMedium") || "",
    utmCampaign: formData.get("utmCampaign") || "",
  });
}

export function parseQuotePayload(payload: unknown) {
  return quoteRequestSchema.safeParse(payload);
}
