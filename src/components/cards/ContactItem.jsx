import styles from "./ContactItem.module.css";

export default function ContactItem({ item }) {
  return (
    <div className={styles.item}>
      <span>{item.label}</span>
      {item.href ? (
        <a href={item.href}>{item.value}</a>
      ) : (
        <strong>{item.value}</strong>
      )}
    </div>
  );
}
