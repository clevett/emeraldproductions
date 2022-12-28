export const getRandomArrayElement = <T>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];
