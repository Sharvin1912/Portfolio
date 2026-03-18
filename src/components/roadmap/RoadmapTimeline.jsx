import Card from "../ui/Card";
import styles from "./RoadmapTimeline.module.css";

function RailBadge({ item, index }) {
  if (item.railLogo) {
    return <img src={item.railLogo} alt={`${item.company || item.role} logo`} className={styles.railLogo} />;
  }

  const fallback = item.railLabel || item.company || `E${index + 1}`;
  return <span className={styles.railText}>{fallback}</span>;
}

export default function RoadmapTimeline({ items = [] }) {
  return (
    <div className={styles.timeline}>
      {items.slice(0, 3).map((item, index) => (
        <article key={item.id || index} className={styles.row}>
          <aside className={styles.metaRail}>
            <span className={styles.railSlot}>
              <RailBadge item={item} index={index} />
            </span>
            <span className={styles.period}>{item.period}</span>
          </aside>

          <div className={styles.track} aria-hidden="true">
            <span className={styles.dot} />
            <span className={styles.line} />
          </div>

          <Card className={styles.content}>
            <h3>{item.role}</h3>
            {item.company ? <p className={styles.company}>{item.company}</p> : null}
            {item.location ? <p className={styles.location}>{item.location}</p> : null}
            {item.subroles?.length ? (
              <div className={styles.subroles}>
                {item.subroles.map((entry) => (
                  <section key={entry.title} className={styles.subrole}>
                    <h4>{entry.title}</h4>
                    <ul>
                      {(entry.points || []).map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            ) : (
              <ul>
                {(item.points || []).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </Card>
        </article>
      ))}
    </div>
  );
}
