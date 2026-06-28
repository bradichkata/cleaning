import { caseStudyImages } from "@/data/media";
import type { BeforeAfterStory } from "@/types/content";

export const beforeAfterStories: BeforeAfterStory[] = [
  {
    category: "Deep clean case study",
    title: "Grease-heavy kitchen reset for a growing family in Dublin 4",
    image: caseStudyImages.kitchen,
    alt: "Split-screen kitchen before and after a deep cleaning visit",
    before:
      "Heavy grease on the hob wall, crowded counters, and visible soil around the sink slowed the client's evening routine.",
    after:
      "Degreased cooking zone, polished steel, cleared worktops, and a kitchen that felt manageable again the same day.",
    outcome: "Client booked a monthly maintenance visit after the initial reset.",
    scope: "Deep cleaning with hob, splashback, and sink-detail work",
    turnaround: "Single afternoon visit",
  },
  {
    category: "Move-out handoff",
    title: "Vacant apartment prepared for a move-out inspection in Dublin City Centre",
    image: caseStudyImages.moveOut,
    alt: "Split-screen vacant apartment before and after a move-out cleaning service",
    before:
      "Traffic marks, dusty skirting, and tired flooring left the flat looking rougher than the actual condition warranted.",
    after:
      "The same space read brighter, cleaner, and inspection-ready, with scope notes separating wear from cleaning outcomes.",
    outcome: "Property manager cleared the apartment for photography the following morning.",
    scope: "End-of-tenancy clean with floor reset and touch-point detailing",
    turnaround: "Half-day vacant-property visit",
  },
  {
    category: "Office refresh",
    title: "Weekly office refresh for a twelve-person studio in Blackrock",
    image: caseStudyImages.office,
    alt: "Split-screen office before and after a routine professional cleaning visit",
    before:
      "Fingerprints on glass, overflowing bins, and dusty workstations made the space feel busier than it really was.",
    after:
      "Sharper glass, tidier desks, and a calmer client-facing presentation before the first team meeting of the day.",
    outcome: "The client moved from ad hoc visits to a fixed twice-weekly schedule.",
    scope: "Routine office clean with glass, desks, bins, and kitchenette reset",
    turnaround: "Early-morning visit before staff arrival",
  },
];
