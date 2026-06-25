import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { serviceAreas } from "@/data/service-areas";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/prices",
    "/get-a-quote",
    "/book",
    "/how-it-works",
    "/service-areas",
    "/about",
    "/reviews",
    "/before-after",
    "/commercial-cleaning",
    "/faq",
    "/blog",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
    "/cancellation-policy",
    "/satisfaction-guarantee",
  ].map((path) => ({
    url: `${company.siteUrl}${path || "/"}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${company.siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const areaRoutes = serviceAreas.map((area) => ({
    url: `${company.siteUrl}/service-areas/${area.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
