import { defaultLanguage, defaultCategory } from "../recoil/defaults";
import { getCategoryList } from "./get-category-list";

describe("getCategoryList", () => {
  it("should get the category list correctly", () => {
    // Arrange
    const expectedOutput = defaultCategory.list;

    // Act
    const result = getCategoryList(defaultLanguage, defaultCategory.name);

    // Assert
    expect(result).toEqual(expectedOutput);
  });
});
