export const randomArrayElement = <T>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];
