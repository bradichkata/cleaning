import type { PolicySection } from "@/types/content";

export const policies: Record<
  "privacy" | "cookies" | "terms" | "cancellation-policy" | "satisfaction-guarantee",
  {
    title: string;
    description: string;
    sections: PolicySection[];
  }
> = {
  privacy: {
    title: "Privacy Policy",
    description:
      "How quote requests, contact messages, and operational details are handled in this prototype and future live setup.",
    sections: [
      {
        title: "Information we collect",
        body: [
          "We collect the contact details, property notes, scheduling preferences, and service selections that you submit through quote or contact forms.",
          "This prototype also stores operational metadata such as the page where the enquiry started and any campaign tags that help attribute leads.",
        ],
      },
      {
        title: "How we use it",
        body: [
          "Submitted information is used to respond to quote requests, plan service scope, and arrange follow-up communication.",
          "Operational analytics and attribution should only be connected after the business confirms the exact tools and consent wording it intends to use.",
        ],
      },
      {
        title: "Launch requirement",
        body: [
          "Replace this draft with business-specific legal wording, retention periods, processor details, and the real data controller before launch.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description:
      "A draft policy structure for analytics and functional cookies once the business confirms its tracking stack.",
    sections: [
      {
        title: "Essential cookies",
        body: [
          "The final live site may use essential cookies for routing, security, and form-session stability.",
        ],
      },
      {
        title: "Analytics cookies",
        body: [
          "Analytics should only be enabled after the business selects a provider and confirms consent requirements for its market.",
        ],
      },
      {
        title: "Launch requirement",
        body: [
          "Update this page once the real analytics, call tracking, chat, or ad pixels are chosen.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    description:
      "Commercial terms draft covering quotes, scope confirmation, site access, and service limitations.",
    sections: [
      {
        title: "Quotes and bookings",
        body: [
          "Online quote requests are enquiries, not automatically confirmed appointments.",
          "Work is confirmed only after the business reviews access, condition, scope, and scheduling availability.",
        ],
      },
      {
        title: "Scope boundaries",
        body: [
          "Cleaning scope should distinguish routine cleaning from restoration, damage repair, pest-related cleanup, and specialist remediation.",
          "Anything outside the agreed checklist should be documented and approved before being treated as included work.",
        ],
      },
      {
        title: "Launch requirement",
        body: [
          "Replace this draft with legal terms aligned with your insurer, local laws, and your real cancellation and payment process.",
        ],
      },
    ],
  },
  "cancellation-policy": {
    title: "Cancellation Policy",
    description:
      "Draft cancellation framework for one-off and recurring appointments.",
    sections: [
      {
        title: "Notice windows",
        body: [
          "A fair notice window should be defined for one-off cleans, recurring visits, and last-minute access problems.",
        ],
      },
      {
        title: "Access issues",
        body: [
          "If the team cannot gain access, parking is impossible, or utilities required for the job are unavailable, the business may need to reschedule or apply a call-out fee.",
        ],
      },
      {
        title: "Launch requirement",
        body: [
          "Confirm the actual cancellation deadlines, fees, and exceptions before the site goes live.",
        ],
      },
    ],
  },
  "satisfaction-guarantee": {
    title: "Satisfaction Guarantee",
    description:
      "Draft wording for re-clean review windows and scope-based issue handling.",
    sections: [
      {
        title: "Reporting an issue",
        body: [
          "Customers should report any concern within 24 hours so the business can review it against the original checklist and scope.",
        ],
      },
      {
        title: "How issues are reviewed",
        body: [
          "The guarantee should distinguish between missed cleaning tasks, newly noticed pre-existing damage, and services that were never part of the agreed scope.",
        ],
      },
      {
        title: "Launch requirement",
        body: [
          "Replace this draft with the exact policy the company is genuinely willing to honor in day-to-day operations.",
        ],
      },
    ],
  },
};
