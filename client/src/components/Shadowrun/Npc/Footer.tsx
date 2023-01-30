import { EuiButtonIcon } from "@elastic/eui";
import { ToolTip } from "../../ToolTip/ToolTip";
import { Descriptions, NPC, Type } from "./data/npcs";
import styles from "./styles.module.css";

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
    <div className={`${styles.footer}`}>
      <ToolTip content={getToolTip(type)}>
        <span>
          Type: <u>{type}</u>
        </span>
      </ToolTip>
      <EuiButtonIcon
        aria-label={`flip the card`}
        className={`justify-self-end`}
        iconType="arrowRight"
        onClick={onClick}
      />
    </div>
  );
};
