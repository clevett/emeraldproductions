import convertFifthToFTD from './convertFifthToFTD'

describe("Given convertFifthToFTD is called", () => {
  describe("when passed an array of monsters", () => {
    it("then returns an array", () => {
      expect(Array.isArray(convertFifthToFTD([]))).toBe(true)
    })
  })
})