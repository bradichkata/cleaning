import type { Metadata } from "next";
import { PolicyContent } from "@/components/blocks/policy-content";
import { policies } from "@/data/policies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Satisfaction Guarantee",
  description: policies["satisfaction-guarantee"].description,
  path: "/satisfaction-guarantee",
});

export default function SatisfactionGuaranteePage() {
  return <PolicyContent {...policies["satisfaction-guarantee"]} />;
}
