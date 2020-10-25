import data from '../../data/run_types'
import findObject from '../findObject/findObject'

const determineTypeMessage = name => findObject(name, data).description

export default determineTypeMessage

