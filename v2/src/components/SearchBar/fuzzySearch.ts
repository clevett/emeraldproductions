import Fuse from "fuse.js";

export const fuzzySearch = (list: unknown[], term: string, keys: string[]) => {
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
  const filter = results.map((result: { item: any }) => result.item);

  return filter;
};
