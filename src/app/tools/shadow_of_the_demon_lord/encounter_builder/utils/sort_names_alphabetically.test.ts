import { sortNamesAlphabetically } from "./sort_names_alphabetically";

describe("sortNamesAlphabetically", () => {
  it("should sort an array of monsters by name in alphabetical order", () => {
    const monsters = [
      { name: "Zombie" },
      { name: "Goblin" },
      { name: "Dragon" },
      { name: "Orc" },
    ];

    const sortedMonsters = sortNamesAlphabetically(monsters);

    expect(sortedMonsters).toEqual([
      { name: "Dragon" },
      { name: "Goblin" },
      { name: "Orc" },
      { name: "Zombie" },
    ]);
  });

  it("should handle an empty array", () => {
    const sortedMonsters = sortNamesAlphabetically([]);
    expect(sortedMonsters).toEqual([]);
  });

  it("should handle an array with one element", () => {
    const monsters = [{ name: "Goblin" }];

    const sortedMonsters = sortNamesAlphabetically(monsters);

    expect(sortedMonsters).toEqual([{ name: "Goblin" }]);
  });

  it("should handle an array with duplicate names", () => {
    const monsters = [
      { name: "Goblin" },
      { name: "Goblin" },
      { name: "Dragon" },
    ];

    const sortedMonsters = sortNamesAlphabetically(monsters);

    expect(sortedMonsters).toEqual([
      { name: "Dragon" },
      { name: "Goblin" },
      { name: "Goblin" },
    ]);
  });
});
