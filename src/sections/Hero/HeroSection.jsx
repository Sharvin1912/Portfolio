import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";
import styles from "./HeroSection.module.css";

function ActionIcon({ type }) {
  if (type === "arrow-right") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "download") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 18h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return null;
}

function QuickIcon({ type }) {
  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6h16v12H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 4h3l1 4-2 1a14 14 0 0 0 6 6l1-2 4 1v3c0 1-1 2-2 2A16 16 0 0 1 5 6c0-1 1-2 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.2 8.6a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6ZM5 9.8h2.4V18H5V9.8Zm4 0h2.3V11h.1c.3-.6 1.1-1.5 2.4-1.5 2.6 0 3.1 1.7 3.1 3.9V18h-2.4v-3.9c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2v4H9V9.8Z" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .8a11.2 11.2 0 0 0-3.5 21.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8.9 2.2 1.5.9.1 1.5-.3 1.8-.6.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a12 12 0 0 1 6.1 0C18.8 4.8 20 5 20 5c.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8Z" />
      </svg>
    );
  }

  return null;
}

export default function HeroSection({ data }) {
  if (!data?.enabled) return null;

  return (
    <Section id={data.id} className={styles.heroSection}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <div className={styles.availability}>
            <span className={styles.dot} aria-hidden="true" />
            <span>{data.availability}</span>
          </div>
          <h1>{data.heading}</h1>
          <p className={styles.role}>{data.role}</p>
          <p className={styles.subheading}>{data.subheading}</p>
          <div className={styles.actions}>
            {data.actions?.map((action) => (
              <Button
                key={action.id}
                href={action.href}
                variant={action.variant}
                startIcon={action.iconPosition === "start" ? <ActionIcon type={action.icon} /> : null}
                endIcon={action.iconPosition === "end" ? <ActionIcon type={action.icon} /> : null}
              >
                {action.label}
              </Button>
            ))}
          </div>
          <div className={styles.quickLinks}>
            {data.quickLinks?.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className={styles.iconLink}
                >
                  <QuickIcon type={link.icon} />
                  <span className={styles.tooltip}>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className={styles.mediaStack}>
          <div className={styles.backFrame} aria-hidden="true" />
          <div className={styles.mediaWrap}>
            <img src={data.profileImage.src} alt={data.profileImage.alt} />
          </div>
        </div>
      </div>
    </Section>
  );
}
