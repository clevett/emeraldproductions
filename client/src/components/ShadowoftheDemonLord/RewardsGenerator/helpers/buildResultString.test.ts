import buildResultString from './buildResultString'

describe('Given buildResultString is called', () => {
  it('then returns a string', () => {
    const result = buildResultString(1, {})
    expect(typeof result).toBe('string')
  })
})

