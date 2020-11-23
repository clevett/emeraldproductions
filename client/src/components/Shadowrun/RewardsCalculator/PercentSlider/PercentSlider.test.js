import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PercentSlider from './PercentSlider'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given PercentSlider is called', () => {
  const sliderChange = jest.fn();
  const component = shallow(<PercentSlider sliderChange={sliderChange} />)

  describe('When component initially renders', () => {
    it('then renders correctly', () => expect(component).toMatchSnapshot())
  })

  describe('When component input changes', () => {
    const event = {target: {value: 15}}
    component.find('input').simulate('change', event)

    it('then sliderChange is passed the event value parsed as a float', () => {
      expect(sliderChange).toBeCalledWith(parseFloat(`0.${event.target.value}`))
    })
  })

  describe('When text variable are defaulted', () => {
    it('then the header starts with the word Add', () => {
      const element = component.find('h3')
      expect(element.text()).toContain('Add')
    })

    it('then the percents have a + prefix', () => {
      const element = component.find('span').first()
      expect(element.text()).toContain('+')
    })

    const parentDiv = component.find('.ModifierRun')
    it('then the opactiy = 1', () => {
      expect(parentDiv.html()).toContain('opacity:1')
    })

    it('then the pointer = unset', () => {
      expect(parentDiv.html()).toContain('pointer-events:unset')
    })
  })

  describe('When runType is passed as "good feels"', () => {
    const goodFeelsComponent = shallow(<PercentSlider runType={'good feels'} />)

    it('then sets the symbol for percents to a - perfix', () => {
      const element = goodFeelsComponent.find('span').first()
      expect(element.html()).toContain('-')
    })

    it('then sets the header to start with the word Subtract', () => {
      const element = goodFeelsComponent.find('h3')
      expect(element.text()).toContain('Subtract')
    })
  })

  describe('When runType is passed as "standard"', () => {
    const standardComponent = shallow(<PercentSlider runType={'standard'} />)
    const element = standardComponent.find('.ModifierRun')

    it('then sets the opacity to 0.2', () => {
      expect(element.html()).toContain('opacity:0.2')
    })

    it('then sets the pointer event to none', () => {
      expect(element.html()).toContain('pointer-events:none')
    })
  })
})
