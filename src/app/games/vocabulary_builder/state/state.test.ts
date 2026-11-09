import { createStore } from "jotai";
import { cardAtomFamily } from "./atoms";
import { activeCardSelector, categorySelector, wordListSelector } from "./selectors";
import { wordLists } from "../wordlists";

test("category changes reset active cards and a shuffled word list", () => {
  const store = createStore();
  const firstWord = store.get(wordListSelector)![0];
  store.set(wordListSelector, [...store.get(wordListSelector)!].reverse());
  store.set(cardAtomFamily(firstWord), { ...store.get(cardAtomFamily(firstWord)), isRevealed: true });
  expect(store.get(activeCardSelector)).toHaveLength(1);

  const category = wordLists["fi-es"].find((item) => item.name !== store.get(categorySelector).name)!;
  store.set(categorySelector, category);

  expect(store.get(wordListSelector)).toEqual(expect.arrayContaining(Object.keys(category.list)));
  expect(store.get(wordListSelector)).toHaveLength(Object.keys(category.list).length + Object.values(category.list).flat().length);
  expect(store.get(cardAtomFamily(firstWord)).isRevealed).toBe(false);
  expect(store.get(activeCardSelector)).toHaveLength(0);
});

test("stores keep game state isolated", () => {
  const first = createStore();
  const second = createStore();
  first.set(wordListSelector, ["first"]);
  expect(second.get(wordListSelector)).not.toEqual(["first"]);
});
