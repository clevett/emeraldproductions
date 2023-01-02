import { getRandomArrayElement } from "../../../helpers";
import { Environments, sectorEnvironments } from "../data/createTheZone";
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
  const opposition = isSettlement
    ? "-"
    : sector.threat && threatCount
    ? getThreat()
    : "This sector has no threats.";

  const artifactCount = getArtifactCount(rolls);
  const artifacts = isSettlement
    ? "-"
    : sector.artifact && artifactCount
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
      count: artifactCount,
    },
    ruin,
  };
};
