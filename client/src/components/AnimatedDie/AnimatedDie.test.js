import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Button } from 'react-bootstrap'

import AnimatedDie from './AnimatedDie'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given AnimatedDie is called', () => {
  const dieRoll = jest.fn()

  describe('when the component initial renders', () => {
    const component = shallow(<AnimatedDie />)

    it('then renders correctly', () => expect(component).toMatchSnapshot())

    it('then renders a default for alt text', () => {
      const element = component.find('img')
      const expectedString = `Roll a d6.`
      expect(element.html()).toContain(expectedString)
    })

    it('then renders an empty string for the result span', () => {
      const element = component.find('span')
      expect(element.text()).toContain('')
    })
  })

  describe('when the button is clicked', () => {
    const component = shallow(<AnimatedDie dieRoll={dieRoll} />)
    const event = {preventDefault: jest.fn()}
    component.children(Button).simulate('click', event)

    it('then calls the parents dieRoll function', () => {
      expect(dieRoll).toHaveBeenCalled()
    })
  })

  describe('when the component is passed a die size', () => {
    const dieSizeComponent = shallow(<AnimatedDie dieSize='d20' />)

    it('then renders the alt text with that size', () => {
      const element = dieSizeComponent.find('img')
      const expectedString = `Roll a d20.`
      expect(element.html()).toContain(expectedString)
    })
  })

  describe('when the roll antimation ends', () => {
    const component = shallow(<AnimatedDie dieRoll={dieRoll} />)
    const event = {preventDefault: jest.fn()}
    component.children(Button).simulate('click', event)
    component.children(Button).simulate('animationEnd', event)

    const spanElementText = component.find('span').text()
    it('then updates result span with the roll', () => {
      expect(spanElementText).toHaveLength(1)
    })

    it('then updates the alt text', () => {
      const element = component.find('img')
      expect(element.html()).toContain(spanElementText)
    })
  })
})