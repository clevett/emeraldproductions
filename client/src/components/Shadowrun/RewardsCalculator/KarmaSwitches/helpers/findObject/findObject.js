import data from '../../karma_modifiers'

const findObject = name => data.find(object => object.name === name)

export default findObject