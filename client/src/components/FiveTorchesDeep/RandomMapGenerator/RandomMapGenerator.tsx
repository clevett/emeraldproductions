import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap"

import Box from "./Box/Box"

import './RandomMapGenerator.scss'

const RandomMapGenerator = () => {
  const [ refresh, setRefresh ] = useState(false)

  const handleClick = () => setRefresh(!refresh)

  return (
    <div className='RandomMapGeneator'>
      <div key={`map-${refresh}`} className='Map'>
        <Box name='Northwest'  />
        <Box name='North'  />
        <Box name='Northeast'  />

        <Box name='West'  />
        <Box name='Center'  />
        <Box name='East'  />

        <Box name='Southwest'  />
        <Box name='South'  />
        <Box name='Southeast'  />
      </div>
      <div className='mt-3'>
        <Button onClick={handleClick}>Generator New Map</Button>
      </div>
    </div>
  )
}

export default RandomMapGenerator