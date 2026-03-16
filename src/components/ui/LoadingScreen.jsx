import Lottie from "lottie-react";
import animationData from "../../../content/Images/loadingAnimation.json";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  return (
    <div className={styles.overlay} role="status" aria-live="polite" aria-label="Loading website">
      <div className={styles.playerWrap}>
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
}
