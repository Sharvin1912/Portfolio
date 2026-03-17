import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LoadingScreen from "../components/ui/LoadingScreen";
import HomePage from "../pages/HomePage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import {
  siteMeta,
  navigation,
  sectionOrder,
  hero,
  about,
  skills,
  experience,
  showcases,
  projects,
  certifications,
  contact,
  socialLinks,
  theme,
} from "../data";

const sectionData = {
  hero,
  about,
  skills,
  experience,
  research: showcases,
  projects,
  certifications,
  contact,
  footer: { id: "footer", enabled: true },
};

function applyTheme(currentTheme) {
  const root = document.documentElement;
  root.style.setProperty("--color-bg", currentTheme.colors.bg);
  root.style.setProperty("--color-surface", currentTheme.colors.surface);
  root.style.setProperty("--color-text", currentTheme.colors.text);
  root.style.setProperty("--color-muted", currentTheme.colors.textMuted);
  root.style.setProperty("--color-accent", currentTheme.colors.accent);
  root.style.setProperty("--color-border", currentTheme.colors.border);
  root.style.setProperty("--radius-sm", currentTheme.radii.sm);
  root.style.setProperty("--radius-md", currentTheme.radii.md);
  root.style.setProperty("--radius-lg", currentTheme.radii.lg);
  root.style.setProperty("--shadow-sm", currentTheme.shadows.sm);
  root.style.setProperty("--shadow-md", currentTheme.shadows.md);
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    applyTheme(theme);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800);
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <HashRouter>
      <div className={styles.app}>
        {isLoading ? <LoadingScreen /> : null}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                siteMeta={siteMeta}
                navigation={navigation}
                sectionOrder={sectionOrder}
                sectionData={sectionData}
                socialLinks={socialLinks}
                certifications={certifications}
              />
            }
          />
          <Route
            path="/project/:projectId"
            element={<ProjectDetailsPage siteMeta={siteMeta} navigation={navigation} projectsData={projects} />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}
