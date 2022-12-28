import React, { useState } from "react";
import Roll from "roll";
import { Button } from "react-bootstrap";

import d20 from "../../imgs/icons/dice-twenty-faces-twenty.svg";
import d6 from "../../imgs/icons/perspective-dice-six-faces-six.svg";

import "./AnimatedDie.scss";

const AnimatedDie = ({ dieSize, dieQuanity, dieRoll }) => {
  const size = dieSize || "d6";
  const quanity = dieQuanity || 1;
  const image = dieSize === "d20" ? d20 : d6;

  const [animation, setAnimation] = useState(false);
  const [roll, setRoll] = useState(null);
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    event.preventDefault();

    //Begin animation
    setAnimation(true);

    //Roll a die and hold the result
    const diceRoll = new Roll().roll(`${quanity}${size}`).result;
    setRoll(diceRoll);

    //Reset the previous string to empty
    setResult("");

    dieRoll(diceRoll);
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
    <div className="d-inline die-row">
      <Button
        className={animation ? "rollDie" : ""}
        onClick={handleClick}
        onAnimationEnd={animationEnd}
        type="button"
        variant="link"
      >
        <img alt={altText()} src={image}></img>
      </Button>
      <span className="text-white">{result}</span>
    </div>
  );
};

export default AnimatedDie;
