import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import RunTypeSlider from './RunTypeSlider'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given RunTypeSlider is called', () => {
	const updateState = jest.fn();
	const component = shallow(<RunTypeSlider updateState={updateState} />)

	describe('When component initially renders', () => {
		it('then renders corrrectly', () => expect(component).toMatchSnapshot() )

		const initialState = component.state()
		it('then initializes the state with a type', () => expect(initialState.type).toEqual('standard'))
	})

	describe('When component input changes', () => {
		const event = {target: { value: 2 }}
		component.find('input').simulate('change', event)
		it('then is called with event values', () => expect(updateState).toBeCalledWith('type', 'cold-hearted'))
	})
})