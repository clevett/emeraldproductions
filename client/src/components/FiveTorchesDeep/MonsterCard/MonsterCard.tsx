import React from 'react'
import { Card } from "react-bootstrap"

import { MonsterFTD } from "../types/types"

const MonsterCard = ({ monster }: {monster: MonsterFTD}) => {
  const { name, size, type, hd } = monster

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{size}, {type}</Card.Subtitle>
        <Card.Text>
          HD: {hd}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MonsterCard