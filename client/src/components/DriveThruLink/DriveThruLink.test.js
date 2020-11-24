import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DriveThruLink from './DriveThruLink'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given DriveThruLink is called', () => {
  const component = shallow(<DriveThruLink name={'Shadowrun'} id={'1'} />)

  it('then returns a link', () => {
    const element = component.find('a')

    expect(element).toBeTruthy()
    expect(element.props().href).toEqual('')
  })
})