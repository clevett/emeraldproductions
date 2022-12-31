import { useRecoilState } from "recoil";

import { ZoneCard } from "./ZoneCard";
import { moodAtom } from "../recoil";
import { getMood } from "../helpers";
export const Mood = () => {
  const [mood, setArtifact] = useRecoilState(moodAtom);
  return (
    <ZoneCard
      title="Mood"
      content={mood}
      onChange={() => setArtifact(getMood())}
    />
  );
};
