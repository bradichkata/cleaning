import type { Metadata } from "next";
import { PolicyContent } from "@/components/blocks/policy-content";
import { policies } from "@/data/policies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: policies.privacy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <PolicyContent {...policies.privacy} />;
}
