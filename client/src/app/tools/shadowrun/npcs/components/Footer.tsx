import { Descriptions, NPC, Type } from "@/data";
import { ChevronRightIcon, IconButton } from "@/components";

import styles from "./Footer.module.css";

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
        label="flip card"
        onClick={onClick}
        styles="justify-self-end"
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
};
