import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import RewardsGenerator from './RewardsGenerator'

import data from './data/treasure'

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

		const text = component.find('div.card-title').text()

		it('then the result card displays novice for group level', () => {
			expect(text.includes(`Novice`)).toBeTruthy()
		})

		it('then the result card title defaults gold for novice', () => {
			expect(text.includes(`5 gc`)).toBeTruthy()
		})
	})

	describe('when select is changed', () => {
		data.forEach(({ name, gold }) => {
			select.simulate('change', {target: {value: name}})
			const text = component.find('div.card-title').text()

			it(`then the ${gold} amount changes in the card title`, () => {
				expect(text.includes(`${gold} gc`)).toBeTruthy()
			})

			it(`then the group level changes in the card title`, () => {
				expect(text.toLowerCase().includes(`${name}`)).toBeTruthy()
			})
		})
	})
})