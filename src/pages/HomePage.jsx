import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "../app/routes";
import Navbar from "../components/navigation/Navbar";
import scrollToId from "../utils/scrollToId";

export default function HomePage({
  siteMeta,
  navigation,
  sectionOrder,
  sectionData,
  socialLinks,
  certifications,
}) {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (!section) return;
    window.setTimeout(() => scrollToId(section), 40);
  }, [location.search]);

  useEffect(() => {
    let locked = false;

    const shouldJumpToResearch = () => {
      const hero = document.getElementById("hero");
      const research = document.getElementById("research");
      if (!hero || !research) return false;

      const heroRect = hero.getBoundingClientRect();
      const researchRect = research.getBoundingClientRect();
      const heroFocused = heroRect.top <= 0 && heroRect.bottom > window.innerHeight * 0.55;
      const atTop = window.scrollY < 40;

      return (atTop || heroFocused) && researchRect.top > 0;
    };

    const jump = () => {
      locked = true;
      scrollToId("research");
      window.setTimeout(() => {
        locked = false;
      }, 700);
    };

    const onWheel = (event) => {
      if (locked) return;
      if (event.deltaY < 20) return;
      if (!shouldJumpToResearch()) return;
      event.preventDefault();
      jump();
    };

    const onKeyDown = (event) => {
      if (locked) return;
      if (!["ArrowDown", "PageDown", " "].includes(event.key)) return;
      if (!shouldJumpToResearch()) return;
      event.preventDefault();
      jump();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      <Navbar brand={siteMeta.siteName} brandLogo={siteMeta.brandLogo} links={navigation} />
      <main>
        {sectionOrder.map((sectionId) => {
          const Component = routes[sectionId];
          if (!Component) return null;
          const data = sectionData[sectionId];
          if (data?.enabled === false) return null;

          if (sectionId === "contact") {
            return <Component key={sectionId} data={data} socialLinks={socialLinks} />;
          }

          if (sectionId === "skills") {
            return <Component key={sectionId} data={data} certifications={certifications} />;
          }

          if (sectionId === "footer") {
            return <Component key={sectionId} siteMeta={siteMeta} />;
          }

          return <Component key={sectionId} data={data} />;
        })}
      </main>
    </>
  );
}
