import React from 'react'

const BeastTableRow = ({ beastData, beastButton, buttonType }) =>  {
  const buttonDetermination = () => {
    if (buttonType === 'add') {
      return <button className='btn btn-success' onClick={() => beastButton(beastData)}><span>+</span></button>
    } else {
      return <button className='btn btn-danger' onClick={() => beastButton(beastData)}><span>-</span></button>
    }
  }

  return (
    <tr>
      <th>
        {buttonDetermination()}
      </th>
      <th>{beastData.name}</th>
      <td>{beastData.difficulty}</td>
      <td>{beastData.descriptor}</td>
      <td>{beastData.source}</td>
    </tr>
  )
}

export default BeastTableRow