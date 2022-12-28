import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HighestDicepool from './HighestDicepool'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given HighestDicepool is called', () => {
	const updateState = jest.fn();
	const component = shallow(<HighestDicepool updateState={updateState} />)

	describe('when component initially renders', () => {
		it('then renders corrrectly', () => expect(component).toMatchSnapshot() )
	})
	
	describe('when component input changes', () => {
		const event = {target: { value: 18 }}
		component.find('input').simulate('change', event)
		it('then is called with event values', () => expect(updateState).toBeCalledWith('dicepool', 18))
	})
})