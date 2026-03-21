import { useEffect, useRef } from "react";
import styles from "./P3StructuredLayout.module.css";

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
    videoRef.current.playbackRate = video?.playbackRate || 0.8;
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

export default function P3StructuredLayout({ detail }) {
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
        <div className={styles.summaryRow}>
          <article className={styles.textPanel}>
            <h3 className={styles.sectionTitle}>Summary Of the Task</h3>
            <p>{detail.summary}</p>
          </article>
          <FigureBlock figure={slots.summaryVisual} className={styles.sideFigure} />
        </div>
      </section>

      <section className={styles.sectionCard}>
        <div className={styles.sectionNarrative}>
          {(detail.prototypeOverview || []).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        {(detail.prototypeMethodology || []).length ? (
          <ul className={styles.methodList}>
            {detail.prototypeMethodology.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        <div className={styles.twoGrid}>
          <FigureBlock figure={slots.prototypeLeft} />
          <FigureBlock figure={slots.prototypeRight} />
        </div>
      </section>

      <section className={styles.sectionCard}>
        <div className={styles.sectionNarrative}>
          {(detail.animationOverview || []).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className={styles.twoGrid}>
          {(detail.animations || []).map((video) => (
            <VideoBlock key={video.src} video={video} />
          ))}
        </div>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>3D Printed Prototype</h3>
        <FigureBlock figure={slots.printedPrototype} className={styles.printedFigure} showCaption={false} />
        {(detail.printedPrototypeNotes || []).length ? (
          <div className={styles.printedNotes}>
            {detail.printedPrototypeNotes.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ) : null}
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Details Drawing</h3>
        <div className={styles.drawingStack}>
          <FigureBlock figure={slots.drawing1} showCaption={false} />
          <FigureBlock figure={slots.drawing2} showCaption={false} />
          <FigureBlock figure={slots.drawing3} showCaption={false} />
        </div>
      </section>

      {detail.takeaways?.length ? (
        <section className={styles.sectionCard}>
          <h3 className={styles.sectionTitle}>Key Takeaway</h3>
          <ul className={styles.takeawayList}>
            {detail.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
