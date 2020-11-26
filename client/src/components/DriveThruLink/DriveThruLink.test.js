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

    const expectedString = "https://www.drivethrurpg.com/product/1/?affiliate_id=879798"
    expect(element.props().href).toEqual(expectedString)

    expect(element.text()).toEqual('Shadowrun')
  })
})