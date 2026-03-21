import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const initialHandledRef = useRef(false);

  useEffect(() => {
    const navEntries = window.performance?.getEntriesByType?.("navigation") || [];
    const navType = navEntries[0]?.type;
    const isReload = navType === "reload";

    if (!initialHandledRef.current) {
      initialHandledRef.current = true;

      if (isReload) {
        navigate("/", { replace: true });
        window.setTimeout(() => scrollToId("hero"), 40);
        return;
      }
    }

    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (!section) return;
    window.setTimeout(() => scrollToId(section), 40);
  }, [location.search, navigate]);

  useEffect(() => {
    let locked = false;
    let touchStartY = null;

    const canJumpToResearch = () => {
      const hero = document.getElementById("hero");
      const research = document.getElementById("research");
      if (!hero || !research) return false;

      const headerHeight =
        Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 72;
      const heroRect = hero.getBoundingClientRect();
      const researchRect = research.getBoundingClientRect();
      const nearTop = window.scrollY <= 56;
      const heroFocused =
        heroRect.top <= headerHeight + 8 &&
        heroRect.bottom >= window.innerHeight * 0.45;
      const researchNotReached = researchRect.top > headerHeight + 8;

      return (nearTop || heroFocused) && researchNotReached;
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
      if (event.deltaY <= 3) return;
      if (!canJumpToResearch()) return;
      event.preventDefault();
      jump();
    };

    const onKeyDown = (event) => {
      if (locked) return;
      if (!["ArrowDown", "PageDown", " "].includes(event.key)) return;
      if (!canJumpToResearch()) return;
      event.preventDefault();
      jump();
    };

    const onTouchStart = (event) => {
      touchStartY = event.touches?.[0]?.clientY ?? null;
    };

    const onTouchEnd = (event) => {
      if (locked || touchStartY == null) return;
      const touchEndY = event.changedTouches?.[0]?.clientY ?? touchStartY;
      const swipeDistance = touchStartY - touchEndY;
      touchStartY = null;
      if (swipeDistance <= 28) return;
      if (!canJumpToResearch()) return;
      jump();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
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
