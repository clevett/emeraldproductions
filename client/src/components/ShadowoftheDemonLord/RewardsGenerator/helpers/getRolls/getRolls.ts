import Roll from 'roll'

interface rolls {name:string, roll:string}[]
interface formula {name:string, roll:string}
interface results {name:string, result:number}[]

const getRolls = (formulas:rolls):results => {
  const diceRoll = (dice:string) => new Roll().roll(dice).result

  return formulas.map(({name, roll}:formula):results => ({ name, result: diceRoll(roll) }) )
}

export default getRolls