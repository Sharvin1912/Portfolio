import Card from "../ui/Card";
import styles from "./TimelineItem.module.css";

export default function TimelineItem({ item }) {
  return (
    <Card className={styles.item}>
      <div className={styles.roleRow}>
        <h3 className={styles.role}>{item.role}</h3>
      </div>
      <p className={styles.company}>{item.company}</p>
      <p className={styles.meta}>
        <span className={styles.metaItem}>{item.period}</span>
        <span className={styles.metaDot} aria-hidden="true">•</span>
        <span className={styles.metaItem}>{item.location}</span>
      </p>
      <ul className={styles.points}>
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Card>
  );
}
