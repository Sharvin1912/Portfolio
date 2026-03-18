import styles from "./Button.module.css";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  startIcon = null,
  endIcon = null,
  ...rest
}) {
  const classes = [styles.button, styles[variant] || styles.primary, className].filter(Boolean).join(" ");

  const content = (
    <>
      {startIcon ? <span className={styles.icon} aria-hidden="true">{startIcon}</span> : null}
      <span>{children}</span>
      {endIcon ? <span className={styles.icon} aria-hidden="true">{endIcon}</span> : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
