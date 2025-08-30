type Props = { items: string[]; className?: string };

export default function TagList({ items, className }: Props) {
  return (
    <div className={`card-tags c-tags ${className ?? ''}`.trim()}>
      {items.map((t, i) => (
        <span className="tag c-tag" key={i}>{t}</span>
      ))}
    </div>
  );
}

