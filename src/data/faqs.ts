import type { FaqItem } from "@/types/content";

export const faqs: FaqItem[] = [
  {
    id: "estimate-binding",
    question: "Is the online estimate a final price?",
    answer:
      "No. The calculator gives a guided range so you can judge budget quickly. Final pricing is confirmed after we review the exact scope, property condition, and access notes.",
    tags: ["quote", "prices"],
  },
  {
    id: "products-supplied",
    question: "Do you bring cleaning products and equipment?",
    answer:
      "Yes, standard supplies and professional equipment are included unless a specialist material or machine is required for the property.",
    tags: ["services", "home", "office"],
  },
  {
    id: "pets",
    question: "Can you clean homes with pets or children?",
    answer:
      "Yes. Tell us in advance so we can plan timing, product choice, and any access instructions around pets, children, or sensitive rooms.",
    tags: ["services", "home"],
  },
  {
    id: "move-out",
    question: "What is usually excluded from a move-out clean?",
    answer:
      "External areas, severe damage recovery, pest issues, and specialist restoration work are normally outside a standard end-of-tenancy scope unless agreed separately.",
    tags: ["services", "move-out"],
  },
  {
    id: "window-weather",
    question: "Are exterior window cleans weather-dependent?",
    answer:
      "Yes. We may reschedule exterior work when wind, rain, or access safety would compromise the finish or the team.",
    tags: ["services", "windows"],
  },
  {
    id: "commercial-hours",
    question: "Do you offer after-hours office cleaning?",
    answer:
      "Yes. Early mornings, evenings, and low-disruption windows can be arranged for routine commercial clients.",
    tags: ["office", "commercial"],
  },
  {
    id: "reclean-policy",
    question: "What happens if something is missed?",
    answer:
      "Contact us within 24 hours with the issue. We review it against the agreed scope and, where appropriate, arrange a corrective follow-up under the satisfaction policy.",
    tags: ["policies", "quote"],
  },
  {
    id: "service-areas",
    question: "How do travel fees work?",
    answer:
      "Core coverage areas are priced without extra travel. Outer zones, difficult parking, and remote access can add a small travel or logistics fee, which we flag before confirmation.",
    tags: ["areas", "prices"],
  },
];
