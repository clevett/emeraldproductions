import Roll from "roll"
import qualities from "../data/qualities"

const getCurrency = ( quality ) => {
  const qualityObject = qualities.find(element => element.name === quality)
  const currency = qualityObject && new Roll().roll(`${qualityObject?.currency}`).result

  return currency
}

export default getCurrency