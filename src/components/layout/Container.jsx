import styles from "./Container.module.css";
import classNames from "../../utils/classNames";

export default function Container({ className = "", children }) {
  return <div className={classNames(styles.container, className)}>{children}</div>;
}
