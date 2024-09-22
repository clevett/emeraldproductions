import displayModifier from './displayModifier'

describe("Given display modifier is passed a number", () => {
  describe("when passed a number over 0", () => {
    it("then returns a string with a +", () => {
      expect(displayModifier(2)).toEqual('+2')
    })
  })

  describe("when passed a 0 or less", () => {
    it("then returns a string with the number", () => {
      expect(displayModifier(-2)).toEqual('-2')
    })
  })
})