import Counter from "@/components/Counter";

type Props = { value: string; label: string; className?: string };

export default function StatCard({ value, label, className }: Props) {
  return (
    <div className={`stat-card c-card c-card--stat js-animate ${className ?? ''}`.trim()}>
      <Counter value={value} className="stat-number c-card__number" />
      <div className="stat-label c-card__label">{label}</div>
    </div>
  );
}
