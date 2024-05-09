export type Word = string;

export type Pair = {
  word: Word;
  match?: Word;
};

export type Card = Pair & {
  isMatched: boolean;
  isRevealed: boolean;
};
