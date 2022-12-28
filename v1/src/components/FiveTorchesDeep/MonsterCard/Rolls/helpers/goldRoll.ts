
import Roll from 'roll'

const goldRoll = (hd:number) => {
  if (hd < 1) {
     const roll = new Roll().roll(`1d20`).result
     return hd * roll
  } else {
    return new Roll().roll(`${hd}d20`).result
  }
}

export default goldRoll