import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "inverse" | "subtle";
  padding?: "sm" | "md" | "lg";
}

const variantStyles = {
  default:
    "bg-surface-card border-outline-variant/40 card-border",
  inverse:
    "bg-primary-deep border-butter/15 card-border-inverse text-alabaster",
  subtle:
    "bg-surface-container-low border-outline-variant/30",
};

const paddingStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  variant = "default",
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`rounded-md ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
