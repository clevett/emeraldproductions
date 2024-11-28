"use client";
import { useRecoilState } from "recoil";
import ReactCardFlip from "react-card-flip";

import { Card } from "./Card";
import { cardSelector } from "../recoil/selectors";
import { Word } from "../types";

export const FlashCard = ({
  word,
  cardChecker,
}: {
  word: Word;
  cardChecker: () => void;
}) => {
  const [card, setCard] = useRecoilState(cardSelector(word));
  const { isMatched, isRevealed } = card;

  const onFlip = () => {
    setCard((card) => ({ ...card, isRevealed: !isRevealed }));
    cardChecker();
  };

  return (
    <div onClick={onFlip}>
      <ReactCardFlip
        isFlipped={isRevealed || isMatched}
        flipDirection="horizontal"
        flipSpeedFrontToBack={0.3}
      >
        <Card>
          <span>?</span>
        </Card>
        <Card isActive={isMatched}>
          <span>{word}</span>
        </Card>
      </ReactCardFlip>
    </div>
  );
};
