import type {
  PropertySize,
  PropertyType,
  QuoteExtra,
  SoilCondition,
} from "@/types/quote";

export type ServicePriceModel = {
  baseMin: number;
  baseMax: number;
  sizeMultipliers: Record<PropertySize, number>;
  propertyAdjustments: Partial<Record<PropertyType, number>>;
  conditionAdjustments: Record<SoilCondition, number>;
  extraAdjustments: Partial<Record<QuoteExtra, number>>;
  recurringDiscount: number;
};

export type ServiceChecklistSection = {
  title: string;
  items: string[];
};

export type Service = {
  slug: string;
  name: string;
  result: string;
  summary: string;
  metadataDescription: string;
  heroTag: string;
  pricingLabel: string;
  durationLabel: string;
  audience: string;
  featured: boolean;
  benefits: string[];
  included: string[];
  excluded: string[];
  extras: string[];
  preparation: string[];
  suitableFor: string[];
  serviceAreaNotes: string[];
  checklist: ServiceChecklistSection[];
  priceModel: ServicePriceModel;
};

export type ServiceArea = {
  slug: string;
  name: string;
  summary: string;
  responseTime: string;
  travelFee: string;
  neighborhoods: string[];
  bestFor: string[];
  localNotes: string[];
  parkingGuidance: string;
  serviceSlugs: string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  tags: string[];
};

export type ReviewSlot = {
  id: string;
  author: string;
  quote: string;
  service: string;
  location: string;
  dateLabel: string;
  source: string;
  rating: number;
  outcome: string;
};

export type BeforeAfterStory = {
  category: string;
  title: string;
  image: string;
  alt: string;
  before: string;
  after: string;
  outcome: string;
  scope: string;
  turnaround: string;
};

export type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  takeaways: string[];
};

export type PolicySection = {
  title: string;
  body: string[];
};
