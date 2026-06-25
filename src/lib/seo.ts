import type { Metadata } from "next";
import { company } from "@/data/company";
import { absoluteUrl } from "@/lib/utils";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: MetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: company.brandName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
