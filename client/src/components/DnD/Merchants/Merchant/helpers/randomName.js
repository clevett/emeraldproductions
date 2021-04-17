import randomElement from "./randomElement"

import { names } from "../../data/names"

const determineSex = () => randomElement(["Male", "Female"])

const humanName = (cultures, sex) => {
  const culture = randomElement( Object.keys(cultures) )
  const cultureObect = cultures[culture]
  const namesBySex = cultureObect[sex]
  let name = `${randomElement(namesBySex)}`

  const nameArray = cultureObect["Surname"] ?? cultureObect["Tribe"] ?? []
  const surname = randomElement(nameArray)
  name += surname ? ` ${surname}` : ''

  return name
}

const randomName = () => {
  const race = randomElement( Object.keys(names) )
  const raceObject = names[race]
  let name = ""
  let sex = null
  
  if ( Array.isArray( raceObject ) ) {
    name = randomElement( raceObject )
  } else if (raceObject["Male"] && raceObject["Female"]) {
    sex = determineSex()
    const namesBySex = raceObject[sex]
    name = randomElement( namesBySex )
  } else if ( raceObject["Birth"] ) {
    name = randomElement( raceObject["Birth"] )
  } else if (race.includes("Human")) {
    sex = determineSex()
    name = humanName(raceObject, sex)
  }

  if ( raceObject["Nickname"] ) {
    const nickname = randomElement( raceObject.Nickname )
    name += `  "${nickname}" `
  }

  if (raceObject["Clan"] || raceObject["Family"] || raceObject["Pride"]) {
    const nameArray = raceObject["Clan"] ?? raceObject["Family"] ?? raceObject["Pride"]
    const surname = randomElement( nameArray)
    name += ` ${surname}`
  }

  return { race, name, sex }
}

export default randomName