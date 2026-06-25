import type { Metadata } from "next";
import { PolicyContent } from "@/components/blocks/policy-content";
import { policies } from "@/data/policies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions",
  description: policies.terms.description,
  path: "/terms",
});

export default function TermsPage() {
  return <PolicyContent {...policies.terms} />;
}
