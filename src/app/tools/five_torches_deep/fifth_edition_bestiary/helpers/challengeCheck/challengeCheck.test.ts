import challengeCheck from "./challengeCheck"

describe("Given challenge check is passed a number", () => {
  describe("when hd is less than one", () => {
    it("then returns 1", () => {
      expect(challengeCheck(0.5)).toEqual(1)
    })
  })

  describe("when hd is over one", () => {
    it("then returns the hd", () => {
      expect(challengeCheck(15)).toEqual(15)
    })
  })
})