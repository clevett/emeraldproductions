const convertSpeed = (speed: {[key: string]: string}):string => {
  let movementTypes: string[] = []

  for (const [movement, distance] of Object.entries(speed) ) {
    movementTypes = [...movementTypes, `${movement} ${distance}`]
  }

  return movementTypes.join(', ')
}

export default convertSpeed