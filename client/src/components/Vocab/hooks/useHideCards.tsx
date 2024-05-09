import { useRecoilCallback, useRecoilValue } from "recoil";
import { cardAtomFamily, inPlayCardSelector } from "../recoil";
import { Card } from "../types";

export const useHideCards = () => {
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

  const resetCard = (list: Card[]) => updateCards(list, { isRevealed: false });
  const matchCard = (list: Card[]) => updateCards(list, { isMatched: true });

  const matchCheck = () => {
    if (inPlayCount === 2) {
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
      matchCard(inPlayCards);
      return;
    }

    if (inPlayCount === 2) {
      resetCard(inPlayCards);
    }
  };
};
