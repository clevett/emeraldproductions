import { EuiSelect } from "@elastic/eui";
import { travelChecker, typeChecker } from "../recoil/refine";
import { Pace, Threat, Weather } from "../TravelTool";
import { SmallTitle } from "./SmallTitle";

export const TravelSelect = ({
  list,
  onChange,
  title,
  value,
}: {
  list: (Pace | Weather | Threat)[];
  onChange: (item: Pace | Weather | Threat) => void;
  title: string;
  value: string;
}) => {
  return (
    <>
      <SmallTitle name={title} />
      <EuiSelect
        className="capitalize text-center"
        onChange={(event) => {
          const result = typeChecker(travelChecker(event.target.value));
          if (result) {
            const item = list.find((e) => e.name === result);
            if (item) {
              onChange(item);
            }
          }
        }}
        options={list.map(({ name }) => ({ name, text: name }))}
        value={value}
      />
    </>
  );
};
