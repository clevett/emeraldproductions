import { list } from "../wordlists";

export type Language = keyof typeof list;

export type List = (typeof list)[Language][number]["list"];

export type Word = string;

export type Pair = {
  word: Word;
  match?: Word;
};

export type Card = Pair & {
  isMatched: boolean;
  isRevealed: boolean;
};
