import styles from "./SectionHeader.module.css";

export default function SectionHeader({ title, summary }) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {summary ? <p className={styles.summary}>{summary}</p> : null}
    </header>
  );
}
