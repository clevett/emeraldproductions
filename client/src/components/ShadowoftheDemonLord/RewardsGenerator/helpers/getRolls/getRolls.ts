import Roll from 'roll'

interface coinRoll {name:string, roll:string}

interface results {name:string, result:number}

const getRolls = (formulas:any):results => {
  const diceRoll = (dice:string) => new Roll().roll(dice).result
  const results = formulas.map(({name, roll}:coinRoll) => ({ name, result: diceRoll(roll) }) )
  return results
}

export default getRolls