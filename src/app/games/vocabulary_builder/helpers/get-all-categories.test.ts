import { getAllCategories } from "./get-all-categories";
import { defaultLanguage } from "../recoil/defaults";
import { wordLists } from "../wordlists";

describe("getAllCategories", () => {
  it("should return all categories for a given language", () => {
    const language = wordLists[defaultLanguage];
    const result = getAllCategories(defaultLanguage);

    language
      .map((e) => e.name)
      .forEach((word) => {
        expect(result).toContainEqual(word);
      });
  });
});
