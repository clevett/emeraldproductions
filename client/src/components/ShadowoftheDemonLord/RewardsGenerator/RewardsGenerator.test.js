import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import RewardsGenerator from './RewardsGenerator'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given RewardsGenerator is called', () => {
	const component = shallow(<RewardsGenerator />)

	describe('When component initially renders', () => {
		it('then renders corrrectly', () => expect(component).toMatchSnapshot() )
	})

})