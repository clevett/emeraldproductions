import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Switch from './Switch'

configure( { adapter: new Adapter(), disableLifecycleMethods: true } )

describe('Given Switch is called', () => {
  const handleToggle = jest.fn()
  const name = 'Forest'
  const component = shallow(<Switch name={name} />)

  describe('when component initially renders', () => {
    it('then renders correctly', () => expect(component).toMatchSnapshot())
  })

  describe('when description prop is not included', () => {
    const element = component.props()
    expect(element.label).toContain(name)
    expect(element.value).toContain(name)
    expect(element.id).toContain(name)
  })

  describe('when description prop is included', () => {
    const description = 'Switch on Forest'
    const descriptionComponent = shallow(<Switch name={name} description={description} />)
    const element = descriptionComponent.props().label
    expect(element).toEqual(description)
  })
})