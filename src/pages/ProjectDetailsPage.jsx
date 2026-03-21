import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/layout/Container";
import DetailNavbar from "../components/navigation/DetailNavbar";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import MediaFrame from "../components/ui/MediaFrame";
import P1StructuredLayout from "../components/projects/P1StructuredLayout";
import P2StructuredLayout from "../components/projects/P2StructuredLayout";
import P3StructuredLayout from "../components/projects/P3StructuredLayout";
import P4StructuredLayout from "../components/projects/P4StructuredLayout";
import styles from "./ProjectDetailsPage.module.css";

function flattenProjects(projectsData) {
  return [...(projectsData.featured || []), ...(projectsData.more || [])];
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 6 9 12l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProjectDetailsPage({ siteMeta, navigation, projectsData }) {
  const { projectId } = useParams();
  const projects = useMemo(() => flattenProjects(projectsData), [projectsData]);
  const project = projects.find((item) => item.id === projectId);
  const detail = project?.detailContent || {};
  const isStructuredLayout =
    detail.layout === "p1-structured" ||
    detail.layout === "p2-structured" ||
    detail.layout === "p3-structured" ||
    detail.layout === "p4-structured";

  useEffect(() => {
    window.scrollTo(0, 0);
    const reset = window.setTimeout(() => window.scrollTo(0, 0), 0);
    return () => window.clearTimeout(reset);
  }, [projectId]);

  const renderFigures = (figures = []) => {
    if (!figures.length) return null;
    return (
      <div className={styles.figureGrid}>
        {figures.map((figure) => (
          <figure key={`${figure.src}-${figure.title}`} className={styles.figureCard}>
            <div className={styles.figureMedia}>
              <img src={figure.src} alt={figure.title} loading="lazy" />
            </div>
            <figcaption>{figure.title}</figcaption>
          </figure>
        ))}
      </div>
    );
  };

  if (!project) {
    return (
      <>
        <DetailNavbar brand={siteMeta.siteName} brandLogo={siteMeta.brandLogo} links={navigation} />
        <Container className={styles.wrapper}>
          <Card>
            <h1>Project Not Found</h1>
            <p>This project does not exist yet or the URL is incorrect.</p>
            <Button
              href="#/?section=projects"
              variant="ghost"
              className={styles.backButton}
              startIcon={<BackIcon />}
            >
              Back to Projects
            </Button>
          </Card>
        </Container>
      </>
    );
  }

  return (
    <>
      <DetailNavbar brand={siteMeta.siteName} brandLogo={siteMeta.brandLogo} links={navigation} />
      <Container className={styles.wrapper}>
        <Button
          href="#/?section=projects"
          variant="ghost"
          className={styles.backButton}
          startIcon={<BackIcon />}
        >
          Back to Projects
        </Button>

        <Card className={styles.card}>
          <header className={styles.header}>
            <h1>{project.name}</h1>
            {!isStructuredLayout ? <p>{project.stack}</p> : null}
            {!isStructuredLayout && detail.subtitle ? <h2 className={styles.subtitle}>{detail.subtitle}</h2> : null}
          </header>

          {detail.layout === "p1-structured" ? (
            <P1StructuredLayout detail={detail} />
          ) : detail.layout === "p2-structured" ? (
            <P2StructuredLayout detail={detail} />
          ) : detail.layout === "p3-structured" ? (
            <P3StructuredLayout detail={detail} />
          ) : detail.layout === "p4-structured" ? (
            <P4StructuredLayout detail={detail} />
          ) : (
            <>
              {detail.keywords?.length ? (
                <section className={styles.block}>
                  <h3>Keywords</h3>
                  <div className={styles.keywordGrid}>
                    {detail.keywords.map((keyword) => (
                      <span
                        key={keyword.label}
                        className={`${styles.keywordChip} ${keyword.important ? styles.keywordChipImportant : ""}`}
                      >
                        {keyword.label}
                      </span>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className={styles.block}>
                <h3>Summary</h3>
                <p className={styles.intro}>{detail.summary || detail.overview || detail.intro || project.description}</p>
              </section>

              {detail.problemStatement ? (
                <section className={styles.block}>
                  <h3>Problem Statement</h3>
                  <p>{detail.problemStatement}</p>
                  {renderFigures(detail.problemFigures)}
                </section>
              ) : null}

              {(detail.methodologyPoints || detail.methodSteps || detail.bullets)?.length ? (
                <section className={styles.block}>
                  <h3>Methodology</h3>
                  <ul className={styles.points}>
                    {(detail.methodologyPoints || detail.methodSteps || detail.bullets || []).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {renderFigures(detail.methodologyFigures)}
                </section>
              ) : null}

              {detail.resultHighlights?.length || detail.keyResults?.length ? (
                <section className={styles.block}>
                  <h3>Key Results</h3>
                  {detail.resultHighlights?.length ? (
                    <div className={styles.resultHighlights}>
                      {detail.resultHighlights.map((item) => (
                        <article key={item.label} className={styles.resultCard}>
                          <h4>{item.label}</h4>
                          <p className={item.tone === "tradeoff" ? styles.valueTradeoff : styles.valuePositive}>
                            {item.value}
                          </p>
                        </article>
                      ))}
                    </div>
                  ) : null}
                  <div className={styles.tableWrap}>
                    <table className={styles.table}>
                      <tbody>
                        {(detail.keyResults || []).map((row) => (
                          <tr key={row.metric}>
                            <th>{row.metric}</th>
                            <td>{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {renderFigures(detail.resultFigures)}
                </section>
              ) : null}

              {detail.figures?.length ? (
                <section className={styles.block}>
                  <h3>Figures</h3>
                  {renderFigures(detail.figures)}
                </section>
              ) : null}

              {detail.takeaways?.length ? (
                <section className={styles.block}>
                  <h3>Key Takeaway</h3>
                  <ul className={styles.points}>
                    {detail.takeaways.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {!detail.figures?.length ? (
                <section className={styles.mediaSection}>
                  {(detail.media || [project.thumbnail]).map((mediaSrc) => (
                    <MediaFrame key={mediaSrc} src={mediaSrc} alt={`${project.name} media`} />
                  ))}
                </section>
              ) : null}
            </>
          )}

          {detail.reportLink?.href ? (
            <section className={styles.reportCta}>
              <Button
                href={detail.reportLink.href}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                className={styles.reportButton}
              >
                {detail.reportLink.label || "Open Report"}
              </Button>
            </section>
          ) : null}
        </Card>

        <Button
          href="#/?section=projects"
          variant="ghost"
          className={styles.backButton}
          startIcon={<BackIcon />}
        >
          Back to Projects
        </Button>
      </Container>
    </>
  );
}
