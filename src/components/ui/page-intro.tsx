import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { cx } from "@/lib/utils";

type Action = {
  label: string;
  href: string;
  tone?: "primary" | "secondary";
};

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: Action[];
  aside?: React.ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions = [],
  aside,
}: PageIntroProps) {
  return (
    <section className="section-space pt-10 sm:pt-14 md:pt-16">
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_24rem] lg:items-start">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-5 max-w-4xl text-3xl leading-tight font-bold text-navy sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {description}
          </p>
          {actions.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) => (
                <Link
                  key={action.href + action.label}
                  href={action.href}
                  className={buttonClasses({
                    tone: action.tone ?? "primary",
                    size: "lg",
                  })}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        {aside ? (
          <aside className={cx("surface-card rounded-[1.75rem] p-6")}>{aside}</aside>
        ) : null}
      </div>
    </section>
  );
}
