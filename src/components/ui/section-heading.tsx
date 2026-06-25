import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl leading-tight font-bold text-navy sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
    </div>
  );
}
