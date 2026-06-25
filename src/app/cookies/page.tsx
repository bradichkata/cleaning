import type { Metadata } from "next";
import { PolicyContent } from "@/components/blocks/policy-content";
import { policies } from "@/data/policies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: policies.cookies.description,
  path: "/cookies",
});

export default function CookiesPage() {
  return <PolicyContent {...policies.cookies} />;
}
