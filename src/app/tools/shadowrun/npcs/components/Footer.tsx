import { Descriptions, NPC, Type } from "@/data";
import { ChevronRightIcon, IconButton } from "@/components";

export const getToolTip = (type: NPC["type"]) => {
  switch (type) {
    case Type.FAVORS:
      return Descriptions.FAVORS;
    case Type.LEGWORK:
      return Descriptions.LEGWORK;
    case Type.NETWORKING:
      return Descriptions.NETWORKING;
    case Type.SERVICES:
      return Descriptions.SERVICES;
    case Type.SUPPORT:
      return Descriptions.SUPPORT;
    case Type.SWAG:
      return Descriptions.SWAG;
    default:
      return "";
  }
};

export const Footer = ({
  type,
  onClick,
}: {
  type: NPC["type"];
  onClick: () => void;
}) => {
  return (
    <div className="grid gap-4 grid-flow-col">
      <span>
        Type: <u>{type}</u>
      </span>
      <IconButton
        aria-label={`flip the card`}
        onClick={onClick}
        className="justify-self-end"
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
};
