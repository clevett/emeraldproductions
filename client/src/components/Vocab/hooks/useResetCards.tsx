import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import {
  activeCardSelector,
  cardSelector,
  wordListSelector,
} from "../recoil/selectors";
import { Card } from "../types";
import { shuffle } from "../helpers/shuffle";

export const useResetCards = () => {
  const activeCards = useRecoilValue(activeCardSelector);
  const [words, setWords] = useRecoilState(wordListSelector);

  const uplift = useRecoilCallback(
    ({ set }) =>
      async (cards: Card[]) => {
        cards.forEach((c) =>
          set(cardSelector(c.word), {
            ...c,
            isRevealed: false,
            isMatched: false,
          })
        );
      },
    []
  );

  const reshuffle = () => {
    if (words) {
      const shuffled = shuffle([...words]);
      setWords(shuffled);
    }
  };

  return () => uplift(activeCards).then(reshuffle);
};
