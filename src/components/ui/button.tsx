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
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200",
    size === "md" && "min-h-12 px-5 text-sm",
    size === "lg" && "min-h-14 px-6 text-base",
    tone === "primary" &&
      "bg-navy text-white shadow-[0_18px_38px_rgba(15,31,42,0.18)] hover:bg-navy-soft",
    tone === "secondary" &&
      "border border-[rgba(21,45,62,0.14)] bg-[rgba(255,250,244,0.62)] text-navy hover:border-[rgba(29,125,112,0.4)] hover:bg-[rgba(255,250,244,0.78)] hover:text-navy-soft",
    tone === "ghost" &&
      "text-navy hover:bg-[rgba(21,45,62,0.06)] hover:text-navy-soft",
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
