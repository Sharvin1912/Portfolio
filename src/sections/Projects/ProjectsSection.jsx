import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import ProjectCard from "../../components/cards/ProjectCard";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection({ data }) {
  if (!data?.enabled) return null;

  const allProjects = [...data.featured, ...data.more];

  return (
    <Section id={data.id}>
      <SectionHeader title={data.title} summary={data.summary} />
      <div className={styles.grid}>
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
