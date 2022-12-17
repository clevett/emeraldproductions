export const replaceSavingThrows = (desc: string): string => {
  return desc.includes("saving throw")
    ? desc.replace(/saving throw/g, "check")
    : desc;
};

export const replaceBonusAction = (desc: string): string => {
  return desc.includes("bonus")
    ? desc.replace(/bonus action/g, "quick action")
    : desc;
};

export const convertDesc = (desc: string): string => {
  desc = replaceSavingThrows(desc);
  desc = replaceBonusAction(desc);

  return desc;
};
