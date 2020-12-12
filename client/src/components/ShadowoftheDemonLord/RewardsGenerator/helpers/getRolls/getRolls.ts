import Roll from 'roll'

interface formula {name:string, roll:string}

interface results {name:string, result:number}

const getRolls = (formulas:any):results => {
  const diceRoll = (dice:string) => new Roll().roll(dice).result
  
  const results = formulas.map(({name, roll}:formula) => {
    return { name, result: diceRoll(roll) }
  })

  return results
}

export default getRolls