import Link from "next/link";
import { company } from "@/data/company";
import { getFooterNavigation } from "@/data/navigation";
import type { Locale } from "@/lib/locale";

export function SiteFooter({
  locale,
  companyContent,
}: {
  locale: Locale;
  companyContent: {
    description: string;
    footerPlaceholderNote: string;
    serviceAreasLabel: string;
  };
}) {
  const footerNavigation = getFooterNavigation(locale);

  return (
    <footer className="border-t border-[rgba(16,42,67,0.08)] bg-navy text-white">
      <div className="shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div className="max-w-sm">
            <div className="font-display text-2xl font-bold">{company.brandName}</div>
            <p className="mt-4 text-sm leading-7 text-white/72">
              {companyContent.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/72">
              <div>{company.legalName}</div>
              <div>{company.registration}</div>
              <a className="block hover:text-white" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
              <a className="block hover:text-white" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              <div>{company.address}</div>
            </div>
          </div>

          {footerNavigation.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-sm font-bold tracking-[0.12em] text-white/78 uppercase">
                {group.title}
              </h2>
              <div className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/62 md:flex-row md:items-center md:justify-between">
          <p>{companyContent.footerPlaceholderNote}</p>
          <p>
            {companyContent.serviceAreasLabel}: {company.serviceAreas.join(" • ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
