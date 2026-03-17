import styles from "./DetailNavbar.module.css";
import Container from "../layout/Container";

export default function DetailNavbar({ brand, brandLogo, links }) {
  const enabledLinks = links.filter((item) => item.enabled);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#/?section=hero" className={styles.brand}>
          {brandLogo ? <img src={brandLogo} alt={brand} className={styles.brandLogo} /> : brand}
        </a>

        <nav className={styles.nav}>
          {enabledLinks.map((item) => (
            <a key={item.id} href={`#/?section=${item.id}`} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
