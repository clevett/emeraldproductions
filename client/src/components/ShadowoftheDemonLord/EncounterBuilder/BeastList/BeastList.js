import React from 'react'
import BeastTableRow from '../BeastTableRow/BeastTableRow'

const BeastList = ({ beasts, beastButton, buttonType }) => {
  const renderedList = beasts.map(beastData => <BeastTableRow beastData={beastData} key={beastData._id} beastButton={beastButton} buttonType={buttonType} />)
  return <tbody>{renderedList}</tbody>
}

export default BeastList
