import Card from "../ui/Card";
import styles from "./SkillCard.module.css";

export default function SkillCard({ item }) {
  return (
    <Card className={styles.card}>
      <img src={item.icon} alt="" aria-hidden="true" />
      <h3>{item.name}</h3>
    </Card>
  );
}
