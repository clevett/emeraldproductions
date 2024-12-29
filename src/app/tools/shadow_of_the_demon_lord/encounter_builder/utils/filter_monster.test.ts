import { filterMonsters } from "./filter_monster";
import { Monster, Filters } from "../types";

const mockMonsters: Monster[] = [
  {
    _id: "1",
    name: "Monster1",
    descriptor: "undead",
    difficulty: 1,
    source: "book1",
  },
  {
    _id: "2",
    name: "Monster2",
    descriptor: "demon",
    difficulty: 2,
    source: "book2",
  },
  {
    _id: "3",
    name: "Monster3",
    descriptor: "undead",
    difficulty: 3,
    source: "book3",
  },
];

describe("filterMonsters", () => {
  // ...existing code...

  it("GIVEN the descriptor filter is defined THEN only include descriptors that equal filter", () => {
    const filters: Filters = {
      descriptor: "undead",
      difficulty: undefined,
      source: undefined,
    };

    const result = filterMonsters(mockMonsters, filters);

    expect(result).toEqual([mockMonsters[0], mockMonsters[2]]);
  });

  it("GIVEN the difficulty filter is defined THEN only include difficulties that equal filter", () => {
    const filters: Filters = {
      descriptor: undefined,
      difficulty: mockMonsters[1].difficulty,
      source: undefined,
    };

    const result = filterMonsters(mockMonsters, filters);
    expect(result).toEqual([mockMonsters[1]]);
  });

  it("GIVEN the source filter is defined THEN only include source that equal filter", () => {
    const filters: Filters = {
      descriptor: undefined,
      difficulty: undefined,
      source: mockMonsters[0].source,
    };

    const result = filterMonsters(mockMonsters, filters);
    expect(result).toEqual([mockMonsters[0]]);
  });

  it("GIVEN all filters are defined THEN only include monsters that match all filters", () => {
    const filters: Filters = {
      descriptor: mockMonsters[0].descriptor,
      difficulty: mockMonsters[0].difficulty,
      source: mockMonsters[0].source,
    };

    const result = filterMonsters(mockMonsters, filters);
    expect(result).toEqual([mockMonsters[0]]);
  });
});
