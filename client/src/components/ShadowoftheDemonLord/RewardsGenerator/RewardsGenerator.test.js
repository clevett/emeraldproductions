import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import RewardsGenerator from './RewardsGenerator'

import data from './data/treasure_limits'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given RewardsGenerator is called', () => {
	const component = mount(<RewardsGenerator />)
	const select = component.find('select')

	describe('when component initially renders', () => {
		it('then renders corrrectly', () => expect(component).toMatchSnapshot() )

		it('then has a DisplayCard', () => {
			expect(component.find('DisplayCard').exists()).toBe(true)
		})

		it('then has a level select', () => {
			expect(select.exists()).toBe(true)
		})

		const options = component.find('option')
		const levels = data.map(element => element.name)
		options.forEach((option, index) => {
			const { value } = option.props()
			it(`then has an option with a value of ${levels[index]}`, () => {
				expect(levels[index]).toEqual(value)
			})
		})


		it('then the result card renders gold text', () => {
			expect(component.find('p.card-text').text()).toEqual('5 gc')
		})
	})

	describe('when select is changed', () => {
		data.forEach(({ name, gold }) => {
			it(`then the ${gold} gold for ${name} renders on the result card`, () => {
				select.simulate('change', {target: {value: name}})
				expect(component.find('p.card-text').text()).toEqual(`${gold} gc`)
			})
		})
	})
})