import type { ButtonHTMLAttributes } from "react";
import { cx } from "@/lib/utils";

type Tone = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

export function buttonClasses({
  tone = "primary",
  size = "md",
  fullWidth = false,
  className,
}: {
  tone?: Tone;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
}) {
  return cx(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200",
    size === "md" && "min-h-12 px-5 text-sm",
    size === "lg" && "min-h-14 px-6 text-base",
    tone === "primary" &&
      "bg-navy text-white shadow-[0_20px_40px_rgba(16,42,67,0.18)] hover:-translate-y-0.5 hover:bg-navy-soft",
    tone === "secondary" &&
      "border border-[rgba(16,42,67,0.12)] bg-white text-navy hover:-translate-y-0.5 hover:border-[rgba(28,181,163,0.35)] hover:text-navy-soft",
    tone === "ghost" &&
      "text-navy hover:bg-[rgba(16,42,67,0.04)] hover:text-navy-soft",
    fullWidth && "w-full",
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: Tone;
  size?: Size;
  fullWidth?: boolean;
};

export function Button({
  tone = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({ tone, size, fullWidth, className })}
      {...props}
    />
  );
}
