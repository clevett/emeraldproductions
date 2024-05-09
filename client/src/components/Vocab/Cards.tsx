import { cardAtomFamily, wordListSelector, cardIdsAtom } from "./recoil";
import { FlashCard } from "./components/FlashCard/FlashCard";
import { getCardDefault, getWordList } from "./helpers";
import { useHideCards } from "./hooks/useHideCards";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { Word } from "./types";
import styles from "./styles.module.css";

export const Cards = () => {
  const list = useRecoilValue(wordListSelector);
  const hideCards = useHideCards();

  const upliftCards = useRecoilCallback(
    ({ set }) =>
      async (words: Word[]) => {
        set(cardIdsAtom, words);
        words.forEach((e) => set(cardAtomFamily(e), getCardDefault(e)));
      },
    []
  );

  if (list === undefined) {
    upliftCards(getWordList());
  }

  return (
    <div className={styles.layout}>
      {list?.map((word) => (
        <FlashCard key={word} word={word} cardChecker={hideCards} />
      ))}
    </div>
  );
};
