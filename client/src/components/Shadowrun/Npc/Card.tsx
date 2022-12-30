import { EuiFlexItem, EuiButtonIcon, EuiToolTip } from "@elastic/eui";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { NPC } from "./data/npcs";

import styles from "./styles.module.css";

type CardProps = { npc: NPC; children: JSX.Element };

const Footer = ({
  type,
  onClick,
}: {
  type: NPC["type"];
  onClick: () => void;
}) => {
  return (
    <div className={`${styles.footer}`}>
      <EuiToolTip position="top" content="Here is some tooltip text">
        <span>Type: {type}</span>
      </EuiToolTip>
      <EuiButtonIcon
        className="justify-self-end"
        onClick={onClick}
        iconType="refresh"
        aria-label={`flip the card`}
      />
    </div>
  );
};

const FrontCard = ({ npc, children }: CardProps) => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.header}`}>
        <img src={npc.img} alt={npc.name} />
      </div>
      <div className={`${styles.front} gap-2`}>
        <h4 className="text-2xl font-semibold">{npc.name}</h4>
        <p className={`text-lg italic ${styles.textEllipsis}`}>
          {npc.archtype}, {npc.tags.sort().join(", ")}
        </p>
        <p className="text-lg">Connection: {npc.connection}</p>
        <p className="text-lg">Professional Rating: {npc.professional}</p>
        {children}
      </div>
    </div>
  );
};

const BackCard = ({ npc, children }: CardProps) => {
  return (
    <div className={`${styles.card} ${styles.back} gap-2`}>
      <div className={`${styles.description} gap-2`}>
        <h4 className="text-2xl font-semibold">Description</h4>
        <p className={`text-lg italic ${styles.textEllipsis}`}>
          {npc.alias.join(", ")}
        </p>
        <p className="text-lg">{npc.description}</p>
      </div>
      {children}
    </div>
  );
};

export const Card = ({ npc }: { npc: NPC }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped(!isFlipped);
  return (
    <EuiFlexItem grow={false} onClick={handleClick}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontCard npc={npc}>
          <Footer type={npc.type} onClick={handleClick} />
        </FrontCard>
        <BackCard npc={npc}>
          <Footer type={npc.type} onClick={handleClick} />
        </BackCard>
      </ReactCardFlip>
    </EuiFlexItem>
  );
};
