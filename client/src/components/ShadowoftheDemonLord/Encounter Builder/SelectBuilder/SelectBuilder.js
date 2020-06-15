import React from 'react'

import Option from './Option/Option'

const SelectBuilder = ({ options }) => {
  const renderedList = options.map(option => <Option key={option.toLowerCase()} option={option} />)
  return (
    <select>{renderedList}</select>
  )
}

export default SelectBuilder
