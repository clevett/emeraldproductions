import { EuiFlexItem, EuiButtonIcon } from "@elastic/eui";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { NPC } from "./data/npcs";

import styles from "./styles.module.css";

type CardProps = { npc: NPC; onClick: () => void };

const FrontCard = ({ npc, onClick }: CardProps) => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.header}`}>
        <img src={npc.img} alt={npc.name} />
      </div>
      <div className={`${styles.content} gap-2`}>
        <h4 className="text-2xl font-semibold">{npc.name}</h4>
        <p className={`text-lg italic ${styles.textEllipsis}`}>
          {npc.archtype}, {npc.tags.join(", ")}
        </p>
        <p className="text-lg">Connection: {npc.connection}</p>
        <div className={`${styles.footer}`}>
          <EuiButtonIcon
            aria-label={`flip the card`}
            className="justify-self-end"
            iconType="refresh"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

const BackCard = ({ onClick, npc }: CardProps) => {
  return (
    <div className={`${styles.card} ${styles.back} gap-2`}>
      <h4 className="text-2xl font-semibold">Description</h4>
      <p className={`text-lg italic ${styles.textEllipsis}`}>
        {npc.alias.join(", ")}
      </p>
      <p className="text-lg">{npc.description}</p>
      <div className={`${styles.footer}`}>
        <EuiButtonIcon
          className="justify-self-end"
          onClick={onClick}
          iconType="refresh"
          aria-label={`flip the card`}
        />
      </div>
    </div>
  );
};

export const Card = ({ npc }: { npc: NPC }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped(!isFlipped);
  return (
    <EuiFlexItem grow={false} onClick={handleClick}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontCard npc={npc} onClick={handleClick} />
        <BackCard npc={npc} onClick={handleClick} />
      </ReactCardFlip>
    </EuiFlexItem>
  );
};
