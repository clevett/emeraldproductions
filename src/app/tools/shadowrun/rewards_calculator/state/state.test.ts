import { createStore } from "jotai";
import { Situations } from "@/data";
import { germanFlagAtom, survivedAtom } from "./atoms";
import { selectKarma, selectNuyenModifier, selectNuyenModifiers } from "./selectors";

test("exclusive situational modifiers and karma totals update", () => {
  const store = createStore();
  const baseKarma = store.get(selectKarma);
  store.set(selectNuyenModifier(Situations.THREE_TO_ONE), true);
  store.set(selectNuyenModifier(Situations.TWO_TO_ONE), true);
  expect(store.get(selectNuyenModifier(Situations.THREE_TO_ONE))).toBe(false);
  expect(store.get(selectNuyenModifiers)).toHaveLength(1);
  store.set(germanFlagAtom, true);
  expect(store.get(selectKarma)).toBe(baseKarma + 1);
  store.set(survivedAtom, false);
  expect(store.get(selectKarma)).toBe(baseKarma - 1);
});
