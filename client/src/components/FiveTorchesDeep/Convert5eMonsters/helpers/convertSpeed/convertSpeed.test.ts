import convertSpeed from './convertSpeed'

describe("Given convert speed is called", () => {
  const speed = {
    "walk": "40 ft.",
    "climb": "40 ft.",
    "fly": "80 ft."
  }

  const string = "walk 40 ft., climb 40 ft., fly 80 ft."

  it("then returns a string", () => {
    expect(typeof convertSpeed(speed)).toEqual('string')
    expect(convertSpeed(speed)).toEqual(string)
  })
})