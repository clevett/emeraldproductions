import buildResultString from './buildResultString'

describe('Given buildResultString is called', () => {
  it('then returns a string', () => {
    const result = buildResultString(1, {})
    expect(typeof result).toBe('string')
  })
})

    // // array.forEach(element => {
    // //   if ((total - sum) > 0) {
    // //     sum += element
    // //   } else {
    // //     return sum
    // //   }
    // // })

    // for (const [key, value] of Object.entries(array) ) {
    //   const divisor = key === 'bit' ? 1000 : key === 'copper' ? 100 : key === 'silver' ? 10 : 1
    //   const chunkgold = value / divisor

    //   if ((total - chunkgold) > 0) {
    //     sum += chunkgold
    //     //treasure[key] += value
    //   } else {
    //     return sum
    //   }
    // }