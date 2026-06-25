import { z } from "zod";
import { contactMethodOptions } from "@/types/contact";

const contactMethodValues = contactMethodOptions.map((option) => option.value) as [
  "phone",
  "email",
  "whatsapp",
];

export const contactRequestSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(7, "Phone number is required"),
  serviceInterest: z.string().trim().min(1, "Select a service interest"),
  preferredContactMethod: z.enum(contactMethodValues),
  message: z
    .string()
    .trim()
    .min(20, "Please include a little more detail about the job"),
  sourcePage: z.string().trim().default("contact-page"),
});

export function parseContactFormData(formData: FormData) {
  return contactRequestSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    serviceInterest: formData.get("serviceInterest"),
    preferredContactMethod: formData.get("preferredContactMethod"),
    message: formData.get("message"),
    sourcePage: formData.get("sourcePage") || "contact-page",
  });
}

export function parseContactPayload(payload: unknown) {
  return contactRequestSchema.safeParse(payload);
}
