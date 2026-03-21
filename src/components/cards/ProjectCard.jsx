import Card from "../ui/Card";
import Button from "../ui/Button";
import MediaFrame from "../ui/MediaFrame";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const chips = project.infoTags || project.tags || [];
  const points = project.summaryPoints || [project.description];

  return (
    <Card className={styles.card}>
      <div className={styles.mediaWrap}>
        <MediaFrame
          src={project.thumbnail}
          alt={project.name}
          objectPosition={project.thumbnailPosition}
        />
      </div>

      <div className={styles.copy}>
        <h3>{project.name}</h3>
        <div className={styles.infoTags}>
          {chips.slice(0, 4).map((chip) => (
            <span key={chip} className={styles.infoTag}>{chip}</span>
          ))}
        </div>
        <ul className={styles.points}>
          {points.slice(0, 3).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div className={styles.actions}>
        <Button href={`#/project/${project.id}`} className={styles.detailsButton}>
          View Details
        </Button>
      </div>
    </Card>
  );
}
