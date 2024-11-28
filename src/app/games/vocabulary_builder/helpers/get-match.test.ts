import { defaultLanguage } from "../recoil/defaults";
import { wordLists } from "../wordlists";
import { getMatch } from "./get-match";

describe("getMatch", () => {
  it("should get the match correctly", () => {
    // Arrange
    const list = wordLists[defaultLanguage][0].list;
    const word = Object.keys(list)[0] as keyof typeof list;
    const expectedOutput = list[word];

    // Act
    const result = getMatch(word, list);

    // Assert
    expect(result).toEqual(expectedOutput);
  });
});
