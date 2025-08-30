type Props = { iconClass: string; label: string; };

export default function SkillItem({ iconClass, label }: Props) {
  return (
    <div className="skill-item js-animate">
      <i className={iconClass}></i>
      <span>{label}</span>
    </div>
  );
}
