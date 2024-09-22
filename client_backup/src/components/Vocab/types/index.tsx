import { wordLists } from "../wordlists";

export type Language = keyof typeof wordLists;

export type Category = (typeof wordLists)[Language][number];

export type List = (typeof wordLists)[Language][number]["list"];

export type Word = string;

export type Pair = {
  word: Word;
  match?: Word;
};

export type Card = Pair & {
  isMatched: boolean;
  isRevealed: boolean;
};
