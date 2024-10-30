import { getRandomArrayElement } from "@/app/tools/utils";
import {
  Environments,
  sectorEnvironments,
} from "../../../../data/myz_environments";
import { getArtifactCount, getArtifacts } from "./getArtifacts";
import { getD66 } from "./getD66";
import { getMood } from "./getMood";
import { getRot } from "./getRot";
import { getRuin } from "./getRuin";
import { getSectorRoll } from "./getSectorRoll";
import { getThreat, getThreatCount } from "./getThreat";

export const getSector = (id: string, threat: number) => {
  const result = getD66();
  const findSector = sectorEnvironments.find((e) => e.result.includes(result));
  const sector = findSector
    ? findSector
    : getRandomArrayElement(sectorEnvironments);

  const isSettlement = sector.environment === Environments.SETTLEMENT;

  const ruin = isSettlement
    ? "-"
    : sector.ruin
    ? "This sector has no ruins."
    : getRuin(sector.environment);

  const rolls = getSectorRoll(`${threat}d6`);
  const threatCount = getThreatCount(rolls);
  const hasThreats = sector.threat && threatCount;
  const opposition = isSettlement
    ? "-"
    : hasThreats
    ? getThreat()
    : "This sector has no threats.";

  const artifactCount = getArtifactCount(rolls);
  const hasArtifacts = sector.artifact && artifactCount;
  const artifacts = isSettlement
    ? "-"
    : hasArtifacts
    ? getArtifacts(artifactCount).join(", ")
    : "This sector has no artifacts.";

  return {
    id,
    rot: getRot(),
    sector,
    mood: getMood(),
    threat: {
      name: opposition,
      count: threatCount,
    },
    artifact: {
      name: artifacts,
      count: hasArtifacts ? artifactCount : 0,
    },
    ruin,
  };
};
