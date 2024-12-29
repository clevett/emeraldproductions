const less = " or less";
const more = " or more";
const dash = "-";

const getMoreLess = (s: string, key: typeof less | typeof more) =>
  s.split(key)[0];
const getDash = (string: string) => string.split(dash);

export const getMinMax = (range: string) => {
  const hasLess = range.includes(less);
  const hasDash = range.includes(dash);
  const hasMore = range.includes(more);

  if (hasLess) {
    return {
      min: 0,
      max: parseInt(getMoreLess(range, less)),
    };
  }

  if (hasDash) {
    return {
      min: parseInt(getDash(range)[0]),
      max: parseInt(getDash(range)[1]),
    };
  }

  if (hasMore) {
    return {
      min: parseInt(getMoreLess(range, more)),
      max: null,
    };
  }
};
