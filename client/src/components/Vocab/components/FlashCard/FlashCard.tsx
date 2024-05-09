import { Card } from "./Card";
import { cardSelector } from "../../recoil";
import { useRecoilState } from "recoil";
import { Word } from "../../types";
import ReactCardFlip from "react-card-flip";
export const FlashCard = ({
  word,
  cardChecker,
}: {
  word: Word;
  cardChecker: () => void;
}) => {
  const [card, setCard] = useRecoilState(cardSelector(word));
  const { isMatched, isRevealed } = card;

  if (card.word === "azul") console.log(card);

  const onFlip = () => {
    cardChecker();
    setCard((card) => ({ ...card, isRevealed: !isRevealed }));
  };

  return (
    <div onClick={onFlip}>
      <ReactCardFlip
        isFlipped={isRevealed}
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
