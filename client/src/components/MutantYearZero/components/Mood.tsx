import { useRecoilState } from "recoil";

import { ZoneCard } from "./ZoneCard";
import { moodAtom } from "../recoil";
import { getMood } from "../helpers";
import { Card } from "../data/createTheZone";
export const Mood = () => {
  const [mood, setArtifact] = useRecoilState(moodAtom);
  return (
    <ZoneCard
      title={Card.MOOD}
      content={mood}
      onChange={() => setArtifact(getMood())}
    />
  );
};
