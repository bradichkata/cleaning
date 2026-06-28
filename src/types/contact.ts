export const contactMethodOptions = [
  { value: "phone", label: "Phone call" },
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

export type ContactMethod = (typeof contactMethodOptions)[number]["value"];

export type ContactRequestRecord = {
  id: string;
  referenceCode: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  preferredContactMethod: ContactMethod;
  message: string;
  consent: boolean;
  status: "new";
  sourcePage: string;
};
