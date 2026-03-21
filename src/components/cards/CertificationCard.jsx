import Card from "../ui/Card";
import Button from "../ui/Button";
import styles from "./CertificationCard.module.css";

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 4h6v6M10 14 20 4M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CertificationCard({ item }) {
  return (
    <Card className={styles.card}>
      <img src={item.badgeImage} alt={`${item.name} badge`} />
      <h3>{item.name}</h3>
      <p>{item.issuer} | {item.date}</p>
      <Button
        href={item.credentialUrl}
        target="_blank"
        rel="noreferrer"
        variant="ghost"
        className={styles.credentialButton}
        endIcon={<ExternalIcon />}
      >
        View Credential
      </Button>
    </Card>
  );
}
