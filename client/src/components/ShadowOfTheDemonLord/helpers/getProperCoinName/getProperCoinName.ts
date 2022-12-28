export const getProperCoinName = (coinShortName: string): string => {
  switch (coinShortName) {
    case "bit":
      return "bit";
    case "copper":
      return "copper piece";
    case "silver":
      return "silver shilling";
    case "gold":
      return "gold crown";
    default:
      return "";
  }
};
