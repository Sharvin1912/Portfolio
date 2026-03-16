import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import Card from "../../components/ui/Card";
import styles from "./AboutSection.module.css";

export default function AboutSection({ data }) {
  if (!data?.enabled) return null;

  return (
    <Section id={data.id}>
      <SectionHeader title={data.title} summary={data.summary} />
      <div className={styles.grid}>
        {data.highlights.map((highlight) => (
          <Card key={highlight}>{highlight}</Card>
        ))}
      </div>
    </Section>
  );
}
