import { capitalize } from "../../helpers";
import { NPC } from "./data/npcs";

export const Attributes = ({
  attributes,
}: {
  attributes: { [k: string]: number };
}) => {
  if (!attributes) {
    return null;
  }
  const keys = Object.keys(attributes);
  const attrs = keys.map((e) => {
    const name = capitalize(e).charAt(0);
    return (
      <div className="grid grid-flow-row auto-cols-max justify-center">
        <div>{name}</div>
        <div>{attributes[e]}</div>
      </div>
    );
  });

  return <div className="grid grid-flow-col gap-2">{attrs}</div>;
};
