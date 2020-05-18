import React from 'react'
import BeastTableRow from '../BeastTableRow/BeastTableRow'

const BeastList = ({ beasts, onBeastSelect }) => {
  const renderedList = beasts.map(beastData => <BeastTableRow beastData={beastData} key={beastData._id} onBeastSelect={onBeastSelect} />)
  return <tbody> {renderedList} </tbody>
}

export default BeastList
