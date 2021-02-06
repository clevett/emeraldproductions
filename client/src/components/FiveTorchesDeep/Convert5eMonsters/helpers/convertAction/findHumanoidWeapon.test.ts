import findHumanoidWeapons from "./findHumanoidWeapons"

describe("Give findHumanoidWeapon has a list of equipemnt", () => {
  it("then returns an array", () => {
    expect(Array.isArray(findHumanoidWeapons())).toEqual(true)
  })
})