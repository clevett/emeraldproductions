import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Negotiation from './Negotiation'

configure( { adapter: new Adapter(), disableLifecycleMethods: true} )

describe('Given Negotiation is called', () => {
  const updateState = jest.fn()
  const component = shallow(<Negotiation updateState={updateState} />)

  describe('when the component initially renders', () => {
    it('then renders correctly', () => expect(component).toMatchSnapshot())
  })

  describe('when a component input changes', () => {
    const event = {target: {value: 15}}
    component.find('input').simulate('change', event)

    it('then calls the updateState function', () => {
      expect(updateState).toBeCalledWith('nuyenBaseRate', 4500)
    })

    it('then shows the updated rate', () => {
      const element = component.find('small')
      const expectedString = `Current base is 4500.`
      expect(element.text()).toContain(expectedString)
    })
  })
})