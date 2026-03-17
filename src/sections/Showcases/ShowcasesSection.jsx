import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import styles from "./ShowcasesSection.module.css";

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 4h6v6M10 14 20 4M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ShowcasesSection({ data }) {
  if (!data?.enabled) return null;

  return (
    <Section id={data.id}>
      <SectionHeader title={data.title} summary={data.summary} />
      <Card className={styles.researchCard}>
        <div className={styles.topRow}>
          <h3>{data.organization}</h3>
          <span className={styles.period}>{data.period}</span>
        </div>
        <p className={styles.subheading}>{data.organizationSubheading}</p>

        <div className={styles.contentGrid}>
          <div className={styles.leftCol}>
            <p className={styles.summary}>{data.researchSummary}</p>
          </div>

          <aside className={styles.rightCol}>
            <div className={styles.mentorCard}>
              <img src={data.mentor.image} alt={data.mentor.name} className={styles.mentorAvatar} />
              <div className={styles.mentorText}>
                <span>{data.mentor.label}:</span>
                <strong>
                  <a
                    href={data.mentor.profileHref}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.profileLink}
                    aria-label={`View profile of ${data.mentor.name}`}
                  >
                    <span className={styles.profileIcon}><ExternalIcon /></span>
                    <span>{data.mentor.name}</span>
                    <span className={styles.profileTooltip}>View Profile</span>
                  </a>
                </strong>
                <p className={styles.mentorPosition}>{data.mentor.position}</p>
              </div>
            </div>
            <Button href={data.labLink.href} variant="ghost" className={styles.labButton}>
              {data.labLink.label}
            </Button>
          </aside>
        </div>
      </Card>
    </Section>
  );
}
