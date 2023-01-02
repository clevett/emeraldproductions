import { EuiFlexItem, EuiButtonIcon } from "@elastic/eui";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "../../Card/Card";
import { NPC } from "./data/npcs";

import styles from "./styles.module.css";

type CardProps = { npc: NPC; children: JSX.Element };

const joinList = (list: string[]) => list.sort().join(", ");

const Footer = ({
  type,
  onClick,
}: {
  type: NPC["type"];
  onClick: () => void;
}) => {
  return (
    <div className={`${styles.footer}`}>
      <span>Type: {type}</span>
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
    <Card>
      <div className={`${styles.header}`}>
        <img src={npc.img} alt={npc.name} />
      </div>
      <div className={`${styles.front} gap-2`}>
        <h4 className="text-2xl font-semibold">{npc.name}</h4>
        <p className={`text-lg italic ${styles.textEllipsis}`}>
          {joinList(npc.tags)}
        </p>
        <p className="text-lg">Connection: {npc.connection}</p>
        <p className="text-lg">Professional Rating: {npc.professional}</p>
        {children}
      </div>
    </Card>
  );
};

const BackCard = ({ npc, children }: CardProps) => {
  return (
    <Card>
      <div className={`grid ${styles.back} gap-2`}>
        <div className={`${styles.description} gap-2`}>
          <h4 className="text-2xl font-semibold">Description</h4>
          <p className={`text-lg italic`}>{joinList(npc.alias)}</p>
          <p className="text-lg">{npc.description}</p>
          <p className={`text-lg`}>Flaws: {joinList(npc.flaws)}</p>
          <p className={`text-lg`}>Virtues: {joinList(npc.virtues)}</p>
          <p className={`text-lg`}>Knowledge: {joinList(npc.knowledge)}</p>
          <p className={`text-lg`}>Language: {joinList(npc.language)}</p>
        </div>
        {children}
      </div>
    </Card>
  );
};

export const NpcCard = ({ npc }: { npc: NPC }) => {
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
