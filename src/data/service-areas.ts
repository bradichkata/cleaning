import type { ServiceArea } from "@/types/content";

export const serviceAreas: ServiceArea[] = [
  {
    slug: "dublin-city-centre",
    name: "Dublin City Centre",
    summary:
      "Fast-response coverage for apartments, serviced rentals, and office suites where access windows matter.",
    responseTime: "Same day to next business day for most quote requests",
    travelFee: "Included in standard guide rates for Dublin 1, 2, 4, and the Docklands",
    neighborhoods: ["Docklands", "Grand Canal", "Smithfield", "Portobello"],
    bestFor: [
      "Apartment cleaning",
      "Move-out cleans",
      "Office suites and serviced rentals",
    ],
    localNotes: [
      "Concierge access, lift booking windows, and managed parking rules are confirmed before final scheduling.",
      "Short-term rental work in the centre is easiest to quote when key handoff and linen arrangements are clear.",
    ],
    parkingGuidance:
      "Please mention permit-only parking, loading bays, coded doors, and reception access during quoting.",
    serviceSlugs: [
      "regular-home-cleaning",
      "end-of-tenancy-cleaning",
      "office-cleaning",
      "airbnb-cleaning",
    ],
  },
  {
    slug: "ranelagh-rathmines",
    name: "Ranelagh & Rathmines",
    summary:
      "Best for recurring household visits, family homes, and first-visit deep cleans across busy residential streets.",
    responseTime: "Usually within one business day",
    travelFee: "Included in standard guide rates",
    neighborhoods: ["Ranelagh", "Rathmines", "Harold's Cross", "Terenure"],
    bestFor: [
      "Regular home cleaning",
      "Seasonal deep cleaning",
      "Window and interior add-ons",
    ],
    localNotes: [
      "Victorian homes and split-level apartments benefit from clear notes about stairs, pets, and priority rooms.",
      "Parking can be tight on weekday mornings, so arrival windows are confirmed with a little more care here.",
    ],
    parkingGuidance:
      "Street parking, permit zones, and stair-only access should be declared during the quote request.",
    serviceSlugs: [
      "deep-cleaning",
      "regular-home-cleaning",
      "window-cleaning",
      "carpet-upholstery-cleaning",
    ],
  },
  {
    slug: "blackrock-dun-laoghaire",
    name: "Blackrock & Dun Laoghaire",
    summary:
      "A strong fit for larger homes, office studios, and carefully scheduled one-off reset work near the coast.",
    responseTime: "One to two business days depending on scope",
    travelFee: "Standard guide rates apply in core postcodes; outer coastal calls may add EUR 12 to EUR 18",
    neighborhoods: ["Blackrock", "Monkstown", "Dun Laoghaire", "Stillorgan"],
    bestFor: [
      "Office cleaning",
      "Larger-home resets",
      "Move-in and move-out preparation",
    ],
    localNotes: [
      "Detached homes and seafront apartments often need access timing, parking, and key collection notes before we confirm.",
      "Office studios in this zone are often quoted with glass, shared kitchen, and meeting-room detailing as separate scope lines.",
    ],
    parkingGuidance:
      "Please tell us about paid parking, basement access, key collection points, and managed-building entry rules.",
    serviceSlugs: [
      "office-cleaning",
      "deep-cleaning",
      "regular-home-cleaning",
      "end-of-tenancy-cleaning",
    ],
  },
];

export const serviceAreasBySlug = Object.fromEntries(
  serviceAreas.map((area) => [area.slug, area]),
) as Record<string, ServiceArea>;

export function getServiceAreaBySlug(slug: string) {
  return serviceAreasBySlug[slug];
}
