 import React, { useState } from 'react'
 import { Button } from 'react-bootstrap'
 import Roll from 'roll'
 
import { hp } from '../../types/ftdTypes'

 const Hp = ({ total, dice }: hp ) => {
  const [ hitPoints, setHitPoints ] = useState(total)

  const handleClick = () => {
    const roll = new Roll().roll(dice).result
    setHitPoints(roll)
  }

  return (
    <div>
      <strong>HP: </strong>{hitPoints} 
      <Button variant="primary" onClick={handleClick}>({dice})</Button>
    </div>
  )
 }

 export default Hp