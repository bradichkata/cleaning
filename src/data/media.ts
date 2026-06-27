import type { StaticImageData } from "next/image";
import backgroundGraphicOne from "../../background_image/background_graphics_00001_.png";
import backgroundGraphicTwo from "../../background_image/background_graphics_00002_.png";
import backgroundGraphicThree from "../../background_image/background_graphics_00003_.png";
import heroAdvisor from "../../hero_image/hero_section_00001_.png";
import heroOffice from "../../hero_image/hero_section_00002_.png";
import heroCleaner from "../../hero_image/hero_section_00003_.png";

export const ambientBackgroundImages: StaticImageData[] = [
  backgroundGraphicOne,
  backgroundGraphicTwo,
  backgroundGraphicThree,
];

export const heroImages = {
  cleaner: heroCleaner,
  office: heroOffice,
  advisor: heroAdvisor,
};
