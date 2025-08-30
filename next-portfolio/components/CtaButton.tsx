type Props = {
  href?: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
};

export default function CtaButton({ href, variant = "primary", children, className }: Props) {
  const common = `btn c-btn c-btn--impact ${variant === "primary" ? "btn-primary c-btn--primary" : "btn-outline c-btn--outline"}`;
  const cls = `${common} btn-impact ${className ?? ""}`.trim();
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type="button">
      {children}
    </button>
  );
}

