import { useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";

import d20 from "../imgs/icons/dice-twenty-faces-twenty.svg";
import d6 from "../imgs/icons/perspective-dice-six-faces-six.svg";

type AnimatedDieType = {
  dieSize: "d20" | "d6";
  quantity?: number;
  onRoll: (arg: number) => void;
};

export const AnimatedDie = ({
  dieSize,
  quantity = 1,
  onRoll,
}: AnimatedDieType) => {
  const rollDie = (notation: string) => new DiceRoll(notation).total;
  const size = dieSize || "d6";
  const image = dieSize === "d20" ? d20 : d6;

  const [animation, setAnimation] = useState(false);
  const [roll, setRoll] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    //Begin animation
    setAnimation(true);

    //Roll a die and hold the result
    const diceRoll = rollDie(`${quantity}${size}`);
    setRoll(diceRoll);

    //Reset the previous string to empty
    setResult(null);

    onRoll(diceRoll);
  };

  const animationEnd = () => {
    setAnimation(false);
    setResult(roll);
  };

  const altText = () =>
    result
      ? `Previous result was ${result}. Roll another ${size}.`
      : `Roll a ${size}.`;

  return (
    <div>
      <button
        className={animation ? "rollDie" : ""}
        onClick={handleClick}
        onAnimationEnd={animationEnd}
        type="button"
      >
        <img alt={altText()} src={image}></img>
      </button>
      <span className="text-white">{result}</span>
    </div>
  );
};
