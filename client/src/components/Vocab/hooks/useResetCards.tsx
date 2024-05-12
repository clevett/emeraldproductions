import { useRecoilCallback, useRecoilValue } from "recoil";
import { activeCardSelector, cardSelector } from "../recoil/selectors";
import { Card } from "../types";

export const useResetCards = () => {
  const activeCards = useRecoilValue(activeCardSelector);

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

  return () => uplift(activeCards);
};
