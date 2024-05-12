import { defaultLanguage } from "../recoil/defaults";
import { getRandomCategory } from "./get-random-category";

describe("getRandomCategory", () => {
  it("should get a random category correctly", () => {
    // Arrange
    // No arrange needed for this test

    // Act
    const result = getRandomCategory(defaultLanguage);

    // Assert
    // As the output is random, we can only check if the result is defined
    expect(result).toBeDefined();
  });
});
