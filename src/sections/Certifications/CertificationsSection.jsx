import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import CertificationCard from "../../components/cards/CertificationCard";
import styles from "./CertificationsSection.module.css";

export default function CertificationsSection({ data }) {
  if (!data?.enabled) return null;

  return (
    <Section id={data.id}>
      <SectionHeader title={data.title} summary={data.summary} />
      <div className={styles.grid}>
        {data.items.map((item) => (
          <CertificationCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
