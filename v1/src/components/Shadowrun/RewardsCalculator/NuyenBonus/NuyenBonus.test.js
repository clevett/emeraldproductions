import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NuyenBonus from './NuyenBonus'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given NuyenBonus is called', () => {
  const component = shallow(<NuyenBonus />)

  describe('when component initially renders', () => {
    it('then renders correctly', () => expect(component).toMatchSnapshot())
  })

  describe('when default message is used', () => {
    it('then displays a message that conveys standard runs do not have a bonus', () => {
      const element = component.html()
      const expectedString = 'Run type is not set correcty'
      expect(element).toContain(expectedString)
    })
  })
  
  describe('when runType is defined && not standard', () => {
    const goodFeelsComponent = shallow(<NuyenBonus runType='good feels' />)
    const element = goodFeelsComponent.html()

    it('then shows a string with the run type', () => {
      const expectedString = `Run type set to good feels`
      expect(element).toContain(expectedString)
    })
  })

  describe('when runType is defined && set to stanadard', () => {
    const standardComponent = shallow(<NuyenBonus runType='standard' />)
    const element = standardComponent.html()

    it('then shows a string that standard runs do not have a bonus', () => {
      const expectedString = 'Standard runs do not have a bonus'
      expect(element).toContain(expectedString)
    })
  })
})