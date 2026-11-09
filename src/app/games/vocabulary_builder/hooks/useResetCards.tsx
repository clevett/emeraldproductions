import { useAtom, useAtomValue, useStore } from "jotai";
import {
  activeCardSelector,
  cardSelector,
  wordListSelector,
} from "../state/selectors";
import { Card } from "../types";
import { shuffle } from "../helpers/shuffle";

export const useResetCards = () => {
  const activeCards = useAtomValue(activeCardSelector);
  const [words, setWords] = useAtom(wordListSelector);
  const store = useStore();

  const uplift = (cards: Card[]) => {
    cards.forEach((c) => store.set(cardSelector(c.word), {
      ...c,
      isRevealed: false,
      isMatched: false,
    }));
  };

  const reshuffle = () => {
    if (words) {
      const shuffled = shuffle([...words]);
      setWords(shuffled);
    }
  };

  return () => {
    uplift(activeCards);
    reshuffle();
  };
};
