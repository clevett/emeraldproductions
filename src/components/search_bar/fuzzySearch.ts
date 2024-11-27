import Fuse from "fuse.js";

export const fuzzySearch = <T>(list: T[], term: string, keys: string[]) => {
  const options = {
    isCaseSensitive: false,
    shouldSort: true,
    threshold: 0.3,
    includeMatches: true,
    minMatchCharLength: 3,
    keys,
  };

  const fuse = new Fuse(list, options);
  const results = fuse.search(term);
  return results.map((result: { item: T }) => result.item);
};
