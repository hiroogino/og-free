import TagList from "@/components/TagList";

type Props = {
  iconClass: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

export default function ExperienceCard({ iconClass, title, subtitle, description, tags }: Props) {
  return (
    <div className="experience-card c-card p-experience__card js-animate">
      <div className="card-icon p-experience__icon">
        <i className={iconClass}></i>
      </div>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
      <TagList items={tags} />
    </div>
  );
}
