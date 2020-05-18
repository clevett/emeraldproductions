import React from 'react'

const BeastTableRow = ({ beastData, onBeastSelect }) =>  {
  return (
    <tr>
      <th>
        <button className='btn btn-success' onClick={() => onBeastSelect(beastData)}><span>+</span></button>
      </th>
      <th>{beastData.name}</th>
      <td>{beastData.difficulty}</td>
      <td>{beastData.descriptor}</td>
      <td>{beastData.source}</td>
    </tr>
  )
}

export default BeastTableRow