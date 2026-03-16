import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const updateActiveSection = () => {
      const markerY = 140;
      const pageBottom = window.scrollY + window.innerHeight;
      const docBottom = document.documentElement.scrollHeight;

      // Ensure the last nav section (Contact) becomes active near page bottom.
      if (docBottom - pageBottom <= 4) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      // Prefer section currently crossing a marker line below the sticky header.
      const inView = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= markerY && rect.bottom > markerY;
      });

      if (inView) {
        setActiveId(inView.id);
        return;
      }

      // Fallback: pick closest section above marker.
      const above = sections
        .map((section) => ({ section, top: section.getBoundingClientRect().top }))
        .filter(({ top }) => top <= markerY)
        .sort((a, b) => b.top - a.top)[0];

      setActiveId((above?.section || sections[0]).id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [ids]);

  return activeId || ids?.[0] || "";
}
