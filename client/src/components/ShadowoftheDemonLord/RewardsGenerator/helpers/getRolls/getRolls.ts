import Roll from 'roll'

interface rolls {bit: null|string, cp: null|string, ss: null|string, gc:null|string} 

const getRolls = (formulas:rolls) => {
  const diceRoll = (dice:string) => new Roll().roll(dice).result
  let results: any[] = []

  for (const [key, value] of Object.entries(formulas) ) {
    const roll = diceRoll(value)
    results = [...results, {name: key, result: roll}]
  }

  return results
}

export default getRolls