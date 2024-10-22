import { Heading, Select } from "@/app/components";
import { Pace, Threat, Weather } from "../types";
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
      <Heading as="h3" className="text-center">
        {title}
      </Heading>
      <Select
        title={title}
        onChange={(name: string) => {
          const item = list.find((e) => e.name === name);
          if (item) {
            onChange(item);
          }
        }}
        list={list.map(({ name }) => name)}
        defaultValue={value}
        className="text-center capitalize"
      />
    </>
  );
};
