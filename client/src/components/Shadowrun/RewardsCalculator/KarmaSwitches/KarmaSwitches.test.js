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

		const initialState = component.state()
		it('then initializes the state with survived', () => expect(initialState.survived).toEqual(true))
		it('then initializes the state with allObjectives', () => expect(initialState.allObjectives).toEqual(false))
		it('then initializes the state with someObjectives', () => expect(initialState.someObjectives).toEqual(false))
		it('then initializes the state with karma', () => expect(initialState.karma).toEqual(0))
	})
})