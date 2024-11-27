export const filterString = <T>(id: T, ids: T[]) => {
  const filterIds = ids.filter((e) => e !== id);
  return filterIds ?? [];
};
