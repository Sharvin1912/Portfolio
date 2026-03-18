import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import RoadmapTimeline from "../../components/roadmap/RoadmapTimeline";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection({ data }) {
  if (!data?.enabled) return null;

  return (
    <Section id={data.id}>
      <SectionHeader title={data.title} summary={data.summary} />
      <div className={styles.stack}>
        <RoadmapTimeline items={data.items} />
      </div>
    </Section>
  );
}
