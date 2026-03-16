import styles from "./Card.module.css";
import classNames from "../../utils/classNames";

export default function Card({ children, className = "" }) {
  return <article className={classNames(styles.card, className)}>{children}</article>;
}
