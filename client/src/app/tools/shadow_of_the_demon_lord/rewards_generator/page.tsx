import { Subtitle } from "@/components";
import { systems } from "@/resources";
import { RewardsGenerator as Rewards } from "./components/RewardsGenerator";

export default function RewardsGenerator() {
  const { label } = systems.sotdl.tools.sotdlRewardsGenerator;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <Rewards />
    </>
  );
}
