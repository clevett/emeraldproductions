import React, { useState } from 'react'
import Roll from "roll"

import maps from '../../data/maps'

const Box = ({ name }: {name: string }) => {
  const [ number, setNumber ] = useState(new Roll().roll(`1d6`).result)
  const { color, description } = maps.find((element) =>  element.number === number) || maps[0]
  const styles = `Map-box Map-box-color-${color}`

  const handleClick = () => setNumber(new Roll().roll(`1d6`).result)

  return (
    <div className={styles} onClick={handleClick}>
      <label>{name}</label>
      <p>{description}</p>
    </div>
  )
}

export default Box