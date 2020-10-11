import Fuse from 'fuse.js'

const fuzzySearch = (list, term) => {
  const options = {
    isCaseSensitive: false,
    shouldSort: true,
    threshold: 0.3,
    includeMatches: true,
    minMatchCharLength: 3,
    keys: [
      "name",
      "difficulty",
      "descriptor",
      "source"
    ]
  }
  
  const fuse = new Fuse(list, options)
  const results = fuse.search(term)
  const filter = results.map(result => result.item)
  
  return filter
}

export default fuzzySearch
