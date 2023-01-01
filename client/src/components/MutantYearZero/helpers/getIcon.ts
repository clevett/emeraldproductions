import { Card } from "../data/createTheZone";

export const getIcon = (title: `${Card}`) => {
  switch (title) {
    case Card.ARTIFACT:
      return "wrench";
    case Card.ENVIRONMENT:
      return "image";
    case Card.MOOD:
      return "cloudDrizzle";
    case Card.ROT:
      return "alert";
    case Card.RUIN:
      return "home";
    case Card.THREAT:
      return "bug";
    default:
      return "cross";
  }
};
