import { useEffect, useRef } from "react";
import styles from "./P2StructuredLayout.module.css";

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

function VideoBlock({ video }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = video?.playbackRate || 0.75;
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

export default function P2StructuredLayout({ detail }) {
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
        <div className={styles.overviewRow}>
          <article className={styles.textPanel}>
            <h3 className={styles.sectionTitle}>Summary</h3>
            <p>{detail.summary}</p>
            <h3 className={styles.sectionTitle}>Problem Statement</h3>
            <p>{detail.problemStatement}</p>
          </article>
          <FigureBlock figure={slots.concept} className={styles.sideFigure} />
        </div>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Steps & Details</h3>
        <ol className={styles.stepList}>
          {(detail.stepsDetails || []).map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Material Model Used and Properties</h3>
        <div className={styles.materialRow}>
          <article className={styles.textPanel}>
            {detail.materialModel?.name ? <h4 className={styles.modelName}>{detail.materialModel.name}</h4> : null}
            {detail.materialModel?.formulaImage?.src ? (
              <figure
                className={styles.formulaFigure}
                style={{
                  "--formula-scale": detail.materialModel.formulaImage.scale ?? 0.82,
                  "--formula-max-height": detail.materialModel.formulaImage.maxHeight || "180px",
                }}
              >
                <div className={styles.formulaMedia}>
                  <img
                    src={detail.materialModel.formulaImage.src}
                    alt={detail.materialModel.formulaImage.title || "Material model equation"}
                    loading="lazy"
                  />
                </div>
              </figure>
            ) : null}
            <ul>
              {(detail.materialModel?.notes || []).map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Constant</th>
                  <th>Value</th>
                  <th>Parameter</th>
                </tr>
              </thead>
              <tbody>
                {(detail.materialModel?.constants || []).map((row) => (
                  <tr key={row.constant}>
                    <td>{row.constant}</td>
                    <td>{row.value}</td>
                    <td>{row.parameter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={styles.sectionCard}>
        <div className={styles.setupRow}>
          <article className={styles.textPanel}>
            <h3 className={styles.sectionTitle}>Simulation Setup Details</h3>
            <ul>
              {(detail.simulationSetup || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <FigureBlock figure={slots.setup} className={styles.sideFigure} />
        </div>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Simulation Results</h3>
        {detail.simulationCaseNote ? <p className={styles.caseNote}>{detail.simulationCaseNote}</p> : null}
        <div className={styles.resultsCaseGrid}>
          <FigureBlock figure={slots.result1} />
          <FigureBlock figure={slots.result2} />
          <FigureBlock figure={slots.result3} />
          <FigureBlock figure={slots.result4} />
        </div>

        <VideoBlock video={detail.simulationVideo} />

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Case</th>
                <th>Temperature (K)</th>
                <th>Strain Rate (s^-1)</th>
                <th>Max Reaction Force (N)</th>
              </tr>
            </thead>
            <tbody>
              {(detail.reactionForceTable || []).map((row) => (
                <tr key={row.case}>
                  <td>{row.case}</td>
                  <td>{row.temperature}</td>
                  <td>{row.strainRate}</td>
                  <td className={row.highlight ? styles.valueTradeoff : ""}>{row.maxForce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.lead}>
          Operating forming load selected: <strong className={styles.valuePositive}>{detail.selectedLoad}</strong>
        </p>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Power Consumption Calculation</h3>
        <div className={styles.resultHighlights}>
          {(detail.powerSummary || []).map((item) => (
            <article key={item.label} className={styles.resultCard}>
              <h4>{item.label}</h4>
              <p className={item.tone === "tradeoff" ? styles.valueTradeoff : styles.valuePositive}>{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Design Calculations</h3>
        {detail.designCalculationBlocks?.length ? (
          <div className={styles.designBlocks}>
            {detail.designCalculationBlocks.map((block) => (
              <article key={block.title} className={styles.designBlock}>
                <h4>{block.title}</h4>
                {(block.paragraphs || []).map((text) => (
                  <p key={text}>{text}</p>
                ))}
                {(block.bullets || []).length ? (
                  <ul className={styles.powerList}>
                    {block.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {block.equation ? <p className={styles.equationLine}>{block.equation}</p> : null}
                {(block.lines || []).map((line) => (
                  <p key={line} className={styles.designLine}>{line}</p>
                ))}
              </article>
            ))}
          </div>
        ) : (
          <ul className={styles.powerList}>
            {(detail.designCalculations || []).map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        )}
      </section>

      <section className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Design Drawings</h3>
        <FigureBlock figure={slots.designDetails} />
        <FigureBlock figure={slots.designAssembly} />
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
