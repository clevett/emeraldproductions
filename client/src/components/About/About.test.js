import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import About from './About'
import AboutCenter from './AboutCenter/AboutCenter'
import ContactBar from '../ContactBar/ContactBar'

configure( { adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given About is called', () => {
  const component = shallow(<About />)

  describe('when component initially renders', () => {
    it('then renders correctly', () => expect(component).toMatchSnapshot())

    it('then renders an AboutCenter component', () => {
      expect(component.containsMatchingElement(<AboutCenter />)).toEqual(true)
    })

    it('then renders a contact bar', () => {
      expect(component.containsMatchingElement(<ContactBar />)).toEqual(true)
    })
  })
})