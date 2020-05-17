import React from 'react'

const BeastTableRow = props => {
  return (
    <tr>
      <th>{props.beastData.name}</th>
      <td>{props.beastData.difficulty}</td>
      <td>{props.beastData.descriptor}</td>
      <td>{props.beastData.source}</td>
    </tr>
  )
}

export default BeastTableRow