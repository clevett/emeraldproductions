import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Roll from 'roll'

const Damage = ({ damage }: { damage: string } ) => {
 const [ total, setTotal ] = useState(0)

const handleClick = () => {
  if (damage) {
    const roll = new Roll().roll(damage).result
    setTotal(roll)
  }
}

useEffect(() =>  handleClick());

const renderDamage = () => {
  if (damage) {
    return (
      <div>
        <strong>Damage: </strong>{total} 
        <Button variant="primary" onClick={handleClick}>({damage})</Button>
      </div>
    )
  } else {
    return (
      <div>
        <strong>Damage: </strong>{damage} 
      </div>
    )
  }
}

 return renderDamage()
}

export default Damage