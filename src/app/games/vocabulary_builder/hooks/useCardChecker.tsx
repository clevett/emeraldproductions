import { useRecoilCallback, useRecoilValue } from "recoil";

import { Card } from "../types";
import { cardAtomFamily } from "../recoil/atoms";
import { inPlayCardSelector } from "../recoil/selectors";

export const useCardChecker = () => {
  const inPlayCards = useRecoilValue(inPlayCardSelector);
  const inPlayCount = inPlayCards.length;

  const updateCards = useRecoilCallback(
    ({ set }) =>
      async (list: Card[], updateProps: Partial<Card>) => {
        const updatedList = list.map((card) => ({
          ...card,
          ...updateProps,
        }));

        updatedList.forEach((card) => {
          set(cardAtomFamily(card.word), card);
        });
      },
    []
  );

  const setRevealedFalse = (list: Card[]) =>
    updateCards(list, { isRevealed: false });
  const setIsMatchTrue = (list: Card[]) =>
    updateCards(list, { isMatched: true });

  const matchCheck = () => {
    if (inPlayCount > 1) {
      const [first, second] = inPlayCards;

      if (first.match === second.word && second.match === first.word) {
        return true;
      }
    }
    return false;
  };

  return () => {
    const isMatch = matchCheck();

    if (isMatch) {
      setIsMatchTrue(inPlayCards);
      return;
    }

    if (inPlayCount > 1) {
      setRevealedFalse(inPlayCards);
    }
  };
};
