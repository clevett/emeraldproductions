const createSelectedList = (state, beast, action) => {
    const findIndex = beast => state.selected.indexOf(beast)
    const index = findIndex(beast)
    let selectedList = state.selected
    let currentEntry = selectedList[index]

    if (action === 'add') {
      if (index >= 0) {
        currentEntry.total += 1
        selectedList.splice(index, 1, currentEntry)
      } else {
        beast.total = 1
        selectedList.splice(selectedList.length + 1, 1, beast)
      }  
    } else if (action === 'remove') {
      if (index >= 0 && currentEntry.total > 1) {
        currentEntry.total -= 1
        selectedList.splice(index, 1, currentEntry)
      } else  {
        selectedList = selectedList.filter(selected => selected._id !== beast._id)
      }  
    }
}

export default createSelectedList

