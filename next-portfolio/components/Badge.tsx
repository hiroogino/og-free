import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "muted" | "glass";
  className?: string;
};

export default function Badge({ children, variant = "glass", className }: Props) {
  const base = "c-badge";
  const v = variant === "primary" ? "c-badge--primary" : variant === "muted" ? "c-badge--muted" : "c-badge--glass";
  return <span className={[base, v, className].filter(Boolean).join(" ")}>{children}</span>;
}
