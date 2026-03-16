import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import SkillCard from "../../components/cards/SkillCard";
import styles from "./SkillsSection.module.css";

export default function SkillsSection({ data, certifications }) {
  if (!data?.enabled) return null;

  return (
    <Section id={data.id}>
      <SectionHeader title={data.title} summary={data.summary} />
      <div className={styles.stack}>
        <section className={styles.subsection}>
          <h3>Software Tools</h3>
          <div className={styles.grid}>
            {data.softwareTools.map((item) => (
              <SkillCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className={styles.subsection}>
          <h3>Certifications</h3>
          <div className={styles.certList}>
            {certifications?.items?.map((item) => (
              <article key={item.id} className={styles.certItem}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.issuer} | {item.date}</p>
                </div>
                <a href={item.credentialUrl} target="_blank" rel="noreferrer">Credential</a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.subsection}>
          <h3>Technical Skills</h3>
          <div className={styles.techChips}>
            {data.technicalSkills.map((skill) => (
              <span key={skill} className={styles.techChip}>{skill}</span>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
}
