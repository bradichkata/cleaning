export const propertyTypeOptions = [
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "office", label: "Office suite" },
  { value: "rental", label: "Rental / Airbnb" },
] as const;

export const propertySizeOptions = [
  { value: "compact", label: "Compact" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
  { value: "oversized", label: "Oversized" },
] as const;

export const soilConditionOptions = [
  { value: "standard", label: "Standard upkeep" },
  { value: "heavy", label: "Heavily soiled" },
] as const;

export const occupiedStatusOptions = [
  { value: "occupied", label: "Occupied" },
  { value: "empty", label: "Empty / vacant" },
] as const;

export const parkingOptions = [
  { value: "easy", label: "Dedicated / easy parking" },
  { value: "limited", label: "Limited nearby parking" },
  { value: "street-only", label: "Street parking only" },
] as const;

export const accessOptions = [
  { value: "ground", label: "Ground floor" },
  { value: "stairs", label: "Stairs only" },
  { value: "lift", label: "Lift available" },
] as const;

export const timeWindowOptions = [
  { value: "morning", label: "Morning" },
  { value: "midday", label: "Midday" },
  { value: "afternoon", label: "Afternoon" },
  { value: "flexible", label: "Flexible" },
] as const;

export const recurringOptions = [
  { value: "one-time", label: "One-time" },
  { value: "weekly", label: "Weekly" },
  { value: "bi-weekly", label: "Bi-weekly" },
  { value: "monthly", label: "Monthly" },
] as const;

export const quoteExtraOptions = [
  { value: "oven", label: "Oven cleaning" },
  { value: "fridge", label: "Fridge cleaning" },
  { value: "inside-cabinets", label: "Inside cabinets" },
  { value: "interior-windows", label: "Interior windows" },
  { value: "carpets", label: "Carpet care" },
  { value: "upholstery", label: "Upholstery refresh" },
  { value: "balcony", label: "Balcony / terrace" },
] as const;

export type PropertyType = (typeof propertyTypeOptions)[number]["value"];
export type PropertySize = (typeof propertySizeOptions)[number]["value"];
export type SoilCondition = (typeof soilConditionOptions)[number]["value"];
export type OccupiedStatus = (typeof occupiedStatusOptions)[number]["value"];
export type ParkingAvailability = (typeof parkingOptions)[number]["value"];
export type FloorAccess = (typeof accessOptions)[number]["value"];
export type PreferredTimeWindow = (typeof timeWindowOptions)[number]["value"];
export type RecurringFrequency = (typeof recurringOptions)[number]["value"];
export type QuoteExtra = (typeof quoteExtraOptions)[number]["value"];

export type QuoteEstimateDraft = {
  serviceSlug: string;
  propertyType: PropertyType;
  size: PropertySize;
  condition: SoilCondition;
  recurring: RecurringFrequency;
  extras: QuoteExtra[];
};

export type QuoteRequestRecord = {
  id: string;
  referenceCode: string;
  createdAt: string;
  serviceSlug: string;
  propertyType: PropertyType;
  size: PropertySize;
  bedrooms: string;
  bathrooms: string;
  condition: SoilCondition;
  occupiedStatus: OccupiedStatus;
  floors: string;
  addressLine: string;
  city: string;
  postcode: string;
  parkingAvailability: ParkingAvailability;
  floorAccess: FloorAccess;
  preferredDate: string;
  preferredTimeWindow: PreferredTimeWindow;
  recurring: RecurringFrequency;
  extras: QuoteExtra[];
  name: string;
  phone: string;
  email: string;
  preferredContactMethod: "phone" | "email" | "whatsapp";
  message: string;
  estimatedPriceMin: number | null;
  estimatedPriceMax: number | null;
  status: "new";
  sourcePage: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
};
