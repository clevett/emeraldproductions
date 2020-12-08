import React from 'react'

import Option from './Option/Option'

const Select = ({ onSelectValueChange, options, selected, label, id }) => {
  const handleChange = event => {
    onSelectValueChange(event.target.value)
  }
  
  const renderedList = options => options.map(option => <Option key={option} option={option} />)

  return (
    <div>
      <label htmlFor={id || ""} className='sr-only'>{label || ""}</label>
      <select 
        className='text-capitalize'
        id={id || ''} 
        defaultValue={selected}
        onChange={handleChange}
      >
        {renderedList(options)}
      </select>
    </div>
  )
}

export default Select
