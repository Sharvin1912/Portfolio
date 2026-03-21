import { useEffect, useRef } from "react";
import styles from "./P4StructuredLayout.module.css";

function FigureBlock({ figure, className = "", showCaption = true }) {
  if (!figure?.src) return null;
  return (
    <figure className={`${styles.figureCard} ${className}`.trim()}>
      <div className={styles.figureMedia}>
        <img src={figure.src} alt={figure.title || "Project figure"} loading="lazy" />
      </div>
      {showCaption && figure.title ? <figcaption>{figure.title}</figcaption> : null}
    </figure>
  );
}

function VideoBlock({ video }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = video?.playbackRate || 1;
  }, [video?.playbackRate]);

  if (!video?.src) return null;

  return (
    <figure className={styles.videoCard}>
      <div className={styles.videoMedia}>
        <video ref={videoRef} autoPlay loop muted playsInline preload="metadata">
          <source src={video.src} type={video.type || "video/mp4"} />
        </video>
      </div>
      {video.title ? <figcaption>{video.title}</figcaption> : null}
    </figure>
  );
}

export default function P4StructuredLayout({ detail }) {
  const slots = detail.figureSlots || {};

  return (
    <div className={styles.layout}>
      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Keywords</h3>
        <div className={styles.keywordRow}>
          {(detail.keywords || []).map((keyword) => (
            <span
              key={keyword.label}
              className={`${styles.keywordChip} ${keyword.important ? styles.keywordChipImportant : ""}`.trim()}
            >
              {keyword.label}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.sectionCard}>
        <article className={styles.textPanel}>
          <h3 className={styles.sectionTitle}>Motivation & Possible Applications</h3>
          {(detail.motivation || []).map((line) => (
            <p key={line}>{line}</p>
          ))}
          {(detail.applicationPoints || []).length ? (
            <ul className={styles.pointList}>
              {detail.applicationPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </article>

        <div className={styles.twoGrid}>
          <FigureBlock figure={slots.motivationTop} className={styles.sideFigure} />
          <FigureBlock figure={slots.motivationBottom} className={styles.sideFigure} />
        </div>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Methodology</h3>
        <ul className={styles.pointList}>
          {(detail.methodologySteps || []).map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>3D Model | Mold Design | 3D Printing</h3>
        {(detail.prototypeSummary || []).map((line) => (
          <p key={line} className={styles.bodyLine}>{line}</p>
        ))}
        {(detail.prototypeDetails || []).length ? (
          <ul className={styles.pointList}>
            {detail.prototypeDetails.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        <div className={styles.threeGrid}>
          <FigureBlock figure={slots.modelLeft} className={`${styles.modelFigure} ${styles.modelFigureStrong}`} />
          <FigureBlock figure={slots.modelCenter} className={`${styles.modelFigure} ${styles.modelFigureStrong}`} />
          <FigureBlock figure={slots.modelRight} className={styles.modelFigure} />
        </div>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Simulation & Analysis</h3>
        {(detail.simulationSummary || []).map((line) => (
          <p key={line} className={styles.bodyLine}>{line}</p>
        ))}
        {(detail.boundaryConditions || []).length ? (
          <div className={styles.conditionsRow}>
            {detail.boundaryConditions.map((item) => (
              <span key={item} className={styles.conditionChip}>{item}</span>
            ))}
          </div>
        ) : null}
        <div className={styles.twoGrid}>
          <FigureBlock figure={slots.simulationLeft} />
          <FigureBlock figure={slots.simulationRight} />
        </div>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Results</h3>
        <div className={styles.resultsGrid}>
          <FigureBlock figure={slots.result1} className={styles.resultsPlotFigure} />
          <FigureBlock figure={slots.result2} className={styles.resultsPlotFigure} />
          <FigureBlock figure={slots.result3} className={styles.resultsPlotFigure} />
          <FigureBlock figure={slots.result4} className={styles.resultsPlotFigure} />
        </div>
        {(detail.resultHighlights || []).length ? (
          <div className={styles.resultCards}>
            {detail.resultHighlights.map((item) => (
              <article key={item.label} className={styles.resultCard}>
                <h4>{item.label}</h4>
                <p className={item.tone === "tradeoff" ? styles.valueTradeoff : styles.valuePositive}>{item.value}</p>
              </article>
            ))}
          </div>
        ) : null}
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Mold Preparation & Silicone Curing</h3>
        {(detail.moldSummary || []).map((line) => (
          <p key={line} className={styles.bodyLine}>{line}</p>
        ))}
        <div className={styles.twoGrid}>
          <FigureBlock figure={slots.moldLeft} />
          <FigureBlock figure={slots.moldRight} />
        </div>
        <FigureBlock figure={slots.moldBottom} className={styles.fullFigure} />
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Assembly & Testing</h3>
        {(detail.assemblySummary || []).map((line) => (
          <p key={line} className={styles.bodyLine}>{line}</p>
        ))}
        {(detail.setupComments || []).length ? (
          <ul className={styles.setupComments}>
            {detail.setupComments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {(detail.assemblyCode || []).length ? (
          <pre className={styles.codeBlock}>
            <code>{detail.assemblyCode.join("\n")}</code>
          </pre>
        ) : null}
        <div className={styles.assemblyGrid}>
          <FigureBlock figure={slots.assemblyRig} />
          <FigureBlock figure={slots.assemblyCloseup} />
        </div>
        <VideoBlock video={detail.assemblyVideo} />
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Key Takeaway</h3>
        <ul className={styles.pointList}>
          {(detail.takeaways || []).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
