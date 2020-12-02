import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import KarmaSwitches from './KarmaSwitches'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given KarmaSwitches is called', () => {
	const updateState = jest.fn();
	const component = shallow(<KarmaSwitches updateState={updateState} />)

	describe('when component initially renders', () => {
		it('then renders corrrectly', () => expect(component).toMatchSnapshot() )
	})
})