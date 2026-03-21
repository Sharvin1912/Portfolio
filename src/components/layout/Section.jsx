import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import styles from "./Section.module.css";
import classNames from "../../utils/classNames";

export default function Section({ id, className = "", children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={classNames(styles.section, styles.reveal, isVisible && styles.visible, "section-offset", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
