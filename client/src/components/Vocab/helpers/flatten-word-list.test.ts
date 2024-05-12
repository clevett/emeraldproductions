import { defaultLanguage } from "../recoil/defaults";
import { wordLists } from "../wordlists";
import { flattenWordList } from "./flatten-word-list";

describe("flattenWordList", () => {
  it("should flatten the word list correctly", () => {
    // Arrange
    const input = wordLists[defaultLanguage][0].list;

    // Act
    const result = flattenWordList(input);

    // Assert
    [...Object.keys(input), ...Object.values(input)].flat().forEach((word) => {
      expect(result).toContainEqual(word);
    });
  });
});
