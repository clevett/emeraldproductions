import { EuiSelect, EuiSpacer } from "@elastic/eui";
import { Pace, Threat, Weather } from "../TravelTool";
import { SmallTitle } from "./SmallTitle";

type Option = Pace | Weather | Threat;

export const TravelSelect = <T extends Option>({
  list,
  onChange,
  title,
  value,
}: {
  list: T[];
  onChange: (item: T) => void;
  title: string;
  value: string;
}) => {
  return (
    <>
      <SmallTitle name={title} />
      <EuiSpacer size="s" />
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
