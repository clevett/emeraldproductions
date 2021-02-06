import math from "../../data/monsterMath"
import findMonsterMath from "./findMonsterMath"

describe("Given math table has been desclared", () => {
  describe("when findHp is called with the monster's hd", () => {
    it('then returns an object with average hp', () => {
      expect(findMonsterMath(1)).toEqual(math[2])
    })
  })
})
