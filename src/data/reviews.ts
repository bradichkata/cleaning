import type { ReviewSlot } from "@/types/content";

export const reviewSlots: ReviewSlot[] = [
  {
    title: "Google review slot",
    prompt:
      "Replace with a verified review mentioning punctual arrival, clear communication, and the finished result.",
    service: "Regular home cleaning",
    location: "Central Sofia",
    source: "Google Business Profile",
  },
  {
    title: "Facebook review slot",
    prompt:
      "Replace with a genuine review covering a first-time deep clean or seasonal reset visit.",
    service: "Deep cleaning",
    location: "Plovdiv",
    source: "Facebook",
  },
  {
    title: "Commercial review slot",
    prompt:
      "Replace with a verified office client review referencing reliability, discretion, and consistent checklist quality.",
    service: "Office cleaning",
    location: "Business district",
    source: "Email verification or CRM export",
  },
];
