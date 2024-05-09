import { wordListSelector } from "./recoil";
import { FlashCard } from "./components/FlashCard/FlashCard";
import { useHideCards } from "./hooks/useHideCards";
import { useRecoilValue } from "recoil";

import styles from "./styles.module.css";

export const Cards = () => {
  const list = useRecoilValue(wordListSelector);
  const hideCards = useHideCards();

  return (
    <div className={styles.layout}>
      {list?.map((word) => (
        <FlashCard key={word} word={word} cardChecker={hideCards} />
      ))}
    </div>
  );
};
