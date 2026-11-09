import { useAtomValue, useStore } from "jotai";

import { Card } from "../types";
import { cardAtomFamily } from "../state/atoms";
import { inPlayCardSelector } from "../state/selectors";

export const useCardChecker = () => {
  const inPlayCards = useAtomValue(inPlayCardSelector);
  const inPlayCount = inPlayCards.length;
  const store = useStore();

  const updateCards = (list: Card[], updateProps: Partial<Card>) => {
    list.forEach((card) => store.set(cardAtomFamily(card.word), { ...card, ...updateProps }));
  };

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
