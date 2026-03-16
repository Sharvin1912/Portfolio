import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import ContactItem from "../../components/cards/ContactItem";
import Button from "../../components/ui/Button";
import styles from "./ContactSection.module.css";

function SocialIcon({ type }) {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.2 8.6a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6ZM5 9.8h2.4V18H5V9.8Zm4 0h2.3V11h.1c.3-.6 1.1-1.5 2.4-1.5 2.6 0 3.1 1.7 3.1 3.9V18h-2.4v-3.9c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2v4H9V9.8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .8a11.2 11.2 0 0 0-3.5 21.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8.9 2.2 1.5.9.1 1.5-.3 1.8-.6.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a12 12 0 0 1 6.1 0C18.8 4.8 20 5 20 5c.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

export default function ContactSection({ data, socialLinks }) {
  if (!data?.enabled) return null;

  return (
    <Section id={data.id}>
      <SectionHeader title={data.title} summary={data.summary} />
      <div className={styles.layout}>
        <div className={styles.stack}>
          {data.items.map((item) => (
            <ContactItem key={item.id} item={item} />
          ))}
          <Button href={data.cta.href} className={styles.cta}>{data.cta.label}</Button>
        </div>
        <aside className={styles.social}>
          <h3>Social</h3>
          <div className={styles.socialList}>
            {socialLinks.map((link) => (
              <a key={link.id} href={link.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                <span className={styles.socialIcon}>
                  <SocialIcon type={link.id} />
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}
