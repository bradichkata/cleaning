import { company } from "@/data/company";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const currencyFormatter = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
  return currencyFormatter.format(amount);
}

export function formatEstimateRange(min: number, max: number) {
  return `${formatCurrency(min)} - ${formatCurrency(max)}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, company.siteUrl).toString();
}

export function buildReferenceCode(prefix: "Q" | "C", id: string) {
  return `${prefix}-${id.slice(0, 8).toUpperCase()}`;
}
