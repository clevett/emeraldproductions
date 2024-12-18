export const sortNamesAlphabetically = <T extends { name: string }>(
  array: T[]
) => array.sort((a, b) => a.name.localeCompare(b.name));
