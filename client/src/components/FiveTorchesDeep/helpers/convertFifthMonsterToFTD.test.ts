import convertFifthMonsterToFTD from './convertFifthMonsterToFTD'

describe("Given convertFifthMonstersToFTD is called", () => {
  describe("when passed a fifth edition monster object", () => {
    const fifthMonster = { name: "Goblin", size: "Small",  type: "goblin", challenge_rating: 1}
    const ftdMonster = { name: "Goblin", size: "Small",  type: "goblin", hd: 1}

    it("then returns an ftd object", () => {
      expect(convertFifthMonsterToFTD(fifthMonster)).toEqual(ftdMonster)
    })
  })
})