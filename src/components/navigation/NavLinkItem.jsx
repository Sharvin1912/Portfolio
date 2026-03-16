import styles from "./Navbar.module.css";
import classNames from "../../utils/classNames";

export default function NavLinkItem({ label, href, active, onClick }) {
  return (
    <a
      className={classNames(styles.navLink, active && styles.navLinkActive)}
      href={href}
      onClick={onClick}
    >
      {label}
    </a>
  );
}
