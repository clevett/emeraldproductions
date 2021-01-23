import React, { useState, useEffect } from "react"

import { Container, Row } from "react-bootstrap"
import MonsterCard from "../MonsterCard/MonsterCard"
import NoMonsterFound from "../MonsterCard/NoMonsterFound"
import { MonsterFTD } from "../types/types"

import data from "./data/monsters"
import './Convert5eMonsters.scss'

import convertFifthMonsterToFTD from "../helpers/convertFifthMonsterToFTD"
import DriveThruLink from '../../DriveThruLink/DriveThruLink'

const Convert5eMonsters = () => {
  const [monsters, setMonsters] = useState<MonsterFTD[] | undefined>(undefined)

  useEffect(() => {
    console.log("Monsters")
    console.log(monsters)
  }, [monsters])

  useEffect(() => {
    getInitialMonstersFrom5eapi()
  }, [])

  const getInitialMonstersFrom5eapi = async () => {
    const ftdMonsters = await data.map(monster => convertFifthMonsterToFTD(monster))
    setMonsters(ftdMonsters)
  }

  const renderedList = () => {
    if(monsters) {
      return monsters.map(monster => <MonsterCard monster={monster} />)
    } else {
      return <NoMonsterFound />
    }
  }

  return(
    <Container className='FTDFifthEditionMonsters content text-white'>
      <Row className='header-row text-center mb-3 justify-content-center w-100'>
        {/* <img alt='bloody pentagram' src={pentagram}></img> */}
        <DriveThruLink id='264584' name='Five Torches Deep Fifth Edition Bestiary' />
        {/* <img alt='bloody pentagram' src={pentagram}></img> */}
      </Row>
      <Row>
        {renderedList()}
      </Row>
    </Container>
  )
}

export default Convert5eMonsters
