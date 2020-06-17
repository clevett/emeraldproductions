import React from 'react'

const Option = ({ option, selected }) => <option value={option.toLowerCase()} selected={selected}>{option}</option>

export default Option
