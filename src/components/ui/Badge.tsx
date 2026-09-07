import { ReactNode } from "react";

type BadgeVariant = "default" | "primary" | "secondary" | "success" | "warning" | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface-container text-on-surface-variant",
  primary: "bg-primary-deep text-butter",
  secondary: "bg-secondary-container text-on-secondary-container",
  success: "bg-emerald-100 text-emerald-800",
  warning: "bg-amber-100 text-amber-800",
  outline: "bg-transparent border border-outline-variant text-on-surface-variant",
};

export default function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-sm ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
