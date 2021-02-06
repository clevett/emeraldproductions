import convertFifthMonsterToFTD from './convertFifthMonsterToFTD'

import data from "../data/monsters"

describe("Given convertFifthMonstersToFTD is called", () => {
  describe("when passed a fifth edition monster object", () => {
    const fifthMonster = data[0]

    const ftdMonster = { 
      "ac": 17,
      "attack": 0,
      "hd": 10,
      "hp": "41 (10d8)",
      "name": "Aboleth",
      "size": "Large",
      "type": "aberration",
      "damage": "3d8+2",
      "modifiers": {
        "normal": 7,
        "strong": 12,
        "weak": 3,
      },
      "speed": "walk 10 ft., swim 40 ft.",
    }

    it("then returns an ftd object", () => {
      expect(convertFifthMonsterToFTD(fifthMonster)).toMatchObject(ftdMonster)
    })
  })
})