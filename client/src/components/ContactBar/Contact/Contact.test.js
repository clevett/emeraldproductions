import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Contact from './Contact'
import contacts from '../data/contact_information'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given Contact is called', () => {
  const contact = contacts[0]
  const component = shallow(<Contact contact={contact} />)

  describe('when component initially renders', () => {
    it('then renders correctly', () => expect(component).toMatchSnapshot())
  })

  describe('when passed a contact', () => {
    it('then contains a link with an href from the contact', () => {
      const element = component.find('a').props().href
      expect(element).toContain(contact.href)
    })

    it('then contains an image with props set from contact', () => {
      const element = component.find('Image').props()
      
      expect(element.alt).toContain(contact.alt)
      expect(element.src).toContain(contact.src)
    })

    it('then contains a span with the contact name', () => {
      const element = component.find('span')
      expect(element.text()).toContain(contact.name)
    })
  })
})