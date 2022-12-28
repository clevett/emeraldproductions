import React, { useState } from 'react';
import './Switch.scss';

import { Form } from 'react-bootstrap'

const Switch = ({ name, description, handleToggle }) => {
  const [isOn, setIsOn] = useState(false) 
  const label = description ? description : name

  const handleChange = () => {
    const updateStatus = isOn ? false : true
    setIsOn(updateStatus)
    handleToggle(name, updateStatus)
  }

  return (
    <Form.Switch
      key={name} 
      type="switch" 
      id={name}
      label={label} 
      value={name}
      onChange={handleChange}
    />
  )
}

export default Switch;