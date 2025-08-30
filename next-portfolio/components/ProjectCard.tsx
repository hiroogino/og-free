import TagList from "@/components/TagList";
import { ReactNode } from "react";

type Stat = { value: string; label: string };

type Props = {
  featured?: boolean;
  imageClass?: string; // e.g. 'globastyle' | 'technovision'
  overlayType?: string; // simple preset
  overlayScale?: string; // simple preset
  overlay?: ReactNode; // custom overlay (優先)
  title: string;
  summary?: string;
  stats?: Stat[];
  tech?: string[];
  href?: string;
  actionLabel?: string;
  action?: ReactNode; // custom CTA (優先)
  children?: ReactNode; // extra content in project-content bottom
};

export default function ProjectCard({
  featured,
  imageClass,
  overlayType,
  overlayScale,
  overlay,
  title,
  summary,
  stats,
  tech,
  href,
  actionLabel = "詳細を見る",
  action,
  children,
}: Props) {
  return (
    <div className={`project-card c-card p-projects__card ${featured ? "featured" : ""} js-animate`.trim()}>
      <div className={`project-image p-projects__image ${imageClass ?? ""}`.trim()}>
        {overlay ? (
          <div className="project-overlay p-projects__overlay">{overlay}</div>
        ) : (overlayType || overlayScale) && (
          <div className="project-overlay p-projects__overlay">
            {overlayType && <div className="project-type">{overlayType}</div>}
            {overlayScale && <div className="project-scale">{overlayScale}</div>}
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        {summary && <p className="project-summary">{summary}</p>}
        {stats && stats.length > 0 && (
          <div className="project-stats p-projects__stats">
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <span className="stat-number">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}
        {tech && tech.length > 0 && (
          <div className="project-tech c-tags">
            <TagList items={tech} />
          </div>
        )}
        <div className="project-actions">
          {action ? action : href && (
            <a href={href} className="btn btn-outline btn-small c-btn c-btn--outline">
              <i className="fas fa-eye"></i>
              {actionLabel}
            </a>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
