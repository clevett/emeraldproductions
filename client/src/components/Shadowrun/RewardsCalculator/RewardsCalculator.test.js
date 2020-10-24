import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import RewardsCalculator from './RewardsCalculator'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Give RewardsCalculator is called', () => {
	const component = shallow(<RewardsCalculator />)

	it('then renders corrrectly', () => {
		expect(component).toMatchSnapshot()
	})

	it('the initializes the state with an a base nuyen and karma', () => {
		expect(component.state().nuyen).toEqual(3000)
		expect(component.state().karma).toEqual(2)
	})
})