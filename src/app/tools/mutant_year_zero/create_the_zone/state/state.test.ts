import { createStore } from "jotai";
import { getSector } from "../helpers";
import { selectSectorById, selectSectorFamily } from "./selectors";

test("sectors can be added, updated, and removed", () => {
  const store = createStore();
  const sector = getSector("sector-1", 3);
  store.set(selectSectorById(sector.id), sector);
  expect(store.get(selectSectorFamily)).toEqual([sector]);
  const updated = { ...sector, mood: "new mood" };
  store.set(selectSectorById(sector.id), updated);
  expect(store.get(selectSectorFamily)).toEqual([updated]);
  store.set(selectSectorById(sector.id), undefined);
  expect(store.get(selectSectorFamily)).toEqual([]);
});
