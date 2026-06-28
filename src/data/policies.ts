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
      "How Harbor & Pine Cleaning handles quote requests, contact messages, and operational scheduling details.",
    sections: [
      {
        title: "Information we collect",
        body: [
          "We collect the contact details, property notes, scheduling preferences, and service selections that you submit through our quote and contact forms.",
          "We also store operational metadata such as the page where an enquiry started and any campaign tags used to measure lead sources.",
        ],
      },
      {
        title: "How we use it",
        body: [
          "Submitted information is used to respond to quote requests, review service scope, schedule follow-up communication, and keep a record of confirmed appointments.",
          "We do not sell enquiry data. Information is only shared with service providers used to run the business, such as email delivery or hosted data storage.",
        ],
      },
      {
        title: "Retention and contact",
        body: [
          "Quote and contact records are retained for up to 12 months unless they become part of an active customer file or a longer retention period is required by law.",
          "For privacy questions or deletion requests, contact hello@harborpinecleaning.ie.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description:
      "How Harbor & Pine Cleaning uses essential and measurement cookies on this website.",
    sections: [
      {
        title: "Essential cookies",
        body: [
          "Essential cookies may be used to support routing, spam protection, rate-limiting signals, and form-session stability.",
        ],
      },
      {
        title: "Measurement cookies",
        body: [
          "Measurement cookies may be used to understand which pages and quote paths are performing well, but only in line with the consent choices available on the site.",
        ],
      },
      {
        title: "Control",
        body: [
          "You can manage non-essential cookies through your browser settings. Essential cookies are required for core site and form behavior.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    description:
      "Commercial terms covering estimates, scope confirmation, access, and service limitations.",
    sections: [
      {
        title: "Quotes and bookings",
        body: [
          "Online quote requests are enquiries, not automatically confirmed appointments.",
          "Work is confirmed only after Harbor & Pine Cleaning reviews access, condition, scope, and scheduling availability.",
        ],
      },
      {
        title: "Scope boundaries",
        body: [
          "Cleaning scope distinguishes routine and deep cleaning from restoration, damage repair, pest-related cleanup, and specialist remediation.",
          "Anything outside the agreed checklist must be documented and approved before it is treated as included work.",
        ],
      },
      {
        title: "Payments and access",
        body: [
          "Payment timing is confirmed during booking. If access, utilities, or parking arrangements materially differ from the agreed brief, pricing or appointment timing may change.",
          "Clients are responsible for flagging fragile surfaces, alarm procedures, pets, and any access restrictions before the visit.",
        ],
      },
    ],
  },
  "cancellation-policy": {
    title: "Cancellation Policy",
    description:
      "Cancellation and rescheduling rules for one-off and recurring appointments.",
    sections: [
      {
        title: "Notice windows",
        body: [
          "Please give at least 24 hours notice for standard residential appointments and 48 hours notice for larger one-off or commercial visits where possible.",
        ],
      },
      {
        title: "Access issues",
        body: [
          "If the team cannot gain access, parking is unavailable, or utilities required for the job are not working, we may need to reschedule or apply a call-out charge.",
        ],
      },
      {
        title: "Late changes",
        body: [
          "Late cancellations and repeated schedule changes may be charged when team time and travel have already been committed to the booking.",
        ],
      },
    ],
  },
  "satisfaction-guarantee": {
    title: "Satisfaction Guarantee",
    description:
      "How Harbor & Pine Cleaning reviews missed tasks and post-visit concerns.",
    sections: [
      {
        title: "Reporting an issue",
        body: [
          "Please report any concern within 24 hours so we can review it against the original checklist, service notes, and access conditions from the visit.",
        ],
      },
      {
        title: "How issues are reviewed",
        body: [
          "We distinguish between missed cleaning tasks, pre-existing damage, and work that was never part of the agreed scope before arranging any return visit.",
        ],
      },
      {
        title: "Resolution",
        body: [
          "Where a service issue clearly falls within the agreed scope, we will arrange a practical follow-up or credit resolution that matches the original booking.",
        ],
      },
    ],
  },
};
