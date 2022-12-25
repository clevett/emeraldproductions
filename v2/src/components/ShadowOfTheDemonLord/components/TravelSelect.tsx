import { EuiSelect } from "@elastic/eui";
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
          const item = list.find((e) => e.name === event.target.value);
          if (item) {
            onChange(item);
          }
        }}
        options={list.map(({ name }) => ({ name, text: name }))}
        value={value}
      />
    </>
  );
};
