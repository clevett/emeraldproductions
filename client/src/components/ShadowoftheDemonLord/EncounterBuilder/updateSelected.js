export const findIndex = (selected, beast) => Array.isArray(selected) ? selected.indexOf(beast) : false

export const addBeast = (selected, beast) => {
  const index = findIndex(selected, beast)
  let currentEntry = selected[index]

  if (index >= 0) {
    currentEntry.total += 1
    selected.splice(index, 1, currentEntry)
  } else {
    beast.total = 1
    selected.splice(selected.length + 1, 1, beast)
  }

  return selected
}

export const removeBeast = (selected, beast) => {
  const index = findIndex(selected, beast)
  let currentEntry = selected[index]

  if (index >= 0 && currentEntry.total > 1) {
    currentEntry.total -= 1
    selected.splice(index, 1, currentEntry)
  } else  {
    selected = selected.filter(selected => selected._id !== beast._id)
  }

  return selected
}