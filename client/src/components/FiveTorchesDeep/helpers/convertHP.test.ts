import convertHp from "./convertHP"

import { challengeCheck, rollD8s } from './convertHP'

import math from '../data/monsterMath'

describe("Given convert HP is called", () => {
  it("then returns a string", () => {
    const hp = convertHp(1, math[2])
    expect(typeof hp).toEqual('string')
    expect(hp).toEqual('5 (1d8)')
  })
})

describe("Given roll has been imported", () => {
  describe("when passed a number of d8s to roll", () => {
    it("then returns the total of rolled d8s", () => {
      expect(typeof rollD8s(3)).toEqual("number")
    })
  })
})

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