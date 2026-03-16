import { useState } from "react";
import styles from "./Navbar.module.css";
import Container from "../layout/Container";
import NavLinkItem from "./NavLinkItem";
import useActiveSection from "../../hooks/useActiveSection";
import useScrollProgress from "../../hooks/useScrollProgress";
import scrollToId from "../../utils/scrollToId";

export default function Navbar({ brand, brandLogo, links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const enabledLinks = links.filter((item) => item.enabled);
  const activeId = useActiveSection(enabledLinks.map((item) => item.id));
  const progress = useScrollProgress();

  const handleClick = (event, id) => {
    event.preventDefault();
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.progressTrack} aria-hidden="true">
        <div className={styles.progressBar} style={{ transform: `scaleX(${progress})` }} />
      </div>
      <Container className={styles.inner}>
        <a href="#hero" className={styles.brand} onClick={(event) => handleClick(event, "hero")}>
          {brandLogo ? <img src={brandLogo} alt={brand} className={styles.brandLogo} /> : brand}
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {enabledLinks.map((item) => (
            <NavLinkItem
              key={item.id}
              label={item.label}
              href={`#${item.id}`}
              active={activeId === item.id}
              onClick={(event) => handleClick(event, item.id)}
            />
          ))}
        </nav>
      </Container>
    </header>
  );
}
