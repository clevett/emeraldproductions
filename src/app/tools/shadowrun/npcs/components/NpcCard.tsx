"use client";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { NPC } from "@/data";

import { BackCard } from "./BackCard";
import { Footer } from "./Footer";
import { FrontCard } from "./FrontCard";

export const NpcCard = ({ npc }: { npc: NPC }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped(!isFlipped);
  return (
    <div className="flex flex-wrap" onClick={handleClick}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontCard npc={npc}>
          <Footer type={npc.type} onClick={handleClick} />
        </FrontCard>
        <BackCard npc={npc}>
          <Footer type={npc.type} onClick={handleClick} />
        </BackCard>
      </ReactCardFlip>
    </div>
  );
};
