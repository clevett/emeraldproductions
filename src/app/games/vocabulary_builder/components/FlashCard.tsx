"use client";
import { useAtom } from "jotai";
import { FlipCard } from "@/components/FlipCard";

import { Card } from "./Card";
import { cardSelector } from "../state/selectors";
import { Word } from "../types";

export const FlashCard = ({
  word,
  cardChecker,
}: {
  word: Word;
  cardChecker: () => void;
}) => {
  const [card, setCard] = useAtom(cardSelector(word));
  const { isMatched, isRevealed } = card;

  const onFlip = () => {
    setCard((card) => ({ ...card, isRevealed: !isRevealed }));
    cardChecker();
  };

  return (
    <div onClick={onFlip}>
      <FlipCard
        isFlipped={isRevealed || isMatched}
        frontToBackDuration={0.3}
      >
        <Card>
          <span>?</span>
        </Card>
        <Card isActive={isMatched}>
          <span>{word}</span>
        </Card>
      </FlipCard>
    </div>
  );
};
