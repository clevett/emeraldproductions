"use client";
import { useState } from "react";
import { FlipCard } from "@/components/FlipCard";
import { NPC } from "@/data";

import { BackCard } from "./BackCard";
import { Footer } from "./Footer";
import { FrontCard } from "./FrontCard";

export const NpcCard = ({ npc }: { npc: NPC }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped(!isFlipped);
  return (
    <div className="flex flex-wrap" onClick={handleClick}>
      <FlipCard isFlipped={isFlipped}>
        <FrontCard npc={npc}>
          <Footer type={npc.type} onClick={handleClick} />
        </FrontCard>
        <BackCard npc={npc}>
          <Footer type={npc.type} onClick={handleClick} />
        </BackCard>
      </FlipCard>
    </div>
  );
};
