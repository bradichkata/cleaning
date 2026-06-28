import type { Metadata } from "next";
import { getCompanyContent, company } from "@/data/company";
import { DecorativeBackgrounds } from "@/components/layout/decorative-backgrounds";
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
    locale: "en_IE",
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
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <DecorativeBackgrounds />
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[20rem] bg-[linear-gradient(180deg,rgba(47,140,119,0.06),transparent_100%)]" />
          <SiteHeader locale={locale} companyContent={companyContent} />
          <main className="relative flex-1 pb-28 pt-[var(--header-height)] lg:pb-0">{children}</main>
          <SiteFooter locale={locale} companyContent={companyContent} />
          <MobileQuoteBar locale={locale} />
        </div>
      </body>
    </html>
  );
}
