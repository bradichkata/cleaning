import type { ServiceArea } from "@/types/content";

export const serviceAreas: ServiceArea[] = [
  {
    slug: "sofia",
    name: "Sofia",
    summary:
      "Core city coverage with the fastest reply times for home, rental, and office enquiries.",
    responseTime: "Same day to next business day for most quote requests",
    travelFee: "No travel fee in core zones; outer districts reviewed case by case",
    neighborhoods: ["Lozenets", "Mladost", "Iztok", "Studentski Grad"],
    bestFor: [
      "Regular home cleaning",
      "Airbnb turnover support",
      "Office suites and shared workspaces",
    ],
    localNotes: [
      "Parking notes matter in denser central zones and business parks.",
      "Lift access and loading windows help us quote larger buildings more accurately.",
    ],
    parkingGuidance:
      "Please mention paid-zone parking, private-access barriers, and loading restrictions during quoting.",
    serviceSlugs: [
      "regular-home-cleaning",
      "deep-cleaning",
      "office-cleaning",
      "airbnb-cleaning",
    ],
  },
  {
    slug: "plovdiv",
    name: "Plovdiv",
    summary:
      "Ideal for deep cleaning, move-out work, and recurring home cleaning in central residential areas.",
    responseTime: "Usually within one business day",
    travelFee: "Core city visits included; outer trips may add a small travel fee",
    neighborhoods: ["Center", "Kapana", "Smirnenski", "Karshiyaka"],
    bestFor: [
      "End-of-tenancy cleaning",
      "Seasonal deep cleaning",
      "Window and add-on services",
    ],
    localNotes: [
      "Historic properties often need clearer access notes and material-sensitive cleaning choices.",
      "Window scope should mention height, balcony access, and exterior access limitations.",
    ],
    parkingGuidance:
      "Street parking and old-town access constraints should be declared during the quote request.",
    serviceSlugs: [
      "deep-cleaning",
      "end-of-tenancy-cleaning",
      "window-cleaning",
      "carpet-upholstery-cleaning",
    ],
  },
  {
    slug: "pernik",
    name: "Pernik",
    summary:
      "Suitable for larger one-off jobs, post-construction cleanup, and scheduled residential support.",
    responseTime: "One to two business days depending on scope",
    travelFee: "Travel fee reviewed based on distance, access, and team size",
    neighborhoods: ["Center", "Iztok", "Moshino", "Tsurkva"],
    bestFor: [
      "Post-construction cleaning",
      "Large-home resets",
      "Move-in preparation",
    ],
    localNotes: [
      "Construction dust, debris staging, and water/electric access should be confirmed before scheduling.",
      "Larger detached properties benefit from room-by-room scope notes and photo references.",
    ],
    parkingGuidance:
      "Please tell us if debris skips, contractors, or limited turning space will affect equipment access.",
    serviceSlugs: [
      "post-construction-cleaning",
      "deep-cleaning",
      "regular-home-cleaning",
    ],
  },
];

export const serviceAreasBySlug = Object.fromEntries(
  serviceAreas.map((area) => [area.slug, area]),
) as Record<string, ServiceArea>;

export function getServiceAreaBySlug(slug: string) {
  return serviceAreasBySlug[slug];
}
