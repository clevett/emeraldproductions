import React from 'react'

const BeastTableRow = ({ beastData, beastButton, buttonType }) =>  {
  const buttonDetermination = () => {
    if (buttonType === 'add') {
      return <button className='btn btn-success' onClick={() => beastButton(beastData)}><span>+</span></button>
    } else {
      return <button className='btn btn-danger' onClick={() => beastButton(beastData)}><span>-</span></button>
    }
  }

  //Left side column will have a number next to name for multiples of the same Bugbear x2
  const numDisplay = () => buttonType != 'add' && beastData.total > 1 ? ` x ${beastData.total}` : ''

  return (
    <tr>
      <th>
        {buttonDetermination()}
      </th>
      <th>{beastData.name}{numDisplay()}</th>
      <td>{beastData.difficulty}</td>
      <td>{beastData.descriptor}</td>
      <td>{beastData.source}</td>
    </tr>
  )
}

export default BeastTableRow