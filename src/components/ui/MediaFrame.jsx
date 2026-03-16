import styles from "./MediaFrame.module.css";

export default function MediaFrame({ src, alt }) {
  return (
    <div className={styles.frame}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
