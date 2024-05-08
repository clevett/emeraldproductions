import { FlashCard } from "./FlashCard/FlashCard";
import ReactCardFlip from "react-card-flip";
import list from "./wordlists/fi-es_color.json";

import styles from "./styles.module.css";
import { useState } from "react";

export const Vocab = () => {
  const words = [...Object.keys(list), ...Object.values(list)];

  //TODO: WORDS ARE SHOWN BUT THIS NEEDS TO BE REVERSE
  const [isFlipped, setIsFlipped] = useState(true);
  //TODO: THIS FLIP ALL CARDS. USEFUL FOR TESTING
  const handleClick = () => setIsFlipped(!isFlipped);

  return (
    <div className={styles.layout}>
      {words.map((word) => (
        <div onClick={handleClick} key={word}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <FlashCard customStyle="bg-gray-700">
              <span>?</span>
            </FlashCard>
            <FlashCard customStyle="bg-gray-700">
              <span>{word}</span>
            </FlashCard>
          </ReactCardFlip>
        </div>
      ))}
    </div>
  );
};
