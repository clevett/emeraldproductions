import React from 'react'
import { Card } from "react-bootstrap"

import { MonsterFTD } from "../types/types"

const MonsterCards = ({ monsters }: {monsters: MonsterFTD[] | undefined}) => {
  if (monsters) {
    monsters.map((monster: { name: any; size: any; type: any; hd: any }) => {
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
    })
  }

  return(
    <Card>
      <Card.Body>
        "No monsters found"
      </Card.Body>
    </Card>
  )
}

export default MonsterCards