import { createStore } from "jotai";
import { Options } from "@/data";
import { resetMissionAtom, selectMission, selectMissionFamily } from "./selectors";

test("mission options can be changed and regenerated", () => {
  const store = createStore();
  const original = store.get(selectMission(Options.JOB))!;
  store.set(selectMission(Options.JOB), { ...original, description: "custom job" });
  expect(store.get(selectMission(Options.JOB))?.description).toBe("custom job");
  store.set(resetMissionAtom);
  expect(store.get(selectMission(Options.JOB))?.description).not.toBe("custom job");
  expect(store.get(selectMissionFamily)).toHaveLength(Object.values(Options).length);
});
