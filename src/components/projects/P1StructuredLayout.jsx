import styles from "./P1StructuredLayout.module.css";

function FigureBlock({ figure, className = "" }) {
  if (!figure?.src) return null;
  return (
    <figure className={`${styles.figureCard} ${className}`.trim()}>
      <div className={styles.figureMedia}>
        <img src={figure.src} alt={figure.title || "Project figure"} loading="lazy" />
      </div>
      {figure.title ? <figcaption>{figure.title}</figcaption> : null}
    </figure>
  );
}

export default function P1StructuredLayout({ detail }) {
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
            <h3 className={styles.sectionTitle}>Summary</h3>
          <p>{detail.summary}</p>
          </article>
          <FigureBlock figure={slots.summary} className={styles.sideFigure} />
        </div>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Problem Statement</h3>
        <p className={styles.lead}>{detail.problemStatement}</p>
        <FigureBlock figure={slots.problem} className={`${styles.fullFigure} ${styles.problemFigureCompact}`} />
      </section>

      {detail.problemFormulation ? (
        <section className={styles.sectionCard}>
          <h3 className={styles.sectionTitle}>Problem Formulation</h3>
          <div className={styles.formulationPair}>
            {[slots.formulationLeft, slots.formulationRight].map((figure, index) =>
              figure?.src ? (
                <figure key={figure.src || index} className={styles.formulationFigure}>
                  <div className={styles.formulationMedia}>
                    <img src={figure.src} alt={figure.title || "Problem formulation figure"} loading="lazy" />
                  </div>
                  {figure.title ? <figcaption>{figure.title}</figcaption> : null}
                </figure>
              ) : null,
            )}
          </div>
        </section>
      ) : null}

      <section className={styles.sectionCard}>
        <div className={styles.methodRow}>
          <article className={styles.textPanel}>
            <h3 className={styles.sectionTitle}>Methodology</h3>
          <ul>
            {(detail.methodologyPoints || []).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          </article>
          <FigureBlock figure={slots.methodology} className={styles.sideFigure} />
        </div>
      </section>

      <section className={styles.sectionCard}>
        <FigureBlock figure={slots.pareto} className={`${styles.fullFigure} ${styles.paretoZoom}`} />
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Results</h3>
        <div className={styles.resultHighlights}>
          {(detail.resultHighlights || []).map((item) => (
            <article key={item.label} className={styles.resultCard}>
              <h4>{item.label}</h4>
              <p className={item.tone === "tradeoff" ? styles.valueTradeoff : styles.valuePositive}>{item.value}</p>
            </article>
          ))}
        </div>

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

        <div className={styles.resultsGrid}>
          <FigureBlock figure={slots.resultsTopLeft} />
          <FigureBlock figure={slots.resultsTopRight} />
          <FigureBlock figure={slots.resultsBottom} className={`${styles.resultsWide} ${styles.plumeZoom}`} />
        </div>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Key Takeaway</h3>
        <ul className={styles.takeawayList}>
          {(detail.takeaways || []).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
