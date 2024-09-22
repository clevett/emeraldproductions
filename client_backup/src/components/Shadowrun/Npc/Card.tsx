import { EuiFlexItem } from "@elastic/eui";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { BackCard } from "./BackCard";
import { NPC } from "./data/npcs";
import { Footer } from "./Footer";
import { FrontCard } from "./FrontCard";

export type CardProps = { npc: NPC; children: JSX.Element };

export const joinList = (list: string[]) => list.sort().join(", ");

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
