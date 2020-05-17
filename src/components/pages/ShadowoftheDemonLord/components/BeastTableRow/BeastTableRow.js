import React from 'react'

const BeastTableRow = props =>  {
  console.log(props)
  
  return (
    <tr>
      <th>
        <button className='btn btn-success'><span>+</span></button>
      </th>
      <th>{props.name}</th>
      <td>{props.difficulty}</td>
      <td>{props.descriptor}</td>
      <td>{props.source}</td>
    </tr>
  )
}

export default BeastTableRow