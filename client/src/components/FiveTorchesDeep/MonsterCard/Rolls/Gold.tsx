import React, { useState } from 'react'
import { Button, Card } from "react-bootstrap"

import coinList from "./helpers/coinList"
import goldRoll from "./helpers/goldRoll"

const Gold = ({ hd }: { hd: number}) => {
  hd = hd < 0.25 ? 0.25 : hd
  const [ treasure, setTreasure ] = useState(coinList(goldRoll(hd)))

  const handleClick = () => {
    setTreasure(coinList(goldRoll(hd)))
  }

  return(
    <Card.Text>
      <Button variant="primary" onClick={handleClick}>Roll Gold</Button>
      <span> {treasure}</span>
    </Card.Text>
  )
}

export default Gold
