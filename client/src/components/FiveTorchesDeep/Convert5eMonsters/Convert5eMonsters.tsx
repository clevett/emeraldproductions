import React, { useState, useEffect } from "react"
import axios from 'axios'

import { Container, Row } from "react-bootstrap"
import MonsterCards from "../MonsterCards/MonsterCards"
import { MonsterFTD } from "../types/types"

import convertFifthMonsterToFTD from "../helpers/convertFifthMonsterToFTD"
import DriveThruLink from '../../DriveThruLink/DriveThruLink'

const Convert5eMonsters = () => {
  const [monsters, setMonsters] = useState<MonsterFTD[] | undefined>(undefined)
  const [selectedMonsters, setSelectedMonsters] = useState(["goblin", "orc", "wolf"])

  useEffect(() => {
    console.log("Monsters")
    console.log(monsters)
  }, [monsters])

  useEffect(() => {
    getInitialMonstersFrom5eapi(selectedMonsters)
  }, [])

  const getInitialMonstersFrom5eapi = async (monsterList:string[]) => {
    const monsterData: any[] = []
    await monsterList.forEach(async (monster:string) => {
      await axios.get(`https://www.dnd5eapi.co/api/monsters/${monster}`)
      .then((response):void => {
        monsterData.push(convertFifthMonsterToFTD(response.data))
      })
    })

    console.log("Monster Data")
    console.log(monsterData)

    if(monsterData.length > 0) {
      setMonsters(monsterData)
    } else {
      setMonsters(undefined)
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
        <MonsterCards monsters={monsters} />
      </Row>
    </Container>
  )
}

export default Convert5eMonsters
