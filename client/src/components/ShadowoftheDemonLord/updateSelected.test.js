import { findIndex, addBeast } from './updateSelected'

const selected = [
  {_id: "5ec9a317237d2545b364461e", name: "Apparition", difficulty: 1, descriptor: "spirit", source: "Caecras", total: 5},
  {_id: "5ec9a317237d2545b3644622", name: "Looter", difficulty: 1, descriptor: "human", source: "Caecras"},
  {_id: "5ec9a317237d2545b3644649", name: "Tiny Animal", difficulty: 1, descriptor: "animal", source: "Shadow of the Demon Lord"}
]

const existingBeast = {_id: "5ec9a317237d2545b3644622", name: "Looter", difficulty: 1, descriptor: "human", source: "Caecras"}
const newBeast = {_id: "5ec9a317237d2545b3644646", name: "Yerathi Drone", difficulty: 1, descriptor: "yerath", source: "City of Decay"}

describe('findIndex function locates an object in an array', () => {
  test('Return the index of an object in an array', () => expect( findIndex(selected, selected[1]) ).toEqual(1) )
  test('Return -1 if the object does not exist', () => expect( findIndex(selected, newBeast) ).toEqual(-1) )
  test('Return false if first parameter is not an array', () => expect( findIndex( {}, existingBeast) ).toBeFalsy() )
})

describe('addBeast function will update the encounter builder', () => {
  test('When index >= 0 add the beast to the current total', () => {
    const actual = addBeast(selected, selected[0])
    expect(actual[0].total).toEqual(6)
  })

  test('Add the beast object to the array if it is not there', ()  => {
    const actual = addBeast(selected, newBeast)
    expect(actual).toContain(newBeast)
  })

  test('Newly added beast should have total of 1', ()  => {
    const actual = addBeast(selected, newBeast)
    expect(actual[3].total).toBeTruthy()
  })
})