import type { ReactElement } from "react";
import styles from "./FlipCard.module.css";

export function FlipCard({
  children,
  isFlipped,
  frontToBackDuration = 0.6,
}: {
  children: [ReactElement, ReactElement];
  isFlipped: boolean;
  frontToBackDuration?: number;
}) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.face} ${isFlipped ? `${styles.inactive} ${styles.frontFlipped}` : ""}`}
        aria-hidden={isFlipped}
        inert={isFlipped}
      >
        {children[0]}
      </div>
      <div
        className={`${styles.face} ${isFlipped ? "" : `${styles.inactive} ${styles.backHidden}`}`}
        style={{ transitionDuration: `${frontToBackDuration}s` }}
        aria-hidden={!isFlipped}
        inert={!isFlipped}
      >
        {children[1]}
      </div>
    </div>
  );
}
