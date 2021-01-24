import React, { useState } from 'react'
import { Button, Card } from "react-bootstrap"
import Roll from 'roll'

const Gold = ({ hd }: { hd: number}) => {
  const goldRoll = () => {
    if (hd < 1) {
       const roll = new Roll().roll(`1d20`).result
       return hd * roll
    } else {
      return new Roll().roll(`${hd}d20`).result
    }
  }

  const [ gold, setGold ] = useState(goldRoll())

  const handleClick = () => {
    setGold(goldRoll())
  }

  return(
    <Card.Text>
      <Button variant="primary" onClick={handleClick}>Roll Gold</Button>
      <span> {gold}</span>
    </Card.Text>
  )
}

export default Gold
