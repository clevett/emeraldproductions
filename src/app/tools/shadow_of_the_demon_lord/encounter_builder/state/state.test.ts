import { createEncounterStore } from "../components/EncounterState";
import { dataSelector, difficultyTotalSelector, searchNPCsSelector, selectedNPCsSelector } from "./selectors";
import { Monster } from "../types";

test("encounters initialize and keep selection and search independent", () => {
  const monsters: Monster[] = [
    { _id: "1", name: "Guard", descriptor: "human", difficulty: 10, source: "core" },
    { _id: "2", name: "Wolf", descriptor: "animal", difficulty: 5, source: "core" },
  ];
  const store = createEncounterStore(monsters);
  expect(store.get(dataSelector)).toEqual(monsters);
  expect(store.get(searchNPCsSelector)).toEqual([monsters[0]]);
  store.set(selectedNPCsSelector, [monsters[0], monsters[1]]);
  expect(store.get(difficultyTotalSelector)).toBe(15);
  store.set(searchNPCsSelector, [monsters[1]]);
  expect(store.get(selectedNPCsSelector)).toEqual(monsters);
  expect(createEncounterStore(monsters).get(selectedNPCsSelector)).toEqual([]);
});
