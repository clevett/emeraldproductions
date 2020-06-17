import React from 'react'

import Option from './Option/Option'

const SelectBuilder = ({ options, selected }) => {
  const selectedChecker = option => selected === option ? 'selected' : '' 
  const renderedList = options.map(option => <Option key={option.toLowerCase()} option={option} selected={selectedChecker(option)} />)
  return (
    <select>{renderedList}</select>
  )
}

export default SelectBuilder
