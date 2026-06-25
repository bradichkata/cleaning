import { getServiceBySlug } from "@/data/services";
import type { EstimateSummary } from "@/types/forms";
import type { QuoteEstimateDraft } from "@/types/quote";

export function calculateQuoteEstimate(
  draft: QuoteEstimateDraft,
): EstimateSummary | null {
  const service = getServiceBySlug(draft.serviceSlug);

  if (!service) {
    return null;
  }

  const model = service.priceModel;
  const sizeMultiplier = model.sizeMultipliers[draft.size];
  const propertyAdjustment = model.propertyAdjustments[draft.propertyType] ?? 0;
  const conditionAdjustment = model.conditionAdjustments[draft.condition];
  const extrasAdjustment = draft.extras.reduce((total, extra) => {
    return total + (model.extraAdjustments[extra] ?? 0);
  }, 0);

  const discount =
    draft.recurring === "weekly" || draft.recurring === "bi-weekly"
      ? model.recurringDiscount
      : draft.recurring === "monthly"
        ? Math.min(0.97, model.recurringDiscount + 0.03)
        : 1;

  const min = Math.round(
    (model.baseMin * sizeMultiplier + propertyAdjustment + conditionAdjustment + extrasAdjustment) *
      discount,
  );
  const max = Math.round(
    (model.baseMax * sizeMultiplier +
      propertyAdjustment +
      conditionAdjustment +
      extrasAdjustment * 1.1) *
      discount,
  );

  return {
    min,
    max,
  };
}
