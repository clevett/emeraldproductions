import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SearchBar from './SearchBar'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Given SearchBar is called', () => {
  const onTermSubmit = jest.fn()
  const component = shallow(<SearchBar onTermSubmit={onTermSubmit} />)

  describe('when component initially renders', () => {
    it('then renders correctly', () => expect(component).toMatchSnapshot())
  })
})