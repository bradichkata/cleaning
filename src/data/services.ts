import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "regular-home-cleaning",
    name: "Regular home cleaning",
    result: "A calm, consistently maintained home without the last-minute scramble.",
    summary:
      "Routine cleaning visits built around repeatability, clear checklists, and low-friction home access.",
    metadataDescription:
      "Routine home cleaning with transparent estimate ranges, repeat scheduling, and clear checklist standards.",
    heroTag: "Continuity-first maintenance",
    pricingLabel: "From a recurring visit rate",
    durationLabel: "Typically 2 to 4 hours",
    audience: "Weekly and bi-weekly households",
    featured: true,
    benefits: [
      "Predictable upkeep that keeps the property from drifting into deep-clean territory.",
      "Structured room-by-room service instead of vague surface tidying.",
      "Best value when access, frequency, and expectations stay consistent.",
    ],
    included: [
      "Dusting of reachable surfaces and visible touch points",
      "Kitchen exterior wipe-down and sink care",
      "Bathroom sanitation and mirror polishing",
      "Vacuuming and hard-floor mopping",
      "Bed making and general visual reset",
    ],
    excluded: [
      "Inside ovens, fridges, cabinets, and heavy descaling unless added",
      "External windows, balconies, and specialist stain treatment",
      "Damage repair, decluttering, and waste disposal beyond normal bins",
    ],
    extras: [
      "Oven or fridge cleaning",
      "Inside cabinets",
      "Interior windows",
      "Carpet and upholstery refresh",
    ],
    preparation: [
      "Put away fragile items and loose paperwork.",
      "Mention pets, alarm systems, or preferred room priorities in advance.",
    ],
    suitableFor: [
      "Busy households",
      "Working professionals",
      "Families who want consistency over occasional reset jobs",
    ],
    serviceAreaNotes: [
      "Best results come from repeat access and consistent visit rhythm.",
      "Parking and building access details help keep arrival windows realistic.",
    ],
    checklist: [
      {
        title: "Kitchen",
        items: [
          "Worktops and splash areas",
          "Sink and taps",
          "Cabinet exteriors",
          "Appliance exteriors",
          "Visible floor edges",
        ],
      },
      {
        title: "Bathrooms",
        items: [
          "Toilet, sink, and taps",
          "Bath or shower clean",
          "Mirror polish",
          "Fixtures and touch points",
          "Floor finish",
        ],
      },
      {
        title: "Living and sleeping areas",
        items: [
          "Dust reachable surfaces",
          "Vacuum floors and soft furnishings",
          "Reset visible clutter where agreed",
          "Empty bins",
        ],
      },
    ],
    priceModel: {
      baseMin: 72,
      baseMax: 108,
      sizeMultipliers: {
        compact: 0.9,
        medium: 1,
        large: 1.25,
        oversized: 1.55,
      },
      propertyAdjustments: {
        house: 22,
        office: 18,
        rental: 12,
      },
      conditionAdjustments: {
        standard: 0,
        heavy: 48,
      },
      extraAdjustments: {
        oven: 25,
        fridge: 20,
        "inside-cabinets": 24,
        "interior-windows": 18,
        carpets: 36,
        upholstery: 30,
        balcony: 20,
      },
      recurringDiscount: 0.92,
    },
  },
  {
    slug: "deep-cleaning",
    name: "Deep cleaning",
    result: "A full-property reset designed to pull a space back into control.",
    summary:
      "Detailed top-to-bottom cleaning for first visits, seasonal resets, and properties that need more than routine maintenance.",
    metadataDescription:
      "Detailed deep cleaning with realistic price ranges, clear scope notes, and optional add-ons for heavier reset work.",
    heroTag: "High-detail reset work",
    pricingLabel: "Property quotation or estimate range",
    durationLabel: "Typically 4 to 8 hours",
    audience: "First-time or seasonal cleaning",
    featured: true,
    benefits: [
      "Targets buildup, neglected details, and reset-level presentation.",
      "Ideal before switching into a recurring maintenance plan.",
      "Scope can be expanded with appliances, cabinets, or upholstery work.",
    ],
    included: [
      "Detailed bathroom and kitchen attention",
      "Door frames, skirting boards, and more hidden dust zones",
      "Reachable high-low detailing",
      "Heavier limescale and grease treatment where safe",
    ],
    excluded: [
      "Restoration, mold remediation, pest-related cleanup, or damage repair",
      "Exterior work unless separately quoted",
      "Hazardous waste handling",
    ],
    extras: [
      "Oven and fridge interiors",
      "Inside cabinets and wardrobes",
      "Carpets and upholstery",
      "Interior windows",
    ],
    preparation: [
      "Tell us about fragile materials, special finishes, or known problem zones.",
      "If possible, reduce loose clutter so time is spent cleaning rather than sorting.",
    ],
    suitableFor: [
      "Seasonal resets",
      "First professional clean",
      "Move-in preparation",
    ],
    serviceAreaNotes: [
      "Heavily soiled properties and restricted access need photo-backed quoting when possible.",
      "Final timing depends on condition more than room count alone.",
    ],
    checklist: [
      {
        title: "Detail zones",
        items: [
          "Skirting boards and frames",
          "Switches and touch points",
          "Reachable vents and ledges",
          "Hidden corners and buildup lines",
        ],
      },
      {
        title: "Kitchen reset",
        items: [
          "Degrease visible surfaces",
          "Hob and extractor exterior",
          "Cabinet exteriors",
          "Detailed sink and tap finish",
        ],
      },
      {
        title: "Bathroom reset",
        items: [
          "Scale reduction on sanitaryware",
          "Detailed shower and tile clean",
          "Mirror and chrome finish",
          "Floor corners and edges",
        ],
      },
    ],
    priceModel: {
      baseMin: 148,
      baseMax: 230,
      sizeMultipliers: {
        compact: 0.9,
        medium: 1,
        large: 1.3,
        oversized: 1.65,
      },
      propertyAdjustments: {
        house: 24,
        office: 28,
        rental: 14,
      },
      conditionAdjustments: {
        standard: 0,
        heavy: 72,
      },
      extraAdjustments: {
        oven: 28,
        fridge: 24,
        "inside-cabinets": 36,
        "interior-windows": 24,
        carpets: 42,
        upholstery: 38,
        balcony: 24,
      },
      recurringDiscount: 1,
    },
  },
  {
    slug: "end-of-tenancy-cleaning",
    name: "End-of-tenancy cleaning",
    result: "Inspection-ready presentation with clear scope boundaries.",
    summary:
      "Move-out cleaning structured around landlord and agent expectations, appliance options, and vacancy-based access.",
    metadataDescription:
      "End-of-tenancy cleaning with inspection-minded scope, appliance add-ons, and realistic quote review.",
    heroTag: "Inspection-minded handoff",
    pricingLabel: "Fixed quotation after scope review",
    durationLabel: "Typically 5 to 9 hours",
    audience: "Tenants, landlords, and agents",
    featured: true,
    benefits: [
      "Checklist-led finish with agent-facing attention to kitchens and bathrooms.",
      "Works best when the property is vacant or nearly vacant.",
      "Clear boundary between cleaning scope and pre-existing damage or wear.",
    ],
    included: [
      "Detailed empty-property room clean",
      "Bathroom and kitchen emphasis",
      "Cupboard exterior cleaning and full floor finish",
      "Appliance exteriors and reachable dust removal",
    ],
    excluded: [
      "Damage repair, repainting, carpet repair, or mold treatment",
      "Waste clearance and furniture removal unless agreed",
      "External areas unless separately quoted",
    ],
    extras: [
      "Oven interior",
      "Fridge interior",
      "Inside cupboards",
      "Interior windows",
      "Carpet refresh",
    ],
    preparation: [
      "Property should be mostly empty for the strongest result.",
      "Send photos if there are heavy limescale zones, staining, or unusual access issues.",
    ],
    suitableFor: [
      "Tenant handovers",
      "Landlord resets",
      "Pre-marketing property presentation",
    ],
    serviceAreaNotes: [
      "Vacancy, parking, and key handoff details affect both timing and quoting confidence.",
      "Inventory-sensitive jobs benefit from photographic notes before the clean.",
    ],
    checklist: [
      {
        title: "Inspection hotspots",
        items: [
          "Kitchen fronts and appliances",
          "Bathroom fixtures and mirrors",
          "Internal ledges and skirting boards",
          "Cupboard fronts and handles",
        ],
      },
      {
        title: "Empty-room finish",
        items: [
          "Corners, edges, and visible dusting",
          "Vacuum and hard-floor finish",
          "Marks within safe removable scope",
          "Bin emptying",
        ],
      },
    ],
    priceModel: {
      baseMin: 190,
      baseMax: 295,
      sizeMultipliers: {
        compact: 0.92,
        medium: 1,
        large: 1.3,
        oversized: 1.7,
      },
      propertyAdjustments: {
        house: 30,
        office: 0,
        rental: 10,
      },
      conditionAdjustments: {
        standard: 0,
        heavy: 82,
      },
      extraAdjustments: {
        oven: 30,
        fridge: 24,
        "inside-cabinets": 38,
        "interior-windows": 26,
        carpets: 46,
        upholstery: 0,
        balcony: 24,
      },
      recurringDiscount: 1,
    },
  },
  {
    slug: "office-cleaning",
    name: "Office cleaning",
    result: "Low-disruption, reliable cleaning for client-facing and staff spaces.",
    summary:
      "Routine commercial cleaning for offices, shared workspaces, and support areas with flexible scheduling windows.",
    metadataDescription:
      "Commercial office cleaning with flexible scheduling, checklist-led delivery, and scalable routine support.",
    heroTag: "Low-disruption commercial upkeep",
    pricingLabel: "Monthly contract or routine estimate",
    durationLabel: "Typically 2 to 6 hours per visit",
    audience: "Commercial customers",
    featured: true,
    benefits: [
      "Built for consistency, discretion, and repeatability.",
      "Scheduling can be matched to office occupancy and meeting patterns.",
      "Suitable for small suites through to multi-zone shared offices.",
    ],
    included: [
      "Desks and touch-point wipe-down where permitted",
      "Meeting rooms and reception areas",
      "Kitchenette and washroom maintenance",
      "Vacuuming and hard-floor care",
      "Bins and presentation resets",
    ],
    excluded: [
      "IT equipment internals and confidential document handling",
      "Specialist floor restoration or high-level access work",
      "Hazardous materials and construction debris",
    ],
    extras: [
      "Consumables restock checks",
      "Internal glass and partition cleaning",
      "Carpet refresh",
      "After-event reset visits",
    ],
    preparation: [
      "Flag restricted rooms, alarm procedures, and disposal requirements.",
      "Tell us whether staff will be present during the service window.",
    ],
    suitableFor: [
      "Boutique offices",
      "Shared workspaces",
      "Studios, agencies, and medical-adjacent admin spaces",
    ],
    serviceAreaNotes: [
      "Commercial quotes improve significantly when site photos or floor plans are available.",
      "Building access, lift bookings, and consumables handling should be clarified early.",
    ],
    checklist: [
      {
        title: "Client-facing zones",
        items: [
          "Reception and waiting areas",
          "Meeting-room surfaces",
          "Visible glass and touch points",
          "Entry-floor finish",
        ],
      },
      {
        title: "Support zones",
        items: [
          "Kitchenette surfaces",
          "Washroom presentation",
          "Bins and liner changes",
          "Shared-desk surface wipe-down where agreed",
        ],
      },
    ],
    priceModel: {
      baseMin: 132,
      baseMax: 220,
      sizeMultipliers: {
        compact: 0.9,
        medium: 1,
        large: 1.35,
        oversized: 1.8,
      },
      propertyAdjustments: {
        apartment: 0,
        house: 0,
        office: 36,
        rental: 0,
      },
      conditionAdjustments: {
        standard: 0,
        heavy: 64,
      },
      extraAdjustments: {
        "interior-windows": 32,
        carpets: 52,
        upholstery: 38,
      },
      recurringDiscount: 0.9,
    },
  },
  {
    slug: "airbnb-cleaning",
    name: "Airbnb and short-term rental cleaning",
    result: "Fast turnovers with presentation standards and host-ready notes.",
    summary:
      "Short-window reset cleaning for serviced apartments and rental turnovers with guest-facing finish priorities.",
    metadataDescription:
      "Short-term rental cleaning with turnover timing, presentation detail, and host-ready handoff notes.",
    heroTag: "Fast-turnover presentation work",
    pricingLabel: "Per turnover estimate",
    durationLabel: "Typically 1.5 to 4 hours",
    audience: "Short-term rental hosts",
    featured: false,
    benefits: [
      "Optimized for handoff speed, consistency, and guest-facing detail.",
      "Can be paired with restaging notes and consumables checks.",
      "Best when access instructions and laundry arrangements are clear.",
    ],
    included: [
      "Bathroom and kitchen reset",
      "Bed styling where linen is provided",
      "Surface dusting and floor finish",
      "Guest-visible presentation check",
    ],
    excluded: [
      "Laundry off-site coordination unless agreed",
      "Major damage reporting workflows or handyman tasks",
      "Exterior areas beyond standard balcony reset",
    ],
    extras: [
      "Interior windows",
      "Fridge refresh",
      "Balcony reset",
      "Consumables restock check",
    ],
    preparation: [
      "Share check-out timing, key handoff process, and parking notes.",
      "Tell us whether linen turnaround is handled separately or in-house.",
    ],
    suitableFor: [
      "Serviced apartments",
      "Vacation lets",
      "High-frequency host turnovers",
    ],
    serviceAreaNotes: [
      "Turnover work depends heavily on key access reliability and laundry coordination.",
      "Photos of layout and guest count improve first-time quoting.",
    ],
    checklist: [
      {
        title: "Guest-facing zones",
        items: [
          "Bed presentation",
          "Bathroom finish",
          "Kitchen reset",
          "Entry impression and touch points",
        ],
      },
    ],
    priceModel: {
      baseMin: 84,
      baseMax: 132,
      sizeMultipliers: {
        compact: 0.9,
        medium: 1,
        large: 1.2,
        oversized: 1.5,
      },
      propertyAdjustments: {
        rental: 18,
      },
      conditionAdjustments: {
        standard: 0,
        heavy: 48,
      },
      extraAdjustments: {
        fridge: 18,
        "interior-windows": 18,
        balcony: 18,
      },
      recurringDiscount: 0.94,
    },
  },
  {
    slug: "post-construction-cleaning",
    name: "Post-construction cleaning",
    result: "Debris-aware, dust-heavy cleanup that prepares a site for occupation or presentation.",
    summary:
      "Detailed after-build cleaning for dust, residue, and handoff preparation once major trades are complete.",
    metadataDescription:
      "After-build and post-construction cleaning for debris-aware cleanup, fine dust control, and handoff preparation.",
    heroTag: "After-build reset",
    pricingLabel: "Custom quotation",
    durationLabel: "Typically 1 full day or staged visit",
    audience: "Renovation and fit-out handoffs",
    featured: false,
    benefits: [
      "Built for dust-heavy environments and staged completion.",
      "Separates standard cleaning from contractor waste and damage repair.",
      "Works best when major trades are complete before we enter.",
    ],
    included: [
      "Fine-dust removal from reachable surfaces",
      "Surface wipe-downs and floor cleanup",
      "Bathroom and kitchenette handoff preparation",
      "Window and frame cleaning where safe and reachable",
    ],
    excluded: [
      "Heavy rubble removal and trade waste handling",
      "Paint correction, caulk removal, or damage repair",
      "Unsafe sites or incomplete wet trades",
    ],
    extras: [
      "Interior glass detailing",
      "Carpet refresh after fit-out",
      "Multi-visit staged cleaning",
    ],
    preparation: [
      "Confirm builders are finished and utilities are available.",
      "Tell us whether fine dust is widespread or isolated to specific rooms.",
    ],
    suitableFor: [
      "Renovation handoff",
      "Builder clean follow-up",
      "Pre-occupancy presentation",
    ],
    serviceAreaNotes: [
      "Photo-backed scope review is strongly recommended.",
      "Dust severity, access, and water/electric availability all affect the quote.",
    ],
    checklist: [
      {
        title: "Dust and residue control",
        items: [
          "Reachable ledges and frames",
          "Surface wipe-downs",
          "Floor dust extraction",
          "Sanitary and kitchenette reset",
        ],
      },
    ],
    priceModel: {
      baseMin: 240,
      baseMax: 420,
      sizeMultipliers: {
        compact: 0.88,
        medium: 1,
        large: 1.38,
        oversized: 1.9,
      },
      propertyAdjustments: {
        house: 36,
        office: 42,
        rental: 10,
      },
      conditionAdjustments: {
        standard: 0,
        heavy: 96,
      },
      extraAdjustments: {
        "interior-windows": 34,
        carpets: 44,
      },
      recurringDiscount: 1,
    },
  },
  {
    slug: "window-cleaning",
    name: "Window cleaning",
    result: "Cleaner light, better frontage, and a sharper finish where access allows.",
    summary:
      "Interior window cleaning and accessible glass work for homes and offices, with weather and access considerations built in.",
    metadataDescription:
      "Interior and accessible window cleaning with realistic access planning and weather-aware scheduling.",
    heroTag: "Glass and light improvement",
    pricingLabel: "Per window or custom scope",
    durationLabel: "Typically 1 to 3 hours",
    audience: "Homes and offices",
    featured: false,
    benefits: [
      "Best when paired with routine or deep cleaning for full-property presentation.",
      "Access and weather are reviewed early to avoid unrealistic promises.",
      "Useful for rental, office, and pre-inspection prep.",
    ],
    included: [
      "Accessible interior panes",
      "Sills and reachable frame wipe-down",
      "Spotting and finish check",
    ],
    excluded: [
      "Unsafe height work or specialist access equipment",
      "Glass repair, hard-water restoration, or heavy paint removal",
      "Exterior-only work in unsafe weather",
    ],
    extras: [
      "Internal glass partitions",
      "Balcony glass",
      "Combined service with deep clean",
    ],
    preparation: [
      "Tell us about floor-to-ceiling panes, restricted access, or balcony-only approach.",
      "Weather can affect exterior timing and finish quality.",
    ],
    suitableFor: [
      "Apartments",
      "Office partitions",
      "Pre-listing presentation",
    ],
    serviceAreaNotes: [
      "Exterior scope is always reviewed against safe access and weather.",
      "High-rise or specialist access work requires separate planning.",
    ],
    checklist: [
      {
        title: "Glass finish",
        items: [
          "Interior pane clean",
          "Reachable frame wipe-down",
          "Sill reset",
          "Final spotting check",
        ],
      },
    ],
    priceModel: {
      baseMin: 88,
      baseMax: 150,
      sizeMultipliers: {
        compact: 0.9,
        medium: 1,
        large: 1.25,
        oversized: 1.6,
      },
      propertyAdjustments: {
        office: 26,
      },
      conditionAdjustments: {
        standard: 0,
        heavy: 36,
      },
      extraAdjustments: {
        "interior-windows": 0,
        balcony: 20,
      },
      recurringDiscount: 0.95,
    },
  },
  {
    slug: "carpet-upholstery-cleaning",
    name: "Carpet and upholstery cleaning",
    result: "A fresher, more presentable finish for soft surfaces that carry daily wear.",
    summary:
      "Targeted refresh work for carpets, sofas, chairs, and soft furnishings that need more than surface vacuuming.",
    metadataDescription:
      "Carpet and upholstery cleaning for soft-surface refresh work, add-on support, and presentation improvements.",
    heroTag: "Soft-surface refresh",
    pricingLabel: "Custom quotation or add-on rate",
    durationLabel: "Typically 1 to 4 hours",
    audience: "Homes, rentals, and offices",
    featured: false,
    benefits: [
      "Useful as a stand-alone add-on or alongside deep, move-out, and office cleans.",
      "Quote accuracy improves when item count and material notes are shared in advance.",
      "Ideal for guest-facing and inspection-sensitive spaces.",
    ],
    included: [
      "Carpeted area refresh within agreed scope",
      "Selected upholstery items",
      "Visual finish improvement and odor reduction support",
    ],
    excluded: [
      "Guaranteed stain removal or specialist restoration",
      "Damage repair, re-dyeing, or mold remediation",
      "Unknown delicate fabrics without prior review",
    ],
    extras: [
      "Whole-room carpet package",
      "Dining-chair bundle",
      "Sofa or sectional refresh",
    ],
    preparation: [
      "Send photos and tell us about material sensitivity, stains, and pet exposure.",
      "Allow drying time in your schedule after the service.",
    ],
    suitableFor: [
      "Guest-ready homes",
      "Office seating",
      "Move-out finishing",
    ],
    serviceAreaNotes: [
      "Material type and stain history matter more than room count alone.",
      "We quote carefully to avoid overpromising on stain outcomes.",
    ],
    checklist: [
      {
        title: "Soft-surface review",
        items: [
          "Item count and sizing",
          "Material notes",
          "Visible stain overview",
          "Drying and ventilation plan",
        ],
      },
    ],
    priceModel: {
      baseMin: 92,
      baseMax: 168,
      sizeMultipliers: {
        compact: 0.92,
        medium: 1,
        large: 1.22,
        oversized: 1.55,
      },
      propertyAdjustments: {
        office: 20,
      },
      conditionAdjustments: {
        standard: 0,
        heavy: 42,
      },
      extraAdjustments: {
        carpets: 0,
        upholstery: 0,
      },
      recurringDiscount: 0.96,
    },
  },
];

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, Service>;

export function getServiceBySlug(slug: string) {
  return servicesBySlug[slug];
}
