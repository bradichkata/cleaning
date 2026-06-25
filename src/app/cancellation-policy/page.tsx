import type { Metadata } from "next";
import { PolicyContent } from "@/components/blocks/policy-content";
import { policies } from "@/data/policies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cancellation Policy",
  description: policies["cancellation-policy"].description,
  path: "/cancellation-policy",
});

export default function CancellationPolicyPage() {
  return <PolicyContent {...policies["cancellation-policy"]} />;
}
