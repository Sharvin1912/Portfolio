import Card from "../ui/Card";
import styles from "./TimelineItem.module.css";

export default function TimelineItem({ item }) {
  return (
    <Card className={styles.item}>
      <div className={styles.topline}>
        <h3>{item.role}</h3>
        <span>{item.period}</span>
      </div>
      <p className={styles.meta}>{item.company} | {item.location}</p>
      <ul>
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Card>
  );
}
