import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import RewardsCalculator from './RewardsCalculator'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given RewardsCalculator is called', () => {
	const component = shallow(<RewardsCalculator />)

	describe('When component initially renders', () => {
		it('then renders corrrectly', () => expect(component).toMatchSnapshot() )

		const initialState = component.state()
		it('then initializes the state with an a base of 3000 nuyen', () => expect(initialState.nuyen).toEqual(3000))
		it('then initializes the state with an a default of 2 karma', () => expect(initialState.karma).toEqual(0))
		it('then initializes the state with has default run type', () => expect(initialState.type).toEqual('standard'))

		it('then creates a Run Type Slider component', () => {
			expect(component.find('RunTypeSlider').exists()).toEqual(true)
		})
	})

})