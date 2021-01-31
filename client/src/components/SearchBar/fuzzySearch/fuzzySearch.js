import Fuse from 'fuse.js'

const fuzzySearch = (list, term, keys) => {
  const options = {
    isCaseSensitive: false,
    shouldSort: true,
    threshold: 0.3,
    includeMatches: true,
    minMatchCharLength: 3,
    keys,
  }
  
  const fuse = new Fuse(list, options)
  const results = fuse.search(term)
  const filter = results.map(result => result.item)
  
  return filter
}

export default fuzzySearch
