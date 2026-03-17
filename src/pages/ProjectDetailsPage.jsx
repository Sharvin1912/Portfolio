import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/layout/Container";
import DetailNavbar from "../components/navigation/DetailNavbar";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import MediaFrame from "../components/ui/MediaFrame";
import styles from "./ProjectDetailsPage.module.css";

function flattenProjects(projectsData) {
  return [...(projectsData.featured || []), ...(projectsData.more || [])];
}

export default function ProjectDetailsPage({ siteMeta, navigation, projectsData }) {
  const { projectId } = useParams();
  const projects = useMemo(() => flattenProjects(projectsData), [projectsData]);
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <>
        <DetailNavbar brand={siteMeta.siteName} brandLogo={siteMeta.brandLogo} links={navigation} />
        <Container className={styles.wrapper}>
          <Card>
            <h1>Project Not Found</h1>
            <p>This project does not exist yet or the URL is incorrect.</p>
            <Button href="#/?section=projects" variant="ghost" className={styles.backButton}>Back to Projects</Button>
          </Card>
        </Container>
      </>
    );
  }

  return (
    <>
      <DetailNavbar brand={siteMeta.siteName} brandLogo={siteMeta.brandLogo} links={navigation} />
      <Container className={styles.wrapper}>
        <Button href="#/?section=projects" variant="ghost" className={styles.backButton}>Back to Projects</Button>

        <Card className={styles.card}>
          <header className={styles.header}>
            <h1>{project.name}</h1>
            <p>{project.stack}</p>
          </header>

          <p className={styles.intro}>{project.detailContent?.intro || project.description}</p>

          <ul className={styles.points}>
            {(project.detailContent?.bullets || []).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <section className={styles.mediaSection}>
            {(project.detailContent?.media || [project.thumbnail]).map((mediaSrc) => (
              <MediaFrame key={mediaSrc} src={mediaSrc} alt={`${project.name} media`} />
            ))}
          </section>
        </Card>

        <Button href="#/?section=projects" variant="ghost" className={styles.backButton}>Back to Projects</Button>
      </Container>
    </>
  );
}
