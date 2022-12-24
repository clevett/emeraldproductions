import { EuiTitle } from "@elastic/eui";
import { getDanger } from "../helpers/getDangerRange";
import { color } from "./Difficulties";
import { Level } from "./LevelSelect";

export const EncounterTitle = ({
  total,
  level,
}: {
  total: number;
  level: Level;
}) => {
  const range = getDanger(total, level);
  const rangeColor = range ? `text-${color(range)}-600` : "";

  return (
    <EuiTitle className={`col-start-2 text-center`} size="s">
      <h4 className="inline">
        Encounter Difficulty
        <div className={`inline text-2xl ml-2 ${rangeColor}`}>( {total} )</div>
      </h4>
    </EuiTitle>
  );
};
