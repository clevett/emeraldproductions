import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NuyenSituationSwitches from './NuyenSituationSwitches'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given NuyenSituationSwitches is called', () => {
  const updateState = jest.fn()
  const component = shallow(< NuyenSituationSwitches updateState={updateState} />)

  describe('when component initialy renders', () => {
    it('then renders correctly', () => expect(component).toMatchSnapshot())

    const initialState = component.state()
    it('all initial state values are false', () => {
      Object.values(initialState).forEach(value => expect(value).toBeFalsy() )
    })
  })
})