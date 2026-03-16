import Card from "../ui/Card";
import Button from "../ui/Button";
import styles from "./CertificationCard.module.css";

export default function CertificationCard({ item }) {
  return (
    <Card className={styles.card}>
      <img src={item.badgeImage} alt={`${item.name} badge`} />
      <h3>{item.name}</h3>
      <p>{item.issuer} | {item.date}</p>
      <Button href={item.credentialUrl} variant="ghost">Credential</Button>
    </Card>
  );
}
