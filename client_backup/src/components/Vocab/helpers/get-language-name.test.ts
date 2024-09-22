import { getLanguageName } from "./get-language-name";

describe("getLanguageName", () => {
  it("should get the language name correctly", () => {
    // Arrange
    const input = "en";
    const expectedOutput = "English";

    // Act
    const result = getLanguageName(input);

    // Assert
    expect(result).toEqual(expectedOutput);
  });
});
