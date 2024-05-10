import { Card } from "../Card/Card";
import { cardSelector } from "../../recoil/selectors";
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

  const onFlip = () => {
    setCard((card) => ({ ...card, isRevealed: !isRevealed }));
    cardChecker();
  };

  console.log(card);

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
