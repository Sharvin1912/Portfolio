import styles from "./Button.module.css";
import classNames from "../../utils/classNames";

const variantMap = {
  primary: styles.primary,
  ghost: styles.ghost,
  subtle: styles.subtle,
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  startIcon,
  endIcon,
}) {
  const content = (
    <>
      {startIcon ? <span className={styles.icon}>{startIcon}</span> : null}
      <span>{children}</span>
      {endIcon ? <span className={styles.icon}>{endIcon}</span> : null}
    </>
  );
  const cls = classNames(styles.button, variantMap[variant], className);
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        className={cls}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }
  return <button className={cls}>{content}</button>;
}
