import Container from "../../components/layout/Container";
import styles from "./FooterSection.module.css";

export default function FooterSection({ siteMeta }) {
  return (
    <footer id="footer" className={styles.footer}>
      <Container>
        <p>{new Date().getFullYear()} {siteMeta.siteName}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
