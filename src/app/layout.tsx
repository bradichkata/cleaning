import type { Metadata } from "next";
import { getCompanyContent, company } from "@/data/company";
import { MobileQuoteBar } from "@/components/layout/mobile-quote-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getCurrentLocale } from "@/lib/server-locale";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.brandName} | Professional Cleaning Without the Stress`,
    template: `%s | ${company.brandName}`,
  },
  description:
    "Reliable home and office cleaning with transparent pricing, flexible appointments, and a structured quote process.",
  applicationName: company.brandName,
  keywords: [
    "cleaning services",
    "home cleaning",
    "office cleaning",
    "deep cleaning",
    "end of tenancy cleaning",
    "quote request",
  ],
  openGraph: {
    title: `${company.brandName} | Professional Cleaning Without the Stress`,
    description:
      "Reliable home and office cleaning with trained professionals, transparent pricing, and flexible appointments.",
    url: company.siteUrl,
    siteName: company.brandName,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.brandName} | Professional Cleaning Without the Stress`,
    description:
      "Reliable home and office cleaning with trained professionals, transparent pricing, and flexible appointments.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();
  const companyContent = getCompanyContent(locale);

  return (
    <html
      lang={locale}
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_right,_rgba(28,181,163,0.18),_transparent_45%),linear-gradient(180deg,_rgba(16,42,67,0.04),_transparent_65%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-[30rem] -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(233,162,59,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,42,67,0.08),_transparent_40%)]" />
          <SiteHeader locale={locale} companyContent={companyContent} />
          <main className="relative flex-1">{children}</main>
          <SiteFooter locale={locale} companyContent={companyContent} />
          <MobileQuoteBar locale={locale} />
        </div>
      </body>
    </html>
  );
}
